import React, { useContext, useEffect,useState } from 'react';
import {GiHotSpices} from 'react-icons/gi'
import {getProducHot} from '../../../services/api/page'
import {Link} from 'react-router-dom'
import './product.scss'
import { LoginProvider } from '../../../App';
import {Spin} from 'antd'
import { LoadingOutlined } from '@ant-design/icons';

function ProductHot() {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const {setIsLoadding,isLoadding}=useContext(LoginProvider)
  const [productHot,setProductHot] = useState([])
  useEffect(()=>{    
    setIsLoadding(false);
    const showProsuctHot=async()=>{
      const {success,data}=await getProducHot()
      if(success){
        setIsLoadding(true)
        setProductHot(data.data)
      }
    }
    return showProsuctHot()
  },[])
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
      <div className="productHot">
          <div className="productHot_header">
            <div className="productHot_header_left">
              <GiHotSpices className="productHot_header_left_icon"/>
              <span className="productHot_header_left_text">Giảm giá cực sốc</span>
            </div>
            <span className="productHot_header_right">
              <a href='#' className="productHot_header_right_text">xem tất cả</a>
            </span>
          </div>
          <div className="productHot_main row center">
            {  !isLoadding? <Spin indicator={antIcon}/> : productHot.map((proHot)=>(
              <Link key={proHot._id} to={`/detail/${proHot._id}`} className="productHot_main_link  col l-24">
                <div className="productHot_main_link_product">
                  <div className="productHot_main_link_product_out">
                    <img src={proHot.img} className="productHot_main_link_product_out_img"/>
                  </div>
                  <div className="productHot_main_link_product_description">
                    <span className="productHot_main_link_product_description_name">{proHot.name}</span>
                    <div className="productHot_main_link_product_description_price">
                      <span className="productHot_main_link_product_description_price_sale">{numberWithCommas(proHot.price)}<span className="unit">đ</span></span>
                      <span className="productHot_main_link_product_description_price_standard">{numberWithCommas(proHot.price-(proHot.price*proHot.sale)/100)}<span className="unit">đ</span></span>
                    </div>
                    <div className="productHot_main_link_product_description_cmt">
                      <span className="productHot_main_link_product_description_cmt_sell">còn {proHot.quantity}</span>
                      <span className="productHot_main_link_product_description_cmt_comment">đánh giá 145</span>
                    </div>
                  </div>
                  <span className="productHot_main_link_product_sale">-{proHot.sale}%</span>
                  <span className="productHot_main_link_product_category">{proHot.category}</span>
                </div>
              </Link>
            ))}
          </div>
      </div>
  )
}

export default ProductHot;
