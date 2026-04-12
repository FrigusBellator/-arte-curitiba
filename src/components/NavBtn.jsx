import React from 'react';

export default function NavBtn({ active, onClick, icon, label }) {
  return (
    <button 
      onClick={onClick}
      title={label}
      className={`p-3 rounded-[15px] transition-all flex items-center justify-center ${
        active ? 'bg-[#0B132B] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
    >
      {icon}
    </button>
  );
}
