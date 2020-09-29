<template>
  <div id="app">
    <div class="bg" @click="spread" :class="{bgshow:show}">
      <layout-side class="layout-side" :class="{spread:show}"></layout-side>
    </div>
    <layout-right-content></layout-right-content>
  </div>
</template>

<script>
  import LayoutSide from './components/LayoutSide'
  import LayoutRightContent from './components/LayoutRightContent'

  export default {
    name: 'App',
    components: {
      LayoutSide,
      LayoutRightContent
    },
    data () {
      return {
        show: false
      }
    },
    methods: {
      spread () {
        this.show = false
      }
    },
    mounted () {
      this.$bud.$on('barspread', ({ msg }) => {
        this.show = msg
      })
    }
  }
</script>

<style>
  @import "assets/css/base.css";

  #app {
    display: flex;
    height: 100%;
    overflow-x: hidden;
  }

  .bg {
    background-color: #fff;
    overflow: hidden;
  }


  @media screen and (max-width: 768px) {
    .bg {
      position: absolute;
      visibility: hidden;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      transition: .3s;
      background: rgba(6, 5, 5, 0);
      z-index: 2;
    }

    .bgshow {
      visibility: visible;
      background: rgba(6, 5, 5, 0.8);

    }

    .layout-side {
      position: absolute;
      transform: translateX(-100%);
      transition: transform .3s;
      will-change: transform;
      contain: paint;
      z-index: 999;
      top: 0;
      left: 0;
      background-color: #fff;
      opacity: 1;
    }

    .spread {
      transform: none;
      opacity: 1;
    }
  }
</style>
