<template>
    <div class="airport-view">
    </div>
</template>
<style lang="scss">
$color-not-quite-black: rgba(35, 39, 42, 1);
$color-dark: rgba(44, 47, 51, 1);
$color-greyple: rgba(153, 170, 181, 1);
$color-blurpl: rgba(114, 137, 218, 1);

.airport-view {
    flex: 2 1 800px;
    min-height: 100%;
    background-color: $color-greyple;
    background: url('../../../static/images/imgGardermoen.jpg');
    background-origin: content-box;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: local;
    filter: grayscale(50%);
    transform: scale(1.3);
}
</style>