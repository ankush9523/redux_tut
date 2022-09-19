 import '../App.css'
 import React from 'react';
 import {useSelector} from 'react-redux';

 function Header(){

    const result = useSelector((state)=>state.cartData);

    console.warn("cardata called",result)

    return(
        <>
            <div className='header'>
                <div className='cart-div'>
                <span>{result.length}</span>
                <img src='https://cdn-icons-png.flaticon.com/512/1413/1413908.png' alt='cart_icon'/>
                </div>
            </div>
        </>
    )
 }
 export default Header;