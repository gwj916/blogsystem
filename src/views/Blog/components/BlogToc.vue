<template>
  <div class="cont">
    <h1>目录</h1>
    <Rightlist :list="tocselect" @select="hselect" />
  </div>
</template>

<script>
import Rightlist from "@/views/Blog/components/Rightlist.vue";
import {debounce} from '@/utils'
export default {
  data() {
    return {
      activeanchor: "",
    };
  },
  components: {
    Rightlist,
  },
  props: {
    toc: {
      type: Array,
    },
  },
   computed: {
    tocselect() {
      const gettoc = (toc = []) => {
        return toc.map((t) => ({
          ...t,
          isselect: t.anchor === this.activeanchor,
          children: gettoc(t.children),
        }));
      };
      return gettoc(this.toc);
    },
    doms() {
      const doms = [];
      const adddom = (toc) => {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor))
          if (t.children && t.children.length) {
            adddom(t.children);
          }
        }
      };
      adddom(this.toc);
      return doms;
    },
  },  
  methods: {
    hselect(item) {
      location.hash = item.anchor;
    },
    setselect(scrolldom) {
      if (!scrolldom ) {
        return;
      }
      const range = 100;
      for (const dom of this.doms) {
        if (!dom) {
          continue;
        }
        const top= dom.getBoundingClientRect().top
        if (top>=0 && top<=range) {
          this.activeanchor=dom.id;
          return;
        }else if(top>range){
          return
        }else{
            this.activeanchor=dom.id;
        }
      }
    },
  },
 
  
  created() {
    this.setdebounde = debounce(this.setselect,50)
    this.$bus.$on("mainscroll",this.setdebounde)
  },
  destroyed() {
     this.$bus.$off("mainscroll",this.setdebounde)
  },
};
</script>

<style lang="less" scoped>
.cont {
  width: 300px;
  box-sizing: border-box;
  padding: 5px;
  position: relative;
  h1 {
    text-align: center;
    width: 55%;
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin-left: 0;
  }
}
</style>