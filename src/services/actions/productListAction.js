import { Product_List } from "../constants"

export const productList =()=>{
    let data ="hello"
    console.warn("productActionList called",data)
    return{
        type: Product_List,
        data
    }

}