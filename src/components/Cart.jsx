

import React, { useContext } from 'react';
import { ShoppingCartContext } from '../context/ShoppingCartContext';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(ShoppingCartContext);

  const handleCheckout = () => {
  
    alert('Proceeding to checkout!');
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <div>
                  <h3>{item.name}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div>
            <p>Total Items: {cart.reduce((total, item) => total + item.quantity, 0)}</p>
            <p>Total Cost: ${calculateTotal().toFixed(2)}</p>
            <button onClick={clearCart}>Clear Cart</button>
            <button onClick={handleCheckout}>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
