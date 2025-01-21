import { useEffect, useState } from 'react'
import './index.css'
import axios from 'axios'
import { DB_URL } from '../../../services/base'
import { Table } from 'antd';

const AdminProd = () => {

  const [prod, setProd] = useState()

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
  }, [])

  const columns= (deleteAction)=> [
    {
      title: 'Image',
      dataIndex: 'image',
      render : (img)=>{
       return <img src={img} alt=""  width={200}/>
      }
    },
    {
      title: 'title',
      dataIndex: 'title',
    },
    {
      title: 'description',
      dataIndex: 'description',
    },
    {
      title: 'price',
      dataIndex: 'price',
    },
    {
      title : 'actions',
      render : (_,prod)=>{
        return <button onClick={()=>{deleteAction(prod._id)}}>Delete</button>
      }
    }
  ];

  const deleteAction = async(id)=>{
    try {
      const res = await axios.delete(`${DB_URL}/products/${id}`)
      getProd()
    } catch (error) {
      console.log(error);
      
    }
  }


  return (
    <>
      <Table columns={columns(deleteAction)} dataSource={prod} />
    </>
  )
}

export default AdminProd