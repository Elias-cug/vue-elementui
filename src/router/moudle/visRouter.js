import Layout from '@/layout'
import AntvG from '@/components/visualization/AntvG'
import VisNetwork from '@/components/visualization/VisNetwork'
const visRouter = [
  {
    path: '/visualization',
    name: 'visualization',
    redirect: '/visualization/g6',
    component: Layout,
    meta: { title: '可视化' },
    children: [
      {
        path: '/visualization/g6',
        name: 'G6',
        component: AntvG,
        meta: { title: '拓扑-g6' }
      },
      {
        path: '/visualization/vis-network',
        name: 'VisNetwork',
        component: VisNetwork,
        meta: { title: '拓扑-vis' }
      }
    ]
  }
]

export default visRouter
