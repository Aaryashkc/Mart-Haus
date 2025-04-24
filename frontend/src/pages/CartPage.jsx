import React from 'react'
import { useCartStore } from '../store/UseCartStore'
import { useNavigate } from 'react-router-dom'

const CartPage = () => {
  const cartItems = useCartStore(state => state.items)
  const removeItem = useCartStore(state => state.removeItem)
  const updateQuantity = useCartStore(state => state.updateQuantity)
  const clearCart = useCartStore(state => state.clearCart)
  const navigate = useNavigate()

  const cartTotal = cartItems.reduce((total, item) => total + parseInt(item.price) * item.quantity, 0)

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
      {cartItems.length === 0 ? (
        <div className="text-center py-10">
          <p className="mb-4">Your cart is empty.</p>
          <button onClick={() => navigate('/products')} className="px-6 py-2 bg-primary text-white rounded">Shop Products</button>
        </div>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map(item => (
              <li key={item.id} className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity < 2} className="px-2 bg-gray-200 rounded">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 bg-gray-200 rounded">+</button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-semibold">Nrs. {parseInt(item.price) * item.quantity}</span>
                  <button onClick={() => removeItem(item.id)} className="px-3 py-1 bg-red-500 text-white rounded">Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex justify-between items-center">
            <span className="text-xl font-bold">Total: Nrs. {cartTotal}</span>
            <div className="flex gap-4">
              <button onClick={clearCart} className="px-4 py-2 bg-red-500 text-white rounded">Clear Cart</button>
              <button onClick={() => navigate('/checkout')} className="px-4 py-2 bg-primary text-white rounded">Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default CartPage
