<template>
  <i :class="fontClass" class="iconfont icon" ></i>
</template>

<script>
const myIcon = {
  home: "iconicon",
  qq: "iconqq1193403easyiconnet",
  qzone: "iconqzone1193405easyiconnet",
  up: "icon15",
  down: "icon16",
  wechat: "iconwechat1193418easyiconnet",
  right: "iconunie645",
  err: "iconunie646",
  warn: "iconunie663",
  plaint: "iconuntitled50",
  my: "iconiconfuzhi",
  infor: "iconxiaoxi",
  code: "iconkaifa",
  empty: "iconkong",
  blog:"iconwenzhang1",
};
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    fontClass() {
      return myIcon[this.type];
    },
  },
};
</script>

<style scoped>
@import "//at.alicdn.com/t/font_2503063_pilj7vvbnfi.css";
.icon{
  color: inherit;
  font-size: inherit;
}
</style>