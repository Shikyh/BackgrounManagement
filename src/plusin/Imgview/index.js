import Imgviewer from './Imgviewer'

export const imgview = {
  //执行安装,vue会自动安装
  install:function (Vue) {
    //构建构造器
    const imgviewconstrutor = Vue.extend(Imgviewer)//Vue实例进行继承
    const imgviewer = new imgviewconstrutor()//实例化出来构造的对象
    imgviewer.$mount(document.createElement('div'))//挂在到元素上面
    document.body.appendChild(imgviewer.$el)
    Vue.prototype.$imgview = imgviewer//原型链添加$imgview进行直接访问,全局变量
  }
}
