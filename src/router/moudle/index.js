import Main from '@/page/Main'
import visRouter from './visRouter'
const routes = [
  {
    path: '/',
    component: Main
  },
  ...visRouter
]

export default routes
