
import React from 'react';
import { PhoneIcon, MailIcon, MapPinIcon, QuoteIcon, LogoIcon } from './icons/Icons';

const Header: React.FC = () => {
  return (
    <header className="bg-black bg-opacity-80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <LogoIcon className="h-10 w-10 text-orange-500" />
            <div>
              <h1 className="text-xl font-bold tracking-wider text-white uppercase">
                <span className="text-orange-500">Wicked</span> Garage
              </h1>
              <p className="text-xs text-gray-400 tracking-wide">Performance Without Apology</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-6 text-sm">
            <a href="tel:7608807257" className="flex items-center space-x-2 hover:text-orange-500 transition-colors">
              <PhoneIcon className="h-4 w-4" />
              <span>(760) 880-7257</span>
            </a>
            <a href="mailto:wickedgarage760@gmail.com" className="flex items-center space-x-2 hover:text-orange-500 transition-colors">
              <MailIcon className="h-4 w-4" />
              <span>wickedgarage760@gmail.com</span>
            </a>
            <div className="flex items-center space-x-2">
              <MapPinIcon className="h-4 w-4" />
              <span>Based in Indio, CA</span>
            </div>
          </div>

          <a href="#booking" className="flex items-center space-x-2 bg-orange-500 text-white font-bold py-2 px-5 rounded-md hover:bg-orange-600 transition-all duration-300 transform hover:scale-105">
            <QuoteIcon className="h-4 w-4" />
            <span>GET A QUOTE</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
