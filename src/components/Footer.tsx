import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-red-600 text-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-bold mb-4">FREA</h3>
            <p className="text-gold/90 mb-4">
              Press play on your passion with FREA - the premium energy drink that brings people together.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a href="#" className="hover:text-yellow-300 transition">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-yellow-300 transition">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-yellow-300 transition">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-yellow-300 transition">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-300 transition">About Us</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition">Products</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition">For Business</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center justify-center sm:justify-start space-x-2">
                <Mail className="h-5 w-5" />
                <span>contact@frea.com</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start space-x-2">
                <Phone className="h-5 w-5" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Paris, France</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center sm:text-left">
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-gold/90 mb-4">Subscribe to get special offers and updates.</p>
            <form className="space-y-2 max-w-xs mx-auto sm:mx-0">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-full bg-red-700 text-gold placeholder-gold/50 border border-gold/20 focus:outline-none focus:border-gold"
              />
              <button className="w-full px-4 py-2 rounded-full bg-gold text-red-600 font-bold hover:bg-yellow-300 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-8 pt-8 text-center text-gold/90">
          <p>&copy; {new Date().getFullYear()} FREA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}