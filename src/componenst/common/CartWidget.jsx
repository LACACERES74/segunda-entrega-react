import React from 'react';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    <Link to="/cart">
       🛒 <span> 10 </span>
    </Link>
  )
}

export default CartWidget
