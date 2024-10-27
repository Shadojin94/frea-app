import React from 'react';
import { Play } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

export default function Hero() {
  const { addItem, toggleCart } = useCartStore();

  const handleBuyNow = () => {
    addItem({
      id: 'frea-1',
      name: 'FREA Energy Drink',
      price: 9.70,
      quantity: 1,
      image: 'https://shadojin.com/bolt/Frea/lastfreacan.png'
    });
    toggleCart();
  };

  return (
    <div className="bg-gradient-to-b from-red-600 to-red-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gold mb-4 md:mb-6">
              Press Play on Real Connections
            </h1>
            <p className="text-lg md:text-xl text-gold/90 mb-6 md:mb-8">
              Break free from digital isolation. FREA combines natural vitality boosters with social catalysts to create genuine moments of connection. It's time to press play on life's best experiences - together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={handleBuyNow}
                className="bg-gold text-red-600 px-8 py-3 rounded-full hover:bg-yellow-300 transition flex items-center justify-center font-bold"
              >
                Start Your Story
                <Play className="ml-2 h-5 w-5 fill-current" />
              </button>
              <button className="border-2 border-gold text-gold px-8 py-3 rounded-full hover:bg-red-700/50 transition font-bold">
                Partner With Us
              </button>
            </div>
          </div>
          <div className="relative mt-8 md:mt-0">
            <img 
              src="https://shadojin.com/bolt/Frea/lastfreacan.png" 
              alt="FREA Energy Drink"
              className="w-full max-w-[250px] md:max-w-[300px] mx-auto transform hover:rotate-3 transition duration-300 drop-shadow-2xl"
            />
            <div className="absolute -right-4 top-1/4 bg-gold/10 backdrop-blur-md p-3 md:p-4 rounded-xl text-gold border border-gold/20 hidden md:block">
              <p className="font-bold text-sm md:text-base">Natural Vitality</p>
            </div>
            <div className="absolute -left-4 bottom-1/4 bg-gold/10 backdrop-blur-md p-3 md:p-4 rounded-xl text-gold border border-gold/20 hidden md:block">
              <p className="font-bold text-sm md:text-base">Social Catalyst</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}