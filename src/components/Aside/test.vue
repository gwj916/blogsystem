<template>
  <div class="cont">
    <Aside />
  </div>
</template>

<script>
import Aside from "./index.vue";
export default {
  components: {
    Aside,
  },
};
</script>

<style>
@import "../../styles/global.less";
.cont {
  width: 250px;
  height: 600px;
  border: 2px solid red;
  margin: 0 auto;
}
</style>