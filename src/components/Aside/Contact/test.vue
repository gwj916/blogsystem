<template> 
<div class="cont">
<Contact/>
</div>

</template>

<script>

import Contact from './index.vue'
export default {
  components: {
      Contact,
  },
};
</script>

<style scoped>
@import '../../styles/global.less';
.cont{
    width: 400px;
    height: 600px;
    border:2px solid red ;
    margin: 0 auto;
    padding-top: 200px;
}
</style>