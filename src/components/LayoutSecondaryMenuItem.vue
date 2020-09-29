<template>
  <div link="item.link" class="menu-item" @click="itemClick">
    <label>{{item.meta.title}}</label>
  </div>
</template>

<script>
  export default {
    name: 'LayoutSecondaryMenuItem',
    props:{
      item: {
        type: Object,
        default () {
          return {}
        }
      },
      link:{
        type: String,
        required:true
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.link)
      }
    }
  }
</script>

<style scoped>
  .menu-item{

  }
</style>
