import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

interface AddToCartButtonProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem, toggleCart } = useCartStore();

  const handleAddToCart = () => {
    addItem(product);
    toggleCart();
  };

  return (
    <button
      onClick={handleAddToCart}
      className="flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition-colors duration-200"
    >
      <ShoppingCart className="h-5 w-5" />
      <span>Add to Cart</span>
    </button>
  );
}