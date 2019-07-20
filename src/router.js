import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      component: Home,
      children: [
        {
          path: 'about',
          name: 'about',
          title: '关于',
          component: () => import('./views/About'),
        },
        {
          path: 'markdown',
          name: 'markdown',
          title: '测试MD',
          component: () => import('./views/MarkDown'),
        },
      ],
    },
  ],
})
