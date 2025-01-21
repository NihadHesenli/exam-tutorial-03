import './index.css'
import { useNavigate, useParams} from "react-router"
import { Helmet } from 'react-helmet-async'
import axios from "axios"
import {DB_URL} from '../../../services/base'
import { useEffect, useState } from 'react'
import {Row,Col} from "antd" 
const ProdDetails = () => {
  const {id} = useParams()
  const [prod ,setProd] = useState([])
  let nav = useNavigate()
  const getProdById = async ()=>{
    const res = await axios(`${DB_URL}/products/${id}`)
    setProd(res.data)
  }

  useEffect(() => {
    getProdById()
  }, id)
  console.log(prod);
  

  
  
  return (
    <>
     <Helmet>
            <title>Home</title>
            <link rel="canonical" href="https://www.tacobell.com/" />
          </Helmet>
          <Row gutter={[16,16]}>
            <Col xs={24} sm={12} md={8} key={prod._id}>
            <img src={prod.image} width={400} alt="" />
            </Col> 
            <Col  xs={24} sm={12} md={8} key={prod._id}>
            <h1>{prod.title}</h1>
            <p>{prod.price}</p>
            <h3>{prod.description}</h3>
            <button onClick={()=>{nav(-1)}}>Back</button>
            </Col>
          </Row>
    </>
  )
}

export default ProdDetails