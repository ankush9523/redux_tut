 import  {combineReducers} from "redux"

 import { cartData } from "./reducers"

 import {productData} from './productListReducer'

 export default combineReducers({cartData,productData})