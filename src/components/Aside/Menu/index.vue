<template>
  <div class="conts">
    <router-link
      :exact="item.exact"
      v-for="item in items"
      :to="{ name: item.name }"
      :key="item.link"
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </router-link>
  </div>
</template>

<script>
import Icon from "../../Icon";

export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          name: "Home",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          name: "Blog",
          title: "文章",
          icon: "blog",
          exact: false,
        },
        {
          name: "About",
          title: "关于我",
          icon: "my",
          exact: true,
        },
        // {
        //   name: "Project",
        //   title: "项目",
        //   icon: "code",
        //   exact: true,
        // },
        
      ],
    };
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/index.less";
.conts {
  color: @text;
  margin: 24px 0;

  a {
    padding: 0 50px;
    display: block;
    display: flex;
    align-items: center;
    height: 45px;
    &:hover {
      color: white;
    }
    &.router-link-active {
      background: @gray;
    }
  }

  .icon {
    width: 24px;
  }
}
</style>