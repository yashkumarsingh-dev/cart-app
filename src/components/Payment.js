import React from 'react';

const Payment = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="mt-6 p-4 bg-white shadow rounded-md max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-2">Payment</h2>
      <p>Total: ?{total}</p>
      <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Proceed to Pay</button>
    </div>
  );
};

export default Payment;
