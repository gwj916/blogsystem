<template>
  <div class="blog-list-container" ref="cont">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <RouterLink :to="{name:'BlogDetail',params:{
                id:item.id
              } 
            }" >
            <img :src="item.thumb" :alt="item.title" :title="item.title" />
          </RouterLink>
        </div>
        <div class="main">
         <RouterLink :to="{name:'BlogDetail',params:{
                id:item.id
              } 
            }" >
            <h2>{{ item.title }}</h2>
        </RouterLink>
          <div class="aside">
            <span>日期：{{ item.createdate }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论：{{ item.commentNumber }}</span>
            <RouterLink  :to="{name:'CategoryBlog',params:{
                categoryid:item.category.id
              } 
            }" > {{ item.category.name }}</RouterLink>
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <Page
      v-if="data.total"
      :current="routeinfo.page"
      :total="data.total"
      :limit="routeinfo.limit"
      :visibleNumber="10"
      @pagechange="hchange"
    />

    <Loding v-if="isloding" />
  </div>
</template>

<script>
import Page from "@/components/Page";
import fetchData from "@/mixins/fetch.js";
import { getblog } from "@/api/blog.js";
import Loding from "@/components/Loding";
import mainscroll from '@/mixins/mainscroll.js'
export default {
  mixins: [fetchData({}),mainscroll("cont")],
  components: {
    Page,
    Loding,
  },

  computed: {
    routeinfo() {
      const categoryid = +this.$route.params.categoryid || -1;
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;
      return {
        categoryid,
        page,
        limit,
      };
    },
  },
  methods: {
    async fetchData() {
      return await getblog(
        this.routeinfo.page,
        this.routeinfo.limit,
        this.routeinfo.categoryid
      );
    },
    hchange(newpage) {
      const query = {
        page: newpage,
        limit: this.routeinfo.limit,
      };
      if (this.routeinfo.categoryid === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryid: this.routeinfo.categoryid,
          },
        });
      }
    },
  },
  watch: {
    async $route() {
      this.isLoding = true;
      this.data = await this.fetchData();
      this.$refs.cont.scrollTop = 0;
      this.isLoding = false;
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/index.less";
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }
  .main {
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>