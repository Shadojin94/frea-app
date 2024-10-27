import React from 'react';
import { X, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { createCheckoutSession } from '../services/stripe';
import CartItem from './CartItem';

export default function Cart() {
  const { isOpen, items, toggleCart, total } = useCartStore();

  const handleCheckout = async () => {
    try {
      await createCheckoutSession(items);
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleCart}
      />
      
      {/* Cart panel */}
      <div 
        className={`fixed inset-y-0 right-0 max-w-full flex z-50 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="w-screen max-w-md">
          <div className="h-full flex flex-col bg-white shadow-xl">
            <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-medium text-gray-900">Shopping Cart</h2>
                <button
                  className="ml-3 h-7 w-7 text-gray-400 hover:text-gray-500"
                  onClick={toggleCart}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="mt-8">
                {items.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-sm font-medium text-gray-900">Cart is empty</h3>
                    <p className="mt-1 text-sm text-gray-500">Add some FREA to your cart!</p>
                  </div>
                ) : (
                  <div className="flow-root">
                    <ul className="-my-6 divide-y divide-gray-200">
                      {items.map((item) => (
                        <CartItem key={item.id} item={item} />
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {items.length > 0 && (
              <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>€{total().toFixed(2)}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">Shipping calculated at checkout.</p>
                <div className="mt-6">
                  <button
                    onClick={handleCheckout}
                    className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}