import { lazy, Suspense } from 'react'
import { RouterProvider, createRouter, createRootRoute, createRoute, redirect } from '@tanstack/react-router'
import { getSession } from 'src/queries/auth'
import Layout from './layout'

const ErrorPage = lazy(() => import('./pages/errorPage'))
const Home = lazy(() => import('./pages/home'))
const Login = lazy(() => import('./pages/login'))

const rootRoute = createRootRoute({
  component: Layout,
})

const routes = [
  {
    path: '/',
    component: Home,
    protected: true,
  },
  {
    path: '/login',
    component: Login,
    protected: false,
  },
  {
    path: '*',
    component: ErrorPage,
    protected: false,
  },
]

const routeConfig = routes.map((route) => {
  return createRoute({
    getParentRoute: () => rootRoute,
    path: route.path,
    beforeLoad: async () => {
      if (route.protected) {
        const session = await getSession()
        const user = session?.user
        if (!user) {
          throw redirect({
            to: '/login' as any,
            replace: true,
          })
        }
      }
    },
    component: route.component,
  })
})

const routeTree = rootRoute.addChildren(routeConfig)

export const router = createRouter({
  routeTree,
  defaultErrorComponent: ErrorPage,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export const Router = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <RouterProvider router={router} />
  </Suspense>
)
