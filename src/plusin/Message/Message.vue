<template>
  <div class="msg" v-show="show" :class="{active:show}">
    <span class="icon error" v-if="type === 0">x</span>
    <span class="icon success" v-if="type=== 1">√</span>
    <span class="msgtip">{{message}}</span>
  </div>
</template>

<script>
  export default {
    name: 'Message',
    data () {
      return {
        message: '',
        type: 0,
        show:false,
        hide:false
      }
    },
    methods: {
      showmsg (message, type,timeout=3000) {
        this.show = true
        const check = {
          type: 0
        }
        const recevie = new Proxy(check, {
          set: function (obj, prop, val) {
            if (prop === 'type') {
              if (!Number.isInteger(val)) {

                throw new TypeError('对不起,传入类型有误。仅支持整形输入')
              }
              if (val > 1) {
                throw new RangeError('对不起,传入类型有误。仅支持0或1')
              }
            }
           return true
          }

        })
        this.type = recevie.type = type
        this.message = message
        setTimeout(() => {
          this.show = false
        },timeout)
      }
    }
  }
</script>

<style scoped>
  .msg {
    transition: all 1s ease;
    position: fixed;
    display: inline-block;
    min-width: 250px;
    background: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px 10px;
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05);
    z-index: 999;
  }
  .msg span{
    display: inline-block;
  }
  .icon {
    color: #fff;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    line-height: 11px;
    text-align: center;
    margin-right: 5px;
  }

  .error {
    background-color: red;
  }
  .success {
    background-color: green;
  }
  .active{
    animation:fadeIn 0.5s linear;
  }
  @keyframes fadeIn {
    0%{
      -webkit-transform: translate(-50%, -90%);
      transform: translate(-50%, -90%)
    }
    to{
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%)
    }
  }
</style>
