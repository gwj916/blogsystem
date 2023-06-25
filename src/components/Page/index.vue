<template>
  <div class="container" v-if="pagenumber > 1">
    <a @click="hclick(1)" :class="{ disabled: current === 1 }">|&lt;&lt;</a>
    <a @click="hclick(current - 1)" :class="{ disabled: current === 1 }"
      >&lt;&lt;</a
    >
    <a
      @click="hclick(i)"
      :class="{ active: i === current }"
      v-for="(i, index) in numbers"
      :key="index"
      >{{ i }}</a
    >
    <a
      @click="hclick(current + 1)"
      :class="{ disabled: current === pagenumber }"
      >&gt;&gt;</a
    >
    <a @click="hclick(pagenumber)" :class="{ disabled: current === pagenumber }"
      >&gt;&gt;|</a
    >
  </div>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
    limit: {
      type: Number,
      default: 10,
    },
    visNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    pagenumber() {
      return Math.ceil(this.total / this.limit);
    },
    numbers() {
      let nums = [];
      for (let i = this.vismin; i <= this.vismax; i++) {
        nums.push(i);
      }
      return nums;
    },
    vismin() {
      let min = this.current - Math.floor(this.visNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    vismax() {
      let max = this.vismin + this.visNumber - 1;
      if (max > this.pagenumber) {
        max = this.pagenumber;
      }
      return max;
    },
  },
  methods: {
    hclick(newpage) {
      this.$emit("pagechange", newpage);
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../styles/index.less";
.container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  a {
    margin: 0 5px;
    cursor: pointer;
    &.disabled {
      color: @gray;
      cursor: not-allowed;
    }
    &.active {
      color: black;
      font-weight: bold;
      cursor: text;
    }
  }
}
</style>