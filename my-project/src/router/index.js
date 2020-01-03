import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Diretivas from '@/components/Diretivas'
import Loops from '@/components/Loops'
import Loops2 from '@/components/Loops2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/diretivas',
      name: 'Diretivas',
      component: Diretivas
    },
    {
      path: '/loops',
      name: 'Loops',
      component: Loops
    },
    {
      path: '/loops2',
      name: 'Loops2',
      component: Loops2
    }
  ]
})
