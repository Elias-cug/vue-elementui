// 首页
import Main from '@/page/Main'
// 可视化路由
import visRouter from './visRouter'
// 外部路由
import outerRouter from './outerRouter'
const routes = [
  {
    path: '/',
    component: Main
  },
  ...visRouter,
  ...outerRouter
]

export default routes
