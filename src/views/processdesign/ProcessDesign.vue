<template>
  <div class="contanier" @touchmove="move">
    <div class="row">
      <div class="col-xs12 col-sm3 col-md3 col-lg3">
        <div class="card">
          <div class="content">
            数组操作-concat：链接两或更多得数据
            <h2>数组1:{{arr1}}</h2>
            <h2>数组2:{{arr2}}</h2>
            <h2>处理后数组:{{concat}}</h2>
          </div>
        </div>
      </div>
      <div class="col-xs12 col-sm3 col-md3 col-lg3">
        <div class="card">
          <div class="content">
            数组操作-join：通过指定字符进行切割进行组合链接
            <h2>数组:{{arr1}}</h2>
            <h2></h2>
            <h2>处理后数组:{{join}}</h2>
          </div>
        </div>
      </div>
      <div class="col-xs12 col-sm3 col-md3 col-lg3">
        <div class="card">
          <div class="content">
            数组操作-pop：删除数组最后一个对象,返回删除得对象。会对原数组进行直接修改
            <h2>数组:{{arr1}}</h2>
            <h2></h2>
            <h2>处理后数组:{{pop}}</h2>
          </div>
        </div>
      </div>
      <div class="col-xs12 col-sm3 col-md3 col-lg3">
        <div class="card">
          <div class="content">
            数组操作-reverse：颠倒数组顺序
            <h2>数组:{{arr1}}</h2>
            <h2>处理后数组:{{reverse}}</h2>
          </div>
        </div>
      </div>
      <div class="col-xs12 col-sm3 col-md3 col-lg3">
        <div class="card">
          <div class="content">
            数组操作-shift：删除第一个元素，返回第一个元素。跟pop操作相反
            <h2>数组:{{arr1}}</h2>
            <h2>处理后数组:{{shift}}</h2>
          </div>
        </div>
      </div>
      <div class="col-xs12 col-sm3 col-md3 col-lg3">
        <div class="card">
          <div class="content">
            数组操作-sort：数组排序，接收的是一个函数
            <h2>数组:{{arr1}}</h2>
            <h2>处理后数组:{{sort}}</h2>
          </div>
        </div>
      </div>
      <div class="col-xs12 col-sm3 col-md3 col-lg3">
        <div class="card">
          <div class="content">
            数组操作-splice：数组元素删除，替换
            <h2>数组:{{arr3}}</h2>
            <h2>处理后数组:{{splice}}</h2>
          </div>
        </div>
      </div>
      <div class="col-xs12 col-sm3 col-md3 col-lg3">
        <div class="card">
          <div class="content">
            数组操作-unshift：在数组开始开始位置插入。该方法ie浏览器不适用
            <h2>数组:{{arr3}}</h2>
            <h2>处理后数组:{{unshfit}}</h2>
          </div>
        </div>
      </div>
      <div class="col-xs12 col-sm3 col-md3 col-lg3">
        <div class="card">
          <div class="content">
            es6高阶操作-filter：定义一个函数，返回指定规则的数据。当满足条件的数据会存放到一个新数组进行返回
            <h2>数组:{{arr5}}</h2>
            <h2>返回数值小于80的值的处理后数组:{{filter}}</h2>
          </div>
        </div>
      </div>
      <div class="col-xs12 col-sm3 col-md3 col-lg3">
        <div class="card">
          <div class="content">
            es6高阶操作-map：定义一个函数，返回指定规则的数据结果。按照条件进行数据处理存到一个新数组然后返回新数组
            <h2>数组:{{arr5}}</h2>
            <h2>返回每个数值乘2处理后数组:{{map}}</h2>
          </div>
        </div>
      </div>
      <div class="col-xs12 col-sm3 col-md3 col-lg3">
        <div class="card">
          <div class="content">
            es6高阶操作-reduce：相当于汇总那味,使用fun(上一次结果:初始值为第一个元素,元素对象)
            <h2>数组:{{arr5}}</h2>
            <h2>规则-先将数组小于100的值过滤再自身乘2最后计算总和:{{reduce}}</h2>
          </div>
        </div>
      </div>
      <div class="col-xs12 col-sm3 col-md3 col-lg3">
        <div class="card">
          <div class="content">
            onabord用法
            <img src="~assets/img/bg-title-01.jpg" @click="imgview($event)" style="width: 100%;height: auto">
            <img src="~assets/img/bg-title-02.jpg" @click="imgview($event)" style="width: 100%;height: auto">
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs12 col-sm3 col-md3 col-lg3">
        <div class="card">
          <div class="content">
            ceil:向上取整最大的相近整数
            <h2>原数据:6.1</h2>
            <h2>{{ceil}}</h2>
          </div>
        </div>
      </div>
      <div class="col-xs12 col-sm3 col-md3 col-lg3">
        <div class="card">
          <div class="content">
            floor:向下取整相近的整数
            <h2>原数据:-5.1</h2>
            <h2>{{floor}}</h2>
          </div>
          <div class="content">
            round:四舍五入取相近整数
            <h2>原数据:-5.1</h2>
            <h2>{{round}}</h2>
          </div>
        </div>
      </div>
      <div class="col-xs12 col-sm3 col-md3 col-lg3">
        <div class="card">
          <div class="content">
            综合操作,从数组中随机取出一个数
            <h2>候选数组:{{arr1}}</h2>
            <h2>{{random}}</h2>
          </div>
        </div>
      </div>
      <div class="col-xs12 col-sm3 col-md3 col-lg3">
        <div class="card">
          <div class="content">
            replace用法
            <h2>原数据:learning</h2>
            <h2>{{replace}}</h2>
          </div>
        </div>
      </div>
      <div class="col-xs12 col-sm3 col-md3 col-lg3">
        <div class="card">
          <div class="content">
            dom操作:onkeydown,onkeypress，onmousemove
            <h2>现在实现文字字数限制输入</h2>
            <input v-model="text" @keyup="wordlimit">
            <label>{{curr}}/20</label>
          </div>
        </div>
      </div>
      <div class="col-xs12 col-sm3 col-md3 col-lg3">
        <div class="card">
          <div class="content" id="getheight">
            当前设备信息
            <label>{{'设备宽高'+deviinfo[0]+'*'+deviinfo[1]}}</label>
          </div>
          <div class="content">
            <ul id="a">
              <li>a</li>
              <li>b</li>
            </ul>
            <ul id="b">
              <li>c</li>
              <li>d</li>
            </ul>
            <label id="attr">当前拥有属性</label>
            <button @click="appendchild">点击将ab逐个移动到cd下面</button>
          </div>
          <div class="content">
            实时显示鼠标的位置
            <label>鼠标位置:{{position[0]}}</label>
          </div>

        </div>
      </div>
    </div>
    <img-viewr v-if="imgshow" :src="src" @hideviewer="hide"></img-viewr>
  </div>

</template>

<script>
  import ImgViewr from '@/components/imgview/ImgViewr'
  export default {
    name: 'ProcessDesign',
    components:{ImgViewr},
    data () {
      return {
        arr1: [5, 2, 6, 1, 3],
        arr2: [4, 10],
        arr3: ['anna', 'judy', 'shiky', 'huangshiqi'],
        arr4: ['anna', 'judy', 'shiky', 'huangshiqi'],
        arr5: [10, 20, 30, 40, 50, 60, 80, 90, 100, 200],
        x: '',
        y: '',
        text: '',
        curr: 0,
        imgshow:false,
        src :''
      }
    },
    computed: {
      deviinfo () {
        return [screen.width, screen.height, screen.availHeight]
      },
      concat () {
        return this.arr1.concat(this.arr2)
      },
      join () {
        return this.arr1.join('-')
      },
      pop () {
        return this.arr1.slice().pop()
      },
      reverse () {
        return this.arr1.slice().reverse()
      },
      shift () {
        return this.arr1.slice().shift()
      },
      sort () {
        return this.arr1.slice().sort((a, b) => a - b)
      },
      splice () {
        //这里输出的是删除的内容
        this.arr3.slice().splice(0, 1)
        return this.arr3.slice().splice(0, 1)
      },
      unshfit () {
        this.arr4.unshift('追加元素')
        return this.arr4
      },
      filter () {
        return this.arr5.filter((n) => n < 80)
      },
      map () {
        return this.arr5.map((n) => n * 2)
      },
      reduce () {
        return this.arr5.filter(n => n < 100).map(n => n * 2).reduce((prev, n) => prev + n)
      },
      ceil () {
        return Math.ceil(6.1)
      },
      floor () {
        return Math.floor(-5.1)
      },
      round(){
        return Math.round(-5.5)
      },
      random () {
        return this.arr1[Math.floor(this.arr1.length * Math.random())]
      },
      replace () {
        let str = 'learning'
        return str.replace(/ing/, 'ed')
      },
      decodeurl () {
        let url = 'https://plogin.m.jd.com/login/login?appid=300&returnurl=https%3A%2F%2Fwqlogin1.jd.com%2Fpassport%2FLoginRedirect%3Fstate%3D1327600815%26returnurl%3D%252F%252Fhome.m.jd.com%252FmyJd%252Fnewhome.action%253Fsceneval%253D2%2526ufc%253D%2526&source=wq_passport'
        return decodeURIComponent(url)
      },
      position(e){
        return [e.clientX,e.clientY]
      }
    },
    methods: {
      ua () {
        let ua = navigator.userAgent
        if (ua.indexOf('Chrome') > -1) {
          return 'chrome'
        }
        if (ua.indexOf('Safari') > -1) {
          return 'Safari'
        }
        if (ua.indexOf('FireFox') > -1) {
          return 'FireFox'
        }
        if (ua.indexOf('compatible') > -1 && ua.indexOf('MSIE') > -1) {
          return 'IE'
        }
        //ie11跟edge浏览器
        if (ua.indexOf('Trident') > -1) {
          return 'IE11'
        }

      },
      re () {
        let str = 'learning'
        console.log(str.replace(/ing/, 'ed'))
      },
      onloadimg (url, callback) {
        let img = new Image()
        img.src = url
        img.onload = function () {
          callback.call(img)//这里重新指向img对象,强制改变this指向vue实例
        }
      },
      keyfunc () {
        document.addEventListener('keydown', function (e) {
          console.log(e.key)//指代键盘代码
        })
      },
      wordlimit () {
        this.curr = this.text.length
        let max = 20
        if (this.curr > max) {
          this.text = this.text.substr(0, max)
          this.curr = max
        }
      },
      setval: (key, val, time) => {
        //这里设置cookies,通过键值对形式设定
        let date = new Date()
        date.setTime(date.getTime() + time * 60 * 60 * 1000)//格式化为识别的格式
        document.cookie = key + '=' + val + ';expires=' + date.toUTCString() + ';' + 'path=/'
      },
      getval: (key) => {
        let ck = document.cookie.replace(/[ ]/, '')
        let cklist = ck.split(';')
        let tip = ''
        for (let i = 0; i < cklist.length; i++) {
          let arr = cklist[i].split('=')
          if (key === arr[0]) {
            tip = arr[1]
            break
          }
        }
        return tip
      },
      clearval: (key, val, time) => {
        let date = new Date()
        date.setTime(date.getTime() + time * 60 * 60 * 1000)
        document.cookie = key + '=' + val + ';expires=' + date.toUTCString() + ';' + 'path=/'
      },
      appendchild () {
        let obj = document.getElementById('getheight')
        console.log(obj.clientHeight)//内容高度+paddingtop+paddingbottom
        console.log(obj.offsetTop)//指的距离最近一个定位为position元素的距离，没有就以body为参照
        console.log(obj.scrollHeight)//内容高度+paddingtop+paddingbuttom+borderwidth
        console.log(obj.scrollTop)//指的是容器滚动条滚动距离,如果没有恒等于scroll
        console.log(obj.clientTop)//这里的clienttop指的是容器内部相对于容器本身的top偏移，实际就是 上border-width
        console.log(obj.offsetParent)
        console.log(obj.parentNode)
        console.log(obj.nextSibling)
        console.log(obj.previousSibling)
        let c = document.getElementById('a')
        for(let i=0;i<this.arr1.length;i++){
          let el = document.createElement('li')
          el.innerHTML = this.arr1[i]
          c.appendChild(el)
        }
        //这里返回标签的attr个数
        document.getElementById('attr').innerText += document.getElementById('a').attributes.length
        c.removeChild(c.childNodes[0])
      },
      imgview($event){
        let src = $event.target.src
        this.imgshow = true
        this.src = src
      },
      hide(){
        this.imgshow = false
      },
      move(e){
        console.log(11)
        console.log(e.targetTouches[0].clientX)
      }

    },
    created () {

      let ck = [{
        name: '3AB9D23F7A4B3C9B',
        val: 'PMWXDEQOPWABZKK33VHASETVLQV7ULYG5SUO23P42VPNIICFTT3S3EORRQ5G3YEUOPXODBQJAGPNSPU7UVYU7KDDNA'
      },
        {
          name: 'jxsid',
          val: '16008233965987392589'
        },
        {
          name: '__jdb',
          val: '122270672.2.16008233596041556295365|1.1600823359'
        },
        {
          name: 'mba_sid',
          val: '16008233596077614078478496900.2'
        },
        {
          name: 'visitkey',
          val: '38503060559536229'
        },
      ]
      for (let i = 0; i < ck.length; i++) {
        this.setval(ck[i]['name'], ck[i]['val'], 1)
      }
    },
    mounted () {
      this.onloadimg(require('@/assets/img/avatar-01.jpg'), function () {
        //这里不要使用箭头函数，即使使用call也改变不了this的指向，还是会指向当前上下文,既是vue当前实例
      })
      window.onbeforeunload = function (e) {
        e = e || window.event
        if(e){
          e.returnValue = '确认关闭窗口吗'
        }
        return '关闭提示'
      }

    }
  }
</script>

<style scoped lang="scss">
  @import "assets/css/flex_gird.scss";
  .contanier{
    background-image: url("~assets/img/bg-title-01.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .card {
    border-radius: 10px;
    background-color: #fff;
    overflow: hidden;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  }

  .content {
    padding: 10px;
  }

  .content h2 {
    white-space: normal;
    word-break: break-all;
  }
</style>
