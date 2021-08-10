import Layout from '@/layout'
// 首页
import Main from '@/page/Main'

import HeaderEdit from '@/test/HeaderEdit'
// 可视化路由
import visRouter from './visRouter'
// 外部路由
import outerRouter from './outerRouter'
// 基础组件路由
import baseComponentRouter from './base-component-router'
const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/test',
    name: 'Test',
    component: Layout,
    redirect: '/test/header-edit',
    meta: { title: '测试' },
    children: [
      {
        path: '/test/header-edit',
        name: 'HeaderEdit',
        component: HeaderEdit,
        meta: { title: '头部设置' }
      }
    ]
  },
  ...visRouter,
  ...outerRouter,
  ...baseComponentRouter
]

export default routes
