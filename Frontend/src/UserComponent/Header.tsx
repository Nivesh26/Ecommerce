import React from 'react'
import { ShoppingCart, User, Search, Menu } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-red-600">ShopNow</h1>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-red-600 transition-colors">Home</a>
            <a href="/products" className="text-gray-700 hover:text-red-600 transition-colors">Products</a>
            <a href="/about" className="text-gray-700 hover:text-red-600 transition-colors">About</a>
            <a href="/contact" className="text-gray-700 hover:text-red-600 transition-colors">Contact</a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-red-600 transition-colors">
              <ShoppingCart className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-700 hover:text-red-600 transition-colors">
              <User className="h-6 w-6" />
            </button>
            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-gray-700">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header