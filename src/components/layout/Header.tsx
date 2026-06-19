import { useState } from 'react';
import { Menu, X, Phone, HeartPulse } from 'lucide-react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Doctor', href: '#doctor' },
    { name: 'Lab Tests', href: '#lab' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <div className="bg-medical-blue p-2 rounded-lg">
              <HeartPulse className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-gray-900 tracking-tight">Kaluvai Hospital</span>
              <span className="text-xs text-medical-teal font-medium">24/7 Emergency Care</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-gray-600 hover:text-medical-blue font-medium transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center">
            <a 
              href="tel:+919999999999" 
              className="flex items-center gap-2 bg-medical-blue hover:bg-blue-800 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg"
            >
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-medical-blue hover:bg-gray-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-3">
              <a 
                href="tel:+919999999999" 
                className="flex items-center justify-center gap-2 bg-medical-blue text-white px-4 py-3 rounded-xl font-medium"
              >
                <Phone className="h-5 w-5" />
                <span>Call Emergency</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
