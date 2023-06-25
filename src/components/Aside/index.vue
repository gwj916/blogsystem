<template>
  <div class="aside-cont">
     
    <Avater url=" https://5b0988e595225.cdn.sohucs.com/images/20171221/2a14e6b09df846a1908379c06045ba96.jpeg" :size="150"/>
    
    <Menu />
    <Contact />
  </div>
</template>

<script>
import Contact from "./Contact";
import Menu from "./Menu";
import Avater from "../Avater";
export default {
  components: {
    Contact,
    Avater,
    Menu,
  },
};
</script>

<style scoped lang="less">
@import '~@/styles/index.less';
.aside-cont{
    width: 100%;
    height: 100%;
    background-color:#202020 ;
    padding: 20px 0;
    box-sizing: border-box;
    overflow-y: auto;
    overflow-x: hidden;
}
.Avater{
    display:flex;
    margin: 0 auto;
}
</style>