<template>
  <Page :current="current" :total="total" @pagechange="hchange($event)" />
</template>
<script>
import Page from "./index.vue";
export default {
 components: {

    Page,
  },
  data() {
    return {
      current:1,
      total: 300,
    };
  },
  methods: {
    hchange(newpage) {
      this.current=newpage;
    },
  },
}
</script>

<style>

</style>