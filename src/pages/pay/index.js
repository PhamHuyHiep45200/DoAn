import React from 'react';
import {SiAdguard} from 'react-icons/si'
import {FaPhoneSquareAlt,FaMapMarkerAlt} from 'react-icons/fa'
import style from './pay.module.scss'
import clsx from 'clsx'
import SanPham from '../../img/dth1.jfif'

function Pay() {
  return (
      <div className={style.pay}>
          <div className="grid wide">
            <div className={clsx(style.address)}>
                <div className={clsx(style.outTop,'col l-3')}>
                    <h3 className={style.header}><FaMapMarkerAlt className={style.iconAdd}/> Địa chỉ nhận hàng</h3>
                    <span className={style.name}>Phạm Huy hiệp</span>
                    <span className={style.phone}><FaPhoneSquareAlt className={style.iconPhone}/>0375713278</span>
                </div>
                <div className={clsx(style.outMain,'col l-6')}>
                    <span className={style.add}>Thái Sơn Thái bềnh</span>
                </div>
                <div className={clsx(style.outBottom,'col l-3')}>
                    <a href='#' className={style.upAdd}>Thay đổi địa chỉ</a>
                </div>
            </div>
            <div className={style.product}>
                <div className={clsx(style.pTop,'row')}>
                    <span className={clsx(style.tProduct,'col l-6')}>Sản phẩm</span>
                    <div className={clsx(style.col6,'col l-6')}>
                        <span className={clsx(style.tPrice,'col l-4')}>Đơn giá</span>
                        <span className={clsx(style.tNumber,'col l-4')}>Số lượng</span>
                        <span className={clsx(style.tSumPrice,'col l-4')}>Thành tiền</span>
                    </div>
                </div>
                <div className={clsx(style.bBottom,'row')}>
                    <div className={clsx(style.bProduct,'l-6')}>
                        <img src={SanPham} className={clsx(style.img,'col l-2')}/>
                        <p className={clsx(style.nameProduct,'col l-10')}>Xiaomi note 8 pro</p>
                    </div>
                    <div className={clsx(style.col6,'col l-6')}>
                        <span className={clsx(style.bPrice,'col l-4')}>1000000<span className="unit">đ</span></span>
                        <span className={clsx(style.bNumber,'col l-4')}>2</span>
                        <span className={clsx(style.bSumPrice,'col l-4')}>2000000<span className="unit">đ</span></span>
                    </div>
                </div>
            </div>
            <div className={style.methodPay}>
                <div className={clsx(style.headerPay,'row')}>
                    <span className={clsx(style.hpLeft,'col l-6')}>Phương thức thanh toán</span>
                    <span className={clsx(style.hpRight,'col l-6')}>Tổng thanh toán</span>
                </div>
                <div className={clsx(style.mainPay,'row')}>
                    <span className={clsx(style.mLeft,'col l-6')}>Thanh toán khi nhận hàng</span>
                    <div className={clsx(style.mRight,'col l-6')}>
                        <div className={clsx(style.mLeftText,'col l-9')}>
                            <span className={style.TextProduct}>Tổng tiền sản phẩm : </span>
                            <span className={style.TextpriceShip}>Phí ship : </span>
                        </div>
                        <div className={clsx(style.mRightText,'col l-3')}>
                            <span className={style.spProduct}>200000000<span className="unit">đ</span></span>
                            <span className={style.priceShip}>40000<span className="unit">đ</span></span>
                        </div>
                    </div>
                </div>
                <div className={clsx(style.btnPay,'row')}>
                    <span className={clsx(style.btnText,'col l-6')}><SiAdguard className={style.iconAcuryti}/> HD_Shop đảm bảo sản phẩm chất lượng đơn hàng </span>
                    <div className={clsx(style.btnOut,'col l-6')}>
                        <span className={style.btnButton}>Đặt hàng</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Pay;
