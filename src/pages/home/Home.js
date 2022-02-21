import React,{useContext} from 'react';
import './home.scss'
import Slide from './slide'
import Category from './category'
import ProductHot from './productHot'
import SaleProduct from './saleProduct'
import { LoginProvider } from '../../App';

function Home() {
  // const {setIsLoadding}=useContext(LoginProvider)
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
