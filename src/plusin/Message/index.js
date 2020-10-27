import Message from './Message'
export const mymessage = {
  install:function (Vue) {
    const msgconstructor = Vue.extend(Message)
    const msg = new msgconstructor()
    msg.$mount(document.createElement('div'))
    document.body.appendChild(msg.$el)
    Vue.prototype.$msg = msg
  }
}
