
import React from 'react';
import { SearchIcon, WrenchIcon } from './icons/Icons';

const About: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-extrabold text-white uppercase leading-tight">
              Where <span className="text-orange-500">Precision</span><br/> Meets Performance
            </h2>
            <p className="mt-6 text-gray-400">
              At Wicked Garage, we combine traditional automotive expertise with cutting-edge technology to deliver unparalleled service quality. Our passion for precision drives everything we do.
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-orange-500">
                  <SearchIcon className="h-6 w-6 text-white"/>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Advanced Diagnostics</h3>
                  <p className="mt-1 text-sm text-gray-400">Our state-of-the-art diagnostic equipment can identify issues that others miss, ensuring accurate repairs the first time.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-orange-500">
                  <WrenchIcon className="h-6 w-6 text-white"/>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Custom Solutions</h3>
                  <p className="mt-1 text-sm text-gray-400">From performance upgrades to custom fabrication, we create tailored solutions that exceed your expectations.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src="/images/tech.png" 
              alt="Mechanic working on a car" 
              className="rounded-lg shadow-2xl object-cover w-full h-full max-h-[700px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
