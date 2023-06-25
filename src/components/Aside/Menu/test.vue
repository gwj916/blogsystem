<template>
  <div class="contn">
      <Menu />
  </div>
</template>

<script>
import Menu from "./index.vue"

export default {
components:{
    Menu,
}
}
</script>

<style >
@import "~@/styles/global.less";
.contn{
    width: 400px;
    height: 600px;
    border:2px solid red ;
    margin: 0 auto;
    padding-top: 200px;
}
</style>