<template>
  <div class="msg_box">
    <div class="msg_send_user">
      <i class="fa fa-arrow-circle-left fa-2x" aria-hidden="true" @click="hide"></i>
      <div class="msg_user_pic">
        <img :src="msg.pic"/>
      </div>
      <div class="msg_title">
        <h5>{{msg.name}}</h5>
      </div>
    </div>
    <div class="msg_chat">
      <div class="row msg_item" v-for="item in msg.chat" :key="item.msg" :class="[item.to === 'me'?'':'flex_right']">
        <div class="msg" :class="[item.to === 'me'?'msg_left':'msg_right']">
          {{item.msg}}
        </div>
      </div>
    </div>
    <div class="msg_input">
      <i class="fa fa-paper-plane-o fa-2x" aria-hidden="true" @click="sending" :class="{sending:true}"></i>
      <input placeholder="请输入文字" v-model="message" @keyup.enter="sending">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ChatMsg',
    props: {
      msglist: {
        type: Array,
        default () {
          return []
        }
      },
      chatid: {
        type: String,
        default () {
          return ''
        }
      }
    },
    data () {
      return {
        msg: {},
        send: false,
        message: ''
      }
    },
    methods: {
      hide () {
        this.$emit('hide')
      },
      getchat () {
        this.msglist.forEach((item) => {
          if (item.id === this.chatid) {
            this.msg = item
          }
        })
      },
      sending () {
        this.send = true
        this.msg.chat.push({
          to: 'other',
          from: 'me',
          msg: this.message
        })
        this.message = ''
      }
    },
    destroyed () {
      this.message = ''
    },
    mounted () {
      this.getchat()
    },
    watch: {
      chatid: {
        handler (n, o) {


          this.getchat()
        }
      },

      msg: {
        handler (n, o) {
        },
        deep: true
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "assets/css/flex_gird.scss";

  .fa {
    cursor: pointer;
  }

  .fa-arrow-circle-left {
    margin-right: 20px;
  }

  .msg_item {
    animation: slide-in 1s .5s linear;
    transition: all 1s;
  }

  .msg_box {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background: #fff;
  }

  .msg_send_user {
    padding: 10px;
    padding-left: 25px;
    border-bottom: 1px solid #f2f2f2;
    display: flex;
    align-items: center;
  }

  .msg_user_pic {
    width: 60px;
    height: 60px;

  }

  .msg_user_pic img {
    max-width: 100%;
    height: auto;
    border-radius: 100%;
  }

  .msg_title {
    margin-left: 20px;
    font-size: 22px;
    font-weight: 400;
  }

  .msg_chat {
    width: 100%;
    height: calc(100% - 57px - 81px);
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 10px;
    -ms-overflow-style: none;
  }

  .msg_chat::-webkit-scrollbar {
    display: none;
  }

  .msg_input {
    position: absolute;
    z-index: 3;
    padding: 0px 20px 20px 20px;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff;
  }

  .msg_input input {
    outline: none;
    width: calc(100% - 40px);
    border: 1px solid #d9d9d9;
    padding: 10px;
  }

  .msg_input input:focus {
    outline: none !important;
    border-color: hsl(199, 98%, 48%);
  }

  .msg {
    padding: 10px;
  }

  .msg_left {
    position: relative;
    padding: 0.75em;
    color: #fff;
    font-size: 1em;
    line-height: 1.3em;
    text-align: left;
    border-radius: 0.5em;
    background-color: #FF706F;
    margin: 0.5em 0em;
  }

  .msg_left::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: 40%;
    right: 100%;
    border: 5px solid transparent;
    border-color: transparent #FF706F transparent transparent;
  }

  .msg_right {
    position: relative;
    padding: 0.75em;
    color: #ffffff;
    font-size: 1em;
    text-align: left;
    border-radius: 0.5em;
    background-color: #60d8ce;
    margin: 0.5em 0em;
  }

  .flex_right {
    justify-content: flex-end;
  }

  .msg_right::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: 40%;
    left: 100%;
    border: 5px solid transparent;
    border-color: transparent transparent transparent #60d8ce;
  }

  .sending {
    float: right;
  }

  @keyframes slide-in {
    from {
      transform: translateY(10px);

    }
    to {
      transform: translateY(0)
    }
  }
</style>
