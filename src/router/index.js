import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import HomePage from '@/components/HomePage'
import Main from '@/components/Main'
import Maina from '@/components/Maina'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/homePage',
      name: 'homePage',
      component: HomePage,
      children: [
        {
          path: '/homePage/main',
          name: 'Main',
          component: Main
        },
        {
          path: '/homePage/maina',
          name: 'Maina',
          component: Maina
        }
      ]
    }
  ]
})
