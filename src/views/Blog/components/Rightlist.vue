<template>
  <ul class="cont">
    <li v-for="(item , i) in list"  :key="i">
 
     <span @click="hclick(item)" :class="{ active: item.isselect }">
            {{ item.name }} 
      </span>
      <span v-if="item.aside"  @click="hclick(item)" class="aside" :class="{ active: item.isselect }" >{{item.aside}}</span>
      <Rightlist  :list="item.children"  @select="hclick"/>
    </li>
  </ul>
</template>

<script>
export default {  
  name: "Rightlist",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    hclick(item) {
      if (!item.isselect) {
        this.$emit("select", item);
      }     
    },
  },
};
</script>
 
<style lang="less" scoped>
.cont {
  list-style: none;
  padding: 0;
  .cont {
    margin-left: 1em;
  }
  li {
    min-height: 40px;
    line-height: 40px;
    cursor: pointer;
    .active {
      color: #faa307;
      font-weight: bold;
    }
    .aside{
     margin-left:10px
    }
  }
}
</style>