import React, { useState, useEffect } from 'react';
import SkincareLandingPage from './components/SkincareLandingPage';
import SkincareProducts from './components/SkincareProducts';
import BeautyProductPage from './components/BeautyProductPage';
import SkincareFAQPage from './components/SkincareFaq';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      // Small delay before showing content for smooth transition
      setTimeout(() => {
        setShowContent(true);
      }, 100);
    }, 2000);

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      
      <div className={`transition-all duration-1000 ease-out ${
        showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <SkincareLandingPage />
        <SkincareProducts />
        <BeautyProductPage />
        <SkincareFAQPage />
      </div>
    </>
  );
}

export default App;
