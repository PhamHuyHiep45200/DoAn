import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import style from './register.module.scss'
import {register} from '../../services/api/login'

function Register() {
  const navigate=useNavigate()
  const [note,setNote]=useState('');
  const [email,setEmail]=useState('');
  const [input,setInput]=useState({
    name:'',
    email:'',
    password:'',
    retypePassword:'',
  })
  const handleChange=(e)=>{
    setInput({...input,[e.target.name]:e.target.value})
    setNote('')
    setEmail('')
  }
  const handleSubmit= async(e)=>{
    e.preventDefault()
    if(input.password!==input.retypePassword)
    {
      return setNote('Mật khẩu không trùng khớp')
    }
    const {success,data}=await register(input.name,input.email,input.password)
    if(success){
      if(!data.data.success){
        return setEmail(data.data.description)
      }
      alert(data.data.description)
      navigate('/login')
    }
  }
  return (
    <div className={style.private} >
        <h3 className={style.header}>Đăng kí</h3>
        <form className={style.info} onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Họ Tên" 
            name="name" 
            className={style.input}
            required
            autoComplete='off'
            onChange={handleChange}
          />
          <input 
           type="Email" 
           placeholder="email" 
           name="email" 
           className={style.input}
           required
           autoComplete='off'
           onChange={handleChange}
          />
          <span className={style.note}>{email}</span>
          <input 
           type="passWord" 
           placeholder="password" 
           name="password" 
           className={style.input}
           required
           autoComplete='off'
           onChange={handleChange}
          />
          <input 
           type="passWord" 
           placeholder="Nhập lại password" 
           name="retypePassword" 
           className={style.input}
           required
           autoComplete='off'
           onChange={handleChange}
          />
          <span className={style.note}>{note?note:''}</span>
          <button type="submit" className={style.btnRegister}>Đăng kí</button>
          <span className={style.forgot}>Quên mật khẩu</span>
        </form>
    </div>
  )
}

export default Register;
