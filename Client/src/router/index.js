import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import index from '@/components/index'
import register from '@/components/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path     : '/',
      name     : 'index',
      component: index
    },
    {
      path     : '/login',
      name     : 'login',
      component: login
    },
    {
      path     : '/register',
      name     : 'register',
      component: register
    }
  ]
})