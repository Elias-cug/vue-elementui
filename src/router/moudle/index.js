import Layout from '@/layout'
// 首页
import Main from '@/page/Main'
// 测试路由
import Test from '@/components/test'
// 可视化路由
import visRouter from './visRouter'
// 外部路由
import outerRouter from './outerRouter'
const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/test',
    name: 'Test',
    redirect: '/test',
    component: Layout,
    meta: { title: '测试' },
    children: [
      {
        path: '/test/iframe',
        name: 'G6',
        component: Test,
        meta: { title: '测试cookie' }
      }
    ]
  },
  ...visRouter,
  ...outerRouter
]

export default routes
