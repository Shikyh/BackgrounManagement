<template>
  <div id="container" @click="hide" v-if="state">
    <!--    记得加px啊,不是写的方法不行-->
<!--    将该图片查看器抽离成一个组件插件化形式-->
    <img :src="url" :style="styleobject">
  </div>
</template>

<script>
  import {imgview} from '@/methos/imgviewr'
  export default {
    name: 'Imgviewer',
    mixins:[imgview]
  }
</script>

<style scoped>
  #container{
    width: 100%;
    height: 100%;
    position: absolute;
    box-sizing: border-box;
    top: 0;
    left: 0;
    background: rgba(6, 5, 5, 0.8);
    z-index: 999;
    -webkit-font-smoothing: antialiased;
  }
  #container img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
</style>
