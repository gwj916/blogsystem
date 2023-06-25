<template>
  <div class="acrosecont" ref="cont" @mousemove="hmousemove">
    <div class="caroseimg" ref="img" :style="imgposition">
      <Imageloader
        @load="this.showword"
        :src="carose.bigimg"
        :placeholder="carose.midimg"
      />
    </div>
    <div class="title" ref="title">{{ carose.title }}</div>
    <div class="text" ref="text">{{ carose.text }}</div>
  </div>
</template>

<script>
import Imageloader from "@/components/Imageloader";
export default {
  components: {
    Imageloader,
  },
  props: ["carose"],
  data() {
    return {
      titlewidth: 0,
      textwidth: 0,
      contsize: null,
      innersize: null,
      mousex: 0,
      mousey: 0,
    };
  },
  mounted() {
    this.titlewidth = this.$refs.title.clientWidth;
    this.textwidth = this.$refs.text.clientWidth;
    this.setsize();
    window.addEventListener("resize", this.setsize);
  },
  destroyed() {
    window.removeEventListener("resize", this.setsize);
  },
  methods: {
    showword() {
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      this.$refs.title.clientWidth;
      this.$refs.title.style.transition = "1s";
      this.$refs.title.style.width = this.titlewidth + "px";
      this.$refs.text.style.opacity = 1;
      this.$refs.text.style.width = 0;
      this.$refs.text.clientWidth;
      this.$refs.text.style.transition = "2s 1s";
      this.$refs.text.style.width = this.textwidth + "px";
    },
    setsize() {
      this.contsize = {
        width: this.$refs.cont.clientWidth,
        height: this.$refs.cont.clientHeight,
      };
      this.innersize = {
        width: this.$refs.img.clientWidth,
        height: this.$refs.img.clientHeight,
      };
    },
    hmousemove(e) {
      const rect = this.$refs.cont.getBoundingClientRect();
      this.mousex = e.clientX - rect.left;
      this.mousey = e.clientY - rect.top;
    },
  },
  computed: {
    imgposition() {
      if (!this.innersize || !this.contsize) {
        return;
      }
      const ewidth = this.innersize.width - this.contsize.width;
      const eheight = this.innersize.height - this.contsize.height;
      const left = -ewidth / this.contsize.width* this.mousex;
      const top = -eheight / this.contsize.height * this.mousey;
      return {
        left: left+"px",
        top: top+"px",
      };
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/index.less";
.acrosecont {
  width: 100%;
  height: 100%;
  color: #fff;
  position: relative;
  overflow: hidden;
}
.caroseimg {
  width: 110%;
  height: 110%;
  position: absolute;
  z-index: -1;
}
.title {
  white-space: nowrap;
  overflow: hidden;
  position: absolute;
  top: 35%;
  left: 50px;
  color: @warn;
  font-size: 2em;
  text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
    0 -1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
}
.text {
  white-space: nowrap;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50px;
  color: @lightword;
  text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
    0 -1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
  font-size: 1.5em;
}
</style>