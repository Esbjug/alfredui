<template>
    <div class="list-group-item circle" :class="getPrioColor">
        <p>{{plane.flightCode}}</p>
        <p>Verdi {{plane.value}}</p>
    </div>
</template>

<script>

export default {
    computed: {
        getPrioColor() {
            return {
                'green': this.plane.priority === 5,
                'greenish': this.plane.priority === 4,
                'yellow': this.plane.priority === 3,
                'orange': this.plane.priority === 2,
                'red': this.plane.priority === 1,
            }
        }
    },
    props: ['plane']

}
</script>

<style lang="scss">
.green {
    border: 12px solid rgba(0, 200, 0, 1)
}

.greenish {
    border: 12px solid rgba(90, 150, 00, 1)
}

.yellow {
    border: 12px solid yellow;
}

.orange {
    border: 12px solid orange;
}

.red {
    border: 12px solid red;
}
</style>