import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import newNode from '@/components/newNode'
import viewNode from '@/components/viewNode'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/new',
      name: 'newNode',
      component: newNode
    },
    {
      path: '/:node_id',
      name: 'viewNode',
      component: viewNode
    }
  ]
})
