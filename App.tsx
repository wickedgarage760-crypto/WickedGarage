import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Booking from './components/Booking';
import Footer from './components/Footer';
import FloatingTalkButton from './components/FloatingTalkButton';

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '2K+', label: 'Vehicles Serviced' },
  { value: '100%', label: 'Transparency' },
];

function App() {
  return (
    <div className="bg-[#0a0f1a] text-gray-200">
      <Header />
      <main>
        <Hero />
        <section className="bg-[#111827] py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-5xl font-extrabold text-orange-500">{stat.value}</p>
                  <p className="mt-2 text-lg text-gray-400 tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Services />
        <About />
        <Booking />
      </main>
      <Footer />
      <FloatingTalkButton />
    </div>
  );
}

export default App;
