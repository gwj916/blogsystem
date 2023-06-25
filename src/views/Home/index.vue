<template>
  <div class="home-container" ref="container" @wheel="hwheel">
    <ul
      class="carose"
      @transitionend="htranend"
      :style="{
        marginTop,
      }"
    >
      <li v-for="i in data" :key="i.id">
        <carose :carose="i" />
      </li>
    </ul>
    <div @click="switchto(index - 1)" v-show="index >= 1" class="icon iconup">
      <Icon type="up" />
    </div>
    <div
      @click="switchto(index + 1)"
      v-show="index < data.length - 1"
      class="icon icondown"
    >
      <Icon type="down" />
    </div>
    <ul class="dicator">
      <li
        :class="{ active: item === index }"
        v-for="(i, item) in data"
        :key="i.id"
        @click="switchto(item)"
      ></li>
    </ul>
    <Loding v-if="isloding" />
  </div>
</template>

<script>
import { getbanner } from "@/api/banner";
import Carose from "./carose.vue";
import Icon from "@/components/Icon";
import Loding from "@/components/Loding";
import fetchData from "@/mixins/fetch.js";
export default {
  mixins: [fetchData([])],
  components: {
    Icon,
    Carose,
    Loding,
  },
  data() {
    return {
      index: 0,
      height: 0,
      wheeling: false,
    };
  },

  mounted() {
    this.height = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.hresize);
  },
  destroyed() {
    window.removeEventListener("resize", this.hresize);
  },
  computed: {
    marginTop() {
      return -this.index * this.height + "px";
    },
  },
  methods: {
    switchto(i) {
      this.index = i;
    },
    hwheel(e) {
      if (this.wheeling) {
        return;
      }
      if (e.deltaY < -5 && this.index > 0) {
        this.wheeling = true;
        this.index--;
      } else if (e.deltaY > 5 && this.index < this.data.length - 1) {
        this.wheeling = true;
        this.index++;
      }
    },
    htranend() {
      this.wheeling = false;
    },
    hresize() {
      this.height = this.$refs.container.clientHeight;
    },
    async fetchData() {
      return await getbanner();
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../styles/mimin.less";
@import "../../styles/index.less";
.home-container {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;

  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }
}
.carose {
  height: 100%;
  width: 100%;
  transition: 500ms;
  li {
    height: 100%;
    width: 100%;
  }
}
.icon {
  .self-center();
  font-size: 30px;
  color: @gray;
  cursor: pointer;
  position: absolute;
  &.iconup {
    top: 25px;
    animation: jump-up 2s infinite;
    transform: translateX(-50%);
  }
  &.icondown {
    top: auto;
    bottom: 25px;
    animation: jump-down 2s infinite;
  }
  @keyframes jump-up {
    0% {
      transform: translate(-50%, 10px);
    }
    50% {
      transform: translate(-50%, -10px);
    }
    100% {
      transform: translate(-50%, 10px);
    }
  }
  @keyframes jump-down {
    0% {
      transform: translate(-50%, -10px);
    }
    50% {
      transform: translate(-50%, 10px);
    }
    100% {
      transform: translate(-50%, -10px);
    }
  }
}
.dicator {
  .self-center();
  transform: translateY(-50%);
  left: auto;
  right: 20px;
  li {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    cursor: pointer;
    border: 1px solid #fff;
    transition: 0.5s;
    box-sizing: border-box;
    margin-bottom: 10px;
    &.active {
      background: #fff;
    }
  }
}
</style>