
import { ADD_TO_CART, MOVE_FROM_CART, Empty_CART } from "../constants"
export const cartData = (data = [], action) => {

  console.warn("action", action)

  /*if (action.type === ADD_TO_CART)
  {
      console.warn("reducer called", action)
      return action.data
  }
  else{
       return "no action matched";

  }*/

  switch (action.type) {
    case ADD_TO_CART:
      console.warn("reducer called", action.data)
      return [action.data, ...data];
    default:
      return data;

    case MOVE_FROM_CART:
      console.warn("move cart called", data)
      
     data.length=data.length?data.length-1:[]
     return [...data]

    case Empty_CART:
      console.warn("empty cart called")
      data=[]
      return data;

  }

}