import React,{useEffect, useState} from 'react';
import {useParams,useNavigate} from 'react-router-dom'
import style from './updateProduct.module.scss'
import clsx from 'clsx'
import {storage} from '../../firebase'
import {ref,uploadBytesResumable,getDownloadURL} from '@firebase/storage'
import {getUpdate,UpdateProduct} from '../../services/api/admin/product'

function CreateProduct() {
    const [img,setImg]=useState('')
    const [dataUp,setDataUp]=useState([])
    const {id}=useParams()
    const navigate=useNavigate()

    useEffect(()=>{
      const get=async()=>{
        const{success,data}=await getUpdate(id)
        if(success){
          setDataUp(data.data[0])
          setImg(dataUp.img)
          console.log(data.data[0]);
        }
      }
      return get()
    },[])
    const handleImg=(e)=>{
      setImg(URL.createObjectURL(e.target.files[0]))
      //lưu ảnh firebase
      const file=e.target.files[0]
      console.log(img);
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
             console.log(URL);
          });
        }
      );
    }

    const handleInput=(e)=>{
      setDataUp({...dataUp,[e.target.name]:e.target.value});
    }

    const handleSubmit=async(e)=>{
      e.preventDefault();
      const {success,data}=await UpdateProduct(
        dataUp._id,
        dataUp.name,
        img?img:dataUp.img,
        +dataUp.price,
        +dataUp.sale,
        +dataUp.tym,
        +dataUp.quantity,
        dataUp.category,
        dataUp.description,
        dataUp.screen,
        dataUp.chip,
        dataUp.ram,
        dataUp.rom,
        dataUp.camera,
        dataUp.pin,
      )
      if(success){
        navigate('/admin')
      }
    }
  return (
      <div className={style.create}>
        <form className='row' onSubmit={handleSubmit}>
          <h3 className={clsx(style.h3,"col l-12")}>Update Product</h3>
          <div className={clsx(style.formLeft,'col l-6')}>
            <span>sản phẩm</span>
            <input 
              placeholder="Tên" 
              className={style.input} 
              name="name"
              autoComplete='off'
              required
              defaultValue={dataUp.name}
              onChange={handleInput}
            />
            <div className={style.outImg}>
              <span className={style.textImg}>Chọn ảnh : </span>
              <input 
                type="file" 
                name="img"
                onChange={(e)=>{handleImg(e)}}
              />
            </div>
            <img src={img?img:dataUp.img} className={style.img}/>
            <input 
              placeholder="Giá" 
              className={style.input} 
              name="price"
              autoComplete='off'
              required
              defaultValue={dataUp.price}
              onChange={handleInput}
            />
            <input 
              placeholder="Giảm giá" 
              className={style.input} 
              name="sale"
              autoComplete='off'
              required
              defaultValue={dataUp.sale}
              onChange={handleInput}
            />
            <input 
              placeholder="Số lượng" 
              className={style.input} 
              name="quantity"
              autoComplete='off'
              required
              defaultValue={dataUp.quantity}
              onChange={handleInput}
            />
            <input 
              placeholder="Lượt thích" 
              className={style.input} 
              name="tym"
              autoComplete='off'
              required
              defaultValue={dataUp.tym}
              onChange={handleInput}
            />
            <input 
              placeholder="Hãng" 
              className={style.input} 
              name="category"
              autoComplete='off'
              required
              defaultValue={dataUp.category}
              onChange={handleInput}
            />
            <textarea 
              placeholder="Mô tả" 
              className={style.input} 
              name="description" 
              autoComplete='off'
              required
              defaultValue={dataUp.description}
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
              autoComplete='off'
              required
              defaultValue={dataUp.screen}
              onChange={handleInput}
            />
            <input 
              placeholder="Chip" 
              className={style.input} 
              name="chip"
              autoComplete='off'
              required
              defaultValue={dataUp.chip}
              onChange={handleInput}
            />
            <input 
              placeholder="Ram" 
              className={style.input} 
              name="ram"
              autoComplete='off'
              required
              defaultValue={dataUp.ram}
              onChange={handleInput}
            />
            <input 
              placeholder="Rom" 
              className={style.input} 
              name="rom"
              autoComplete='off'
              required
              defaultValue={dataUp.rom}
              onChange={handleInput}
            />
            <input 
              placeholder="Camera" 
              className={style.input} 
              name="camera"
              autoComplete='off'
              required
              defaultValue={dataUp.camera}
              onChange={handleInput}
            />
            <input 
              placeholder="Pin sạc" 
              className={style.input} 
              name="pin"
              autoComplete='off'
              required
              defaultValue={dataUp.pin}
              onChange={handleInput}
            />
          </div>
          <div className={style.btnForm}>
            <button className={style.btn}>Update</button>
          </div>
        </form>
      </div>
  )
}
export default CreateProduct;
