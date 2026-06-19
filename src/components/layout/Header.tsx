import { useState } from 'react';
import { Menu, X, Phone, HeartPulse } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <header className="relative z-50 shrink-0 w-full bg-white shadow-sm border-b border-gray-100" style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <a href="#home" className="flex items-center gap-2 active:scale-95 transition-all duration-200">
            <div className="bg-medical-blue p-2 rounded-lg">
              <HeartPulse className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-gray-900 tracking-tight">Kaluvai Hospital</span>
              <span className="text-xs text-medical-teal font-medium">24/7 Emergency Care</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-gray-600 hover:text-medical-blue font-medium transition-all active:scale-95 text-sm"
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
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white border-b border-gray-100 shadow-lg absolute w-full overflow-hidden origin-top"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-medical-blue hover:bg-gray-50 active:bg-blue-50 active:text-medical-blue active:scale-[0.98] transition-all rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <a 
                  href="tel:+919999999999" 
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-medical-blue to-medical-teal text-white px-4 py-3 rounded-xl font-medium active:scale-[0.98] active:opacity-90 transition-all shadow-sm"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Emergency</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
