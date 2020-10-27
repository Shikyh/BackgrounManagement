import Vue from 'vue'
import VueRouter from 'vue-router'
import fa from 'element-ui/src/locale/lang/fa'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new VueRouter({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      meta: { title: '首页' },
      icon:'fa-home',
      component: () => import('@/views/home/Home')
    },
    {
      path: '/processdesign',
      name: 'processdesign',
      meta: { title: 'javascript参考手册' },
      icon:'fa-product-hunt',
      component: () => import('@/views/processdesign/ProcessDesign')
    },
    {
      path: '/formdesign',
      name: 'formdesign',
      meta: { title: '表单设计,图板' },
      icon:'fa-wpforms',
      component: () => import('@/views/formdesign/FormDesign')
    },

    {
      path: '/onlinedevelopment',
      name: 'onlinedevelopment',
      meta: { title: '在线开发' },
      icon:'fa-cloud',
      component: () => import('@/views/onlinedevelopment/OnlineDevelopment')
    },
    {
      path: '/usermanagement',
      name: 'usermanagement',
      meta: { title: '用户管理' },
      icon:'fa-user-o',
      component: () => import('@/views/usermanagement/Usermanagement')
    },
    {
      path: '/systemmanagement',
      name: 'systemmanagement',
      meta: { title: '系统管理' },
      icon:'fa-cog',
      component: () => import('@/views/systemmanagement/Systemmanagement'),
      children: [
        {
          path: 'systemmenumanagement',
          name: 'systemmenumanagement',
          meta: { title: '系统菜单管理' },
          active: false,
          component: () => import('@/views/systemmanagement/Systemmenumanagement')
        },
        {
          path: 'systemusermanagement',
          name: 'systemusermanagement',
          meta: { title: '系统用户管理' },
          active: false,
          component: () => import('@/views/systemmanagement/UserManagement')
        }
      ]
    }
  ],
  mode: 'history'
})
