import React from "react";
import { addToCart, emptyCart, moveFromCart } from '../services/actions/action'
import {useDispatch} from 'react-redux'
import { productList } from "../services/actions/productListAction";

function Main() {

    const dispatch = useDispatch();
  
    const product ={
      name: "I phone",
      color: "Black",
      price: 10000
    }
    return (
      <div className="App">
        <button onClick={()=>dispatch(addToCart(product))}>Add TO Cart</button>
        <button onClick={()=>dispatch(moveFromCart(product))}>Move From Cart</button>
        <button onClick={()=>dispatch(emptyCart())}>Empty Cart</button>
        <button onClick={()=>dispatch(productList())}>Product list</button>
        
      </div>
    );
  }
  
  export default Main;
  