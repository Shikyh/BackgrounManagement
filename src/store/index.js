import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    breadcrumblist:[
      {
        'name': '首页',
        'path': '/home'
      },
    ]
  },
  mutations:{
    breadcrum(state, payload){
      state.breadcrumblist.push(payload)
    }
  },
  getters:{
    breadcrumCurrent(state){
      return state.breadcrumblist
    }
  },
  actions:{
    breadcrumbchange(context,payload){
     context.commit('breadcrum', payload)
    }
  }
})
