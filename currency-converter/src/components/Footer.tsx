import React from 'react';

const Footer = () => {
  return (
<footer className="bg-gray-800 text-white text-center py-4">
  <p>&copy; {new Date().getFullYear()} Currency Converter. All rights reserved.</p>
  <a href="/about" className="text-gray-400 hover:text-white">About</a> | 
  <a href="/contact" className="text-gray-400 hover:text-white">Contact</a>
</footer>

  );
};

export default Footer;
