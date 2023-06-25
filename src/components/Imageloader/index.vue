<template>
  <div class="img-loader">
    <img :placeholder="placeholder" class="placeholder" alt="" v-if="!edone" />
    <img
      @load="hload"
      :src="src"
      alt=""
      :style="{ opacity: srcopacity, transition: `${duration}ms` }"
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      srcload: false,
      edone: false,
    };
  },
  methods: {
    hload() {
      this.srcload = true;
      setTimeout(() => {
        this.edone = true;
        this.$emit("load")
      },this.duration);
    },
  },
  computed: {
    srcopacity() {
      return this.srcload ? 1 : 0;
    },
  },
};
</script>

<style scoped lang="less">
@import "../../styles/mimin.less";
.img-loader {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    .self-fill();
    object-fit: cover;
  z-index: -100;

  }
  .placeholder {
    filter: blur(2vw);
  }
}
</style>