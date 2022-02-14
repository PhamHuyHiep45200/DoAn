import React from 'react';
import {SiGmail} from 'react-icons/si'
import {FaCcAmazonPay,FaApple,FaPiggyBank,FaPhoneVolume} from 'react-icons/fa'
import './footter.scss'

function Footter() {
  return (
    <div className="footter">
        <div className="grid wide row">
            <div className="footter_category col l-3">
                <h3 className="footter_category_name">Danh Mục</h3>
                <ul className="footter_category_list">
                    <a href="#" className="footter_category_list_link">
                    <li className="footter_category_list_link_item">xiaomi</li>
                    </a>
                </ul>
            </div>
            <div className="footter_infome col l-3">
                <h3 className="footter_category_name">Về tôi</h3>
                <div className="footter_infome_contain">
                    <SiGmail className="footter_infome_contain_icon"/>
                    <span className="footter_infome_contain_text">Huyhiep4520@gmail.com</span>
                </div>
            </div>
            <div className="footter_pay col l-3">
                <h3 className="footter_category_name">Cách thanh toán</h3>
                <div className="footter_pay_contain row">
                    <FaCcAmazonPay className="footter_pay_contain_icon1 col l-4"/>
                    <FaApple className="footter_pay_contain_icon2 col l-4"/>
                    <FaPiggyBank className="footter_pay_contain_icon3 col l-4"/>
                </div>
            </div>
            <div className="footter_support col l-3">
                <h3 className="footter_category_name">Liên hệ chúng tôi</h3>
                <div className="footter_support_text">
                    <FaPhoneVolume className="footter_support_text_icon"/>
                    <span className="footter_support_text_phone">0375713278</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footter;
