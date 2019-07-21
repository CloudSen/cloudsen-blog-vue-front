import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/views/Welcome'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      component: Welcome,
    },
    {
      path: '/cloudable',
      name: '/cloudable',
      component: (Home),
      children: [
        {
          path: 'blog',
          name: 'blog',
          title: '个人博客',
          component: () => import('@/views/Blog'),
        },
        {
          path: 'topic',
          name: 'topic',
          title: '专题',
          component: () => import('@/views/Topic'),
        },
        {
          path: 'my-project',
          name: 'my-project',
          title: '我的项目',
          component: () => import('@/views/MyProject'),
        },
        {
          path: 'about',
          name: 'about',
          title: '关于',
          component: () => import('@/views/About'),
        },
      ],
    },
  ],
})
