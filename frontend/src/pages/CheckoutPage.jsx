import React, { useState } from 'react';
import { useCartStore } from '../store/UseCartStore';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const cartItems = useCartStore(state => state.items);
  const cartTotal = cartItems.reduce((total, item) => total + parseInt(item.price) * item.quantity, 0);
  const [formData, setFormData] = useState({ name: '', email: '', address: '', city: '', zip: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrate Stripe here
    alert('Proceeding to payment...');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Checkout</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h3 className="text-xl font-semibold">Shipping Details</h3>
          <div>
            <label className="block mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-3 py-2 rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-3 py-2 rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-3 py-2 rounded"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block mb-1">ZIP Code</label>
              <input
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded"
              />
            </div>
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-primary text-white rounded"
          >
            Proceed to Payment
          </button>
        </form>
        <div>
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <ul className="space-y-2 mb-4">
            {cartItems.map(item => (
              <li key={item.id} className="flex justify-between">
                <span>{item.name} x {item.quantity}</span>
                <span>Nrs. {parseInt(item.price) * item.quantity}</span>
              </li>
            ))}
          </ul>
          <div className="border-t border-gray-300 pt-4">
            <span className="font-bold">Total: Nrs. {cartTotal}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
