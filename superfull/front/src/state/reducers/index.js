import { combineReducers } from "redux";
import { CategoryReducers } from "./CategoryReducers";
import { ProductReducers } from "./ProductReducers";

export const RootReducer = combineReducers({
    products:ProductReducers,
    categories:CategoryReducers
})