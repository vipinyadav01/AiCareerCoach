"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";

const SplashScreen = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const minSplashTime = 2000; 
    const startTime = Date.now();
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        const elapsed = Date.now() - startTime;
        const minProgress = Math.min((elapsed / minSplashTime) * 100, 90);
        
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            setTimeout(() => {
              onComplete?.();
            }, 500);
          }, 200);
          return 100;
        }
        
        // Combine minimum progress with random increments
        const newProgress = Math.max(prev + Math.random() * 10, minProgress);
        return Math.min(newProgress, 100);
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          style={{
           
            height: '100vh',
            height: '100dvh', 
            width: '100vw',
            width: '100dvw', 
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            // Prevent iOS Safari zoom and bounce
            touchAction: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {/* Grid Background */}
          <div className="absolute inset-0 "></div>
          <div className="relative flex flex-col items-center justify-center space-y-8 px-4">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative w-24 h-24 bg-transparent backdrop-blur-md rounded-2xl flex items-center justify-center border border-gray-300 dark:border-white/20">
                <img 
                  src="/android-chrome-512x512.png" 
                  alt="LaunchTrack Logo" 
                  className="w-16 h-16 object-contain"
                  style={{
                    // iOS image rendering improvements
                    imageRendering: 'crisp-edges',
                    WebkitImageRendering: 'crisp-edges',
                    // Prevent iOS Safari from scaling images
                    maxWidth: '100%',
                    maxHeight: '100%',
                  }}
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-transparent border-t-gray-400 dark:border-t-white/30 rounded-2xl"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
                             <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                 LaunchTrack
               </h1>
               <p className="text-gray-700 dark:text-white/70 text-lg">
                 AI Career Platform
               </p>
            </motion.div>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-64 space-y-2"
            >
                             <div className="flex justify-between text-sm text-gray-700 dark:text-white/70">
                 <span>Loading...</span>
                 <span>{Math.round(progress)}%</span>
               </div>
                             <div className="w-full bg-gray-300/50 dark:bg-white/20 rounded-full h-2 overflow-hidden backdrop-blur-md">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex items-center space-x-2 text-gray-700 dark:text-white/70"
            >
              <Loader2 className="w-4 h-4 animate-spin" />
              <span className="text-sm">Preparing your experience...</span>
            </motion.div>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gray-400/30 dark:bg-white/10 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.1, 0.4, 0.1],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen; 