import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Table } from 'ant-design-vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
import axios from 'axios'
import {imgview} from './plusin/Imgview'
import {mymessage} from './plusin/Message'
require('./mock')

Vue.component(Table.name,Table)
Vue.config.productionTip = false
Vue.prototype.$bud = new Vue()
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'
Vue.use(ElementUI)
Vue.use(imgview)
Vue.use(mymessage)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
