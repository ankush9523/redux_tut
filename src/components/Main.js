import React from "react";
import { addToCart } from '../services/actions/action'
import {useDispatch} from 'react-redux'

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
      </div>
    );
  }
  
  export default Main;
  