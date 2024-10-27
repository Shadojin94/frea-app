import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import BundleSection from './components/BundleSection';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <BundleSection />
      <Cart />
      
      {/* Business Section */}
      <div className="bg-red-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Join the Social Energy Revolution
              </h2>
              <p className="text-gray-600 mb-8">
                Partner with FREA to offer your customers more than just an energy drink. Perfect for hotels, restaurants, and premium retail locations. Be part of a movement that brings people together.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "Premium Positioning",
                  "Marketing Support",
                  "Flexible Delivery",
                  "Dedicated Support"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700">
                Become a Partner
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="Premium Venue" className="rounded-xl" />
              <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="Retail Experience" className="rounded-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Elite Hotel Group",
                text: "FREA has transformed our guest experience. The natural ingredients and social aspect perfectly align with our premium positioning.",
                type: "Luxury Hotel",
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Urban Café Chain",
                text: "Our customers love the social energy concept. It's more than a drink - it's creating memorable moments in our venues.",
                type: "Restaurant Chain",
                image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Metro Market",
                text: "FREA's unique positioning and natural ingredients make it a standout product. The support team is exceptional.",
                type: "Retail Store",
                image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;