"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, X, Smartphone, Plus, Share, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    setIsIOS(iOS);
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

    if (iOS && !standalone) {
      const dismissed = localStorage.getItem('pwa-install-dismissed');
      const dismissedTime = localStorage.getItem('pwa-install-dismissed-time');
      const now = Date.now();
      const oneWeek = 7 * 24 * 60 * 60 * 1000;

      // Show again after a week
      if (!dismissed || (dismissedTime && now - parseInt(dismissedTime) > oneWeek)) {
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
    localStorage.setItem('pwa-install-dismissed-time', Date.now().toString());
  };

  if (isStandalone || !showInstallPrompt) {
    return null;
  }

  return (
    <>
      {/* Mobile Layout */}
      <div className="fixed inset-x-0 bottom-0 z-50 md:hidden animate-in slide-in-from-bottom-4 duration-500">
        <div className="bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="shrink-0 w-10 h-10 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center shadow-sm">
                <div className="w-6 h-6 rounded-lg bg-slate-900 dark:bg-slate-100 flex items-center justify-center">
                  {isIOS ? (
                    <Plus className="h-3 w-3 text-slate-100 dark:text-slate-900" />
                  ) : (
                    <Download className="h-3 w-3 text-slate-100 dark:text-slate-900" />
                  )}
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 mb-0.5">
                  Install LaunchTrack App
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {isIOS
                    ? "Tap Share → Add to Home Screen"
                    : "Get offline access & notifications"
                  }
                </p>
              </div>

              <div className="flex items-center gap-2">
                {!isIOS && (
                  <Button
                    onClick={handleInstallClick}
                    size="sm"
                    className="bg-slate-900 dark:bg-slate-100 text-slate-100 dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 font-semibold px-4 py-2 rounded-xl text-xs shadow-lg transition-all duration-200"
                  >
                    Install
                  </Button>
                )}
                <Button
                  onClick={handleDismiss}
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-4 duration-500">
        <Card className="w-80 border border-slate-200/50 dark:border-slate-700/50 bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-slate-900/10 dark:shadow-slate-100/5">
          <CardContent className="p-0">
            <div className="p-5">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center shadow-sm border border-slate-200/50 dark:border-slate-700/50">
                  <div className="w-7 h-7 rounded-xl bg-slate-900 dark:bg-slate-100 flex items-center justify-center">
                    <Download className="h-4 w-4 text-slate-100 dark:text-slate-900" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 mb-1">
                        Install LaunchTrack
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        Access your career coach offline with faster loading and push notifications.
                      </p>
                    </div>
                    <Button
                      onClick={handleDismiss}
                      variant="ghost"
                      size="sm"
                      className="shrink-0 h-8 w-8 p-0 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={handleInstallClick}
                      className="flex-1 bg-slate-900 dark:bg-slate-100 text-slate-100 dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 font-semibold px-4 py-2.5 rounded-xl text-sm shadow-lg transition-all duration-200"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Install App
                    </Button>
                    <Button
                      onClick={handleDismiss}
                      variant="outline"
                      className="px-4 py-2.5 rounded-xl text-sm border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
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

      {/* Tablet Layout */}
      <div className="hidden sm:block md:hidden fixed bottom-4 left-4 right-4 z-50 animate-in slide-in-from-bottom-4 duration-500">
        <Card className="border border-slate-200/50 dark:border-slate-700/50 bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-xl shadow-slate-900/10 dark:shadow-slate-100/5">
          <CardContent className="p-0">
            <div className="p-4">
              <div className="flex items-center gap-4">
                <div className="shrink-0 w-11 h-11 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center shadow-sm border border-slate-200/50 dark:border-slate-700/50">
                  <div className="w-6 h-6 rounded-lg bg-slate-900 dark:bg-slate-100 flex items-center justify-center">
                    {isIOS ? (
                      <Plus className="h-3.5 w-3.5 text-slate-100 dark:text-slate-900" />
                    ) : (
                      <Download className="h-3.5 w-3.5 text-slate-100 dark:text-slate-900" />
                    )}
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 mb-1">
                    Install LaunchTrack App
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {isIOS
                      ? "Tap the Share button below and select 'Add to Home Screen' for quick access"
                      : "Get the full app experience with offline functionality and instant notifications"
                    }
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  {!isIOS && (
                    <Button
                      onClick={handleInstallClick}
                      className="bg-slate-900 dark:bg-slate-100 text-slate-100 dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 font-semibold px-5 py-2.5 rounded-xl text-sm shadow-lg transition-all duration-200"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Install Now
                    </Button>
                  )}
                  <Button
                    onClick={handleDismiss}
                    variant="ghost"
                    size="sm"
                    className="h-9 w-9 p-0 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* iOS Instruction Overlay */}
      {isIOS && showInstallPrompt && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-end justify-center p-4 md:hidden">
          <div className="bg-slate-50 dark:bg-slate-900 rounded-t-3xl w-full max-w-sm animate-in slide-in-from-bottom-8 duration-300">
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center">
                  <Share className="h-6 w-6 text-slate-600 dark:text-slate-400" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-2">
                  Add to Home Screen
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Install LaunchTrack for quick access and a better experience
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-400">1</div>
                  <span className="text-slate-700 dark:text-slate-300">Tap the Share button</span>
                  <Share className="h-4 w-4 text-slate-500 dark:text-slate-400 ml-auto" />
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-400">2</div>
                  <span className="text-slate-700 dark:text-slate-300">Select "Add to Home Screen"</span>
                  <Plus className="h-4 w-4 text-slate-500 dark:text-slate-400 ml-auto" />
                </div>
              </div>

              <Button
                onClick={handleDismiss}
                className="w-full bg-slate-900 dark:bg-slate-100 text-slate-100 dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 font-semibold py-3 rounded-xl"
              >
                Got it
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}