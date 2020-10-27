export const imgview = {
  data () {
    return {
      Wi: 0,
      He: 0,
      url: '',
      state: false,
      styleobject: {
        width: '',
        height: ''
      }
    }
  },
  methods: {
    //在不同设备，等比例缩放设备
    resizeimg (url, state) {
      this.url = url
      this.state = state
      let img = new Image()
      img.src = url
      let height = img.height
      let width = img.width
      let hRatio
      let wRatio
      let Ratio = 1
      let maxWidth = window.innerWidth - 42
      let maxHeight = window.innerHeight - 42
      wRatio = maxWidth / width//当图像本身宽高超出最大区域得时候,值会小于1
      hRatio = maxHeight / height
      if (maxWidth === 0 && maxHeight === 0) {
        Ratio = 1//这种情况基本不会有
      } else if (maxWidth === 0) {
        if (hRatio < 1) Ratio = hRatio
      } else if (maxHeight === 0) {
        if (wRatio < 1) Ratio = wRatio
      } else if (wRatio < 1 || hRatio < 1) {
        Ratio = (wRatio <= hRatio ? wRatio : hRatio)
      }
      if (Ratio < 1) {
        width = width * Ratio
        height = height * Ratio
      }
      this.styleobject.width = Math.floor(width) + 'px'
      this.styleobject.height = Math.floor(height) + 'px'
    },
    hide () {
      this.state = false
    }
  },
  mounted () {
    this.resizeimg()
  }
}
