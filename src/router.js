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
      redirect: '/cloudable/home-page',
      children: [
        {
          path: 'home-page',
          name: 'home-page',
          title: '首页',
          component: () => import('@/views/Cloudable'),
        },
        {
          path: 'blog',
          name: 'blog',
          title: '个人博客',
          component: () => import('@/views/Blog'),
          redirect: '/cloudable/blog/articles',
          children: [
            {
              path: 'articles',
              name: 'articleList',
              title: '文章列表',
              component: () => import('@/views/Articles'),
            },
            {
              path: 'articles/:id',
              name: 'articleDetail',
              title: '文章详情',
              component: () => import('@/views/ArticleDetail'),
            },
          ],
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
        {
          path: 'time-line',
          name: 'time-line',
          title: '时间轴',
          component: () => import('@/views/TimeLines'),
        },
        {
          path: 'dashboard',
          name: 'dashboard',
          title: 'dashboard',
          component: () => import('@/views/Dashboard'),
        },
        {
          path: 'dreamer',
          name: 'dreamer',
          title: '梦想清单',
          component: () => import('@/views/Dreamer'),
        },
      ],
    },
  ],
})
