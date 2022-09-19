import {Product_List} from "../constants"

export const productData =(data=[],action)=>{
    console.warn("product list data",data)

    switch(action.type)
    {
        case Product_List:
            console.warn("product list called",action )
            return [action.data]
            default:
                return []
    }

}

