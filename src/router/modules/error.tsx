import { RouteObject } from '@/router/interface/index'
import NotFound from '@/components/ErrorMessage/404'
import React from 'react'

const signinRouter: Array<RouteObject> = [
  {
    path: '/404',
    element: <NotFound />,
    meta: {
      title: 'NotFound',
      key: '404'
    }
  }
]

export default signinRouter
