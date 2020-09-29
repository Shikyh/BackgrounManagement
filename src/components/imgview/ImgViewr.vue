<template>
  <div id="container" @click="hide">
    <img :src="src" :style="{width:Wi,height:He}">
  </div>
</template>

<script>
  export default {
    name: 'ImgViewr',
    props:{
      src:{
        type:String
      }
    },
    data(){
      return{
        Wi:0,
        He:0
      }
    },
    methods:{
      resizeimg(){
        let img = new Image();
        img.src = this.src;
        let height = img.height;
        let width = img.width;
        let hRatio;
        let wRatio;
        let Ratio = 1;
        let maxWidth = window.innerWidth - 42;
        let maxHeight = window.innerHeight - 42;
        wRatio = maxWidth / width;
        hRatio = maxHeight / height;
        if (maxWidth == 0 && maxHeight == 0) {
          Ratio = 1;
        } else if (maxWidth == 0) {
          if (hRatio < 1) Ratio = hRatio;
        } else if (maxHeight == 0) {
          if (wRatio < 1) Ratio = wRatio;
        } else if (wRatio < 1 || hRatio < 1) {
          Ratio = (wRatio <= hRatio ? wRatio : hRatio);
        }
        if (Ratio < 1) {
          width = width * Ratio;
          height = height * Ratio;
        }
        this.Wi = Math.round(width)
        this.He = Math.round(height)

      },
      hide(){
        this.$emit('hideviewer')
      }
    },
    created () {
     this.resizeimg()
    },
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
