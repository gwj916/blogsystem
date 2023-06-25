<template>
  <div class="empty">
      <Icon type="empty"/>
      <p>{{text}}</p>
  </div>
</template>

<script>
import Icon from "../Icon";
export default {
  components: {
    Icon,
  },
  props: {
    text: {
      type: String,
      default: "无数据",
    },
  },
};
</script>

<style scoped lang="less">
@import '../../styles/mimin.less';
.empty{
    .self-center();
    text-align: center;
}
.icon{
    font-size: 50px;
}
</style>