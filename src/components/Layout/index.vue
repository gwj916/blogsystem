<template>
  <div class="cont">
    <div class="left">
        <slot name="left"></slot>
    </div>
    <div class="def">
        <slot></slot>
    </div>
    <div class="right">
        <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.cont{
    height: 100%;
    width: 100%;
    display: flex;
    .left,
    .right{
        flex:0 0 auto;
        overflow: hidden;
    }
    .def{
        flex:1 1 auto;
        overflow: hidden;
    }
}

</style>
