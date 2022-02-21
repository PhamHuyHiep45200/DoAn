import clsx from 'clsx';
import React,{useEffect, useState,useContext} from 'react';
import style from './cart.module.scss'
import {getCart} from '../../services/api/page/cart'
import {ShoppingCartOutlined} from '@ant-design/icons'
import {LoginProvider} from '../../App'

function Cart() {
    const {user:{data:{_id}}}=useContext(LoginProvider)
    const [dataCart,setDataCart]=useState([])
    useEffect(()=>{
        const getProCart=async()=>{
            const {success,data}=await getCart(_id)
            if(success){
                setDataCart(data.data)
            }
        }
        return getProCart()
    },[])
    
    const sumPrice =  dataCart.reduce((initValue,current)=>{
        return  initValue + (current.priceCart*current.quantityCart)
    },0)

    const sumPro =  dataCart.reduce((initValue,current)=>{
        return  initValue + current.quantityCart
    },0)

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  return (
      <div className={style.cart}>
        <div className="grid wide">
            <div className={style.bar}>
                <ShoppingCartOutlined className={style.barIcon}/>
                    Hãy thêm những sản phẩm bạn thích vào giỏ hàng của bạn nhé!
            </div>
            <div className={clsx(style.header,'row')}>
                <div className={clsx(style.hLeft,'col l-6')}>
                    <div className={clsx(style.hlMain,'row')}>
                        <input type='checkbox'className='col l-2'/>
                        <div className={clsx(style.header_text,'col l-10')}>Sản phẩm</div>
                    </div>
                </div>    
                <div className={clsx(style.hRight,'col l-6')}>
                    <div className={clsx(style.hrMain,'row')}>
                        <div className={clsx(style.header_text,'col l-3')}>Đơn giá</div>
                        <div className={clsx(style.header_text,'col l-3')}>Số lượng</div>
                        <div className={clsx(style.header_text,'col l-3')}>Số tiền</div>
                        <div className={clsx(style.header_text,'col l-3')}>Thao tác</div>
                    </div>
                </div>
            </div>
            {dataCart.map((cart,index)=>(
                <div className={clsx(style.product)} key={index}>
                    <div className={clsx(style.pLeft,'col l-6')}>
                        <div className={clsx(style.plMain,'row')}>
                            <div className={clsx(style.plCheckbox,'col l-2')}>
                                <input type='checkbox' className={style.check}/>
                            </div>
                            <div className='col l-3' className={clsx(style.plImg,'col l-3')}>
                                <img className={style.img} src={cart.imgCart}/>
                            </div>
                            <div className={clsx(style.plName,'col l-4')}>
                                <p className={style.plNameProduct}>{cart.nameCart}</p>
                            </div>
                            <div className={clsx(style.plOption,'col l-3')}>
                                <span className={style.optionProduct}>loại</span>
                            </div>
                        </div>
                    </div>
                    <div className={clsx(style.pRight,'col l-6')}>
                        <div className={clsx(style.prMain,'row')}>
                            <div className={clsx(style.prPriceSingle,'col l-3')}>
                                <span className={style.priceSingle}>{numberWithCommas(cart.priceCart)}<span className={style.unit}>đ</span></span>
                            </div>
                            <div className={clsx(style.prNumber,'col l-3')}>
                                <span className={style.Number}>{cart.quantityCart}</span>
                            </div>
                            <div className={clsx(style.prPriceDouble,'col l-3')}>
                                <span className={style.priceDouble}>{numberWithCommas(cart.priceCart*cart.quantityCart)}<span className={style.unit}>đ</span></span>
                            </div>
                            <div className={clsx(style.prDelete,'col l-3')}>
                                <span className={style.Delete}>xóa</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className={clsx(style.sum)}>
                <div className={clsx(style.sLeft,'col l-4')}>
                    <input type='checkbox' className={style.check}/>
                    <span className={style.slText}>Xóa tất cả</span>
                </div>
                <div className={clsx(style.sRight,'col l-8')}>
                    <span className={style.pay}>Tổng thanh toán ( {sumPro} sản phẩm ):</span>
                    <span className={style.sumMoney}>{numberWithCommas(sumPrice)} <span className="unit">đ</span></span>
                    <div className={style.btnPay}>Mua Hàng</div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Cart;
