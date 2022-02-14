import {createApiRequest} from '../../api'

export const getProducHot=() =>{
    return createApiRequest({
        method: 'GET',
        url:'/',
    })
}

export const getDetailProduct=(id) =>{
    return createApiRequest({
        method: 'GET',
        url:`/detailProduct/${id}`,
    })
}

export const getSearch=(name) =>{
    return createApiRequest({
        method: 'GET',
        url:`/search/${name}`,
    })
}
