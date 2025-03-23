import { Header } from '../../components/core/header'
import { Outlet } from '@tanstack/react-router'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="page-container">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
