import React, { useContext, useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import InfoProduct from './infoProduct';
import CommentProduct from './comment'
import Description from './description'
import {getDetailProduct} from '../../services/api/page'
import './detail.scss'
import { LoadingOutlined } from '@ant-design/icons';
import { LoginProvider } from '../../App';
import { Spin } from 'antd';


function DetailProduct() {
  const {id}=useParams()
  const [dataDetail,setDataDetail]=useState([])
  const [toask,setToask]=useState(false)
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const {setIsLoadding,isLoadding}=useContext(LoginProvider)
  useEffect(()=>{
    setIsLoadding(false)
    const getDetail=async ()=>{
      const {success,data}=await getDetailProduct(id)
      if(success){
        setDataDetail(data.data[0])
        setIsLoadding(true)
      }
    }
    return getDetail()
  },[])
  const {_id,name,img,sale,price,tym,description,screen,chip,ram,rom,pin,camera}=dataDetail
  return (
      <div className="detail center">
          { !isLoadding? <Spin indicator={antIcon}/>:<div className="grid wide ">
            <InfoProduct proID={_id} name={name} img={img} sale={sale} price={price} tym={tym} setToask={setToask}/>
            <Description description={description} screen={screen} camera={camera} chip={chip} ram={ram} rom={rom} pin={pin}/>  
            <CommentProduct />
          </div>
          }
          {toask&&<div className="detail_toask">Sản phẩm đã có trong giỏ hàng</div>}
      </div>
  )
}

export default DetailProduct;
