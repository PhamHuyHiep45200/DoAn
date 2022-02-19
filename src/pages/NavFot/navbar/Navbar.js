import React, { useContext, useState } from 'react';
import {Link} from 'react-router-dom'
import {ShoppingTwoTone,SearchOutlined,ShoppingCartOutlined} from '@ant-design/icons'
import './navbar.scss'
import Anhdaidien from '../../../img/anhdaidiien.jpg'
import {UserContext} from '../../../provider/userProvider'

function Navbar() {
  const [input,setInput]=useState('')
  // const user=useContext(UserContext)
  // console.log(user);
  return (
    <div className="navbar">
      <div className="grid wide row">
        <Link to='/' className="navbar_logo col l-2">
          <ShoppingTwoTone className="navbar_logo_icon"/>
          <span className="navbar_logo_text">HD_Shop</span>
        </Link>
        <div className="navbar_search col l-8">
          <div className="navbar_search_outform">
            <form className="navbar_search_outform_form">
              <input 
                className="navbar_search_outform_form_input" 
                placeholder="Tìm kiếm tại đây..."
                value={input}
                onChange={(e)=>setInput(e.target.value)}
              />
              <Link to={`/search/${input}`}>
                <button type='submit' class="navbar_search_outform_form_btn">
                  <SearchOutlined className="navbar_search_outform_form_btn_icon"/>
                </button >
              </Link>
            </form>
          </div>
        </div>
        <div className="navbar_me col l-2">
          <div className="navbar_me_cart">
            <Link to='/cart'>
              <ShoppingCartOutlined className="navbar_me_cart_icon"/>
            </Link>
          </div>
          <div className="navbar_me_info">
            <img src={Anhdaidien} className="navbar_me_info_img"/>
            <span className="navbar_me_info_name">
              Phạm huy hiệp
              <ul className="navbar_me_info_name_list">
                <Link to='#' className="navbar_me_info_name_list_link">
                  <li className="navbar_me_info_name_list_link_item">Tài Khoản</li>
                </Link>
                <Link to='/admin' className="navbar_me_info_name_list_link">
                  <li className="navbar_me_info_name_list_link_item">Admin</li>
                </Link>
                <Link to='#' className="navbar_me_info_name_list_link">
                  <li className="navbar_me_info_name_list_link_item">Đăng Xuất</li>
                </Link>
              </ul>
            </span>
          </div>
        </div>
      </div>
  </div>
  )
  
}

export default Navbar;

