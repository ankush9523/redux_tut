import { ADD_TO_CART,MOVE_FROM_CART,Empty_CART } from "../constants";
export const addToCart = (data) => {

        console.warn("action called", data);
    return {
        type: ADD_TO_CART,
        data
    }
}

export const moveFromCart = (data) => {

    console.warn("Remove from cart called", data);
return {
    type: MOVE_FROM_CART,
    data
}
}

export const emptyCart = () => {

    console.warn("Empty cart called");
return {
    type: Empty_CART,
}
}