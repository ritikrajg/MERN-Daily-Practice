import React from 'react'
import { useSelector } from 'react-redux'
import Empty from '../components/Empty'
import Items from '../components/Items'

const Cart = () => {
  const { items } = useSelector((state) => state.cart);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Shopping Cart</h1>
      {items.length > 0 ?  <Items />:<Empty /> }
    </div>
  )
}

export default Cart;
