<template>
    <div class="sidebar">
        <h1>SuggestionsArea</h1>
        <button class="btn btn-suggestion" @click="sortByValue">Suggestion</button>
        <h1>CurrentSuggestion</h1>
        <button class="btn btn-suggestion" @click="sortByValue">Suggestion Change</button>
        <!-- <suggestion-alfred></suggestion-alfred> -->
    </div>
</template>

<script>
import SuggestionAlfred from '@/components/suggestionsarea/SuggestionAlfred'
import { mapActions } from 'vuex';
export default {
    methods: {
        ...mapActions([
            'addPlane',
            'removePlane',
            'updatePrio',
            'sortByValue'
        ])
    },
    components: {
        SuggestionAlfred
    }
}
</script>

<style lang="scss">
$color-not-quite-black: rgba(35, 39, 42, 1);
$color-dark: rgba(44, 47, 51, 1);
$color-greyple: rgba(153, 170, 181, 1);
$color-blurpl: rgba(114, 137, 218, 1);

.sidebar {
    flex: 1 1 160px;
    background-color: $color-dark;
    position: relative;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    border-bottom: 2px solid rgba(255, 255, 255, 0.3);
}

.btn-suggestion {
    height: 100px;
    width: 140px;
    border-radius: 30px;
    border: 6px solid $color-blurpl;
    transition: all 300ms ease;
    &:hover {
        border: 6px solid $color-greyple;
        transform: scale(1.05);
    }
    &:active {
        transform: scale(1.09);
    }
}
</style>