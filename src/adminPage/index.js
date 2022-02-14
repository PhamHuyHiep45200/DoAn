import React from 'react';
import {Link, Outlet} from 'react-router-dom'
import style from './masterpage.module.scss'
import clsx from 'clsx'
import {FaShopify} from 'react-icons/fa'

function MasterPage() {
    
  return (
    <div className="">
        {/* <div className={style.nav}>
            <div className="grid wide">
                <FaShopify className={style.iconShop}/>
                <span className={style.nameShop}>HD_Shop</span>
            </div>
        </div> */}
        <div className={style.nav}>
            <div className="grid wide">
                <FaShopify className={style.iconShop}/>
                <span className={style.nameShop}>HD_Shop</span>
            </div>
        </div>
        <div className={style.main}>
            <div className="grid wide">
                <div className="row">
                    <div className={clsx(style.menu,'col l-2')}>
                        <Link to='/' className={style.LinkMenu}>Trang chủ</Link>
                        <Link to='/admin' className={style.LinkMenu}>Home</Link>
                        <Link to='/admin/create' className={style.LinkMenu}>Product</Link>
                        <Link to='/admin/category' className={style.LinkMenu}>Category</Link>
                    </div>
                    <div className={clsx(style.page,'col l-10')}>
                        <Outlet/>
                    </div> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default MasterPage;
