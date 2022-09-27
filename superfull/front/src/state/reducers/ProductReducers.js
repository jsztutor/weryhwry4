import { PRODUCT_ERROR, PRODUCT_LOAD, PRODUCT_SUCCESS, PRODUCT_UPDATE } from "../actionTypes/productsTypes"


const initial={
    products:[],
    loading:false,
    error:""
}
export const ProductReducers=(state=initial,action)=>{
    switch(action.type){
        case PRODUCT_LOAD:
            return {
                ...state,loading:true,
            }
        case PRODUCT_SUCCESS:
            return {
                ...state,loading:false,products:action.payload
            }
        case PRODUCT_ERROR:
            return {
                ...state,payload:action.payload
            }
        case PRODUCT_UPDATE:
            return {
                ...state,payload:action.payload
            }
       default: return state
    }
}