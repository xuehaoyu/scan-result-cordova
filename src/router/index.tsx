import React from 'react'
import { RouteObject } from 'react-router-dom'
import Layout from '@/pages'
import Home from '@/pages/home'
import Work from '@/pages/work'
import Game from '@/pages/game'
import Empty from '@/pages/empty'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/work',
        element: <Work />
      },
      {
        path: '/game',
        element: <Game />
      }
    ]
  },
  {
    path: '*',
    element: <Empty />
  }
]

export default routes
