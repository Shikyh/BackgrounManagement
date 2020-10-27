<template>
  <div id="topnavbar">
    <div class="bar" @click="showbar">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </div>
    <el-breadcrumb separator="/" class="el-bread" v-if="hasRest">
      <el-breadcrumb-item v-for="(item ,index) in breadList" :key="index" :to="{path: item.path}">{{item.meta.title}}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'TopNavBar',
    props: ['breaditem'],
    data () {
      return {
        hasRest: true,
        breadList: [],
        matchlist: {}
      }
    },
    computed: {
      ...mapGetters({
        breadcrum: 'breadcrumCurrent'
      })
    },
    methods: {
      ishome (route) {
        if (route['name'] !== undefined) {
          return route['name'] === 'home'
        }

      },
      delectInfo () {
        this.hasRest = false
        this.$nextTick(() => {
          this.hasRest = true//重新加载组件
        })
      },
      getBreadlist () {
        let matched = this.$route.matched
        if (!this.ishome(matched[0])) {
          matched = [{
            path: '/home',
            name: 'home',
            meta: { title: '首页' }
          }].concat(matched)
        }
        this.breadList = matched
      },

      showbar(){
        this.$bud.$emit('barspread',{
          msg:true
        })
      }
    },
    watch: {
      $route () {
        //这里监听路由变化
        this.getBreadlist()
      }
    },
    created () {
      // this.getBreadlist
      this.$nextTick(() => {
        let test = this.$route.matched
        //这里不显示路由片段,具体原因还没清除
      })

    }
  }
</script>

<style scoped>
  #topnavbar {
    position: relative;
    width: 100%;
    height: 75px;
    line-height: 40px;
    background: #fff;
    padding: 0px 10px;
  }

  .el-bread {
    position: absolute;
    top: 50%;
    transform: translate(0%, -50%);
  }

  .bar {
    display: none;
  }


  @media screen and (max-width: 768px) {
    .bar {
      display: flex;
      flex-flow: column;
      width: 20px;
      height: auto;
    }
    .bar:focus-within .icon-bar:nth-child(1){
      transform: translate3d(0px, 8px, 0px) rotate(45deg);
    }
    .bar:focus-within .icon-bar:nth-child(2){
      opacity: 0;
    }
    .bar:focus-within .icon-bar:nth-child(1){
      transform: translate3d(0, -8px, 0) rotate(-45deg);
    }

    .bar span {
      margin: 2px;
      display: inline-block;
      height: 2px;
      width: 100%;
      background: #B7B7B7;
    }
  }
</style>
