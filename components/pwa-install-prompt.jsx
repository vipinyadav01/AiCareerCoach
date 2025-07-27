"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, X, Smartphone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {

    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(iOS);

    const standalone = window.matchMedia('(display-mode: standalone)').matches 
      || window.navigator.standalone 
      || document.referrer.includes('android-app://');
    setIsStandalone(standalone);
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    if (iOS && !standalone) {
      const dismissed = localStorage.getItem('pwa-install-dismissed');
      if (!dismissed) {
        setShowInstallPrompt(true);
      }
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
        setShowInstallPrompt(false);
      }
    }
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
    localStorage.setItem('pwa-install-dismissed', 'true');
  };
  if (isStandalone || !showInstallPrompt) {
    return null;
  }

  return (
    <div className="fixed bottom-6 left-6 right-6 z-50 animate-in slide-in-from-bottom-4 duration-500">
      <Card className="border-0 bg-[#070D0D]/98 backdrop-blur-xl shadow-2xl shadow-[#070D0D]/20">
        <CardContent className="p-0">
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-[#EFEDE4]/20 via-[#EFEDE4]/10 to-[#EFEDE4]/20 p-[1px] rounded-lg">
              <div className="bg-[#070D0D] rounded-lg h-full w-full" />
            </div>

            <div className="relative p-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#EFEDE4]/20 to-[#EFEDE4]/5 flex items-center justify-center border border-[#EFEDE4]/10">
                  {isIOS ? (
                    <Smartphone className="h-6 w-6 text-[#EFEDE4]" />
                  ) : (
                    <Download className="h-6 w-6 text-[#EFEDE4]" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-lg text-[#EFEDE4] mb-1">
                        Install LaunchTrack
                      </h3>
                      <p className="text-sm text-[#EFEDE4]/70 leading-relaxed">
                        {isIOS 
                          ? "Add to your home screen for quick access. Tap the Share button and select 'Add to Home Screen'"
                          : "Get the full app experience with offline access and push notifications"
                        }
                      </p>
                    </div>
                    <Button
                      onClick={handleDismiss}
                      variant="ghost"
                      size="sm"
                      className="shrink-0 h-8 w-8 p-0 text-[#EFEDE4]/60 hover:text-[#EFEDE4] hover:bg-[#EFEDE4]/5 rounded-lg transition-all duration-200"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  {!isIOS && (
                    <div className="mt-4 flex gap-3">
                      <Button
                        onClick={handleInstallClick}
                        className="bg-[#EFEDE4] text-[#070D0D] hover:bg-[#EFEDE4]/90 font-medium px-6 py-2 rounded-lg transition-all duration-200 shadow-lg shadow-[#EFEDE4]/10"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Install Now
                      </Button>
                      <Button
                        onClick={handleDismiss}
                        variant="ghost"
                        className="text-[#EFEDE4]/80 hover:text-[#EFEDE4] hover:bg-[#EFEDE4]/5 px-4 py-2 rounded-lg transition-all duration-200"
                      >
                        Not now
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
