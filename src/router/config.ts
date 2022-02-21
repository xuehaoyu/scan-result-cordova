import { lazy } from 'react'
const Home = lazy(() => import('@/pages/home'))

const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    exact: true,
    defualtRedirect: '/home',
    child: [
      {
        path: '/home',
        exact: true,
        component: Home
      }
    ]
  }
]

export default routerConfig
