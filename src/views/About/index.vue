<template>
  <div class="container">
    <iframe src="http://gwj916.github.io" class="about-content"></iframe>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.container {
   overflow: hidden;
  position: relative;

  display: block;
  font-size: 0;
  .about-content {
    display: block;
    box-sizing: border-box;
  }
  iframe {
    width: 100%;
    height: 100%;
    vertical-align: top;
  }
}
</style>