import React from 'react';
import './home.scss'
import Slide from './slide'
import Category from './category'
import ProductHot from './productHot'
import SaleProduct from './saleProduct'

function Home() {
  return (
    <div className="home">
      <div className="grid wide">
        <Slide/>
        <Category/>
        <ProductHot/>
        {/* <SaleProduct/> */}
      </div>
    </div>
  )
}

export default Home;
