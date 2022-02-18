import React,{useEffect, useRef, useState} from 'react';
import style from './category.module.scss'
import clsx from 'clsx'
import { Modal } from 'antd';
import {EditOutlined,DeleteOutlined} from '@ant-design/icons'
import UpCategory from './updateCategory';
import {getCategory,createCategory,deleteCategory} from '../../services/api/admin/category'
import { ToastContainer, toast } from 'react-toastify';

function Category() {
  const ref=useRef()
  const [modal,setModal]= useState(false)
  const [id,setId]=useState('')
  const [input,setInput]=useState({name:''})
  const [category,setCategory]=useState([])
  const [deleteCate,setDeleteCate]=useState({id:'',index:0})
  const [visible, setVisible] =useState(false);
  const [confirmLoading, setConfirmLoading] =useState(false);
  const [modalText, setModalText] =useState('Bạn có chắc chắn muốn xóa Hãng điện thoại này?');

  useEffect(()=>{
    const getCate= async ()=>{
      const {success,data}= await getCategory()
      if(success){
        setCategory(data.data)
      }
    }
    return getCate()
  },[])
  const showModal = (id,index) => {
    setVisible(true);
    setDeleteCate({id:id,index:index})
  };

  const handleOk = async (id,index) => {
    const {success} =await deleteCategory(id)
    if(success){
      category.splice(index,1)
      setCategory(category)
      setVisible(false);
    }
      // setConfirmLoading(false);
    }

  const handleInput=(e)=>{
    setInput({...input,[e.target.name]:e.target.value})
  }
  const handleSubmit= async (e)=>{
    e.preventDefault()
    const {success,data}= await createCategory(input.name)
    if(success){
      notify()
      const datas=data.data
      setCategory([...category,datas])
      setInput({name:''})
      ref.current.focus()
    }
  }
  const handleModel=(id)=>{
    setModal(true)
    setId(id)
  }
  const handleCancel = () => {
    setVisible(false);
  };
  const notify = () => toast("Thêm thành công !");
  return (
      <div className={clsx(style.formOut,'row')}>
          <h3 className={clsx(style.h3,"col l-12")}>Category</h3>
          <form className='col l-6' onSubmit={handleSubmit}>
            <div className={style.formAdd}>
              <input 
                ref={ref}
                placeholder='nhập hãng mới' 
                className={style.input} 
                required
                name="name"
                value={input.name} 
                onChange={handleInput}
                autoComplete='off'
              />
              <button type='submit' className={style.btnPrimary}>Thêm mới</button>
            </div>
          </form>
          <div className='col l-6'>
            <div className={clsx(style.header,'row')}>
              <span className={clsx(style.hName,'col l-6')}>Tên Hãng</span>
              <span className={clsx(style.hUpdate,'col l-3')}>Sửa</span>
              <span className={clsx(style.hDelete,'col l-3')}>Xóa</span>
            </div>
            {category.map((cates,index)=>(
              <div key={index} className={clsx(style.main,'row')}>
                <span className={clsx(style.mName,'col l-6')}>{cates.name}</span>
                <span className={clsx(style.mUpdate,'col l-3')}>
                  <EditOutlined className={style.iconUpdate} onClick={()=>handleModel(cates._id)}/>
                </span>
                <span className={clsx(style.mDelete,'col l-3')}>
                  <DeleteOutlined className={style.iconDelete} onClick={()=>showModal(cates._id,index)}/>
                </span>
              </div>
            ))}
          </div>
          {modal&&<UpCategory setModal={setModal} id={id}/>}
          <Modal animation={false}
            title="Xóa sản phẩm?"
            visible={visible}
            onOk={()=>handleOk(deleteCate.id,deleteCate.index)}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
          >
            <p>{modalText}</p>
          </Modal>
          <div>
            <ToastContainer />
          </div>
      </div>
  )
}

export default Category;
