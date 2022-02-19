import React,{useEffect, useState} from 'react';
import style from './create.module.scss'
import clsx from 'clsx'
import {useNavigate} from 'react-router-dom'
import {storage} from '../../firebase'
import {ref,uploadBytesResumable,getDownloadURL} from '@firebase/storage'
import {createProduct,getShow} from '../../services/api/admin/product.js'
import { ToastContainer, toast } from 'react-toastify';

function CreateProduct() {
    const [imgProduct,setImgProduct]=useState([])
    const [img,setImg]=useState('')
    const navigate=useNavigate()
    const [input,setInput]=useState({
      name:'',
      price:'',
      sale:'',
      tym:'',
      quantity:'',
      category:'',
      description:'',
      screen:'',
      chip:'',
      ram:'',
      rom:'',
      camera:'',
      pin:'',
    })

    const notify = () => toast("Thêm sản phẩm thành công !");
    useEffect(()=>{
      const show= async ()=>{
       await getShow()
      }
      return ()=>{
        show()
        imgProduct&&URL.revokeObjectURL(imgProduct)
      }
    },[imgProduct])

    const handleImg=(e)=>{
      setImgProduct(URL.createObjectURL(e.target.files[0]))
      //lưu ảnh firebase
      const file=e.target.files[0]
      const storageRef=ref(storage,`/file/${file.name}`)
      const uploadTask=uploadBytesResumable(storageRef,file)
      uploadTask.on('state_changed', 
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
        }, 
        (error) => {
          console.log(error);
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((URL) => {
             setImg(URL)
          });
        }
      );
    }
    const handleInput=(e)=>{
      setInput({...input,[e.target.name]:e.target.value})
    }
    const handleSubmit= async (e)=>{
      e.preventDefault()
      const {success, data} = await createProduct(
        input.name,
        img,
        +input.price,
        +input.sale,
        +input.tym,
        +input.quantity,
        input.category,
        input.description,
        input.screen,
        input.chip,
        input.ram,
        input.rom,
        input.camera,
        input.pin,
      )
      if(success){
        navigate('/admin')
        notify()
      }

    }
  return (
      <div className={style.create}>
        <form className='row' onSubmit={handleSubmit}>
          <h3 className={clsx(style.h3,"col l-12")}>Product</h3>
          <div className={clsx(style.formLeft,'col l-6')}>
            <span>sản phẩm</span>
            <input 
              placeholder="Tên" 
              className={style.input} 
              name="name"
              value={input.name}
              onChange={handleInput}
              autoComplete="off"
            />
            <div className={style.outImg}>
              <span className={style.textImg}>Chọn ảnh : </span>
              <input 
                type="file" 
                name="img"
                required
                onChange={handleImg}
              />
            </div>
            <img src={imgProduct} className={style.img}/>
            <input 
              placeholder="Giá" 
              className={style.input} 
              name="price"
              type='number'
              autoComplete="off"
              value={input.price}
              onChange={handleInput}
            />
            <input 
              placeholder="Giảm giá ...%" 
              className={style.input} 
              name="sale"
              type='number'
              autoComplete="off"
              value={input.sale}
              onChange={handleInput}
            />
            <input 
              placeholder="Số lượng" 
              className={style.input} 
              name="tym"
              type='number'
              autoComplete="off"
              value={input.tym}
              onChange={handleInput}
            />
            <input 
              placeholder="Lượt thích" 
              className={style.input} 
              name="quantity"
              type='number'
              autoComplete="off"
              value={input.quantity}
              onChange={handleInput}
            />
            <input 
              placeholder="Hãng" 
              className={style.input} 
              name="category"
              autoComplete="off"
              value={input.category}
              onChange={handleInput}
            />
            <textarea 
              placeholder="Mô tả" 
              className={style.input} 
              name="description" 
              autoComplete="off"
              value={input.description}
              onChange={handleInput}
            >

            </textarea>
          </div>
          <div className={clsx(style.formRight,'col l-6')}>
            <span>cấu hình</span>
            <input 
              placeholder="Màn hình" 
              className={style.input} 
              name="screen"
              autoComplete="off"
              value={input.screen}
              onChange={handleInput}
            />
            <input 
              placeholder="Chip" 
              className={style.input} 
              name="chip"
              autoComplete="off"
              value={input.chip}
              onChange={handleInput}
            />
            <input 
              placeholder="Ram" 
              className={style.input} 
              name="ram"
              autoComplete="off"
              value={input.ram}
              onChange={handleInput}
            />
            <input 
              placeholder="Rom" 
              className={style.input} 
              name="rom"
              autoComplete="off"
              value={input.rom}
              onChange={handleInput}
            />
            <input 
              placeholder="Camera" 
              className={style.input} 
              name="camera"
              autoComplete="off"
              value={input.camera}
              onChange={handleInput}
            />
            <input 
              placeholder="Pin sạc" 
              className={style.input} 
              name="pin"
              autoComplete="off"
              value={input.pin}
              onChange={handleInput}
            />
          </div>
          <div className={style.btnForm}>
            <button className={style.btn}>Thêm sản phẩm</button>
          </div>
        </form>
        <div>
          <ToastContainer />
        </div>
      </div>
  )
}
export default CreateProduct;
