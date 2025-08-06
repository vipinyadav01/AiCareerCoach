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
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;
    
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

    // Set initial load to false after a short delay
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  useEffect(() => {
    if (!isInitialLoad && !showSplash) {

      setShowSplash(false);
    }
  }, [isInitialLoad, showSplash]);

  return (
    <SplashContext.Provider value={{ showSplash, setShowSplash }}>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      {children}
    </SplashContext.Provider>
  );
}; 