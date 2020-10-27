<template>
  <div class="contanier">

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
            es6高阶操作-filter：callback在这里担任的是过滤器的角色，当元素符合条件，过滤器就返回true，而filter则会返回所有符合过滤条件的元素
            <h2>数组:{{arr5}}</h2>
            <h2>返回数值小于80的值的处理后数组:{{filter}}</h2>
          </div>
        </div>
      </div>
      <div class="col-xs12 col-sm3 col-md3 col-lg3">
        <div class="card">
          <div class="content">
            es6高阶操作-map：遍历数组，并通过callback对数组元素进行操作，并将所有操作结果放入数组中并返回该数组
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
              <li id="aa">a</li>
              <li id="bb">b</li>
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
          <div class="content">
            <ul class="clicktest">
              <li class="item">1</li>
              <li class="item">2</li>
              <li class="item">3</li>
              <li class="item">4</li>
              <li class="item">5</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-xs12 col-sm3 col-md3 col-lg3">
        <div class="card">
          <div class="content">
            <label>请输入需要添加的购物商品</label>
            <input type="text" name="item" id="item" v-model="item">
            <button @click="additem">添加</button>
            <ul>
              <li v-for="(item,index) in itemlist" :key="index">{{item.name}}
                <button @click="removeitem(index)">删除</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>


  export default {
    name: 'ProcessDesign',
    components: {},
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
        imgshow: false,
        src: '',
        specialarr: [5, 2, 6, 6, 3, 4, 2, 5, '', 55, 2, '', ''],
        itemlist: [],
        item: ''
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
      round () {
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
      position (e) {
        return [e.clientX, e.clientY]
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
          //这里指向img对象,否则this任然指向的是vue实例。apply接收的是数组,不应该使用箭头函数,即使是call也无法改变this的指向
          callback.call(img)
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
        let ck = document.cookie.replace(/[ ]/, '')//去空操作
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
        console.log(obj.clientHeight)//网页可见内容高度+paddingtop+paddingbottom
        console.log(obj.offsetTop)//指的距离最近一个定位为position元素的距离，没有就以body为参照
        console.log(obj.scrollHeight)//内容高度+paddingtop+paddingbuttom+borderwidth
        console.log(obj.scrollTop)//指的是容器滚动条滚动距离,如果没有恒等于scroll
        console.log(obj.clientTop)//这里的clienttop指的是容器内部相对于容器本身的top偏移，实际就是 上border-width
        console.log(obj.offsetParent)
        console.log(obj.parentNode)
        console.log(obj.nextSibling)
        console.log(obj.previousSibling)
        let c = document.getElementById('a')
        for (let i = 0; i < this.arr1.length; i++) {
          let el = document.createElement('li')
          el.innerHTML = this.arr1[i]
          c.appendChild(el)
        }
        //这里返回标签的attr个数
        document.getElementById('attr').innerText += document.getElementById('a').attributes.length
        c.removeChild(c.childNodes[0])

      },
      imgview ($event) {
        let src = $event.target.src
        //直接用封装的图片预览插件进行查看
        this.$imgview.resizeimg(src, true)//第一个参数是图片地址,true代表是显示预览,
      },
      hide () {
        this.imgshow = false
      },
      move (e) {
        console.log(e.targetTouches[0].clientX)
        //targettouches在pc端无效
      },
      operationarr (arr) {
        for (let i = 0; i < arr.length; i++) {
          for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] || arr[j] === '') {
              arr.splice(j, 1)
              j--
            }
          }
        }
      },
      jd () {
        this.$axios({
          methods: 'GET',
          url: '/https://wq.jd.com/user_new/info/GetJDUserInfoUnion',
          // headers: {
          //   'Referer': 'https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&',  //源域名
          //   'Host': 'wq.jd.com'
          // },
          params: {
            'orgFlag': 'JD_PinGou_New',
            'callSource': 'mainorder',
            'channel': '4',
            'isHomewhite': '',
            'sceneval': '2',
            '_': new Date().getTime(),
            'sceneval': '2',
            'g_login_type': '4',
            'callback': 'GetJDUserInfoUnion',
            'g_ty': 'ls'
          }
        }).then(resp => {
          console.log(resp.data)
        }).catch(error => {
          console.log(error)
        })
      },
      additem () {
        if (this.item === '') {
          //this.$msg.showmsg('请输入内容',0,1000)
          this.$msg.showmsg('请输入内容', 0, 1000)//这里是
        } else {
          this.itemlist.push({
            name: this.item
          })
          this.item = ''
          this.$msg.showmsg('添加成功', 1, 1000)
        }

      },
      removeitem (index) {

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
      // for (let i = 0; i < ck.length; i++) {
      //   this.setval(ck[i]['name'], ck[i]['val'], -1)
      // }
      this.operationarr(this.specialarr)
    },
    mounted () {
      this.onloadimg(require('@/assets/img/avatar-01.jpg'), function () {
        //这里不要使用箭头函数，即使使用call也改变不了this的指向，还是会指向当前上下文,既是vue当前实例
      })
      //扩展原型链
      //现在目的是对foo进行原型链进行扩展
      function Foo () {
      }

      Foo.prototype = {
        foo_prop: 'foo val'
      }//{foo_prop:'foo val',_prop:{}}
      function Bar () {
      }

      let prop = new Foo()//这里可以用Object.create()方法来创建一个没有原型的对象
      let prop2 = Object.create(Foo.prototype)//这个容易造成性能黑洞
      prop.bar_prop = 'bar val'//{bar_prop:'bar val',_prop:{foo_prop:'foo val',_prop:{}}
      prop2.bar_prop = 'bar val'
      Bar.prototype = prop//{_prop_:{bar_prop:'bar val',_prop:{foo_prop:'foo val',_prop:{}}}
      let init = new Bar()
      //最后得原型应该是
      //{_prop_:{bar_prop:'bar val',_prop:{foo_prop:'foo val',_prop:{}}}
      //console.log(init)
      let ck = {
        '__jda': '122270672.1600780380960653051889.1600780380.1600780380.1600780380.1',
        'pt_key': 'AAJfafiuADD4WtI6zQ4CKoUTnUlWsoIaNe7gFZjx2M33lxq0RTI2sNpoOy7JDhM31QKMVZR0rOc',
        '__jdv': '122270672%7Cdirect%7C-%7Cnone%7C-%7C1600780380961',
        'jcap_dvzw_fp': '3a08f9f8f7b152264ea8108cb50133c3$860443985204',
        'mba_muid': '1600780380960653051889',
        'shshshsID': '06ca9f4fb89c7833f16fcc1951ccc2c8_1_1600780381590',
        '__jdc': '122270672',
        'shshshfp': 'f14f1872700eac4ae3583a2e0281436f',
        'shshshfpa': '4046a23f-56f1-27c2-d963-c275bc4ee21d-1600780381',
        'retina': '1',
        'TrackerID': 'wno4alP2Yg_vytLqrgRCpdq9A5-dmQDJRmkMnYYcfXV-hxSXW-0YOGLtpTY36Z5AvhDXo0Yzub9ZrrvmuS6PbTM359RAysjXNWNXGeJaDbMCfV2_5P_xvJfxe32BfLrkBac7tD9H6ckfv9l5MjMk_g',
        'shshshfpb': 'eEZ7tUApJdJuMw5wi5QoKcw%3D%3D',
        'pt_pin': 'jd_541972da5c901',
        'pt_token': 'lvtroab1',
        'wxa_level': '1',
        'pwdt_id': 'jd_541972da5c901',
        'whwswswws': '',
        'cid': '3',
        'wqmnx1': 'MDEyNjM1MGg6am1vYSB1bmQ7dUIvOHBlLzNIICBvciViU2kuNGY3bjI0MllPT1UhSCU%3D',
        'jxsid': '16007804709866084693',
        'webp': '1',
        '__jdb': '122270672.2.1600780380960653051889|1.1600780380',
        'mba_sid': '16007803809638259274966752783.2',
        'autoOpenApp_downCloseDate_auto': '1600780479762_21600000',
        'visitkey': '42096968933701823',
        '__jd_ref_cls': 'MHome_BfloorExpo'
      }
      let cookies = ''
      //构建所需格式cookies
      Object.keys(ck).forEach((key) => {
        let name = ck[key]
        cookies += key + '=' + name + ';'
        this.setval(key, name, -1)
      })

      function person (name, gender, interests) {
        this.name = name
        this.gender = gender
        this.interests = interests
      }

      person.prototype.greeting = function () {
        alert('Hi' + this.name)
      }

      function Teacher (name, gender, interests, job) {
        person.call(this, name, gender, interests)
        this.job = job
      }

      let tc = new Teacher('huangshiqi', 'male', 'runing', 'student')
      //这里原意是想点击第几项就显示第几项的下标，但是因为var的缺陷，没有作用域的原因。指向的永远是最后一个对象，用闭包解决
      var obj = document.querySelectorAll('.item')
      for (var i = 0; i < obj.length; i++) {
        ;(function (j) {
          obj[j].addEventListener('click', function () {
            alert(j)
          })
        })(i)//(function(){})是匿名函数,由于没有定义名称所以会立即进行调用，如果需要传参就写成(function(){}())或者(function(){}()),()表明调用这个匿名函数,所以需要传参的时候,在()那里写即可
      }

      function imgload () {
        return new Promise((resolve, reject) => {
          let xhr = new XMLHttpRequest()
          xhr.open('GET', require('@/assets/img/avatar-01.jpg'))
          xhr.responseType = 'blob'
          xhr.onload = function () {
            if (xhr.status === 200) {
              resolve(xhr.response)
            } else {
              reject(xhr.response.text)
            }
          }
          xhr.onerror = function () {
            reject('sorry,imgload faile')
          }
          xhr.send()
        })
      }

      imgload()
      //label用法
      let num = 0
      outPoint:
        for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 10; j++) {
            if (i === 5 && j === 5) {
              continue outPoint//当i,j都等于5的时候,跳出循环,回到outpoint下面
            }
            num++
          }
        }
      //for of 不能用于object
      // function foo (i) {
      //   if (i < 0) return
      //   console.log(i)
      //   foo(i - 1)//后进先出原则,所以是先执行完3210时候，之前进入的3210，将从0123按后进先出
      //   console.log(i)
      // }
      // foo(3)
      function addsquare (a, b) {
        function square (x) {
          return x * x
        }

        return square(a) + square(b)
      }

      console.log(addsquare(2, 3))

      function creatsex (name) {
        return (function (n) {
          var sex = ''
          return {
            setName: function (newname) {
              n = newname
            },
            getName: function () {
              return n
            },
            getSex: function () {

              return sex
            },
            setSex: function (newsex) {
              if (typeof newsex === 'string' && newsex.toLowerCase() === 'male' || newsex.toLowerCase() === 'female') {
                sex = newsex
              }
            }
          }
        }(name))

      }

      let p = creatsex('huangshiqi')
      p.setSex('male')
      console.log(p.getSex())
      ;(function (a, b, c) {
        arguments[0] = 'hello'
      })(1, 2, 3, 4)
      let a = [
        'huangshiqi',
        'huangxiaowu'
      ]
      let arr = new Array('a', 'b', 'c', 'd')
      console.log(0 in arr)
      let today = new Date()
      let endyear = new Date(1995, 11, 31, 23, 59, 59, 999)
      endyear.setFullYear(today.getFullYear())//先获取所在年份,再设置年份
      let msperday = 24 * 60 * 60 * 1000//这里是每一天的毫秒数
      let daysleft = (endyear.getTime() - today.getTime()) / msperday//利用年底减去今天获得的总毫秒数除以每天毫秒数再向下取整
      //alert('2020年还剩'+Math.floor(daysleft)+'天')//这里就是今天距离本年所剩天数
      let str = '去除我的前后空格'
      console.log(str.slice(2))
      let sy = Symbol(42)//这里创建唯一的值
      console.log(sy === 42)//
      let m = new Map()
      m.set('huangshiqi', '24')
      m.set('huangyongsheng', '22')
      m.set('daihsuaihu', '26')

      function people () {
        this.name = 'huangshiqi'
      }

      people.prototype = {
        constructor: people,
        job: 'student'
      }
      let pe = new people()
      Object.defineProperty(pe, 'sex', {
        value: 'male'
      })
      console.log(pe)
      // for(let i in pe){
      //   console.log('pe.'+i+'='+pe[i])
      // }
      //Object.keys(pe)
      let set = new Set(this.specialarr.slice())//这他妈，这么简便去重。实在牛皮
      let unique = Array.from(set)//将对象转换为数组,es6新增的Array静态方法
      let test = new Set()
      test.add('value')

      //类的构建与继承
      function Employee () {
        this.name = ''
        this.dept = 'general'
      }

      function Manager () {
        Employee.call(this)
        this.report = []
      }

      Manager.prototype = Object.create(Employee.prototype)

      function Workbee () {
        Employee.call(this)
        this.project = []
      }

      Workbee.prototype = Object.create(Employee.prototype)

      function Saleman () {
        Workbee.call(this)
        this.dept = 'sale'
        this.machine = ''
      }

      Saleman.prototype = Object.create(Workbee.prototype)
      let s = new Saleman
      console.log(s.dept)

      function Engineer () {
        Workbee.call(this)
        this.dept = 'engineering'
        this.machine = ''
      }

      Engineer.prototype = Object.create(Workbee.prototype)
      // new Promise((resolve, reject) => {
      //   console.log('出现了问题')
      //   resolve()
      // }).then(() => {
      //   console.log('执行了我')
      //   throw new Error('哪里出现了问题')
      //
      // }).catch(() => {
      //   console.log('出现了问题')
      // })
      //链式调用
      function A (num) {
        this.value = num || ''
      }

      A.prototype.add = function (a) {
        this.value += a//
        return this
      }
      A.prototype.reduce = function (a) {
        this.value -= a
        return this
      }
      A.prototype.valueOf = function () {
        return this.value
      }
      A.prototype.stringof = function () {
        return this.value + ''
      }
      let t = new A(2)
      console.log(t.add(1).reduce(2).valueOf())//最后实现链式调用
      //转发代理，轻松验证一个对象值得合法性
      // const viladator = {
      //   set:function (obj,prop,value) {
      //     if(prop ==='age'){
      //       if(!Number.isInteger(value)){
      //         throw new TypeError('the age is not an integer')
      //       }
      //       if(value > 200){
      //         throw new RangeError('the age seem invail')
      //       }
      //     }
      //     obj[prop] = value
      //     return true
      //   }
      // }
      // const one = new Proxy({},viladator)
      // one.age = 300
      // console.log(one)
      // let testarr = [2,2,3,22,2,4]
      // function dery (arr) {
      //   let obj = {}
      //   return arr.filter(item => obj.hasOwnProperty(typeof item + item) ? false : obj[typeof item + item]=true)
      // }
      // console.log(dery(testarr))
      // let view = {
      //   select: null
      // }
      // const changeattr = {
      //   get: function () {
      //
      //   },
      //   set: function (obj, prop, newval) {
      //     let oldval = obj[prop]
      //     if (prop === 'select') {
      //       if (oldval) {
      //         oldval.setAttribute('aria-attribute', 'false')
      //       }
      //       if (newval) {
      //         newval.setAttribute('aria-attribute', 'true')
      //       }
      //     }
      //     obj[prop] = newval
      //     return true
      //   }
      // }
      // let proxy = new Proxy(view, changeattr)
      // proxy.select = document.getElementById('aa')
      // proxy.select = document.getElementById('bb')
      let products = [
        {
          name: 'firefox',
          type: 'browser'
        },
        {
          name: 'chrome',
          type: 'browser'
        },
        {
          name: 'Thunderbird',
          type: 'mailer'
        }
      ]
      const msg = {
        get: function (obj, prop) {
          if (prop in obj) {
            return obj[prop]
          }
          //获取长度number，意思就是数组长度啦
          if (prop === 'number') {
            return obj.length
          }
          let result, types = {}
          //这样类似Object.defineProperties得作用
          for (let product of obj) {
            if (product.name === prop) {
              result = product
            }
            if (types[product.type]) {
              types[product.type].push(product)//归为一类
            } else {
              types[product.type] = [product]//如果没有该类,直接创建/
            }
          }
          if (result) {
            return result
          }
          if (prop in types) {
            return types[prop]
          }
          if (prop === 'types') {
            return Object.keys(types)
          }
          return undefined
        }
      }
      let product = new Proxy(products, msg)
      console.log(product['firefox'])
      console.log(product.types)
      let local = [
        {
          name: 'huangshiqi'
        },
        {
          name2: 'huangjinfa'
        },
        {
          name3: 'zhenyusen'
        }
      ]
      for (let i of local) {
        Object.keys(i).forEach((key) => {
          localStorage.setItem(key, i[key])
        })
      }

      class T {
        constructor (name, job) {
          this.name = name
          this.job = job
          this.printname = this.printname.bind(this)
        }

        getname () {
          return this.name
        }

        getjob () {

        }

        print (text) {
          console.log(text)
        }

        printname (name = 'test') {
          this.print('hello' + name)
        }
      }

      //let tea = new T('huangshiqi')
      let xh = {
        name: 'huangshiqi',
        gender: '男',
        age: '24',
        say: function () {
          console.log(this.name + ',' + this.gender + ',' + this.age)
        }
      }
      let xw = {
        name: 'other',
        gender: '女',
        age: '26'
      }
      xh.say.bind(xw)()//bind返回的是一个函数调用,不加()将不会进行返回函数进行调用
      let charsinbody = (function counter (elem) {
        if (elem.nodeType === 3) {
          return elem.nodeValue.length
        }
        let count = 0
        for (let i = 0; i < elem.childNodes.length; i++) {
          let child = elem.childNodes[i]
          count += counter(child)
        }
        return count
      })(document.body)
      console.log(charsinbody)
      let obj1 = {
        A: 'B',
        X: 'Y'
      }
      obj1['A'] = 'X'
      obj1['B'] = 'Y'
      delete obj1['X']
      console.log(obj1)
    }
  }
</script>

<style scoped lang="scss">
  @import "assets/css/flex_gird.scss";

  .contanier {
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

  .content {
    .clicktest {
      text-decoration: none;
      list-style: none;

      li {
        float: left;
        padding: 10px;
        cursor: pointer;
      }
    }
  }


</style>
