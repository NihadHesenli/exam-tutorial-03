import { NavLink } from 'react-router-dom'
import './index.css'

const AdminHeader = () => {
  return (
    <>
    <header>
      <div className="header">
        <h2 className='logo'>Admin</h2>
        <nav >
          <ul className='admin-nav'>
            <li className='admin-li'>
              <NavLink to={'/admin'} className={'admin-a'}>Dashboard</NavLink>
            </li>
            <li className='admin-li'>
              <NavLink to={'/admin/admin-table'} className={'admin-a'}>Product Table</NavLink>
            </li>
            <li className='admin-li'>
              <NavLink to={'/admin/admin-add'} className={'admin-a'}>Add Product</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    </>
  )
}

export default AdminHeader