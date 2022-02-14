import React,{ useEffect, useState} from 'react';
import {LeftOutlined,RightOutlined} from '@ant-design/icons'
import './slide.scss'
import Slide1 from '../../../img/slide1.jpg'
import Slide2 from '../../../img/slide2.png'
import Slide3 from '../../../img/slide3.jpg'
import Slide4 from '../../../img/slide4.jpg'

const arr=[Slide1,Slide2,Slide3]
function Slide() {  
  const [current,setCurrent] =useState(0)
  const max=arr.length
  
  useEffect(()=>{
    const ressettime =setTimeout(()=>{
      handleNext()
    },3000)
    return ()=>{
      clearTimeout(ressettime)
    }
  },[current])
  const handlePrev=()=>{
    setCurrent(current === 0 ? (max-1) : current - 1)
  }
  const handleNext=()=>{
    setCurrent(current === (max-1) ? 0 : current + 1)
  }
  return (
      <div className="slide">
          <div className="row">
            <div className="slide_left col l-8">
              <div className="slide_left_outIconP">
                <LeftOutlined onClick={handlePrev} className="slide_left_outIconP_iconPrev" />
              </div>
              <div className='slide_left_outIconN'>
                <RightOutlined onClick={handleNext} className="slide_left_outIconN_iconNext"/>
              </div>
              {arr.map((a,index)=>(
                <img key={index} src={a} alt='ảnh' className={index===current?"slide_left_img":"slide_left_imgNone"}/>
              ))}
              <div className="slide_left_test">
                {arr.map((a,index)=>(
                  <li key={index} className={index===current?"slide_left_test_liDot":"slide_left_test_li"}></li>
                ))}
              </div>
            </div>
            <div className="slide_right col l-4">
              <img src={Slide4} alt='ảnh' className="slide_right_img"/>
            </div>
          </div>
      </div>
  )
}

export default Slide;
