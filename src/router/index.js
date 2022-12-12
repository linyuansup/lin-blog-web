import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'framework',
      component: () => import('@/views/Framework.vue'),
      children: [{
        path: '/',
        name: 'index',
        meta: { title: "首页" },
        component: () => import('@/views/Index.vue'),
      },
      {
        path: '/blog',
        name: 'blog',
        meta: { title: "博客" },
        component: () => import('@/views/Blog.vue'),
      },
      {
        path: '/category',
        name: 'category',
        meta: { title: "分类" },
        component: () => import('@/views/Category.vue'),
      },
      {
        path: '/blog/:blogId',
        name: 'blogDetail',
        meta: { title: "博客详情" },
        component: () => import('@/views/BlogDetail.vue'),
      },
      {
        path: '/category/:categoryId',
        name: 'categoryDetail',
        meta: { title: "分类详情" },
        component: () => import('@/views/CategoryDetail.vue'),
      }]
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = "linBlog - " + to.meta.title;
  next();
})

export default router
