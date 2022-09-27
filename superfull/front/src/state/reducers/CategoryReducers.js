import { CATEGORY_DELETE, CATEGORY_ERROR, CATEGORY_LOAD, CATEGORY_SUCCESS } from "../actionTypes/categoryTypes"



const initial={
    categories:[],
    loading:false,
    error:""
}
export const CategoryReducers=(state=initial,action)=>{
    switch(action.type){
        case CATEGORY_LOAD:
            return {
                ...state,loading:true
            }
        case CATEGORY_SUCCESS:
            return {
                ...state,loading:false,categories:action.payload
            }  
        case CATEGORY_ERROR:
            return {
                ...state,loading:false,payload:action.payload
            }      
        case CATEGORY_DELETE:
            return {
                ...state,loading:false,payload:action.payload
            }      
       default: return state
    }
}