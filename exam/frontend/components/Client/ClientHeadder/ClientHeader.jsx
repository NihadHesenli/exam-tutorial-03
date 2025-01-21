import { NavLink } from 'react-router-dom'
import './index.css'
import { useContext } from 'react'
import { WislistContext } from '../../../context/WishlistContext'

const ClientHeader = () => {
  const {fav} = useContext(WislistContext)
  return (
    <>
    <div className="client-header">
      <div className="header-1">
        <p className='logo-1'>Winter</p>
      </div>
      <div className="header-2">      
          <nav>
            <ul className='header-2-ul'>
              <li>
                <NavLink to={'/'} className={'header-2-a'}>Home</NavLink>
              </li>
              <li>
                <NavLink to={'/products'} className={'header-2-a'}>Products</NavLink>
              </li>
              <li>
                <NavLink to={'/wishlist'} className={'header-2-a'}>Favorites<span className='header-fav'>{fav.length}</span></NavLink>
              </li>
            </ul>
          </nav>
      </div>
    </div>
    </>
  )
}

export default ClientHeader