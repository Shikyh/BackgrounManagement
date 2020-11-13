<script src="../../../../../谷歌下载/jd_crypt.js"></script>
<template>
  <div id="content">
    <div class="title">
      全国风控检测平台
    </div>
    <div id="chart" ref="chart"></div>
  </div>
</template>

<script>
  import echart from 'echarts'
  require('echarts/map/js/china')

  export default {
    name: 'Echarts',
    data () {
      return {
       mapdata:[]
      }
    },
    computed: {},
    created(){
      this.getmapdata()
    },
    methods: {
      getmapdata(){
        this.$axios({
          methods: 'GET',
          url:'http://localhost:8088/geo/mapdata',
          params:{}
        }).then((res) =>{
          this.mapdata = res.data
        })
      },
      initchart () {
        let chart = echart.init(document.getElementById('chart'))
        let dataValue = this.mapdata
        let data1 = dataValue.splice(0, 6)
        let option = {
          tooltip: {
            show: false
          },
          geo: {
            map: 'china',
            roam: false,// 一定要关闭拖拽
            zoom: 1.23,
            center: [105, 36], // 调整地图位置
            label: {
              normal: {
                show: false, //关闭省份名展示
                fontSize: '10',
                color: 'rgba(0,0,0,0.7)'
              },
              emphasis: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                areaColor: '#0d0059',
                borderColor: '#389dff',
                borderWidth: 1, //设置外层边框
                shadowBlur: 5,
                shadowOffsetY: 8,
                shadowOffsetX: 0,
                shadowColor: '#01012a'
              },
              emphasis: {
                areaColor: '#184cff',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 5,
                borderWidth: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          },
          series: [
            {
              type: 'map',
              map: 'china',
              roam: false,
              zoom: 1.23,
              center: [105, 36],
              // geoIndex: 1,
              // aspectScale: 0.75, //长宽比
              showLegendSymbol: false, // 存在legend时显示
              label: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: false
                }
              },
              itemStyle: {
                normal: {
                  areaColor: '#0d0059',
                  borderColor: '#389dff',
                  borderWidth: 0.5
                },
                emphasis: {
                  areaColor: '#17008d',
                  shadowOffsetX: 0,
                  shadowOffsetY: 0,
                  shadowBlur: 5,
                  borderWidth: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            },
            {
              name: '',
              type: 'scatter',
              coordinateSystem: 'geo',
              data: dataValue,
              //   symbolSize: function(val) {
              //     return val[2] / 10;
              //   },
              symbol: 'circle',
              symbolSize: 8,
              hoverSymbolSize: 10,
              tooltip: {
                formatter (value) {
                  return value.data.name + '<br/>' + '设备数：' + '22'
                },
                show: true
              },
              encode: {
                value: 2
              },
              label: {
                formatter: '{b}',
                position: 'right',
                show: false
              },
              itemStyle: {
                color: '#0efacc'
              },
              emphasis: {
                label: {
                  show: false
                }
              }
            },
            {
              name: 'Top 5',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              data: data1,
              symbolSize: 15,
              tooltip: {
                show: false
              },
              encode: {
                value: 2
              },
              showEffectOn: 'render',
              rippleEffect: {
                brushType: 'stroke',
                color: '#0efacc',
                period: 9,
                scale: 5
              },
              hoverAnimation: true,
              label: {
                formatter: '{b}',
                position: 'right',
                show: true
              },
              itemStyle: {
                color: '#0efacc',
                shadowBlur: 2,
                shadowColor: '#333'
              },
              zlevel: 1
            }
          ]
        }

        chart.setOption(option)
      }
    },
    mounted () {
      let that = this
      setTimeout(()=>{
        that.initchart()
      },200)
      setTimeout(() => {
        window.onresize = function () {
          let w = document.getElementById('chart').offsetWidth
          let h = document.getElementById('chart').offsetHeight
          let mychart = echart.init(document.getElementById('chart'))
          mychart.resize(w, h)
        }
      }, 200)
    }
  }
</script>

<style scoped lang="scss">

  #content{
    width: 100%;
    height: calc(100% - 75px);
    background-image: linear-gradient(#0D0059, #2C71D1);
  }
  #chart {
    width: 100%;
    height: 100%;
  }
  .title{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    max-width: 280px;
    padding: 20px;
    font-size: 30px;
    background: linear-gradient(to right, red, blue);
    -webkit-background-clip: text;
    color: transparent;
  }

</style>
