import React, { useEffect,useState } from 'react';
import style from './updateCate.module.scss'
import {useNavigate} from 'react-router-dom'
import {CloseOutlined} from '@ant-design/icons'
import {getUpdateCategory,updateCategory} from '../../../services/api/admin/category'
import { ToastContainer, toast } from 'react-toastify';

function UpCategory({setModal,id}) {
  const [dataGet,setDataget]=useState([])
  const [cate,setCate]=useState('')
  const navigate=useNavigate()
  const notify = () => toast("Update thành công !");
  useEffect(()=>{
    const getUpdate= async()=>{
      const {success,data}=await getUpdateCategory(id)
      if(success){
        setDataget(data.data);
        setCate(data.data.name)
      }
    }
    return getUpdate()
  },[])
  const handleUpdate=async(e)=>{
    e.preventDefault();
    const {success,data}= await updateCategory(id,cate)
    if(success)
    {
      notify()
      setModal(false)
      navigate('/admin/category')
    }
  }
  return (
      <>
        <div className={style.update}></div>
        <div className={style.outForm}>
            <form className={style.formUp} onSubmit={handleUpdate}>
              <CloseOutlined className={style.icon} onClick={()=>setModal(false)}/>
              <input 
                placeholder='tên hãng ' 
                className={style.input}
                defaultValue={dataGet.name}
                required
                onChange={(e)=>setCate(e.target.value)}
              />
              <button type='submit' class={style.btnPrimary}>Update</button>
            </form>
        </div>
        <div>
          <ToastContainer />
        </div>
      </>
  )
}

export default UpCategory;
