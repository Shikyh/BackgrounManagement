<template>
  <div id="rightcontent">
    <top-nav-bar></top-nav-bar>
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  import TopNavBar from './TopNavBar'

  export default {
    name: 'LayoutRightContent',
    props: {},
    components: {
      TopNavBar
    },
    data () {
      return {
        sideitem: [
          {
            'name': '首页',
            'path': '/home'
          },
          {
            'name': '流程设计',
            'path': '/processdesign'
          },
          {
            'name': '表单设计',
            'path': '/formdesign'
          },
          {
            'name': '在线开发',
            'path': '/onlinedevelopment'
          },
          {
            'name': '用户管理后台',
            'path': '/usermanagement'
          },
          {
            'name': '系统管理',
            'path': '/systemmanagement'
          }
        ],
      }
    }
  }
</script>

<style scoped>
  #rightcontent {
    flex: 1;
    height: 100%;
    overflow-x: hidden;
  }

  .v-enter,.v-leave-to{
    position: absolute;
    opacity: 0;
  }
  .v-enter-to,.v-leave{
    position: absolute;
    opacity: 1;
  }

  .v-enter-active, .v-leave-active {
    transition: all 1s linear;
  }
  .v-move{
    transition: all 1s linear;
  }
</style>
