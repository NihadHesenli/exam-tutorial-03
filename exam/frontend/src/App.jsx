import {Route, Routes} from 'react-router-dom'
import './App.css'
import ClientLayout from '../layouts/Client/ClientLayout'
import Home from '../pages/CLient/Home/Home'
import ProdDetails from '../pages/CLient/Detail/ProdDetails'
import AllProducts from '../pages/CLient/Product/AllProducts'
import Wishlist from '../pages/CLient/Wishlist/Wishlist'
import AdminLayout from '../layouts/Admin/AdminLayout'
import Dashboard from '../pages/Admin/Dashboard/Dashboard'
import AdminProd from '../pages/Admin/AdminProd/AdminProd'
import AddProd from '../pages/Admin/AddProd/AddProd'
import NotFound from '../components/NotFound/NotFound'

function App() {

  return (
    <Routes>
      <Route path='/' element={<ClientLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='products'>
      <Route index element={<AllProducts/>}/>
      <Route path=':id' element={<ProdDetails/>}/>
      </Route>
      <Route path='wishlist' element={<Wishlist/>}/>   
      </Route>

      <Route path='/admin' element={<AdminLayout/>}>
      <Route index element={<Dashboard/>}/>
      <Route path='/admin/admin-table' element={<AdminProd/>}/>
      <Route path='/admin/admin-add' element={<AddProd/>}/>
      </Route>

      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default App
