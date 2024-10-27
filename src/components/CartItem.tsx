import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { CartItem } from '../store/cartStore';
import { useCartStore } from '../store/cartStore';

interface CartItemProps {
  item: CartItem;
}

export default function CartItemComponent({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCartStore();

  return (
    <li className="py-6 flex">
      <div className="flex-shrink-0 w-16 h-20 rounded-md overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="ml-4 flex-1 flex flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>{item.name}</h3>
            <p className="ml-4">€{(item.price * item.quantity).toFixed(2)}</p>
          </div>
        </div>
        <div className="flex-1 flex items-end justify-between text-sm">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="p-1 rounded-full hover:bg-gray-100 disabled:opacity-50"
              disabled={item.quantity <= 1}
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="font-medium">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          <button
            type="button"
            onClick={() => removeItem(item.id)}
            className="font-medium text-red-600 hover:text-red-500"
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  );
}