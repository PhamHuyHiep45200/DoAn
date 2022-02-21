import React, { useContext, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import style from './login.module.scss'
import {LoginProvider} from '../../App'

function Login() {
  const [input,setInput]=useState({email:'',password:'',})
  const [dataLogin,setDataLogin]=useState('')
  const navigate=useNavigate()
  const {LoginForm}=useContext(LoginProvider)

  const handleInput=(e)=>{
    setDataLogin('')
    setInput({...input,[e.target.name]:e.target.value})
  }
  const handleSubmit=async (e)=>{
    e.preventDefault()
    //loginForm
    try{
      const Login=await LoginForm(input.email,input.password)
      if(!Login.success){
        setDataLogin(Login.description);
      }
      else{
        navigate('/')
      }
      
    }catch(err){
      console.log('err',err);
    }
  }
  return (
    
      <div className={style.private}>
        <h3 className={style.header}>Đăng nhập</h3>
        <form className={style.info} onSubmit={handleSubmit}>
            <input 
              type="Email" 
              placeholder="email" 
              name="email" 
              value={input.email}
              onChange={handleInput}
              className={style.user}
              required
              autoComplete='off'
            />
            <input 
              type="passWord" 
              placeholder="password" 
              name="password" 
              value={input.password}
              onChange={handleInput}
              className={style.user}
              required
              autoComplete='off'
            />
            <span className={style.note}>{dataLogin}</span>
            <button type="submit" className={style.btnLogin}>Đăng nhập</button>
            <span className={style.forgot}>Quên mật khẩu</span>
        </form>
      </div>
  )
}

export default Login;
