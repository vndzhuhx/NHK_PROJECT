import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/login',
    component: () => import('@/views/Login'),
    hidden: true,

  },
  {
    path: '/',
    component: () => import('@/views/Login'),
    hidden: true
  },
  {
    path: '/menu',
    component: () => import('@/views/Menu'),
    meta: {
      title: 'メニユー画面',
      requiresAuth: true
    }
  },
  {
    path: '/program_manage',
    name: 'program_manage',
    component: () => import('@/views/Program_manage'),
    meta: {
      title: '措置番組管理画面',
      requiresAuth: true
    }
  },
  {
    path: '/replace_show',
    name: 'replace_show',
    component: () => import('@/views/Replace_show'),
    meta: {
      title: '代案一覧画面',
      requiresAuth: true
    }
  }, {
    path: '/replace_generate',
    component: () => import('@/views/Replace_generate'),
    meta: {
      title: '代案生成画面',
      requiresAuth: true
    }
  }, {
    path: '/inspection_confirm',
    component: () => import('@/views/Inspection_confirm'),
    meta: {
      title: '検証確認画面',
      requiresAuth: true
    }
  }, {
    path: '/replace_compare',
    component: () => import('@/views/replace_compare'),
    meta: {
      title: '検証確認画面',
      requiresAuth: true
    }
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),

  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]
