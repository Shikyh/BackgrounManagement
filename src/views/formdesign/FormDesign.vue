<template>
  <div>
        <canvas id="face" width="200" height="200"></canvas>
        <canvas id="shape" width="200" height="200"></canvas>
        <canvas id="eat" width="200" height="200"></canvas>
        <canvas id="drawboard" width="200" height="200"></canvas>
        <canvas id="imgboard" width="100" height="100"></canvas>
    <canvas id="ball"></canvas>
  </div>
</template>

<script>
  export default {
    name: 'FormDesign',
    methods: {
    },
    mounted () {
      let face = document.getElementById('face')
      let shape = document.getElementById('shape')
      let eat = document.getElementById('eat')
      let path = document.getElementById('drawboard')
      let imgdraw = document.getElementById('imgboard')
      let img = new Image()
      img.src = require('@/assets/img/avatar-01.jpg')
      let drawboard = imgdraw.getContext('2d')
      drawboard.drawImage(img,0,0)
      if(face.getContext){
        let ctxface = face.getContext("2d");
        let ctxshap = shape.getContext('2d')
        let ctxeat = eat.getContext('2d')
        let ctxdrawboard = path.getContext('2d')
        ctxface.beginPath()//开始画线
        ctxface.arc(75,75,50,0,Math.PI*2,true)//中心点x,y,半径，开始角度，结束角度,
        ctxface.moveTo(110,75)//开始画脸
        ctxface.arc(75,75,35,0,Math.PI,false)//逆时针
        ctxface.moveTo(65,65)
        ctxface.arc(60,65,5,0,Math.PI*2,true)
        ctxface.moveTo(95,65)
        ctxface.arc(90,65,5,0,Math.PI*2,true)
        ctxface.stroke();
        for(let i = 0; i < 4; i++){
          for(let j = 0; j < 3; j++){
            ctxshap.beginPath();
            let x = 25 + j * 50; // x 坐标值
            let y = 25 + i * 50; // y 坐标值
            let radius = 20; // 圆弧半径
            let startAngle = 0; // 开始点
            let endAngle = Math.PI + (Math.PI * j) / 2; // 结束点
            let anticlockwise = i % 2 == 0 ? false : true; // 顺时针或逆时针
            ctxshap.arc(x, y, radius, startAngle, endAngle, anticlockwise);
            if (i>1){
              ctxshap.fill();
            } else {
              ctxshap.stroke();
            }
          }
        }
        ctxeat.fillStyle= 'black'//绘制颜色
        ctxeat.beginPath()
        ctxeat.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
        ctxeat.lineTo(31, 37);
        ctxeat.fill();
        //
        for(let i=0;i<6;i++){
          for(let j =0;j<6;j++){
            ctxdrawboard.beginPath()
            ctxdrawboard.fillStyle='rgb('+Math.floor(225-42.5*i)+','+Math.floor(225-42.5*j)+','+'0)'
            ctxdrawboard.fillRect(j*25,i*25,25,25)
          }
        }
      }
      let ball = document.getElementById('ball')
      let ctx = ball.getContext('2d')
      let width = ball.width = window.innerWidth
      let height = ball.height = window.innerHeight -75

      function random (min, max) {
        const num = Math.floor(Math.random() * (max - min)) + min
        return num
      }

// 生成随机颜色值的函数

      function randomColor () {
        const color = 'rgb(' +
          random(0, 255) + ',' +
          random(0, 255) + ',' +
          random(0, 255) + ')'
          return color
      }

// 定义 Ball 构造器
      function Ball (x, y, velX, velY, color, size) {
        this.x = x
        this.y = y
        this.velX = velX
        this.velY = velY
        this.color = color
        this.size = size
      }

// 定义彩球绘制函数

      Ball.prototype.draw = function () {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
        ctx.fill()
      }

// 定义彩球更新函数

      Ball.prototype.update = function () {
        if ((this.x + this.size) >= width) {
          this.velX = -(this.velX)
        }

        if ((this.x - this.size) <= 0) {
          this.velX = -(this.velX)
        }

        if ((this.y + this.size) >= height) {
          this.velY = -(this.velY)
        }

        if ((this.y - this.size) <= 0) {
          this.velY = -(this.velY)
        }

        this.x += this.velX
        this.y += this.velY
      }

// 定义碰撞检测函数

      Ball.prototype.collisionDetect = function () {
        for (let j = 0; j < balls.length; j++) {
          if (this !== balls[j]) {
            const dx = this.x - balls[j].x
            const dy = this.y - balls[j].y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < this.size + balls[j].size) {
              balls[j].color = this.color = randomColor()
            }
          }
        }
      }

// 定义一个数组，生成并保存所有的球

      let balls = []

      while (balls.length < 25) {
        const size = random(10, 20)
        let ball = new Ball(
          // 为避免绘制错误，球至少离画布边缘球本身一倍宽度的距离
          random(0 + size, width - size),
          random(0 + size, height - size),
          random(-7, 7),
          random(-7, 7),
          randomColor(),
          size
        )
        balls.push(ball)
      }

// 定义一个循环来不停地播放

      function loop () {
        ctx.fillStyle = 'rgba(0,0,0,0.25)'
        ctx.fillRect(0, 0, width, height)

        for (let i = 0; i < balls.length; i++) {
          balls[i].draw()
          balls[i].update()
          balls[i].collisionDetect()
        }
        requestAnimationFrame(loop)//显示每一帧
      }

      loop()
      setTimeout(function () {
        //这里利用定时器,当屏幕进行缩放时候,重新获取页面的宽高,重新赋予新的宽高到画布
        window.onresize = function () {
          width = window.innerWidth
          height = window.innerHeight -75
          ball.width = width
          ball.height = height
        }
      }, 200)
      let person = {
        isHuman:false,
        prinIntrodution:function () {
          console.log('My name is'+this.name+';'+'is Human?'+this.isHuman)
        }
      }
      console.log(person)
      let me = Object.create(person)//在原型添加
      console.log(me)
    }
  }
</script>

<style scoped lang="scss">

</style>
