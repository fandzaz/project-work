import Vue from 'vue'
import Router from 'vue-router'
import Master from '@/components/MM/Master'
import Transection from '@/components/MM/Transection'
import Test from '@/components/MM/Test'

import PageTest from '@/components/SD/PageTest'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {  path: '/MM/MASTER', name: 'Master',component: Master},
    {  path:  '/MM/TRANSECTION', name: 'Transection',component: Transection },
    {  path:  '/MM/Test', name: 'Test',component: Test },
    {  path: '*', component: Master },

    {  path: '/SD/PageTest', name: 'PageTest',component: PageTest },
  ]
})
