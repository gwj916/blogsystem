<template>
  <div class="cont">
    <h1>{{ blog.title }}</h1>
    <div class="aside">
      <span>日期：{{ blog.createdate }}</span>
      <span>浏览：{{ blog.scanNumber }}</span>
      <a>评论：{{ blog.commentNumber }}</a>
      <RouterLink :to="{ 
        name:'CategoryBlog',
        params:{
         categoryid:blog.category.id
        }
        }">{{blog.category.name}}</RouterLink>
    </div>
    <div v-html="blog.htmlconent" class="content"></div>
  </div>
</template>

<script>
export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
.cont {
  display: block;
  padding: 20px;
  .aside {
    font-size: 12px;
    color: gray;
    span {
      margin-right: 10px;
    }
    a {
      margin-right: 10px;
      cursor: pointer;
    }
  }
  .content{
          color: #000 !important;
}
}
</style>