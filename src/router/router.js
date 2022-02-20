import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/home/Home'
import DetailProduct from '../pages/detailProduct/DetailProduct'
import Search from '../pages/search'
import Cart from '../pages/cart'
import Pay from '../pages/pay'
import NavFot from '../pages/NavFot'
import FormLogin from '../formLogin'
import MasterPage from '../adminPage'
import ShowProduct from '../adminPage/showProduct';
import CreateProduct from '../adminPage/product';
import Category from '../adminPage/category';
import UpdateProduct from '../adminPage/updateProduct';

function Router() {
  return (
    <Routes>
      <Route path="" element={<NavFot/>} >
          <Route path="" element={<Home/>}/>
          <Route path="search/:name" element={<Search/>}/>
          <Route path="detail/:id" element={<DetailProduct/>}/>
          <Route path="cart" element={<Cart />}/>
          <Route path="pay" element={<Pay />}/>
      </Route>
      <Route path="admin" element={<MasterPage/>}>
          <Route path="" element={<ShowProduct/>} />
          <Route path="create" element={<CreateProduct/>} />
          <Route path="category" element={<Category/>} />
          <Route path="updateProduct" element={<UpdateProduct/>}/>
      </Route>
      <Route path="login" element={<FormLogin auth='login'/>}/>
      <Route path="register" element={<FormLogin auth='register'/>}/>
    </Routes>
  )
}

export default Router;
