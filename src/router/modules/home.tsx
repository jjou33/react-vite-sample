import { RouteObject } from '@/router/interface/index'
import { LayoutIndex } from '@/utils/constant'
import Home from '@/pages/home/index'

const homeRouter: Array<RouteObject> = [
  {
    element: <LayoutIndex />,
    children: [
      {
        path: '/home',
        element: <Home />,
        meta: {
          title: 'Home',
          key: 'home'
        }
      }
    ]
  }
]

export default homeRouter
