import React, { useState } from 'react';
import Cart from './components/Cart';
import Payment from './components/Payment';

function App() {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: 'Product 1', price: 50 },
    { id: 2, name: 'Product 2', price: 30 },
    { id: 3, name: 'Product 3', price: 20 }
  ];

  const addToCart = (product) => {
    const existing = cart.find(p => p.id === product.id);
    if (existing) {
      setCart(cart.map(p => p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increment = (id) => {
    setCart(cart.map(p => p.id === id ? { ...p, quantity: p.quantity + 1 } : p));
  };

  const decrement = (id) => {
    setCart(cart.map(p => p.id === id && p.quantity > 1 ? { ...p, quantity: p.quantity - 1 } : p));
  };

  const removeItem = (id) => {
    setCart(cart.filter(p => p.id !== id));
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">My Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Products</h2>
          {products.map(product => (
            <div key={product.id} className="bg-white shadow p-4 mb-2 rounded-md">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p>?{product.price}</p>
              <button className="mt-2 px-3 py-1 bg-blue-600 text-white rounded" onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <Cart cart={cart} increment={increment} decrement={decrement} removeItem={removeItem} />
      </div>
      <Payment cart={cart} />
    </div>
  );
}

export default App;
