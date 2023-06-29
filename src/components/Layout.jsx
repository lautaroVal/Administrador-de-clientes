import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <h1 className="text-óxl font-bold">CRM - REACT</h1>
        
        <Outlet />
    </div>
  )
}

export default Layout