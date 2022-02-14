import React from 'react';
import style from './formLogin.module.scss'
import {Link} from 'react-router-dom'
import {FaShopify} from 'react-icons/fa'
import Login from './login'
import Register from './register'

function FormLogin({auth}) {
  return (
      <div className={style.login}>
          <div className={style.nameShop}>
            <FaShopify className={style.icon}/>
            <span className={style.textName}>HD_Shop</span>
          </div>
          <div className={style.form}>            
            {auth==='login'&&<Login/>}
            {auth==='register'&&<Register/>}
            <div className={style.public}>
                <span className={style.or}>Hoặc</span>
                <button className={style.facebook}>Đăng nhập bằng faceboook</button>
                <button className={style.google}>Đăng nhập bằng google</button>
            </div>
            {auth==='login'&&(
              <div className={style.text}>
                Bạn chưa có tài khoản? Hãy 
                <Link to='/register' className={style.link}>Đăng Kí</Link>
              </div>
            )}
            {auth==='register'&&(
              <div className={style.text}>
                Bạn đã có tài khoản? Hãy 
                <Link to='/login' className={style.link}>Đăng Nhập</Link>
              </div>
            )}
          </div>
      </div>
  )
}

export default FormLogin;
