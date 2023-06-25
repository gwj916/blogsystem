<template>
  <Layout>
    <div class="container" ref="container">
      <Loding v-show="isloding" />
      <Blogdetail :blog="data" v-if="data" />
    </div>
    <template #right>
      <div class="cont">
        <BlogToc :toc="data.toc" v-if="data" />
      </div>
    </template>
  </Layout>
</template>

<script>
import fetchData from "@/mixins/fetch.js";
import { getblogs } from "@/api/blog.js";
import Layout from "@/components/Layout";
import Blogdetail from "./components/Blogdetail.vue";
import BlogToc from "./components/BlogToc.vue";
import Loding from "@/components/Loding";
import mainscroll from '@/mixins/mainscroll.js';

export default {
  mixins: [fetchData(null),mainscroll("container")],
  methods: {
    async fetchData() {
      this.isloding = true;
      return await getblogs(this.$route.params.id);
    }
  },

  components: {
    Layout,
    BlogToc,
    Blogdetail,
    Loding,
  },
  
  
  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
};
</script>

<style lang="less" scoped>
.container {
  overflow: scroll;
  height: 100%;
  padding: 20px;
  position: relative;
  scroll-behavior: smooth;
}
</style>