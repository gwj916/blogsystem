<template>
<div class="container">
    <Layout>
    <template #left>
        <div class="aside">
            <Aside/>
        </div>
    </template>  
    <template #default>
            <RouterView/>
    </template>
  </Layout>
  <Totop/>
</div>


</template>

<script>
import Layout from './components/Layout';
import Aside from './components/Aside';
import Totop from './components/Totop';
export default {
components:{
    Layout,Aside,Totop
}
 
};
</script>
<style lang="less" scoped>
@import './styles/mimin.less';
.container{
    .self-fill(fixed);
    .aside{
        height: 100%;
        width: 250px;
    }
}

</style>