<template>
  <img :src="url" :style="{width:size+'px',height:size+'px'}" class="Avater">
</template>

<script>
export default {
  props:{
    url:{
      type: String,
      required:true,
    },
    size:{
      type:Number
    },
   

  }
}
</script>
<style scoped>
  .Avater{
    border-radius: 50%;
    object-fit: cover;
    display: block;
  }
</style>