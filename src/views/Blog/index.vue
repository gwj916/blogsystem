<template>
  <Layout>
    <Bloglist/>
    <template #right>
     <Blogcategory/>
    </template>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout'
import Bloglist from './components/Bloglist'
import Blogcategory from './components/Blogcategory'
export default {
components:{
  Layout,
  Blogcategory,
  Bloglist
}
}
</script>

<style>

</style>