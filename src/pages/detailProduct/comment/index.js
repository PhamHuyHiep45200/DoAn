import React from 'react';
import {QuestionCircleOutlined,LikeOutlined} from '@ant-design/icons'
import style from './comment.module.scss'
import clsx from 'clsx'
import AnhDaiDien from '../../../img/anhdaidiien.jpg'


function CommentProduct() {
  return (
    <div className={style.comment}>
      <h3 className={style.header}>
        <QuestionCircleOutlined  className={style.questionIcon}/>
        Góc hỏi đáp về sản phẩm
      </h3>
      {/* <div className={style.writingComment}>
        <form className={style.formWriting}>
          <input type="text" className={style.input}/>
          <button type="submit" className={style.btnSend}>Gửi</button>
        </form>
      </div> */}
      <div className={clsx(style.mainComment,'row')}>
        <div className={clsx(style.outAvatar,'col l-1')}>
          <img src={AnhDaiDien} className={style.avatar}/>
        </div>
        <div className={clsx(style.info,'col l-11')}>
          <div className={style.outTime}>
            <span className={style.name}>Phạm huy Hiệp</span>
            <span className={style.createAtTime}>1 giờ trước</span>
          </div>
          <span className={style.option}>Loại màu: Đen</span>
          <p className={style.content}>Điện thoại rất đẹp và mượt</p>
          <span className={style.like}>
            10
            <LikeOutlined className={style.iconLike}/>
          </span>
        </div>
      </div>
    </div>
  )
}

export default CommentProduct;
