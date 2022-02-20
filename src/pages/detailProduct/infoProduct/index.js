import React, {  useState,useContext } from 'react';
import {FaShippingFast,FaFacebook,FaFacebookMessenger,FaHeart} from 'react-icons/fa'
import {MinusOutlined,PlusOutlined,RightOutlined} from '@ant-design/icons'
import { addCart } from '../../../services/api/page/cart';
import './info.scss'
import { LoginProvider } from '../../../App';
import { ToastContainer, toast } from 'react-toastify';

function InfoProduct({proID,name,img,sale,price,tym}) {
    const {user:{data:{_id}}}=useContext(LoginProvider)
    const userID=_id
    const [quantityAddCart,setQuantityAddCart]=useState(1)

    const handlePlus=()=>{
        setQuantityAddCart(quantityAddCart+1)
    }

    const handleMinus=()=>{
        if(quantityAddCart<=0){
            return setQuantityAddCart(0)
        }
        setQuantityAddCart(quantityAddCart-1)
    }

    const handleAddCart=async ()=>{
        const {success,data}=await addCart(proID,name,img,price,quantityAddCart,userID)
        if(success){
            if(!data.data.success){
                alert(data.data.description)
            }
            else{
                notify()
            }
        }
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const notify = () => toast('Sản phẩm đã được thêm vào giỏ hàng');

  return (
      <div className="infoDetail">
          <h3 className="infoDetail_h3">
            HD_Shop <RightOutlined />{name}
          </h3>
          <div className="infoDetail_main row">
              <div className="infoDetail_main_view col l-4">
                  <img src={img} className="infoDetail_main_view_img"/>
                  <div className="infoDetail_main_view_listImg">
                    <img src={img} className="infoDetail_main_view_listImg_item"/>
                  </div>
                  <div className="infoDetail_main_view_share">
                        <span className="infoDetail_main_view_share_text">Chia sẻ : </span>
                        <span className="infoDetail_main_view_share_icon">
                            <FaFacebook className="infoDetail_main_view_share_icon_icon1"/>
                            <FaFacebookMessenger className="infoDetail_main_view_share_icon_icon2"/>
                        </span>
                  </div>
              </div>
              <div className="infoDetail_main_info col l-8">
                <h3 className="infoDetail_main_info_name">{name}</h3>
                <div className="infoDetail_main_info_interactive">
                    <span className="infoDetail_main_info_interactive_comment">
                        45 đánh giá
                    </span>
                    <span className="infoDetail_main_info_interactive_love">
                    {tym}
                     <FaHeart className="infoDetail_main_info_interactive_love_icon"/>
                    </span>
                </div>
                <div className="infoDetail_main_info_price">
                    <span className="infoDetail_main_info_price_old">
                        {numberWithCommas(price?price:'')}
                        <span className="unit">đ</span>
                    </span>
                    <span className="infoDetail_main_info_price_new">
                        {numberWithCommas(price-(price*sale)/100)}
                        <span className="unit">đ</span>
                    </span>
                    <span className="infoDetail_main_info_price_sale">Giảm {sale}%</span>
                </div>
                <div className="infoDetail_main_info_out">
                    <div className="infoDetail_main_info_out_outShip row">
                        <div className="infoDetail_main_info_out_outShip_left col l-2">
                            Vận chuyển
                        </div>
                        <div className="infoDetail_main_info_out_outShip_right col l-8">
                            <span className="infoDetail_main_info_out_outShip_right_father">
                                <FaShippingFast className="infoDetail_main_info_out_outShip_right_father_icon"/>
                                <span className="infoDetail_main_info_out_outShip_right_father_text">Vận chuyển tới</span>
                            </span>
                            <span className="infoDetail_main_info_out_outShip_right_add">Chọn địa chỉ</span>
                        </div>
                    </div>
                    <div className="infoDetail_main_info_out_option row">
                        <span className="infoDetail_main_info_out_option_left col l-2">Màu sắc</span>
                        <div className="infoDetail_main_info_out_option_right col l-8">
                            <div className='infoDetail_main_info_out_option_right_color'>Trắng</div>
                        </div>
                    </div>
                    <div className="infoDetail_main_info_out_number row">
                        <span className="infoDetail_main_info_out_number_left col l-2">Số lượng</span>
                        <div className="infoDetail_main_info_out_number_right col l-8">
                            <span className="infoDetail_main_info_out_number_right_minus" onClick={handleMinus}>
                                <MinusOutlined />
                            </span>
                            <span className="infoDetail_main_info_out_number_right_quantily">{quantityAddCart}</span>
                            <span className="infoDetail_main_info_out_number_right_plus" onClick={handlePlus}>
                                <PlusOutlined />
                            </span>
                            
                        </div>
                    </div>
                    <div className="infoDetail_main_info_out_btn">
                        <button className="infoDetail_main_info_out_btn_cart" onClick={handleAddCart}>Thêm vào giỏ hàng</button>
                        <button className="infoDetail_main_info_out_btn_buying">Mua hàng</button>
                    </div>
                </div>
              </div>
          </div>
          <div>
            <ToastContainer />
          </div>
      </div>
  )
}

export default InfoProduct;
