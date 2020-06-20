import Vue from 'vue'
import VueRouter from 'vue-router'
import Default from '../layout/default'
import goodsList from '../views/goodsList.vue'
import Index from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'default',
    component: Default,
    redirect: '/index',
    children:[{
      path:'goods/:name',
      name:'goods',
      component:goodsList,
    },{
      path:'/index',
      name:'index',
      component: Index
    },{
      path:'/changeCity',
      name:'changeCity',
      component:() => import('../views/changeCity.vue')
    }]
  },
  {
    path: '/blank',
    name: 'blank',
    component: () => import('../layout/blank.vue'),
    children:[{
      path:'login',
      name:'login',
      component: () => import('../views/login.vue'),
    },{
      path:'register',
      name:'register',
      component: () => import('../views/register.vue'),
    }]
  }
]

const router = new VueRouter({
  mode: 'hash',
  linkExactActiveClass: 'active-exact',
  linkActiveClass: 'active',
  routes
})

export default router
