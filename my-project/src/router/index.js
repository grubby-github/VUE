import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
import computed from '@/components/computed'
import watch from '@/components/watch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/computed',
      name: 'computed',
      component: computed
    },
    {
      path: '/watch',
      name: 'watch',
      component: watch
    }
  ]
})
