import { lazy, Suspense, ComponentType } from 'react'
import { RouterProvider, createRouter, createRootRoute, createRoute } from '@tanstack/react-router'

const ErrorPage = lazy(() => import('./pages/errorPage'))
const Layout = lazy(() => import('./index'))
const Home = lazy(() => import('./pages/home'))

const LoadingFallback = () => <div>Loading...</div>

const withSuspense = (Component: ComponentType) => {
  return () => (
    <Suspense fallback={<LoadingFallback />}>
      <Component />
    </Suspense>
  )
}

const rootRoute = createRootRoute({
  component: withSuspense(Layout),
})

const createAppRoute = (path: string, Component: ComponentType) =>
  createRoute({
    getParentRoute: () => rootRoute,
    path,
    component: withSuspense(Component),
  })

const routes = [createAppRoute('/', Home), createAppRoute('*', ErrorPage)]

const routeTree = rootRoute.addChildren(routes)

export const router = createRouter({
  routeTree,
  defaultErrorComponent: ({ error }) => <ErrorPage />,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export const Router = () => <RouterProvider router={router} />
