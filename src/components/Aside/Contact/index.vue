<template >
  <ul class="contn">
  <li>
    <a href="">
      <div class="icon">
        <Icon type="qq"/>
      </div>
      <span>1740868483</span>
    </a>
    <div class="pop">
      <img src="https://img-blog.csdnimg.cn/img_convert/f396422c33f2a6681da5a32091bd826e.png?x-oss-process=image/resize,m_fixed,h_200,image/format,png" alt="">
    </div>
  </li>
   <li>
    <a href="">
      <div class="icon">
        <Icon type="wechat"/>
      </div>
      <span>18647946584</span>
    </a>
    <div class="pop">
      <img src="https://img-blog.csdnimg.cn/img_convert/f396422c33f2a6681da5a32091bd826e.png?x-oss-process=image/resize,m_fixed,h_200,image/format,png" alt="">
    </div>
  </li>
  <li>
    <a href="">
      <div class="icon">
        <Icon type="qzone"/>
      </div>
      <span>1740868483</span>
    </a>
    <div class="pop">
      <img src="https://img-blog.csdnimg.cn/img_convert/f396422c33f2a6681da5a32091bd826e.png?x-oss-process=image/resize,m_fixed,h_200,image/format,png" alt="">
    </div>
  </li>
  </ul>
</template>

<script>
import Icon from '../../Icon';
export default {
  components:{
    Icon,
  },
  
}
</script>

<style scoped lang="less">
@import '~@/styles/index.less';
.contn{
list-style: none;
margin: 20px;
padding: 0;
color: @text;
li{
  height: 30px;
  line-height: 30px;
  margin: 14px 0;
  position: relative;
  &:hover{
    .pop{
      transform: scaleY(1);
    }
  }
}
a{
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size:23px;  
}
.icon{ 
  width: 36px;
}
.pop{ 
  position: absolute;
  left: 0;
  bottom: 30px;
  border-radius:5px ;
  transform: scaleY(0);
  transform-origin:center bottom;
  transition: 0.3s;
  img{
    width: 120px;
  }
  
}
}
</style>