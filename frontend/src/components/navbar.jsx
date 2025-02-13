import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/accredianlogo.webp" alt="Accredian Logo" className="h-8" />
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative group">
                <button className="px-3 py-2 text-gray-700 hover:text-blue-600">
                  Courses <ChevronDown className="inline-block h-4 w-4" />
                </button>
              </div>
              <a href="#" className="px-3 py-2 text-gray-700 hover:text-blue-600">Refer & Earn</a>
              <a href="#" className="px-3 py-2 text-gray-700 hover:text-blue-600">Resources</a>
              <a href="#" className="px-3 py-2 text-gray-700 hover:text-blue-600">About Us</a>
              <a href="#" className="px-3 py-2 text-gray-700 hover:text-blue-600">Login</a>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Try for free
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700">Courses</a>
              <a href="#" className="block px-3 py-2 text-gray-700">Refer & Earn</a>
              <a href="#" className="block px-3 py-2 text-gray-700">Resources</a>
              <a href="#" className="block px-3 py-2 text-gray-700">About Us</a>
              <a href="#" className="block px-3 py-2 text-gray-700">Login</a>
              <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md">
                Try for free
              </button>
            </div>
          </div>
        )}
      </nav>
  )
}

export default Navbar;