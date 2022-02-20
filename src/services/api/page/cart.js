import {createApiRequest} from '../index'

export const addCart=(proID,nameCart,imgCart,priceCart,quantityCart,idUserCart)=>{
    return createApiRequest({
        method: 'POST',
        url: '/cart',
        data: {proID,nameCart,imgCart,priceCart,quantityCart,idUserCart}
    })
}

export const getCart=(id)=>{
    return createApiRequest({
        method: 'GET',
        url: `/cart/${id}`,
    })
}