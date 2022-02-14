import clsx from 'clsx';
import React from 'react';
import style from './cart.module.scss'
import {ShoppingCartOutlined} from '@ant-design/icons'
import AnhDaiDien from '../../img/anhdaidiien.jpg'

function Cart() {
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
            <div className={clsx(style.product)}>
                <div className={clsx(style.pLeft,'col l-6')}>
                    <div className={clsx(style.plMain,'row')}>
                        <div className={clsx(style.plCheckbox,'col l-2')}>
                            <input type='checkbox' className={style.check}/>
                        </div>
                        <div className='col l-2' className={clsx(style.plImg,'col l-2')}>
                            <img className={style.img} src={AnhDaiDien}/>
                        </div>
                        <div className={clsx(style.plName,'col l-4')}>
                            <p className={style.plNameProduct}>tên</p>
                        </div>
                        <div className={clsx(style.plOption,'col l-4')}>
                            <span className={style.optionProduct}>loại</span>
                        </div>
                    </div>
                </div>
                <div className={clsx(style.pRight,'col l-6')}>
                    <div className={clsx(style.prMain,'row')}>
                        <div className={clsx(style.prPriceSingle,'col l-3')}>
                            <span className={style.priceSingle}>1000000</span>
                        </div>
                        <div className={clsx(style.prNumber,'col l-3')}>
                            <span className={style.Number}>2</span>
                        </div>
                        <div className={clsx(style.prPriceDouble,'col l-3')}>
                            <span className={style.priceDouble}>2000000</span>
                        </div>
                        <div className={clsx(style.prDelete,'col l-3')}>
                            <span className={style.Delete}>xóa</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={clsx(style.sum)}>
                <div className={clsx(style.sLeft,'col l-4')}>
                    <input type='checkbox' className={style.check}/>
                    <span className={style.slText}>Xóa tất cả</span>
                </div>
                <div className={clsx(style.sRight,'col l-8')}>
                    <span className={style.pay}>Tổng thanh toán ( 1 sản phẩm ):</span>
                    <span className={style.sumMoney}>2000000 <span className="unit">đ</span></span>
                    <div className={style.btnPay}>Mua Hàng</div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Cart;
