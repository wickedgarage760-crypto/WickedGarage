
import React from 'react';
import { LogoIcon, PhoneIcon, MailIcon, MapPinIcon } from './icons/Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <div className="flex justify-center items-center space-x-3 mb-4">
          <LogoIcon className="h-10 w-10 text-orange-500" />
          <div>
            <h2 className="text-xl font-bold tracking-wider text-white uppercase">
              <span className="text-orange-500">Wicked</span> Garage
            </h2>
            <p className="text-xs text-gray-400 tracking-wide">Performance Without Apology</p>
          </div>
        </div>
        <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 my-6 text-sm">
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
        <div className="border-t border-gray-800 pt-6 mt-6">
          <p className="text-sm">&copy; {new Date().getFullYear()} Wicked Garage. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
