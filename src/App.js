import Router from './router/router';
// import ContextProvider from './provider/userProvider'
import {login} from './services/api/login'
import { createContext, useEffect, useState } from 'react';
// import {getCart} from './services/api/page/cart'

export const LoginProvider=createContext()

function App() {
  const [user,setUser]=useState({})

  const LoginForm=async (email,password)=>{
    const {success,data}=await login(email,password)
    try {
        if(success){
          setUser(data.data)
          return data.data
        }
    }catch(err) {
        console.log('erro',err);
    }
  }
  
  // console.log(dataCart);
  return (
    <LoginProvider.Provider value={{ LoginForm,user }}>
      <Router/>
    </LoginProvider.Provider>
  );
}

export default App;
