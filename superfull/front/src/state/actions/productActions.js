import axios from 'axios'
import { CATEGORY_CREAT, CATEGORY_DELETE } from '../actionTypes/categoryTypes'
import { CATEGORY_UPDATE, PRODUCT_ERROR, PRODUCT_LOAD, PRODUCT_SUCCESS, PRODUCT_UPDATE } from '../actionTypes/productsTypes'


//read 
export const getProducts = ()=>{
    return async (dispatch)=>{ 
       
       dispatch({
           type:PRODUCT_LOAD
       })
      try {
        const {data}= await axios.get(`https://fullwebweb.herokuapp.com/`)
        // console.log("action daxili",res.data)
     
        dispatch({
            type:PRODUCT_SUCCESS,
            payload:data
        })
      } catch (error) {
        dispatch({
            type:PRODUCT_ERROR,
            payload:"xeta"
        })
      }

}
}
// create
export const createProducts =(obj)=>{
  return async (dispatch)=>{
       try {
         const {data} = await axios.post('https://fullwebweb.herokuapp.com/',obj)
         console.log(data)
        dispatch({
           type:CATEGORY_CREAT,
           payload: data
        })
       } catch (error) {
         
       }
  }
}
// delete 
export const deleteProduct =(id)=>{
   return async (dispatch)=>{
    const {data} = await axios.delete(`https://fullwebweb.herokuapp.com/${Number(id)}`)
    console.log("ayu",data)
     try {
      
       dispatch({
        type:CATEGORY_DELETE,
         payload:data
       })
     } catch (error) {
       console.log('error')
     }
   }
}

// update

export const updateProducts =(obj,id)=>{
  return async (dispatch)=>{
       try {
         const {data} = await axios.put(`https://fullwebweb.herokuapp.com/${id}`,obj)
         console.log(data)
        dispatch({
           type:PRODUCT_UPDATE,
           payload: data
        })
       } catch (error) {
         
       }
  }
}

