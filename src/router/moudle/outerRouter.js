import Layout from '@/layout'
const outerRouter = [
  {
    path: '/outer',
    component: Layout,
    redirect: '/outer/http://www.baidu.com',
    meta: { title: '外部路由' },
    children: [
      {
        path: '/outer/baidu',
        name: '百度',
        meta: {
          title: '百度',
          isOuter: true,
          outerPath: 'http://localhost:8081/visualization/g6'
        }
      },
      {
        path: '/outer/google',
        name: 'Google',
        meta: {
          title: 'Google',
          isOuter: true,
          outerPath: 'https://www.google.com'
        }
      }
    ]
  }
]

export default outerRouter
