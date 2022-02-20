import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import InfoProduct from './infoProduct';
import CommentProduct from './comment'
import Description from './description'
import {getDetailProduct} from '../../services/api/page'
import './detail.scss'


function DetailProduct() {
  const {id}=useParams()
  const [dataDetail,setDataDetail]=useState([])
  useEffect(()=>{
    const getDetail=async ()=>{
      const {success,data}=await getDetailProduct(id)
      if(success){
        setDataDetail(data.data[0])
      }
    }
    return getDetail()
  },[])
  const {_id,name,img,sale,price,tym,description,screen,chip,ram,rom,pin,camera}=dataDetail
  return (
      <div className="detail">
          <div className="grid wide ">
            <InfoProduct proID={_id} name={name} img={img} sale={sale} price={price} tym={tym} />
            <Description description={description} screen={screen} camera={camera} chip={chip} ram={ram} rom={rom} pin={pin}/>  
            <CommentProduct />
          </div>
      </div>
  )
}

export default DetailProduct;
