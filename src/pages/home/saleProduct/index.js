import React from 'react';
import {FcFlashOn} from 'react-icons/fc'
import './saleProduct.scss'

function SaleProduct() {
  return (
      <div className="saleProduct">
        <div className="saleProduct_header">
          <span className="saleProduct_header_text">HOT</span>
          <FcFlashOn className="saleProduct_header_icon"/>
        </div>
        <div className="saleProduct_main row">
          <div className="saleProduct_main_product col l-24">
            
          </div>
        </div>
      </div>
  )
}

export default SaleProduct;
