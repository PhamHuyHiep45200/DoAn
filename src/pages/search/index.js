import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom'
import style from './search.module.scss'
import {BsHourglassSplit} from 'react-icons/bs'
import clsx from 'clsx'
import { getSearch } from '../../services/api/page';

function Search() {
  const {name}=useParams()
  const [dataSearch,setDataSearch]=useState([])
  useEffect(()=>{
    const search = async ()=>{
      const {success,data}=await getSearch(name)
      if(success){
        setDataSearch(data.data)
      }
    }
    return search()
  },[])
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
      <div className={style.search}>
        <div className="grid wide">
            <span className={style.result}><BsHourglassSplit className={style.iconSearch}/>Có {dataSearch.length} sản phẩm được tìm kiếm từ {name}</span>
            <div className={style.option}>
              <span className={style.text}>Sắp xếp theo</span>
              <div className={style.reduction}>Giảm dần theo giá</div>
              <div className={style.increase}>Tăng dần theo giá</div>
            </div>
            <div className={clsx(style.Main,'row')}>
              {dataSearch.map((datas) =>(
                <Link key={datas._id} to={`/detail/${datas._id}`} className={clsx(style.link,'col l-24')}>
                  <div className={style.product}>
                    <div className={style.out}>
                      <img src={datas.img} className={style.img}/>
                    </div>
                    <div className={style.description}>
                      <span className={style.name}>{datas.name}</span>
                      <div className={style.price}>
                        <span className={style.sale}>{numberWithCommas(datas.price)}<span className="unit">đ</span></span>
                        <span className={style.standard}>{numberWithCommas(datas.price-(datas.price*datas.sale)/100)}<span className="unit">đ</span></span>
                      </div>
                      <div className={style.cmt}>
                        <span className={style.sell}>{datas.quantity}</span>
                        <span className={style.comment}>đánh giá 145</span>
                      </div>
                    </div>
                    <span className={style.saleReal}>-{datas.sale}%</span>
                    <span className={style.categoryReal}>{datas.category}</span>
                  </div>
                </Link>
              ))}
            </div>
        </div>
      </div>
  )
}

export default Search;
