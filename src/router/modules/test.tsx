import { RouteObject } from '@/router/interface/index'
import { LayoutIndex } from '@/utils/constant'
import Test from '@/pages/test/index'

const TestRouter: Array<RouteObject> = [
  {
    element: <LayoutIndex />,
    children: [
      {
        path: '/test',
        element: <Test />,
        meta: {
          title: 'Test',
          key: 'Test'
        }
      }
    ]
  }
]

export default TestRouter
