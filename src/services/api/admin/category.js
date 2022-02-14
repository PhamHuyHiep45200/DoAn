import {createApiRequest} from '../../api'

export const getCategory=()=>{
    return createApiRequest({
        method: 'GET',
        url:'/admin/category'
    })
}

export const createCategory=(name)=>{
    return createApiRequest({
        method: 'POST',
        url:'/admin/category',
        data:{name}
    })
}
export const getUpdateCategory=(id)=>{
    return createApiRequest({
        method: 'POST',
        url:'/admin/category/getUpdate',
        data:{id}
    })
}
export const updateCategory=(id,name)=>{
    return createApiRequest({
        method: 'POST',
        url:'/admin/category/update',
        data:{id,name}
    })
}
export const deleteCategory=(id)=>{
    return createApiRequest({
        method: 'GET',
        url:`/admin/category/delete/${id}`
    })
}