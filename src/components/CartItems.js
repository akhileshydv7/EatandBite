import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { CLD_URL } from '../utils/constants';

const CartItems = ({ cartItems }) => {
    console.log(cartItems);
    const dispatch = useDispatch();

    return (
        <div className=''>

        </div>
    )
}

export default CartItems