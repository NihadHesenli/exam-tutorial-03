import { Outlet } from "react-router-dom"
import ClientHeader from "../../components/Client/ClientHeadder/ClientHeader"
import ClientFooter from "../../components/Client/ClientFooter/ClientFooter"

const ClientLayout = () => {
  return (
    <>
    <ClientHeader/>
    <Outlet/>
    <ClientFooter/>
    </>
  )
}

export default ClientLayout