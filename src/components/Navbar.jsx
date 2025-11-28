import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Fertilizer Portfolio', href: '#fertilizers' },
    { name: 'Supply Chain', href: '#supply-chain' },
    { name: 'Value Proposition', href: '#value' },
    { name: 'Leadership', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-kalaka-purple shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4">
            <img
              src="/Kalaka-Website/assets/kalaka/Logo.png"
              alt="Kalaka Logo"
              className="h-14 w-auto"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div>
              <h1 className="text-lg font-bold text-white">Kalaka South Mining SA</h1>
              <p className="text-sm text-kalaka-gold">Fertilizers & Supply Chain</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-200 hover:text-kalaka-gold transition-colors duration-200 font-medium text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-3 ml-4">
              <span className="text-xs text-gray-300 bg-kalaka-purple/50 px-3 py-1 rounded-full border border-kalaka-gold/30">
                Draft mockup
              </span>
              <a
                href="#contact"
                className="bg-kalaka-gold text-kalaka-purple px-4 py-2 rounded-lg font-semibold text-sm hover:bg-yellow-500 transition-colors duration-200"
              >
                Request RFQ
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-kalaka-gold focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-kalaka-gold/20 mt-2 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-gray-200 hover:text-kalaka-gold transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block mt-4 bg-kalaka-gold text-kalaka-purple px-4 py-2 rounded-lg font-semibold text-center hover:bg-yellow-500 transition-colors duration-200"
            >
              Request RFQ
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
