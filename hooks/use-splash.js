import { useSplash } from "@/components/splash-provider";

export const useSplashScreen = () => {
  const { showSplash, setShowSplash } = useSplash();

  const showSplashScreen = () => {
    setShowSplash(true);
  };

  const hideSplashScreen = () => {
    setShowSplash(false);
  };

  const resetSplashScreen = () => {
    // Clear the localStorage to show splash screen again
    if (typeof window !== "undefined") {
      localStorage.removeItem("hasVisited");
      setShowSplash(true);
    }
  };

  return {
    showSplash,
    showSplashScreen,
    hideSplashScreen,
    resetSplashScreen,
  };
}; 