<template>
  <div class="container">
    <table class="top">
      <airport></airport>
      <suggestions-area></suggestions-area>
    </table>
    <timeline class="bottom"></timeline>
  </div>
</template>

<script>
import Airport from '@/components/airport/Airport';
import Timeline from '@/components/timeline/Timeline';
import SuggestionsArea from '@/components/suggestionsarea/SuggestionsArea';
import {mapActions} from 'vuex';
export default {
  name: 'home',
  components: {
    Airport: Airport,
    Timeline: Timeline,
    SuggestionsArea: SuggestionsArea
  },
}
</script>
<style>
.container {
  height: 100%;
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
}

.top {
  display: flex;
  justify-content: center nowrap;
  height: 75vh;
}
.add-plane-button {
  position: fixed;
}
</style>
