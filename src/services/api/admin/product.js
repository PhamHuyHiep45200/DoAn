import {createApiRequest} from '../index'


export const getShow = ()=>{
    return createApiRequest({
        method: 'GET',
        url: '/admin'
    })
}
export const createProduct = (name,img,price,sale,quantity,tym,category,description,screen,chip,ram,rom,camera,pin)=>{
    return createApiRequest({
        method: 'POST',
        url: '/admin/product',
        data:{name,img,price,sale,quantity,tym,category,description,screen,chip,ram,rom,camera,pin}
    })
}

export const getUpdate = (id)=>{
    return createApiRequest({
        method: 'GET',
        url: `/admin/updateProduct/${id}`
    })
}
export const UpdateProduct = (id,name,img,price,sale,quantity,tym,category,description,screen,chip,ram,rom,camera,pin)=>{
    return createApiRequest({
        method: 'POST',
        url: `/admin/updateProduct/${id}`,
        data:{name,img,price,sale,quantity,tym,category,description,screen,chip,ram,rom,camera,pin}
    })
}

export const deleteProduct = (id)=>{
    return createApiRequest({
        method: 'POST',
        url: '/admin/deleteProduct',
        data:{id}
    })
}