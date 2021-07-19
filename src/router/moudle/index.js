import Layout from '@/layout'
// 首页
import Main from '@/page/Main'
// 测试路由
import Test from '@/components/test'
// 可视化路由
import visRouter from './visRouter'
// 外部路由
import outerRouter from './outerRouter'
// test-vue-demo
import TestVueDemo from '@/page/test-vue-demo'
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
      },
      {
        path: '/test/test-vue-demo',
        name: 'TextVueDemo',
        component: TestVueDemo,
        meta: { title: '测试vue源码' }
      }
    ]
  },
  ...visRouter,
  ...outerRouter
]

export default routes
