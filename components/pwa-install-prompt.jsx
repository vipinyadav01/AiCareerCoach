"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, X, Smartphone, Plus, Share, CheckCircle, Sparkles, Zap, Bell } from 'lucide-react';

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showIOSOverlay, setShowIOSOverlay] = useState(false);
  const [installStep, setInstallStep] = useState(0);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const iOS = /ipad|iphone|ipod/.test(userAgent) && !window.MSStream;
    const android = /android/.test(userAgent);
    const mobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);

    setIsIOS(iOS);
    setIsAndroid(android);
    setIsMobile(mobile);

    const standalone = window.matchMedia('(display-mode: standalone)').matches
      || window.navigator.standalone === true
      || document.referrer.includes('android-app://');
    setIsStandalone(standalone);

    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);

      const dismissed = localStorage.getItem('pwa-install-dismissed');
      const dismissedTime = localStorage.getItem('pwa-install-dismissed-time');
      const now = Date.now();
      const threeDays = 3 * 24 * 60 * 60 * 1000; 

      if (!dismissed || (dismissedTime && now - parseInt(dismissedTime) > threeDays)) {
        setTimeout(() => {
          setShowInstallPrompt(true);
        }, 3000);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    if (iOS && !standalone) {
      const dismissed = localStorage.getItem('pwa-install-dismissed');
      const dismissedTime = localStorage.getItem('pwa-install-dismissed-time');
      const now = Date.now();
      const oneWeek = 7 * 24 * 60 * 60 * 1000;

      if (!dismissed || (dismissedTime && now - parseInt(dismissedTime) > oneWeek)) {
        const showAfterInteraction = () => {
          setTimeout(() => {
            setShowInstallPrompt(true);
          }, 5000);

          document.removeEventListener('scroll', showAfterInteraction);
          document.removeEventListener('click', showAfterInteraction);
          document.removeEventListener('touchstart', showAfterInteraction);
        };

        document.addEventListener('scroll', showAfterInteraction, { once: true });
        document.addEventListener('click', showAfterInteraction, { once: true });
        document.addEventListener('touchstart', showAfterInteraction, { once: true });
      }
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (isIOS) {
      setShowIOSOverlay(true);
      return;
    }

    if (deferredPrompt) {
      setInstallStep(1);
      try {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;

        if (outcome === 'accepted') {
          setInstallStep(2);
          setTimeout(() => {
            setDeferredPrompt(null);
            setShowInstallPrompt(false);
            setInstallStep(0);
          }, 2000);
        } else {
          setInstallStep(0);
        }
      } catch (error) {
        console.error('Install prompt error:', error);
        setInstallStep(0);
      }
    }
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
    setShowIOSOverlay(false);
    setInstallStep(0);
    localStorage.setItem('pwa-install-dismissed', 'true');
    localStorage.setItem('pwa-install-dismissed-time', Date.now().toString());
  };

  if (isStandalone || !showInstallPrompt) {
    return null;
  }

  return (
    <>
      {/* Mobile Layout - iOS Style */}
      {isIOS && (
        <div className="fixed inset-x-0 bottom-0 z-50 md:hidden">
          <div className="bg-background/95 backdrop-blur-xl border-t border-border shadow-2xl">
            <div className="px-4 py-4">
              <div className="flex items-center gap-4">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                  <Sparkles className="h-6 w-6 text-primary-foreground" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-base text-foreground mb-1">
                    Add to Home Screen
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Get quick access and a native app experience
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    onClick={() => setShowIOSOverlay(true)}
                    size="sm"
                    className="font-medium px-4 py-2 rounded-xl text-sm shadow-sm"
                  >
                    Add
                  </Button>
                  <Button
                    onClick={handleDismiss}
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground rounded-lg"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Layout - Android Style */}
      {isAndroid && (
        <div className="fixed inset-x-0 bottom-0 z-50 md:hidden">
          <div className="bg-background/95 backdrop-blur-xl border-t border-border shadow-2xl">
            <div className="px-4 py-4">
              <div className="flex items-center gap-4">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                  <Download className="h-6 w-6 text-primary-foreground" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-base text-foreground mb-1">
                    Install App
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Get offline access & push notifications
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    onClick={handleInstallClick}
                    size="sm"
                    disabled={installStep === 1}
                    className="font-medium px-4 py-2 rounded-xl text-sm shadow-sm"
                  >
                    {installStep === 1 ? 'Installing...' : 'Install'}
                  </Button>
                  <Button
                    onClick={handleDismiss}
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground rounded-lg"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Layout */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        <Card className="w-96 border bg-background/95 backdrop-blur-xl shadow-2xl rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-sm">
                <Sparkles className="h-6 w-6 text-primary-foreground" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-3">
                      Install App
                    </h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-primary" />
                        <span>Faster loading & offline access</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bell className="h-4 w-4 text-primary" />
                        <span>Push notifications</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Smartphone className="h-4 w-4 text-primary" />
                        <span>Native app experience</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    onClick={handleDismiss}
                    variant="ghost"
                    size="sm"
                    className="shrink-0 h-8 w-8 p-0 text-muted-foreground hover:text-foreground rounded-lg"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={handleInstallClick}
                    disabled={installStep === 1}
                    className="flex-1 font-medium px-4 py-2.5 rounded-xl text-sm shadow-sm"
                  >
                    {installStep === 1 ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary-foreground border-t-transparent mr-2"></div>
                        Installing...
                      </>
                    ) : (
                      <>
                        <Download className="h-4 w-4 mr-2" />
                        Install App
                      </>
                    )}
                  </Button>
                  <Button
                    onClick={handleDismiss}
                    variant="outline"
                    className="px-4 py-2.5 rounded-xl text-sm"
                  >
                    Later
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* iOS Instruction Overlay */}
      {isIOS && showIOSOverlay && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end justify-center p-4 md:hidden">
          <div className="bg-background rounded-t-3xl w-full max-w-sm shadow-2xl">
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-3xl bg-primary flex items-center justify-center shadow-sm">
                  <Share className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-xl text-foreground mb-2">
                  Add to Home Screen
                </h3>
                <p className="text-sm text-muted-foreground">
                  Install the app for quick access and a better experience
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-4 p-3 bg-muted rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-medium text-primary-foreground">1</div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground text-sm">Tap the Share button</p>
                    <p className="text-xs text-muted-foreground">In your browser's toolbar below</p>
                  </div>
                  <Share className="h-5 w-5 text-primary" />
                </div>
                
                <div className="flex items-center gap-4 p-3 bg-muted rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-medium text-primary-foreground">2</div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground text-sm">Select "Add to Home Screen"</p>
                    <p className="text-xs text-muted-foreground">Scroll down if you don't see it</p>
                  </div>
                  <Plus className="h-5 w-5 text-primary" />
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={handleDismiss}
                  className="flex-1 font-medium py-3 rounded-xl"
                >
                  Got it
                </Button>
                <Button
                  onClick={handleDismiss}
                  variant="outline"
                  className="px-4 py-3 rounded-xl"
                >
                  Later
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success State */}
      {installStep === 2 && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-2xl w-full max-w-sm p-6 text-center shadow-2xl">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center shadow-sm">
              <CheckCircle className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-xl text-foreground mb-2">
              Installation Complete!
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              The app has been installed successfully. You can now access it from your home screen or app drawer.
            </p>
            <Button
              onClick={handleDismiss}
              className="font-medium px-6 py-3 rounded-xl"
            >
              Continue
            </Button>
          </div>
        </div>
      )}
    </>
  );
}