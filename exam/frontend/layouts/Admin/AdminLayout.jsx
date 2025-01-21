import { Outlet } from "react-router-dom"
import AdminHeader from "../../components/Admin/AdminHeader"

const AdminLayout = () => {
  return (
    <>
    <AdminHeader/>
    <Outlet/>
    </>
  )
}

export default AdminLayout