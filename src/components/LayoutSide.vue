<template>
  <div id="layout-side">
    <ul>
      <li v-for="(item,index) in breadcrumlist" :key="item.path"
          :class="{isActive:item.path === currentPath&&!item.children,toggle:toggle&&currentIndex===index}" @click="itemchange($event,item.path,index,item.children)"
          :link="item.path" class="hide">
        <layout-side-item :item="item" :link="item.path" :icon="item.icon" :toggle="toggle"></layout-side-item>
        <ul v-if="item.children" style="margin: 0px 10px;box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);">
          <li v-for="i in item.children" :key="i.path" @click.stop="itemchange($event,item.path+'/'+i.path,index,'child')"
              :class="{isActive: item.path+'/'+i.path === currentPath}"
              class="secondaryitem" :link="item.path+'/'+i.path">
            <layout-secondary-menu-item :item="i" :link="item.path+'/'+i.path"></layout-secondary-menu-item>
          </li>
        </ul>
      </li>

    </ul>
  </div>
</template>

<script>
  import LayoutSideItem from './LayoutSideItem'
  import LayoutSecondaryMenuItem from './LayoutSecondaryMenuItem'

  export default {
    name: 'LayoutSide',
    components: {
      LayoutSideItem,
      LayoutSecondaryMenuItem
    },
    data () {
      return {
        isActive: false,
        currentIndex: 0,
        toggle:false,
        currentPath: '/home',
        breadcrumlist: [],
      }

    },
    methods: {
      itemchange (e, path,index,child) {
        this.currentPath = path
        this.currentIndex = index
        if(child){//这里是父级点击
          if(child === 'child'){
            this.toggle = true
          }else {
            this.toggle = !this.toggle
          }
        }else {
          this.toggle = false
        }
        // this.breadcrumlist.forEach((item, t) => {
        //   //判断是否含有二级菜单,当有二级菜单时候,父级取消高亮,改为子级显示
        //   if (item.children !== undefined) {
        //     item.active = false
        //     item.children.forEach((citem, i) => {
        //       let child2 = citem
        //       Object.defineProperty(child2, 'active', {
        //         value: false,
        //         writable: false
        //       })
        //       this.breadcrumlist[t]['children'].splice(i, 1, child2)
        //     })
        //   } else {
        //     item.active = false
        //   }
        // })
        // if (index.length > 1) {
        //   //二级显示
        //   let child = {}
        //   child = this.breadcrumlist[index[0]].children[index[1]]
        //   Object.defineProperty(child, 'active', {
        //     value: true,
        //     writable: false
        //   })
        //   this.breadcrumlist[index[0]]['children'].splice([index[1]], 1, child)
        // } else {
        //   this.breadcrumlist[index[0]].active = true
        // }

      },
    },
    computed: {

    },
    created () {
      let routers = this.$router.options.routes
      for (let i = 0; i < routers.length; i++) {
        if (routers[i]['path'] === '') {
          //这里去除默认路径得显示
          routers.splice(i, 1)
        }
      }
      this.breadcrumlist = routers
    },
    mounted () {
      this.$bud.$on('setpath', ({ path }) => {
        this.currentPath = path
      })
    },
    watch: {
      breadcrumlist: {
        handler: function (val, oldVal) {
          this.breadcrumlist = val
        },
        deep: true
      },
      $route () {
        this.isActive = false
        if (this.$route.path.indexOf(this.currentPath) !== -1) {
          this.isActive = true
        }
      }
    }
  }
</script>

<style scoped>
  #layout-side {
    width: 200px;
    height: 100%;
    background-color: #fff;
    overflow: auto;
  }

  #layout-side ul li {
    cursor: pointer;
    position: relative;
    margin: 16px 0px;
  }

  #layout-side ul li::after {
    position: absolute;
    top: 0;
    right: 0;
    content: '';
    border-right: 3px solid #1890ff;
    height: 100%;
    transform: scaleY(0);
  }

  .isActive {
    color: #1890ff;
    background-color: #e6f7ff;
  }

  .isActive::after {
    transform: scaleY(1) !important;
    transition: transform .15s cubic-bezier(.645, .045, .355, 1), opacity .15s cubic-bezier(.645, .045, .355, 1);
  }

  .secondaryitem {
    padding-left: 48px;
    height: 40px;
    line-height: 40px;
  }
  .hide{
    max-height: 40px;
    overflow: hidden;
    transition: max-height .5s cubic-bezier(0, 1, 0, 1);
  }
  .toggle{
    max-height: 999px;
    transition: max-height .5s cubic-bezier(1, 0, 1, 0);
  }

</style>
