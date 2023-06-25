<template>
  <div class="image">
    <Imageloader
      src="https://p0.meituan.net/movie/9fef460fa952861634cfd9d92340a3a0242823.jpg"
      placeholder="https://p0.meituan.net/movie/9fef460fa952861634cfd9d92340a3a0242823.jpg"
      :duration="2000"
      @load="loaded"
    />
  </div>
</template>

<script>
import Imageloader from "./index.vue";
export default {
  components: {
    Imageloader,
  },
  methods: {
    loaded() {
      console.log("事件触发");
    },
  },
};
</script>

<style scoped>
.image{
  width: 550px;
  height: 400px;
  border: 2px solid;
  margin: 0 auto;
}
</style>
