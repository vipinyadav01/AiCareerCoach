"use client";

import { useState, useEffect } from "react";
import SplashScreen from "./splash-screen";

export default function LayoutWrapper({ children }) {
  const [showSplash, setShowSplash] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Check if this is the first visit in this session
    const hasShownSplash = sessionStorage.getItem('splashShown');
    
    if (hasShownSplash) {
      setShowSplash(false);
      setIsLoaded(true);
    } else {
      // Mark that we've shown the splash for this session
      sessionStorage.setItem('splashShown', 'true');
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setTimeout(() => setIsLoaded(true), 100);
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!isMounted) {
    return (
      <div className="opacity-0">
        {children}
      </div>
    );
  }

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <div 
        className={`transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ 
          visibility: isLoaded ? 'visible' : 'hidden',
          position: isLoaded ? 'relative' : 'absolute',
          top: isLoaded ? 'auto' : '-9999px'
        }}
      >
        {children}
      </div>
    </>
  );
}
