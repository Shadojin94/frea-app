import React from 'react';
import { Heart, Zap, Users, Leaf } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Social Catalyst",
      description: "Natural ingredients that spark genuine connections"
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Natural Vitality",
      description: "Premium botanicals for enhanced wellbeing"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Energetic Boost",
      description: "Sustained energy without the crash"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Real Moments",
      description: "Creating opportunities for authentic interactions"
    }
  ];

  return (
    <div className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-3 md:mb-4">Beyond Energy</h2>
        <p className="text-center text-gray-600 mb-10 md:mb-12 max-w-2xl mx-auto text-sm md:text-base">
          In a world dominated by screens, FREA brings people together. Our unique blend of natural ingredients doesn't just boost energy - it enhances social connections and creates moments worth sharing.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, i) => (
            <div key={i} className="text-center">
              <div className="bg-red-50 w-12 h-12 mx-auto rounded-full flex items-center justify-center text-red-600 mb-3 md:mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}