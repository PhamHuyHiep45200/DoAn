import React, { useEffect,useState } from 'react';
import { EditOutlined,DeleteOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import { getShow,deleteProduct } from '../../services/api/admin/product';
import {Link} from 'react-router-dom'
import style from './show.module.scss'
import clsx from 'clsx'

function ShowProduct() {
  const [product,setProduct]=useState([])
  const [deletePro,setDeletePro]=useState({id:'',index:0})
  const [visible, setVisible] =useState(false);
  const [confirmLoading, setConfirmLoading] =useState(false);
  const [modalText, setModalText] =useState('Bạn có chắc chắn muốn xóa sản phẩm này?');
    useEffect(()=>{
        const show=async ()=>{
            const {success,data}= await getShow()
            if(success){
                setProduct(data.data)
            }
        }
    return show()
    },[])

    const showModal = (id,index) => {
      setVisible(true);
      setDeletePro({id:id,index:index})
    };
  
    const handleOk = async (id,index) => {
      const {success}=await deleteProduct(id)
      if(success){
        product.splice(index,1)
        setProduct(product)
        setVisible(false);
        // setConfirmLoading(false);
      }
    };
  
    const handleCancel = () => {
      setVisible(false);
    };
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  return (
      <div className={style.product}>
          <div className={style.table}>
            <div className={clsx(style.th,"row")}>
              <span className='col l-1'>STT</span>
              <span className='col l-3'>Ảnh</span>
              <span className={clsx(style.name,'col l-4')}>Tên</span>
              <span className='col l-2'>Giá</span>
              <span className='col l-1'>Sửa</span>
              <span className='col l-1'>Xóa</span>
            </div>
            
            {product.map((pro,index)=>(
              <div key={index} className={clsx(style.th,"row")}>
                <span className='col l-1'>{index+1}</span>
                <span className='col l-3'>
                  <img src={pro.img} className={style.imgProduct}/>
                </span>
                <span className={clsx(style.name,'col l-4')}>{pro.name}</span>
                <span className={clsx(style.priceProduct,'col l-2')}>{numberWithCommas(pro.price-(pro.price*pro.sale)/100)}đ</span>
                <span className='col l-1'>
                  <Link to={`/admin/updateProduct/${pro._id}`}><EditOutlined/></Link>
                </span>
                <span className='col l-1'>
                  <DeleteOutlined onClick={()=>showModal(pro._id,index)}/>
                </span>
              </div>
            ))}
          </div>
          <Modal animation={false}
            title="Xóa sản phẩm?"
            visible={visible}
            onOk={()=>handleOk(deletePro.id,deletePro.index)}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
          >
            <p>{modalText}</p>
          </Modal>
      </div>
  )
}

export default ShowProduct;
