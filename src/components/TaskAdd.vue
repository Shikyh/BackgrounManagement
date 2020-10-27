<template>
  <div class="task_add_bg">
    <div class="card" :class="{active:show}">
      <span id="cancel" @click="cancel">X</span>
      <div class="title">
        <span>请输入任务安排相关信息</span>
      </div>
      <div class="contanier">
        <div class="row">
          <div class="col-xs12 col-sm12 col-md12 col-lg12">
            <div class="fill">
              <textarea placeholder="请输入任务名称" class="input_area" v-model="task"
                        :class="{tast_empty: task_empty}"></textarea>
              <label class="scri-label">请输入任务名称</label>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs12 col-sm12 col-md12 col-lg12">
            <el-date-picker
              v-model="date"
              align="right"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions" value-format="yyyy-MM-dd" :class="date_empty">
            </el-date-picker>
          </div>
        </div>
      </div>
      <button id="submit" @click="submit">确认</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TaskAdd',
    props: {
      show: {
        type: Boolean,
        default () {
          return false
        }
      }
    },
    data () {
      return {
        task: '',
        date: '',
        task_empty: false,
        date_empty: false,
        pickerOptions: {}
      }
    },

    methods: {
      cancel () {
        this.$emit('show')
      },
      submit () {
        const obj = {}
        if (this.task === '') {
          this.task_empty = true
          this.$msg.showmsg('请输入任务名称', 0, 1000)
        } else {
          this.task_empty = false
        }
        if (this.date === '') {
          this.$msg.showmsg('日期不能为空', 0, 1000)
        }
        if (this.date !== '' && this.task !== '') {
          this.$msg.showmsg('添加成功', 1, 1000)
          obj.task = this.task
          obj.date = this.date
          this.$emit('submit', obj)
          this.$emit('show')
        }

      }
    },
    watch: {
      task: {
        handler: function (n, o) {
          if (n !== '') {
            this.task_empty = false
          }
        }
      }
    }

  }
</script>

<style scoped lang="scss">
  @import "assets/css/flex_gird.scss";

  #cancel {
    position: absolute;
    font-size: 20px;
    top: 5px;
    right: 10px;
    cursor: pointer;
  }

  .task_add_bg {
    width: 100%;
    height: 100%;
    position: absolute;
    box-sizing: border-box;
    top: 0;
    left: 0;
    background: rgba(6, 5, 5, 0.8);
    z-index: 999;
    transition: .3s;
    -webkit-font-smoothing: antialiased;
  }

  .card {
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    overflow: hidden;
    border-radius: 10px;
    width: 500px;
    min-height: 400px;
    height: auto;
  }

  .title {
    text-align: center;
    padding: 20px 0px;
    border-bottom: 1px solid #F7F7F7;
    font-family: normal normal normal 14px/1 'Material-Design-Iconic-Font';
  }

  .input_area {
    width: 100%;
    height: 100px;
    border: 1px solid #d9d9d9;
    outline: none;
    padding: 10px;
    resize: none;
  }

  .input_area:focus, .input:focus {
    outline: none !important;
    border-color: hsl(199, 98%, 48%);
  }

  .input_area:placeholder-shown::placeholder {
    color: transparent;
  }

  .fill {
    position: relative;
    margin-top: 20px;
  }

  .input {
    outline: none;
    width: 100%;
    height: 40px;
    border: 1px solid #d9d9d9;
    padding: 10px;
  }

  .input:placeholder-shown::placeholder {
    color: transparent;
  }

  .input:not(:placeholder-shown) ~ .scri-label, .input:focus ~ .scri-label {
    transform: scale(0.9) translate(0, -35px);
    transition: 0.4s ease;
    background: #fff;
    color: hsl(199, 98%, 48%);
  }

  .scri-label {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    pointer-events: none;
    z-index: 2;
    color: #A2A9B6;
    font-size: 18px;
  }

  .input_area:not(:placeholder-shown) ~ .scri-label,
  .input_area:focus ~ .scri-label {
    transform: scale(0.9) translate(0, -75px);
    transition: 0.4s ease;
    background: #fff;
    color: hsl(199, 98%, 48%);
  }

  .active {
    -webkit-animation: fadeIn 0.4s ease;
    animation: fadeIn 0.4s ease;
  }

  #submit {
    position: absolute;
    right: 10px;
    bottom: 10px;
    text-align: center;
    color: #fff;
    height: 30px;
    width: 80px;
    line-height: 30px;
    background: #507DDF;
    border: none;
    border-radius: 3px;
    margin-left: 5px;
  }

  .tast_empty {
    border: 1px solid red;
  }

  @media screen and (max-width: 768px) {
    .task_add_bg {
      padding: 20px;
    }
    .card {
      width: 90%;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, 0%);
      transform: translate(-50%, 0%)
    }
    to {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%)
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0
    }
    to {
      opacity: 1
    }
  }

  @-webkit-keyframes fadeOut {
    0% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%)
    }
    to {
      opacity: 0;
      -webkit-transform: translate(-50%, 0%);
      transform: translate(-50%, 0%)
    }
  }

  @keyframes fadeout {
    0% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%)
    }
    to {
      opacity: 0;
      -webkit-transform: translate(-50%, 0%);
      transform: translate(-50%, 0%)
    }
  }
</style>
