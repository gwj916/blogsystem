<template>
  <div @click="hclick" class="cont" v-show="show">
      Top
  </div>
</template>

<script>
export default {
  data() {
      return {
          show:false,
      }
  },
  created(){
      this.$bus.$on("mainscroll",this.hscroll)
  },
  destroyed() {
      this.$bus.$off("mainscroll",this.hscroll)
  },
  methods: {
      hscroll(dom){
          if (!dom) {
              this.show=false
              return;
          }
        this.show =  dom.scrollTop>=500
      },
      hclick(){
         this.$bus.$emit("setmainscroll",0)
      }
  },
}
</script>
<style lang="less" scoped>
.cont{
    width: 50px;
    height: 50px;
    background-color: sandybrown;
    position: fixed;
    right: 85px;
    bottom: 50px;
    z-index: 10;
    cursor: pointer;
    border-radius:50% ;
    line-height: 50px;
    color: white;
    text-align: center;
}
</style>