"use client";

import { Button } from "@/components/ui/button";
import { useSplashScreen } from "@/hooks/use-splash";
import { RefreshCw, Eye, EyeOff } from "lucide-react";

const SplashDemo = () => {
  const { showSplash, showSplashScreen, hideSplashScreen, resetSplashScreen } = useSplashScreen();

  return (
    <div className="fixed bottom-4 right-4 z-40 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 space-y-2">
      <h3 className="text-sm font-semibold text-white mb-2">Splash Screen Controls</h3>
      
      <div className="space-y-2">
        <Button
          size="sm"
          variant="outline"
          onClick={showSplashScreen}
          className="w-full text-xs"
        >
          <Eye className="w-3 h-3 mr-1" />
          Show Splash
        </Button>
        
        <Button
          size="sm"
          variant="outline"
          onClick={hideSplashScreen}
          className="w-full text-xs"
        >
          <EyeOff className="w-3 h-3 mr-1" />
          Hide Splash
        </Button>
        
        <Button
          size="sm"
          variant="outline"
          onClick={resetSplashScreen}
          className="w-full text-xs"
        >
          <RefreshCw className="w-3 h-3 mr-1" />
          Reset (Show on next visit)
        </Button>
      </div>
      
      <div className="text-xs text-white/70 mt-2">
        Status: {showSplash ? "Visible" : "Hidden"}
      </div>
    </div>
  );
};

export default SplashDemo; 