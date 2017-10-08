<template>
    <div class="timeline">
        <button class="demo-button1" @click="addPlane">AddPlane</button>
        <button class="demo-button2" @click="removePlane">TakeOff</button>

        <!-- {{getPlaneList}} -->
        <draggable v-model="getPlaneList" :options="dragOptions" :move="onMove" @start="idDragging=true" @end="isDragging=false" @update="updatePrio">
            <transition-group class="list-group" tag="div" type="transition" name="flip-list" mode="out-in" appear>
                <timeline-plane v-for="(plane, index) in getPlaneList" :key="index" :plane="plane"></timeline-plane>
            </transition-group>
        </draggable>
    </div>
</template>
<script>
import TimelinePlane from '@/components/timeline/TimelinePlane';
import draggable from 'vuedraggable';
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            editable: true,
            isDragging: false,
            delayedDragging: false,
            randomPlaneNumber: 0,
            randomId: 0,
            randomPlane: {},


        }
    },
    methods: {
        ...mapActions([
            'addPlane',
            'removePlane',
            'updatePrio'
        ]),
        onMove({ relatedContext, draggedContext }) {
            const relatedElement = relatedContext.element;
            const draggedElement = draggedContext.element;
            return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
        }
    },
    computed: {
        ...mapGetters([
            'getPlaneTypes'
        ]),
        dragOptions() {
            return {
                animation: 500,
                group: '...',
                disabled: !this.editable,
                ghostClass: 'ghost',
                chosenClass: "sortable-chosen",

            }
        },
        getPlaneList: {
            get() {
                return this.$store.getters.getPlaneList
            },
            set(value) {
                this.$store.dispatch('updatePlaneList', value)
            }
        }
    },
    components: {
        TimelinePlane,
        draggable
    },
    watch: {
        isDragging(newValue) {
            if (newValue) {
                this.delayedDragging = true
                return
            }
            this.$nextTick(() => {
                this.delayedDragging = false
            })
        }
    },
    mounted() {
        // this.addPlane(this.plane);
        // this.removePlane();
    }
}

</script>


<style lang="scss">
.timeline {
    
  
}

.list-group {
    background-color: $color-dark;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 25vh;
    position: fixed;
    display: flex;
    flex-flow: row wrap;
    flex: 1 1 100%;
    justify-content: flex-start;
    align-items: stretch;
    margin-right: 100px; 
    // margin-bottom: 40px;
    // margin-top: 40px;
    // background-color: rgba(244, 244, 200, 1); // 
}

.list-group-item {
    display: inline-block;
    display: block;
    color: Black;
    text-align: center;
    text-decoration: none;
    cursor: move;
    transition: all 100ms ease;
}

.no-move {
    transition: transform 0s;
}


.circle {
    height: 140px;
    width: 140px;
    margin: 10px 10px;

    border-radius: 80px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
    background-color: $color-white;

    transition: all 300ms ease;

    &:active {
        // transform: scale(0.8);
    }
    &:hover {
        // border: 12px solid $color-blurpl; 
        // transform: scale(0.8);
    }
}

.sortable-ghost {
    border: 12px solid $color-greyple;
    opacity: .5;
    background-color: #C8EBFB;
}

.sortable-drag {
    border: 12px solid $color-blurpl;
    opacity: .9;
    background: #C8EBFB;
}

.sortable-chosen {
    border: 12px solid $color-blurpl;
    transform: scale(0.9); // visibility: hidden;
}

.demo-button1 {
    position: fixed;
    top: 0;
    right: 80px;
    padding: 10px;
}

.demo-button2 {
    position: fixed;
    top: 0;
    right: 0;
    padding: 10px;
}


// transitions
.flip-list {
    transform: 500ms;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .2s
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active below version 2.1.8 */

{
    opacity: 0
}

.bounce-enter-active {
    animation: bounce-in .5s;
}

.bounce-leave-active {
    animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
}
</style>
