import VueRouter from 'vue-router'
import Vue from "vue"
Vue.use(VueRouter);
import Home from '@/views/Home';
import About from '@/views/About';
// import Project from '@/views/Project';
import Blog from '@/views/Blog';
import BlogDetail from '@/views/Blog/Detail';
import Notfound from "@/components/notfound"
const router = new VueRouter({
  routes: [
    {
      name: "Home", path: "/", component: Home, meta: {
        title: "首页"
      }
    },
    {
      name: "Blog", path: "/blog", component: Blog, meta: {
        title: "文章"
      }
    },
    {
      name: "CategoryBlog", path: "/blog/cate/:categoryid", component: Blog, meta: {
        title: "分类"
      }
    },
    {
      name: "BlogDetail", path: "/blog/:id", component: BlogDetail, meta: {
        title: "详情"
      }
    },
    {
      name: "About", path: "/about", component: About, meta: {
        title: "关于我"
      }
    },
    // {
    //   name: "Project", path: "/project", component: Project, meta: {
    //     title: "项目"
    //   }
    // },
    {
      name: "notfound", path: "*", component: Notfound, meta: {
        title: "404"
      }
    }
  ],
  mode: "history"
});
router.afterEach((to, from) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
})
export default router;