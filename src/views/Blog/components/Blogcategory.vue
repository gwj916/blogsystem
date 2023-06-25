<template>
  <div class="cont">
    <Loding v-if="isloding" />
    <h1>文章分类</h1>
    <Rightlist :list="list" @select="hselect"/>
    
  </div>
</template>

<script>
import Rightlist from "@/views/Blog/components/Rightlist.vue";
import fetchData from "@/mixins/fetch.js";
import { getblogtypes } from "@/api/blog.js";
import Loding from "@/components/Loding";

export default {
  mixins: [fetchData([])],
  components: {
    Rightlist,
    Loding,
  },
  computed: {
    categoryid() {
      return +this.$route.params.categoryid || -1;
    },
    limit(){
      return +this.$route.query.limit || 10;
    },
    list(){
      const totalartcount = this.data.reduce((a,b)=>a+b.artcount,0)
      const result = [{name:"全部",id:-1,artcount:totalartcount},...this.data]
    return result.map(it=>({
      ...it,
      isselect:it.id===this.categoryid,
       aside:`${it.artcount}篇`
    }) )
    }
  },
  methods: {
    async fetchData() {
      return await getblogtypes();
    },
    hselect(item){
        const query = {
        page: 1,
        limit: this.limit,
      };
      if (item.id === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "CategoryBlog",
          query,
          params:{
           categoryid: item.id
          }
        });
      }
    }
  },
};
</script>

<style lang="less" scoped>
.cont {
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  h1{
    text-align: center;
    width: 55%;
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin-left: 0;
  }
}
</style>