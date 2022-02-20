import React,{ createContext } from "react";
import {login} from '../services/api/login'

export const LoginProvider=createContext()
function ContextProvider({child}) {
    const LoginForm=async (email,password)=>{
        const {success,data}=await login(email,password)
        try {
            if(success){
                return data.data
            }
        }catch(err) {
            console.log('erro',err);
        }
    }
    const loginForm={LoginForm}
    return (
        <LoginProvider.Provider value={{ loginForm }}>
            {child}
        </LoginProvider.Provider>
    )
}

export default ContextProvider