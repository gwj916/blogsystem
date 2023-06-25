<template>
  <div class="cont">
    <Layout>
      <template #left>
        <div class="left">左</div>
      </template>
      <template>
        <div class="def">中</div>
      </template>
      <template #right>
        <div class="right">右</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./index.vue";
export default {
  components: {
    Layout,
  },
};
</script>

<style scoped>
.cont {
  width: 1000px;
  height: 600px;
  border: 1px solid red;
  margin: 0 auto;
}
.left {
  width: 200px;
  height: 100%;
  background-color: aqua;
}
.def {
  width: 100%;
  height: 100%;
  background-color: brown;
}
.right {
  width: 150px;
  height: 100%;
  background-color: fuchsia;
}
</style>