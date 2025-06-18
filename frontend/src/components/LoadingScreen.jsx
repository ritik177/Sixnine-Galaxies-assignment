import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ isLoading }) => {
  const [showContent, setShowContent] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      setShowContent(true);
      setProgress(0);
      
      // Simulate loading progress
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + Math.random() * 15 + 5;
        });
      }, 200);

      return () => clearInterval(progressInterval);
    } else {
      setShowContent(false);
    }
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-[#F2F5E5] z-50 flex items-center justify-center">
      <div className={`text-center transition-all duration-500 ease-out ${
        showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}>
        <div className="mb-8 animate-fade-in-scale">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#1F2B2A] uppercase tracking-wider">
            Skincare
          </h1>
        </div>
        
        <div className="flex justify-center mb-6">
          <div className="w-32 h-1 bg-[#1F2B2A] rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#D9E2C8] rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
        </div>
        
        <p className="text-[#1F2B2A] text-sm font-medium animate-pulse-custom">
          Loading your beauty journey... {Math.round(progress)}%
        </p>
        
        <div className="mt-8 flex justify-center space-x-2">
          <div className="w-2 h-2 bg-[#1F2B2A] rounded-full animate-pulse-custom" style={{ animationDelay: '0s' }}></div>
          <div className="w-2 h-2 bg-[#1F2B2A] rounded-full animate-pulse-custom" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-[#1F2B2A] rounded-full animate-pulse-custom" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen; 