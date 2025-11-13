
import React, { useState } from 'react';

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    vehicleInfo: '',
    serviceNeeded: '',
    preferredDate: '',
    preferredTime: '',
    additionalDetails: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send to an API
    console.log('Form submitted:', formData);
    alert('Thank you for your booking request! We will be in touch shortly.');
  };

  return (
    <section id="booking" className="py-20 bg-[#111827]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="lg:pr-10">
            <h2 className="text-4xl font-extrabold text-white uppercase leading-tight">
              Book Your<br/> <span className="text-orange-500">Appointment</span>
            </h2>
            <p className="mt-4 text-gray-400">
              Schedule your service with complete transparency. Get real-time updates and detailed explanations throughout the entire process.
            </p>
            <div className="mt-8 space-y-6">
              <Step number="1" title="Schedule Online" description="Book your appointment instantly with our transparent scheduling system." />
              <Step number="2" title="Diagnostic Assessment" description="Comprehensive evaluation with detailed explanations of findings." />
              <Step number="3" title="Transparent Service" description="Real-time updates and clear communication throughout the service." />
            </div>
          </div>
          
          <div className="bg-[#1e293b] p-8 rounded-lg border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="Full Name" name="fullName" type="text" placeholder="Your full name" value={formData.fullName} onChange={handleChange} required />
                <InputField label="Email" name="email" type="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required />
                <InputField label="Phone" name="phone" type="tel" placeholder="(555) 123-4567" value={formData.phone} onChange={handleChange} required />
                <InputField label="Vehicle Info" name="vehicleInfo" type="text" placeholder="Year Make Model" value={formData.vehicleInfo} onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="serviceNeeded" className="block text-sm font-medium text-gray-300 mb-2">Service Needed *</label>
                <select id="serviceNeeded" name="serviceNeeded" value={formData.serviceNeeded} onChange={handleChange} required className="w-full bg-[#2d3748] border border-gray-600 text-white rounded-md p-3 focus:ring-orange-500 focus:border-orange-500">
                  <option value="">Select a service</option>
                  <option>Advanced Diagnostics</option>
                  <option>Engine Tune-Up</option>
                  <option>Brake Service</option>
                  <option>Oil & Fluid Service</option>
                  <option>Performance Upgrade</option>
                  <option>Custom Fabrication</option>
                  <option>Scheduled Maintenance</option>
                  <option>General Repair</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="Preferred Date" name="preferredDate" type="date" value={formData.preferredDate} onChange={handleChange} required />
                <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-300 mb-2">Preferred Time *</label>
                    <select id="preferredTime" name="preferredTime" value={formData.preferredTime} onChange={handleChange} required className="w-full bg-[#2d3748] border border-gray-600 text-white rounded-md p-3 focus:ring-orange-500 focus:border-orange-500">
                        <option value="">Select time</option>
                        <option>Morning (8AM - 12PM)</option>
                        <option>Afternoon (12PM - 5PM)</option>
                    </select>
                </div>
              </div>
              <div>
                <label htmlFor="additionalDetails" className="block text-sm font-medium text-gray-300 mb-2">Additional Details</label>
                <textarea id="additionalDetails" name="additionalDetails" rows={4} value={formData.additionalDetails} onChange={handleChange} placeholder="Describe any specific issues or requests (max 500 characters)" className="w-full bg-[#2d3748] border border-gray-600 text-white rounded-md p-3 focus:ring-orange-500 focus:border-orange-500"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-orange-500 text-white font-bold py-3 px-8 rounded-md hover:bg-orange-600 transition-all duration-300 transform hover:scale-105">
                  Book Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

interface StepProps {
    number: string;
    title: string;
    description: string;
}
const Step: React.FC<StepProps> = ({ number, title, description }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-orange-500 text-white font-bold text-xl">
            {number}
        </div>
        <div>
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <p className="mt-1 text-sm text-gray-400">{description}</p>
        </div>
    </div>
);

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}
const InputField: React.FC<InputFieldProps> = ({ label, name, type, ...props }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-2">{label} *</label>
        <input type={type} id={name} name={name} {...props} className="w-full bg-[#2d3748] border border-gray-600 text-white rounded-md p-3 focus:ring-orange-500 focus:border-orange-500"/>
    </div>
);

export default Booking;
