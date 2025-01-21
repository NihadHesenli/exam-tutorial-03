import { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { WislistContext } from '../../../context/WishlistContext'
import { Button, Col, Row } from 'antd'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import styles from './index.module.scss'

const Wishlist = () => {
  const {fav,favToogle,clearFav} = useContext(WislistContext)
  return (
    <>
     <Helmet>
            <title>Home</title>
            <link rel="canonical" href="https://www.tacobell.com/" />
          </Helmet>
          <Row gutter={[16, 16]} className={styles['row']}>
            {fav.length > 0 ? <Button onClick={()=> clearFav()}>Clear All</Button> : null}
      {fav.map((p) => (
        <Col xs={24} sm={12} md={8} key={p.id}>
          <div className={styles['prod-card']}>
            <img src={p.image} alt={p.title} width={222} />
            <h3>{p.title}</h3>
            {fav.find((item) => item._id === p._id) 
              ? <FaHeart  onClick={() => favToogle(p)} style={{ color: 'red',marginLeft: '7px' }} />
              : <FaRegHeart onClick={() => favToogle(p)} style={{ marginLeft: '7px'}}/>} 
            <h4 style={{ margin: "10px 0px" }}>{p.price}$</h4>
            <p>{p.description}</p>
          </div>
        </Col>
      ))}
    </Row>
    </>
  )
}

export default Wishlist