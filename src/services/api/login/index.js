import {createApiRequest} from '../../api'

export const login=(email,password) => {
    return createApiRequest({
        method: 'POST',
        url:'/login',
        data:{email,password}
    })
}
export const register=(name,email,password) => {
    return createApiRequest({
        method: 'POST',
        url:'/register',
        data:{name,email,password}
    })
}