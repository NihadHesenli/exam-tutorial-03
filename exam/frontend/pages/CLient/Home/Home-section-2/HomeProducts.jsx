import { useEffect, useState } from 'react'
import styles from './index.module.scss'
import { Helmet } from 'react-helmet-async'
import { DB_URL } from '../../../../services/base'
import axios from 'axios'
import { Col, Row } from 'antd'

const HomeProducts = () => {
  const [prod , setProd] = useState([])
  const getProd = async () => {
    try {
      const data = await axios(`${DB_URL}/products`)
      setProd(data.data)
      
      
      
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getProd()
    console.log(prod);
    
    
  }, [])
  return (
    <>
    <Helmet>
    <title>Home</title>
    <link rel="canonical" href="https://www.tacobell.com/" />
  </Helmet> 
    
    <Row gutter={[16, 16]} className={styles['row']}>
          {prod.length > 0 && prod.slice(0,3).map((p) => {
            return (
            <Col xs={24} sm={12} md={8} key={p._id}>
              <div className={styles['prod-card']}>
                <img src={p.image} alt={p.title} width={222} />
                <h3>{p.title}</h3>
                <h4 style={{ margin: "10px 0px" }}>{p.price}$</h4>
                <p>{p.description}</p>
              </div>
            </Col>
            )
})}
        </Row>
    </>
  )
}

export default HomeProducts