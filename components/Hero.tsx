import React, { useState, useEffect } from 'react';
import { ChevronDownIcon } from './icons/Icons';

const services = ['Performance Upgrades', 'Advanced Diagnostics', 'Engine Tune-Ups'];

const Hero: React.FC = () => {
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white uppercase leading-tight">
            Custom<br />
            <span
              className="text-orange-500 transition-opacity duration-500 ease-in-out"
              style={{ minHeight: '1.2em', display: 'inline-block' }}
            >
              {services[currentService]}
            </span>
          </h1>
          <p className="mt-4 text-xl text-gray-300">Performance Without Apology</p>
          <p className="mt-6 max-w-lg text-gray-400">
            Automotive services with cutting-edge diagnostics, performance upgrades, custom fabrication, and transparent scheduling. Where precision meets power.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-start">
            <a
              href="#services"
              className="bg-orange-500 text-white font-bold py-3 px-8 rounded-md hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              VIEW SERVICES
            </a>
            <a
              href="#booking"
              className="border-2 border-orange-500 text-white font-bold py-3 px-8 rounded-md hover:bg-orange-500 hover:text-white transition-colors duration-300"
            >
              BOOK NOW
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <a href="#services" className="animate-bounce">
            <ChevronDownIcon className="h-6 w-6 text-gray-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;