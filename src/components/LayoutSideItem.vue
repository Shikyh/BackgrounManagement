<template>
  <div link="item.link" class="menu-item" @click="itemClick">
    <i class="fa" aria-hidden="true" :class="[icon]"></i>
    <label>{{item.meta.title}}</label>
    <i class="fa fa-angle-down" aria-hidden="true" v-if="item.children" :class="{up:toggle}"></i>
  </div>
</template>

<script>
  export default {
    name: 'LayoutSideItem',
    props: {
      item: {
        type: Object,
        default () {
          return {}
        }
      },
      icon: {
        type: String
      },
      link: {
        type: String,
        required: true
      },
      toggle: {
        type: Boolean,
        default () {
          return false
        }
      }
    },
    data () {
      return {
        isActive: false,
        down: false
      }
    },
    methods: {
      itemClick () {
        this.$router.replace(this.link)
      }
    },
    watch: {
      toggle: {
        handler (n, o) {

        }
      }
    }
  }
</script>

<style scoped>
  @import "../assets/css/font-awesome-4.7.0/css/font-awesome.min.css";

  .menu-item {
    height: 40px;
    line-height: 40px;
    padding-left: 24px;
    /*margin: 16px 0px;*/
    cursor: pointer;
    position: relative;
  }

  .menu-item label {
    margin-left: 10px;
  }

  .fa-angle-down {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    transform-origin: 5px 35%;
    transition: all .4s ease;
  }

  .up {
    transform: rotate(-180deg);
    transition: all .4s ease;
  }
</style>
