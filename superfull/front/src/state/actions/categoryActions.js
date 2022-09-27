import axios from 'axios'
import { CATEGORY_ERROR, CATEGORY_LOAD, CATEGORY_SUCCESS } from '../actionTypes/categoryTypes'

export const getCategories = ()=>{
    return async (dispatch)=>{ 
       
       dispatch({
           type:CATEGORY_LOAD
       })
      try {
        const {data}= await axios.get(`https://fullwebweb.herokuapp.com/category`)
        // console.log("action daxili",data)
     
        dispatch({
            type:CATEGORY_SUCCESS,
            payload:data
        })
      } catch (error) {
        dispatch({
            type:CATEGORY_ERROR,
            payload:"xeta"
        })
      }

}
}