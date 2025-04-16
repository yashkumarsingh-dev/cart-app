import React from 'react';

const Cart = ({ cart, increment, decrement, removeItem }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map(item => (
          <div key={item.id} className="bg-white shadow p-4 mb-2 rounded-md">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p>?{item.price} x {item.quantity}</p>
            <div className="flex items-center gap-2 mt-2">
              <button onClick={() => decrement(item.id)} className="px-2 bg-gray-300 rounded">-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increment(item.id)} className="px-2 bg-gray-300 rounded">+</button>
              <button onClick={() => removeItem(item.id)} className="ml-auto px-3 bg-red-500 text-white rounded">Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
