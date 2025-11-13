
import React from 'react';
import { ChatIcon } from './icons/Icons';

const FloatingTalkButton: React.FC = () => {
  return (
    <button className="fixed bottom-6 right-6 bg-gray-800 border border-gray-700 text-white font-bold py-3 px-4 rounded-full shadow-lg hover:bg-gray-700 transition-colors flex items-center space-x-2 z-40">
      <ChatIcon className="h-6 w-6 text-orange-500" />
      <span className="hidden sm:inline">Talk With Us</span>
    </button>
  );
};

export default FloatingTalkButton;
