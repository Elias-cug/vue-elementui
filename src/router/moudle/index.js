// 首页
import Main from '@/page/Main'
// 可视化路由
import visRouter from './visRouter'
const routes = [
  {
    path: '/',
    component: Main
  },
  ...visRouter
]

export default routes
