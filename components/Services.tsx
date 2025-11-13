
import React from 'react';
import type { Service } from '../types';
import { AdvancedDiagnosticsIcon, EngineTuneUpIcon, BrakeIcon, DropletIcon, BoltIcon, WrenchIcon, CalendarIcon, ToolIcon, CheckIcon } from './icons/Icons';

const servicesData: Service[] = [
  {
    icon: <AdvancedDiagnosticsIcon className="h-8 w-8 text-white" />,
    title: 'Advanced Diagnostics',
    description: 'State-of-the-art computer diagnostics to identify issues quickly and accurately. Our advanced scanning equipment reads all vehicle systems.',
    details: ['OBD-II Scanning', 'Engine Analysis', 'Electrical Testing', 'Performance Monitoring']
  },
  {
    icon: <EngineTuneUpIcon className="h-8 w-8 text-white" />,
    title: 'Engine Tune-Ups',
    description: 'Complete engine optimization services to restore peak performance and fuel efficiency. Professional tune-up services for all vehicle types.',
    details: ['Spark Plug Replacement', 'Air Filter Service', 'Fuel System Cleaning', 'Timing Adjustments']
  },
  {
    icon: <BrakeIcon className="h-8 w-8 text-white" />,
    title: 'Brake Services',
    description: 'Complete brake system inspection, repair, and upgrade services. Safety is our top priority with every brake service.',
    details: ['Brake Pad Replacement', 'Rotor Resurfacing', 'Brake Fluid Service', 'Performance Brake Upgrades']
  },
  {
    icon: <DropletIcon className="h-8 w-8 text-white" />,
    title: 'Oil & Fluid Services',
    description: 'Regular maintenance services including oil changes, fluid checks, and filter replacements to keep your vehicle running smoothly.',
    details: ['Oil Change Service', 'Transmission Fluid', 'Coolant Service', 'Power Steering Fluid']
  },
  {
    icon: <BoltIcon className="h-8 w-8 text-white" />,
    title: 'Performance Upgrades',
    description: 'Custom performance modifications to enhance power, handling, and overall driving experience. Tailored upgrades for your specific needs.',
    details: ['Cold Air Intakes', 'Exhaust Systems', 'Suspension Tuning', 'ECU Remapping']
  },
  {
    icon: <WrenchIcon className="h-8 w-8 text-white" />,
    title: 'Custom Fabrication',
    description: 'Precision metalwork and custom fabrication services. From roll cages to custom exhaust systems, we build it right.',
    details: ['Welding Services', 'Roll Cage Fabrication', 'Custom Mounts & Brackets', 'Exhaust Fabrication']
  },
  {
    icon: <CalendarIcon className="h-8 w-8 text-white" />,
    title: 'Scheduled Maintenance',
    description: 'Comprehensive maintenance programs to keep your vehicle in peak condition. Transparent scheduling and detailed service records.',
    details: ['30k/60k/90k Mile Service', 'Fluid Inspection', 'Belt & Hose Replacement', 'Tire Rotation']
  },
  {
    icon: <ToolIcon className="h-8 w-8 text-white" />,
    title: 'General Repairs',
    description: 'Complete automotive repair services for all makes and models. From minor fixes to major overhauls, we handle it all.',
    details: ['Engine Repair', 'Transmission Service', 'A/C & Heating Repair', 'Suspension & Steering']
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-[#111827]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white uppercase">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-400">
            Professional automotive services with cutting-edge technology and transparent processes. From diagnostics to custom fabrication, we deliver excellence in every service.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard: React.FC<Service> = ({ icon, title, description, details }) => {
  return (
    <div className="bg-[#1e293b] p-6 rounded-lg border border-gray-700 hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-16 w-16 rounded-md bg-orange-500">
          {icon}
        </div>
        <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-sm text-gray-400">{description}</p>
      </div>
      <div className="mt-6 pt-6 border-t border-gray-700 flex-grow">
        <ul className="space-y-2">
            {details.map((detail, i) => (
                <li key={i} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{detail}</span>
                </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;
