import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

export default function Navbar() {
  const { toggleCart } = useCartStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-red-600 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gold">FREA</h1>
            <div className="hidden md:flex space-x-8 ml-12">
              <a href="#" className="text-gold hover:text-yellow-300 transition">Products</a>
              <a href="#" className="text-gold hover:text-yellow-300 transition">For Business</a>
              <a href="#" className="text-gold hover:text-yellow-300 transition">About</a>
              <a href="#" className="text-gold hover:text-yellow-300 transition">Contact</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleCart}
              className="text-gold hover:text-yellow-300 p-2 rounded-full hover:bg-red-700/50 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
            </button>
            <button 
              className="md:hidden text-gold p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-red-600 border-t border-red-500">
          <a href="#" className="block px-3 py-2 text-gold hover:text-yellow-300 transition">Products</a>
          <a href="#" className="block px-3 py-2 text-gold hover:text-yellow-300 transition">For Business</a>
          <a href="#" className="block px-3 py-2 text-gold hover:text-yellow-300 transition">About</a>
          <a href="#" className="block px-3 py-2 text-gold hover:text-yellow-300 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}