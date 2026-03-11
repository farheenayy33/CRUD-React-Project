/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import axios from 'axios'
// insatnces creation 
export const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

export const getData=()=>{
    return api.get('/posts')
}
export const deletePost=(id)=>{
    return api.delete(`/posts/${id}`)
}
export const PostData=(item)=>{
    return api.post('/posts', item)
}
export const EditPost=(id,post)=>{
    return api.put(`/posts/${id}`, post)
}
