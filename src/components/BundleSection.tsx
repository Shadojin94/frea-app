import React, { useState } from 'react';
import { useCartStore } from '../store/cartStore';

interface BundleOption {
  id: string;
  quantity: number;
  label: string;
  tag?: string;
  originalPrice: number;
  finalPrice: number;
}

export default function BundleSection() {
  const { addItem, toggleCart } = useCartStore();
  const [selectedOption, setSelectedOption] = useState<number>(0);
  
  const bundleOptions: BundleOption[] = [
    { 
      id: 'frea-1',
      quantity: 1, 
      label: "Single Can Experience",
      originalPrice: 9.70,
      finalPrice: 9.70
    },
    { 
      id: 'frea-6',
      quantity: 6, 
      label: "Social Pack",
      tag: "Most Popular",
      originalPrice: 58.20,
      finalPrice: 49.47
    },
    { 
      id: 'frea-12',
      quantity: 12, 
      label: "Party Pack",
      tag: "Best Value",
      originalPrice: 116.40,
      finalPrice: 93.12
    }
  ];

  const handleAddToCart = () => {
    const option = bundleOptions[selectedOption];
    addItem({
      id: option.id,
      name: `FREA Energy Drink ${option.quantity > 1 ? `(Pack of ${option.quantity})` : ''}`,
      price: option.finalPrice,
      quantity: 1,
      image: 'https://shadojin.com/bolt/Frea/lastfreacan.png',
      bundleSize: option.quantity
    });
    toggleCart();
  };

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-8 sm:py-16">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="relative p-8 flex items-center justify-center bg-gradient-to-br from-red-50 to-white">
            <img 
              src="https://shadojin.com/bolt/Frea/lastfreacan.png"
              alt="FREA Energy Drink"
              className="w-[150px] sm:w-[180px] transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 right-4">
              <div className="bg-red-500 text-white text-sm px-3 py-1 rounded-full transform rotate-3">
                Natural Energy
              </div>
            </div>
          </div>
          
          <div className="p-4 sm:p-8">
            <h2 className="text-2xl font-bold mb-2">FREA Energy Drink</h2>
            <p className="text-gray-600 mb-4">Premium blend for authentic connections</p>
            <div className="text-xl font-bold text-red-600 mb-6">
              Starting from €{bundleOptions[0].finalPrice.toFixed(2)}
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4">Choose Your Experience</h3>
              
              <div className="space-y-3">
                {bundleOptions.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedOption(index)}
                    className={`relative border-2 rounded-xl p-3 sm:p-4 cursor-pointer transition-all ${
                      selectedOption === index 
                        ? 'border-red-600 bg-red-50' 
                        : 'border-gray-200 hover:border-red-300 hover:bg-red-50/50'
                    }`}
                  >
                    <div className="flex items-start sm:items-center gap-3">
                      <div className={`flex-shrink-0 w-5 h-5 mt-1 sm:mt-0 rounded-full border-2 flex items-center justify-center ${
                        selectedOption === index ? 'border-red-600' : 'border-gray-300'
                      }`}>
                        {selectedOption === index && (
                          <div className="w-3 h-3 bg-red-600 rounded-full" />
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{option.label}</span>
                              {option.tag && (
                                <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                                  option.tag === 'Most Popular' 
                                    ? 'bg-blue-100 text-blue-600' 
                                    : 'bg-green-100 text-green-600'
                                }`}>
                                  {option.tag}
                                </span>
                              )}
                            </div>
                            <span className="text-sm text-gray-600 block mt-1">
                              {option.quantity} {option.quantity === 1 ? 'can' : 'cans'} • {option.quantity > 1 ? `€${(option.finalPrice / option.quantity).toFixed(2)} per can` : ''}
                            </span>
                          </div>
                          <div className="flex-shrink-0 text-right">
                            <div className="font-bold">
                              €{option.finalPrice.toFixed(2)}
                            </div>
                            {option.quantity > 1 && (
                              <div className="text-sm text-gray-500 line-through">
                                €{option.originalPrice.toFixed(2)}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button
              onClick={handleAddToCart}
              className="w-full bg-red-600 text-white py-3 rounded-xl hover:bg-red-700 transition-colors font-medium"
            >
              Add to cart
            </button>
            
            <div className="mt-4 text-sm text-gray-500 text-center">
              Free shipping on orders over €50. Natural ingredients, premium experience.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}