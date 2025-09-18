import React from 'react';

const AnimatedShips: React.FC = () => {
  return (
    <div className="relative w-full h-40 pointer-events-none z-20 overflow-hidden">
      {/* Ships */}
      <div className="absolute top-8 left-0 animate-train">
        <div className="flex items-end space-x-4">
          {/* Bachelor's Ship - Purple */}
          <div className="relative">
            {/* Ship Body */}
            <div className="w-56 h-32 bg-gradient-to-br from-purple-600 to-purple-800 rounded-t-xl shadow-2xl border-3 border-purple-700 relative">
              {/* Educational Information */}
              <div className="absolute top-2 left-3 text-xs font-bold text-yellow-200 leading-tight drop-shadow-lg">
                Bachelor of Engineering
              </div>
              <div className="absolute top-5 left-3 text-xs font-semibold text-yellow-200 leading-tight drop-shadow-lg">
                in Artificial Intelligence
              </div>
              <div className="absolute top-8 left-3 text-xs font-medium text-blue-200 leading-tight drop-shadow-lg">
                Mahindra University
              </div>
              <div className="absolute top-11 left-3 text-xs font-medium text-green-300 leading-tight drop-shadow-lg">
                2019 - 2023
              </div>
              
              {/* Ship Windows */}
              <div className="absolute top-2 right-3 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute top-6 right-3 w-2 h-2 bg-blue-400 rounded-full"></div>
              <div className="absolute top-10 right-3 w-2 h-2 bg-green-400 rounded-full"></div>
            </div>
            
            {/* Ship Hull */}
            <div className="w-56 h-8 bg-gradient-to-b from-purple-700 to-purple-900 rounded-b-xl border-3 border-purple-800"></div>
            
            {/* Ship Flag */}
            <div className="absolute -top-4 left-4 w-1 h-6 bg-gray-800"></div>
            <div className="absolute -top-6 left-4 w-4 h-3 bg-yellow-400 rounded-sm"></div>
            
            {/* Wheels attached to ship */}
            <div className="absolute -bottom-4 left-8 w-10 h-10 bg-black rounded-full border-3 border-gray-600 animate-spin shadow-lg"></div>
            <div className="absolute -bottom-4 right-8 w-10 h-10 bg-black rounded-full border-3 border-gray-600 animate-spin shadow-lg"></div>
          </div>
          
          {/* Master's Ship - Orange */}
          <div className="relative">
            {/* Ship Body */}
            <div className="w-56 h-32 bg-gradient-to-br from-orange-500 to-orange-700 rounded-t-xl shadow-2xl border-3 border-orange-600 relative">
              {/* Educational Information */}
              <div className="absolute top-2 left-3 text-xs font-bold text-blue-100 leading-tight drop-shadow-lg">
                Master of Science
              </div>
              <div className="absolute top-5 left-3 text-xs font-semibold text-blue-100 leading-tight drop-shadow-lg">
                in Data Science
              </div>
              <div className="absolute top-8 left-3 text-xs font-medium text-purple-200 leading-tight drop-shadow-lg">
                Rochester Institute of Technology
              </div>
              <div className="absolute top-11 left-3 text-xs font-medium text-green-300 leading-tight drop-shadow-lg">
                2023 - 2025
              </div>
              
              {/* Ship Windows */}
              <div className="absolute top-2 right-3 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute top-6 right-3 w-2 h-2 bg-blue-400 rounded-full"></div>
              <div className="absolute top-10 right-3 w-2 h-2 bg-green-400 rounded-full"></div>
            </div>
            
            {/* Ship Hull */}
            <div className="w-56 h-8 bg-gradient-to-b from-orange-600 to-orange-800 rounded-b-xl border-3 border-orange-700"></div>
            
            {/* Ship Flag */}
            <div className="absolute -top-4 left-4 w-1 h-6 bg-gray-800"></div>
            <div className="absolute -top-6 left-4 w-4 h-3 bg-blue-400 rounded-sm"></div>
            
            {/* Wheels attached to ship */}
            <div className="absolute -bottom-4 left-8 w-10 h-10 bg-black rounded-full border-3 border-gray-600 animate-spin shadow-lg"></div>
            <div className="absolute -bottom-4 right-8 w-10 h-10 bg-black rounded-full border-3 border-gray-600 animate-spin shadow-lg"></div>
          </div>
        </div>
      </div>
      
      {/* Additional Wheels Row - Between Ships and Tracks */}
      <div className="absolute bottom-8 left-0 animate-train">
        <div className="flex space-x-4">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-8 h-8 bg-black rounded-full border-2 border-gray-600 animate-spin shadow-md"></div>
          ))}
        </div>
      </div>
      
      {/* Railway Tracks */}
      <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700">
        <div className="flex justify-between px-4">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="w-1 h-6 bg-gray-500"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedShips; 