"use client";

import { createContext, useContext, useState, useEffect } from "react";
import SplashScreen from "./splash-screen";

const SplashContext = createContext();

export const useSplash = () => {
  const context = useContext(SplashContext);
  if (!context) {
    throw new Error("useSplash must be used within a SplashProvider");
  }
  return context;
};

export const SplashProvider = ({ children }) => {
  const [showSplash, setShowSplash] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark as client-side
    setIsClient(true);
    
    // Check if this is the first visit
    const hasVisited = localStorage.getItem("hasVisited");
    
    if (!hasVisited) {
      // First time visitor - show splash screen
      setShowSplash(true);
      localStorage.setItem("hasVisited", "true");
    } else {
      // Returning visitor - skip splash screen
      setShowSplash(false);
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  // Don't render anything until client-side
  if (!isClient) {
    return <>{children}</>;
  }

  return (
    <SplashContext.Provider value={{ showSplash, setShowSplash }}>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      {children}
    </SplashContext.Provider>
  );
}; 