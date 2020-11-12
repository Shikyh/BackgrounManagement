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
              <chat-msg v-show="check" :key="'chat'" @hide="hidechat" :msglist="msg" :chatid="chatid"></chat-msg>
            </transition-group>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs12 col-sm12 col-md8 col-lg8">
<!--        <div class="table count">-->
<!--          <div class="tablerow">-->
<!--            <div class="cell head">下单日期</div>-->
<!--            <div class="cell head">订单号</div>-->
<!--            <div class="cell head">商品</div>-->
<!--            <div class="cell head">姓名</div>-->
<!--            <div class="cell head">价格</div>-->
<!--            <div class="cell head">数量</div>-->
<!--            <div class="cell head">总价</div>-->
<!--          </div>-->
<!--          <div class="contentbody count">-->
<!--            <div class="tablerow" v-for="item in orderlist" :key="item.ordernum">-->
<!--              <div class="cell content">{{item.date}}</div>-->
<!--              <div class="cell">{{item.ordernum}}</div>-->
<!--              <div class="cell">{{item.good}}</div>-->
<!--              <div class="cell">{{item.buyer}}</div>-->
<!--              <div class="cell">{{item.singleprice}}</div>-->
<!--              <div class="cell">{{item.count}}</div>-->
<!--              <div class="cell">{{item.totalprice}}</div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
        <a-table :columns="col" :data-source="orderlist" class="a-table">
          <a slot="name" slot-scope="text">{{text}}</a>
        </a-table>

      </div>
      <div class="col-xs12 col-sm12 col-md4 col-lg4">

        <div class="table sellarea" id="demo">
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
    <task-add v-if="show" @show="close" :show="show" @submit="update" ref="chat"></task-add>
  </div>
</template>

<script>
  import { remove } from '@/assets/js/util'
  import TaskAdd from '@/components/TaskAdd'
  import ChatMsg from '@/components/ChatMsg'

  const col = [
    {
      title: '下单日期',
      dataIndex: 'orderdate',
      key: 'orderdate'
    },
    {
      title: '订单号',
      dataIndex: 'ordernum',
      key: 'ordernum'
    },
    {
      title: '商品',
      dataIndex: 'good',
      key: 'good'
    },
    {
      title: '价格',
      dataIndex: 'price',
      key: 'price'
    },
    {
      title: '购买用户',
      dataIndex: 'buyer',
      key: 'buyer'
    },
    {
      title: '单价',
      dataIndex: 'singelprice',
      key: 'singelprice'
    },
    {
      title: '数量',
      dataIndex: 'num',
      key: 'num'
    },
    {
      title: '实付',
      dataIndex: 'totalprice',
      key: 'totalprice'
    },
  ]
  export default {
    name: 'Home',
    components: {
      ChatMsg,
      TaskAdd
    },
    props: {},
    data () {
      return {
        col:col,
        show: false,
        isload: false,
        arr: [10, 89, 90, 86, 10, 89],
        chatid: '',
        check: false,
        orderlist: [
          {
            'key':'1',
            'date': '2020-08-05',
            'ordernum': '100398',
            'good': 'iPhone X 64Gb Grey',
            'buyer': '黄世祺',
            'singleprice': '4499',
            'count': '1',
            'totalprice': '4499',
          },
          {
            'key':'2',
            'date': '2020-07-09',
            'ordernum': '100899',
            'good': 'Samsung Galaxy S10',
            'buyer': 'unknown',
            'singleprice': '5999',
            'count': '1',
            'totalprice': '5999',
          },
          {
            'key':'3',
            'date': '2019-06-26',
            'ordernum': '189616',
            'good': '港风男士短袖',
            'buyer': '小李',
            'singleprice': '56',
            'count': '1',
            'totalprice': '56',
          },
          {
            'key':'4',
            'date': '2020-05-24',
            'ordernum': '155506',
            'good': '纯甄牛奶',
            'buyer': '郑玉森',
            'singleprice': '24',
            'count': '1',
            'totalprice': '24',
          },
          {
            'key':'5',
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
            task: '明天项目内测',
            date: '2020-10-01'
          },
          {
            task: '休息',
            date: '2020-09-20'
          },
          {
            task: '开会',
            date: '2020-05-04'
          },
          {
            task: 'leaving',
            date: '2020-xx-xx-xx'
          },
        ],
        msg: [
          {
            id: '001',
            pic: require('@/assets/img/avatar-01.jpg'),
            name: '10086',
            title: '月结缴费，你该充值了',
            time: '11:02 am',
            chat: [
              {
                to: 'me',
                from: 'other',
                msg: '月结缴费，你该充值了',
              },
              {
                to: 'other',
                from: 'me',
                msg: '退订信息',
              },
            ]
          },
          {
            id: '002',
            pic: require('@/assets/img/avatar-02.jpg'),
            name: '郑玉森',
            title: '今晚约个饭把',
            time: '18:15 pm',
            chat: [
              {
                to: 'me',
                from: 'other',
                msg: '今晚约个饭把'
              },
              {
                to: 'other',
                from: 'me',
                msg: '可以啊。'
              },

              {
                to: 'me',
                from: 'other',
                msg: '我爱你'
              },
              {
                to: 'me',
                from: 'other',
                msg: '我想知道的是,你到底对我有没感觉?每次都得不到你的回应，我真得好累'
              },
              {
                to: 'other',
                from: 'me',
                msg: '啊这.怎么突然问这个了...'
              },
              {
                to: 'me',
                from: 'other',
                msg: '回答我,我想知道答案.我等的好辛苦。我已经表白很多次了，这么多年了。你总得给我一个结果吧。好让我死心'
              },
              {
                to: 'other',
                from: 'me',
                msg: '这么多年了。你还不知道我对你的感觉嘛'
              },
              {
                to: 'me',
                from: 'other',
                msg: '我不懂.你知不知道追我的人很多，我都一一拒绝了，只对你心动'
              },
              {
                to: 'other',
                from: 'me',
                msg: '那你听好了,yes.我承认对你动心了,不知何时开始慢慢得我视线焦点落到了你的身上,这种感觉很奇怪,这么多年了,我还是忘记不了你.做梦还会梦到你.梦到我们在一起，很甜蜜。醒来我都觉得胸口好痛。'
              },
              {
                to: 'other',
                from: 'me',
                msg: '我这个人可能比较被动.藏在心里的感觉不敢说出来,对你的好感我一直藏在心底,我也觉得自己好懦弱，爱不敢说出口。'
              },
              {
                to: 'me',
                from: 'other',
                msg: '你知不知道每次我抱你的时候，跟你说我爱你，不要离开我的时候。你一点回应都没有，我都快要放开你的手了。你害劳资等了这么久'
              },
              {
                to: 'other',
                from: 'me',
                msg: '害,我何尝不痛苦呢。喜欢的人就在眼前，我却说不出口。这次我勇敢一次,那你愿意跟我在一起嘛？'
              },
              {
                to: 'me',
                from: 'other',
                msg: '什么。我没有听错吧。哇，我开心到飞起.这次是你追的我哦。那我们现在正式在一起咯，我不想再给你离开我的机会了,这次我得抱住你不放手了'
              },
              {
                to: 'other',
                from: 'me',
                msg: '傻，这次要紧紧抓住我的手咯'
              },
            ]
          },
          {
            id: '003',
            pic: require('@/assets/img/avatar-03.jpg'),
            name: '刘秋宏',
            title: '国庆什么安排呢',
            time: '08:06 am',
            chat: [{
              to: 'me',
              from: 'other',
              msg: '国庆什么时候放假?买好车票了吗'
            },
              {
                to: 'other',
                from: 'me',
                msg: 'enen，买了30号的票'
              },]
          },
          {
            id: '004',
            pic: require('@/assets/img/avatar-04.jpg'),
            name: '龅牙妹',
            title: '好久没联系了我们',
            time: '09:58 am',
            chat: [{
              to: 'me',
              from: 'other',
              msg: '好久没联系了我们'
            },
              {
                to: 'other',
                from: 'me',
                msg: '是啊。想你了。国庆约一波咯，你回湛江嘛'
              }]
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
      check_msg (e, id) {
        this.chatid = id
        this.check = true
      },
      hidechat () {
        this.check = false
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "assets/css/home.scss";
  @import "assets/css/flex_gird.scss";
  @import "~ant-design-vue/dist/antd.css";
  .ant-table-tbody{
    background-color: #fff!important;
  }
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

  .slide_from_right-move {
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
