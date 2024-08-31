import React from 'react';
import { useOrder } from '../Context/OrderContext';

const Cart = () => {
  const { orders, removeOrder } = useOrder();

  const handleRemoveOrder = (orderId) => {
    removeOrder(orderId);
  };

  const calculateTotalPrice = () => {
    return orders.reduce((total, order) => total + parseFloat(order.price.replace('$', '')), 0).toFixed(2);
  };

  return (
    <div className="container mx-auto p-4 w-100 h-100">
      <h2 className="text-4xl font-bold text-center mb-8">Your Order</h2>
      <div className="grid grid-cols-1 gap-8">
        {orders.map((order) => (
          <div key={order.id} className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">{order.title}</h3>
            <img src={order.image} alt={order.title} className="w-10 h-30 object-cover rounded-t-lg"/>
            <p className="text-gray-700 mb-4">{order.description}</p>
            <p className="text-gray-900 font-bold">{order.price}</p>
            <button
              className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
              onClick={() => handleRemoveOrder(order.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="text-2xl font-bold text-center mt-8">
        Total Price: ${calculateTotalPrice()}
      </div>
    </div>
  );
};

export default Cart;