"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, X, Smartphone, Plus, Share, ChevronUp, CheckCircle, Sparkles, Zap, Bell } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const android = /Android/.test(navigator.userAgent);
    const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    setIsIOS(iOS);
    setIsAndroid(android);
    setIsMobile(mobile);

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

    // Enhanced iOS detection and timing
    if (iOS && !standalone) {
      const dismissed = localStorage.getItem('pwa-install-dismissed');
      const dismissedTime = localStorage.getItem('pwa-install-dismissed-time');
      const now = Date.now();
      const oneDay = 24 * 60 * 60 * 1000;

      if (!dismissed || (dismissedTime && now - parseInt(dismissedTime) > oneDay)) {
        // Delay to show after page load
        setTimeout(() => {
          setShowInstallPrompt(true);
        }, 2000);
      }
    }

    // Android install prompt
    if (android && !standalone) {
      const dismissed = localStorage.getItem('pwa-install-dismissed');
      const dismissedTime = localStorage.getItem('pwa-install-dismissed-time');
      const now = Date.now();
      const oneDay = 24 * 60 * 60 * 1000;

      if (!dismissed || (dismissedTime && now - parseInt(dismissedTime) > oneDay)) {
        setTimeout(() => {
          setShowInstallPrompt(true);
        }, 1500);
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
      {/* Modern Mobile Layout - iOS Style */}
      {isIOS && (
        <div className="fixed inset-x-0 bottom-0 z-50 md:hidden">
          <div className="bg-white/95 dark:bg-black/95 backdrop-blur-2xl border-t border-gray-200/50 dark:border-gray-800/50 shadow-2xl">
            <div className="px-4 py-4">
              <div className="flex items-center gap-4">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-base text-gray-900 dark:text-white mb-1">
                    Add to Home Screen
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Get quick access and a native app experience
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    onClick={() => setShowIOSOverlay(true)}
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-xl text-sm shadow-lg transition-all duration-200"
                  >
                    Add
                  </Button>
                  <Button
                    onClick={handleDismiss}
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modern Mobile Layout - Android Style */}
      {isAndroid && (
        <div className="fixed inset-x-0 bottom-0 z-50 md:hidden">
          <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl border-t border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
            <div className="px-4 py-4">
              <div className="flex items-center gap-4">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center shadow-lg">
                  <Download className="h-6 w-6 text-white" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-base text-gray-900 dark:text-white mb-1">
                    Install LaunchTrack
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Get offline access & notifications
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    onClick={handleInstallClick}
                    size="sm"
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-xl text-sm shadow-lg transition-all duration-200"
                  >
                    {installStep === 1 ? 'Installing...' : 'Install'}
                  </Button>
                  <Button
                    onClick={handleDismiss}
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modern Desktop Layout */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        <Card className="w-96 border border-gray-200/50 dark:border-gray-700/50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl shadow-2xl shadow-gray-900/10 dark:shadow-gray-100/5 rounded-2xl overflow-hidden">
          <CardContent className="p-0">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                  <Sparkles className="h-7 w-7 text-white" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                        Install LaunchTrack
                      </h3>
                      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <Zap className="h-4 w-4 text-blue-500" />
                          <span>Faster loading & offline access</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Bell className="h-4 w-4 text-green-500" />
                          <span>Push notifications</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Smartphone className="h-4 w-4 text-purple-500" />
                          <span>Native app experience</span>
                        </div>
                      </div>
                    </div>
                    <Button
                      onClick={handleDismiss}
                      variant="ghost"
                      size="sm"
                      className="shrink-0 h-8 w-8 p-0 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={handleInstallClick}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-4 py-3 rounded-xl text-sm shadow-lg transition-all duration-200"
                    >
                      {installStep === 1 ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
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
                      className="px-4 py-3 rounded-xl text-sm border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      Later
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced iOS Instruction Overlay */}
      {isIOS && showIOSOverlay && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end justify-center p-4 md:hidden">
          <div className="bg-white dark:bg-gray-900 rounded-t-3xl w-full max-w-sm animate-in slide-in-from-bottom-8 duration-300 shadow-2xl">
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                  <Share className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
                  Add to Home Screen
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Install LaunchTrack for quick access and a better experience
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-bold text-white">1</div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">Tap Share button</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">In your browser's toolbar</p>
                  </div>
                  <Share className="h-5 w-5 text-blue-500" />
                </div>
                
                <div className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-sm font-bold text-white">2</div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">Select "Add to Home Screen"</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">From the share menu</p>
                  </div>
                  <Plus className="h-5 w-5 text-purple-500" />
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={handleDismiss}
                  className="flex-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 font-semibold py-3 rounded-xl"
                >
                  Got it
                </Button>
                <Button
                  onClick={handleDismiss}
                  variant="outline"
                  className="px-4 py-3 rounded-xl border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400"
                >
                  Remind later
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success State for Android */}
      {installStep === 2 && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-sm p-6 text-center animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
              Installation Complete!
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              LaunchTrack has been installed successfully. You can now access it from your home screen.
            </p>
            <Button
              onClick={handleDismiss}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl"
            >
              Continue
            </Button>
          </div>
        </div>
      )}
    </>
  );
}