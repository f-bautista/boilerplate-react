import { Header } from '../components/core/header'

import { Outlet } from '@tanstack/react-router'

const Layout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-6 pt-20 md:px-6">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
