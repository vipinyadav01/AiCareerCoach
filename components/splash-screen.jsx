"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Loader2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const SplashScreen = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Predefined positions to avoid hydration mismatch
  const particlePositions = [
    { left: 15, top: 20, duration: 3.5, delay: 0.2 },
    { left: 85, top: 15, duration: 4.2, delay: 0.8 },
    { left: 25, top: 80, duration: 3.8, delay: 1.1 },
    { left: 70, top: 25, duration: 4.5, delay: 0.5 },
    { left: 90, top: 70, duration: 3.2, delay: 1.5 },
    { left: 40, top: 90, duration: 4.0, delay: 0.3 },
    { left: 60, top: 45, duration: 3.7, delay: 1.2 },
    { left: 10, top: 60, duration: 4.1, delay: 0.9 },
  ];

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
            touchAction: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background"></div>
          
          <div className="relative flex flex-col items-center justify-center space-y-8 px-4">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <Card className="relative w-24 h-24 bg-card/80 backdrop-blur-md border-border flex items-center justify-center">
                <img 
                  src="/android-chrome-512x512.png" 
                  alt="LaunchTrack Logo" 
                  className="w-16 h-16 object-contain"
                  style={{
                    imageRendering: 'crisp-edges',
                    WebkitImageRendering: 'crisp-edges',
                    maxWidth: '100%',
                    maxHeight: '100%',
                  }}
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-transparent border-t-primary/60 rounded-lg"
                />
              </Card>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center space-y-2"
            >
              <h1 className="text-4xl font-bold bg-gradient-to-r from-foreground via-primary to-primary bg-clip-text text-transparent">
                LaunchTrack
              </h1>
              <Badge variant="secondary" className="text-lg px-4 py-1">
                AI Career Platform
              </Badge>
            </motion.div>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-64 space-y-3"
            >
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Loading...</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex items-center space-x-2 text-muted-foreground"
            >
              <Loader2 className="w-4 h-4 animate-spin" />
              <span className="text-sm">Preparing your experience...</span>
            </motion.div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {particlePositions.map((particle, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary/20 rounded-full"
                  style={{
                    left: `${particle.left}%`,
                    top: `${particle.top}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.1, 0.6, 0.1],
                    scale: [0.5, 1.2, 0.5],
                  }}
                  transition={{
                    duration: particle.duration,
                    repeat: Infinity,
                    delay: particle.delay,
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