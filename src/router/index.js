import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/search'
import vwTest from '@/components/vwTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'search',
      component: Search
    },
    {
      path: '/vw',
      name: 'vwTest',
      component: vwTest
    }
  ]
})
