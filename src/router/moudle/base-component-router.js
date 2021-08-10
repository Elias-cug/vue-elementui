import Layout from '@/layout'
import ImageCropper from '@/components/base/image-cropper'
const visRouter = [
  {
    path: '/base',
    name: 'Base',
    redirect: '/base/image-cropper',
    component: Layout,
    meta: { title: '基础组件' },
    children: [
      {
        path: '/base/image-cropper',
        name: 'ImageCropper',
        component: ImageCropper,
        meta: { title: '图片剪裁' }
      }
    ]
  }
]

export default visRouter
