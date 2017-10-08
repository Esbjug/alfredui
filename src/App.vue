<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">

$color-not-quite-black: rgba(35,39,42, 1);
$color-dark: rgba(44,47,51, 1);
$greyple: rgba(153,170,181, 1);
$blurpl: rgba(114,137,218, 1);

@-ms-viewport {
  width: device-width;
}
html {
  box-sizing: border-box;
  background-color: $color-greyple;
  color: $color-white;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  height: 100%;
  line-height: 1.6;
}

html,
body {
  height: 100%;
  padding: 0;
  margin: 0;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

.btn {
  cursor: pointer;
  border: none;
  outline: 0;
  &:focus {
    outline: 0;
  }
}
#app {

}
</style>
