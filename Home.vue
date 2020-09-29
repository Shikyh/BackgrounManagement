<template>
  <div class="contanier">
    <div class="row">
      <div class="col-xs12 col-sm12 col-md6 col-lg6">
        <div class="task_list_card">
          <div class="task_list_title">
            <div class="bg_overlay">
              <h3>
                <i class="calendar fa fa-calendar" aria-hidden="true"></i>
                2020-10-01
              </h3>
            </div>
            <button class="add" @click="taskadd">+</button>
          </div>
          <div class="task_body_load">
            <div class="task_body_load-title">
              <p>任务列表</p>
            </div>
            <div class="task_body_scroll" :class="[isload?'showmore':'normal']">
              <transition-group name="slide">
                <div class="task_item" v-for="(item,index) in task" :key="index">
                  <h5>{{item.task}}</h5>
                  <span>{{item.date}}</span>
                </div>
              </transition-group>
            </div>
            <div class="task_footer">
              <button class="load_more" @click="load">加载更多</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs12 col-sm12 col-md6 col-lg6">
        <div class="task_list_card">
          <div class="task_list_title_02">
            <div class="bg_overlay">
              <h3>
                <i class="calendar fa fa-twitch" aria-hidden="true"></i>
                2020-10-01
              </h3>
            </div>
            <button class="add">+</button>
          </div>
          <div class="task_body_load">
            <div class="task_body_load-title">
              <p>你有两条新信息待查看</p>
            </div>
            <div class="task_body_scroll">
              <div class="task_item" v-for="item in msg" @click="check_msg($event,item.id)" :data-id="item.id">
                <div class="msg_inner">
                  <div class="msg_wrap">
                    <div class="msg_pic">
                      <img :src="item.pic">
                    </div>
                    <div class="msg_scri">
                      <h5>{{item.name}}</h5>
                      <span>{{item.title}}</span>
                    </div>
                  </div>
                  <div class="msg_time">
                    <span>{{item.time}}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="task_footer">
              <button class="load_more">加载更多</button>
            </div>
            <transition-group name="slide_form_right">
              <chat-msg v-show="check" :key="'chat'" @hide="hidechat" :msglist="msg"></chat-msg>
            </transition-group>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs12 col-sm12 col-md8 col-lg8">
        <div class="table count">
          <div class="tablerow">
            <div class="cell head">下单日期</div>
            <div class="cell head">订单号</div>
            <div class="cell head">商品</div>
            <div class="cell head">姓名</div>
            <div class="cell head">价格</div>
            <div class="cell head">数量</div>
            <div class="cell head">总价</div>
          </div>
          <div class="contentbody count">
            <div class="tablerow" v-for="item in orderlist" :key="item.ordernum">
              <div class="cell content">{{item.date}}</div>
              <div class="cell">{{item.ordernum}}</div>
              <div class="cell">{{item.good}}</div>
              <div class="cell">{{item.buyer}}</div>
              <div class="cell">{{item.singleprice}}</div>
              <div class="cell">{{item.count}}</div>
              <div class="cell">{{item.totalprice}}</div>
            </div>
          </div>
        </div>

      </div>
      <div class="col-xs12 col-sm12 col-md4 col-lg4">
        <div class="table sellarea">
          <div class="tablerow">
            <div class="cell">地区</div>
            <div class="cell">总销量</div>
          </div>
          <div class="contentbody area">
            <div class="tablerow">
              <div class="cell">北京</div>
              <div class="cell">892622</div>
            </div>
            <div class="tablerow">
              <div class="cell">上海</div>
              <div class="cell">544455</div>
            </div>
            <div class="tablerow">
              <div class="cell">广州</div>
              <div class="cell">546587</div>
            </div>
            <div class="tablerow">
              <div class="cell">深圳</div>
              <div class="cell">85258</div>
            </div>
            <div class="tablerow">
              <div class="cell">天津</div>
              <div class="cell">889989</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <task-add v-if="show" @show="close" :show="show" @submit="update" :chatid="chatid" ref="chat"></task-add>
  </div>
</template>

<script>
  import { remove } from '@/assets/js/util'
  import TaskAdd from '@/components/TaskAdd'
  import ChatMsg from '@/components/ChatMsg'

  export default {
    name: 'Home',
    components: {
      ChatMsg,
      TaskAdd
    },
    props: {
    },
    data () {
      return {
        show: false,
        isload: false,
        arr: [10, 89, 90, 86, 10, 89],
        chatid:'',
        check: false,
        orderlist: [
          {
            'date': '2020-08-05',
            'ordernum': '100398',
            'good': 'iPhone X 64Gb Grey',
            'buyer': '黄世祺',
            'singleprice': '4499',
            'count': '1',
            'totalprice': '4499',
          },
          {
            'date': '2020-07-09',
            'ordernum': '100899',
            'good': 'Samsung Galaxy S10',
            'buyer': 'unknown',
            'singleprice': '5999',
            'count': '1',
            'totalprice': '5999',
          },
          {
            'date': '2019-06-26',
            'ordernum': '189616',
            'good': '港风男士短袖',
            'buyer': '小李',
            'singleprice': '56',
            'count': '1',
            'totalprice': '56',
          },
          {
            'date': '2020-05-24',
            'ordernum': '155506',
            'good': '纯甄牛奶',
            'buyer': '郑玉森',
            'singleprice': '24',
            'count': '1',
            'totalprice': '24',
          },
          {
            'date': '2020-03-05',
            'ordernum': '155589',
            'good': '家用电风扇',
            'buyer': '系统测试',
            'singleprice': '98',
            'count': '1',
            'totalprice': '98',
          },
        ],
        task: [
          {
            task: '学习es6',
            date: '2020-10-01'
          },
          {
            task: '深入了解vue源码原理',
            date: '2020-09-20'
          },
          {
            task: '巩固javascript知识',
            date: '2020-05-04'
          },
          {
            task: 'leaving',
            date: '2020-xx-xx-xx'
          },
        ],
        msg: [
          {
            id:'001',
            pic: require('@/assets/img/avatar-01.jpg'),
            name: '10086',
            title: '月结缴费，你该充值了',
            time: '11:02 am'
          },
          {
            id:'002',
            pic: require('@/assets/img/avatar-02.jpg'),
            name: '郑玉森',
            title: '今晚约个饭把',
            time: '18:15 pm'
          },
          {
            id:'003',
            pic: require('@/assets/img/avatar-03.jpg'),
            name: '刘秋宏',
            title: '国庆什么安排呢',
            time: '08:06 am'
          },
          {
            id:'004',
            pic: require('@/assets/img/avatar-04.jpg'),
            name: '龅牙妹',
            title: '今晚哪里见面',
            time: '09:58 am'
          }
        ]
      }
    },
    mounted () {
      remove(this.arr)
    },
    methods: {
      taskadd () {
        this.show = true
      },
      close () {
        this.show = false
      },
      update (obj) {
        this.task.unshift(obj)
      },
      load (e) {
        setTimeout(() => {
          e.target.innerText = '加载中'
          setTimeout(() => {
            e.target.style.display = 'none'
            this.isload = true
          }, 1000)
        }, 200)
      },
      check_msg (e,id) {
        this.chatid = id
        this.check = true
      },
      hidechat(){
        this.check = false
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "assets/css/home.scss";
  @import "assets/css/flex_gird.scss";

  .slide-enter, .slide-leave-to {

  }

  .slide-leave, .slide-enter-to {

  }

  .slide-enter-active {
    animation: slide-in 1s linear;
  }

  .slide-leave-active {
    animation: slide-out 2s linear;
    position: absolute;
  }
  .slide-move {
    transition: all 1s;
  }

  .slide_form_right-enter, .slide_form_right-leave-to {

  }

  .slide_form_right-leave, .slide_form_right-enter-to {

  }

  .slide_form_right-enter-active {
    animation: slide-left .5s linear;
  }

  .slide_from_right-leave-active {
    animation: slide-right .5s linear;
    position: absolute;
  }
  .slide_from_right-move{
    transition: all 1s;
  }

  @keyframes slide-in {
    from {
      transform: translateY(50px)
    }
    to {
      transform: translateY(0)
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0)
    }
    to {
      transform: translateY(50px)
    }
  }

  @keyframes slide-left {
    from {
      transform: translateX(200px)
    }
    to {
      transform: translateX(0)
    }
  }

  @keyframes slide-right {
    from {
      transform: translateX(0)
    }
    to {
      transform: translateX(200px)
    }
  }
</style>
