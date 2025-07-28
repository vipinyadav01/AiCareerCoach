import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import PWAInstallPrompt from "@/components/pwa-install-prompt";
import PWAStatus from "@/components/pwa-status";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from '@clerk/themes'
import { Toaster } from "@/components/ui/sonner";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    default: "LaunchTrack - AI Career Coach | Vipin Yadav",
    template: "%s | LaunchTrack - AI Career Coach"
  },
  description: "LaunchTrack - Your AI-powered career coach for personalized job search, interview preparation, cover letter generation, and career guidance. From GLA University students to professionals worldwide.",
  keywords: [
    "LaunchTrack",
    "LaunchTrack GLA",
    "AI Career Coach",
    "GLA University",
    "Job Search AI",
    "Interview Preparation",
    "Cover Letter Generator",
    "Career Guidance",
    "AI Job Assistant",
    "Career Development",
    "Professional Growth",
    "Job Interview AI",
    "Resume Builder",
    "Career Coaching",
    "Employment Assistant",
    "Vipin Yadav01",
    "Vipin Yadav",
    "Vipin Yadav AI Career Coach"

  ],
  authors: [{ name: "Vipin Yadav" }],
  creator: "LaunchTrack - Vipin Yadav",
  publisher: "LaunchTrack",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "LaunchTrack",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "LaunchTrack - AI Career Coach",
    title: "LaunchTrack - AI Career Coach | GLA University",
    description: "Your AI-powered career coach for personalized job search, interview preparation, and career guidance. From GLA University to global success.",
    url: "https://launchtrack.vercel.app",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "LaunchTrack - AI Career Coach Logo",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@LaunchTrack",
    creator: "@LaunchTrack",
    title: "LaunchTrack - AI Career Coach | GLA University",
    description: "Your AI-powered career coach for personalized job search, interview preparation, and career guidance.",
    images: ["/android-chrome-512x512.png"],
  },
  alternates: {
    canonical: "https://launchtrack.vercel.app",
  },
  category: "education",
  classification: "Career Development, AI Tools, Education Technology",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#EFEDE4",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
    <html lang="en" suppressHydrationWarning>
            <head>
        {/* PWA and App Configuration */}
        <meta name="application-name" content="LaunchTrack" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="LaunchTrack" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#070D0D" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* Favicons and Icons */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#070D0D" />
        
        {/* SEO and Search Engine Tags */}
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        <link rel="canonical" href="https://launchtrack.vercel.app" />
        
        {/* Geographic and Language Tags */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="Mathura, Uttar Pradesh" />
        <meta name="geo.position" content="27.4924;77.6737" />
        <meta name="ICBM" content="27.4924, 77.6737" />
        <meta name="language" content="en" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="rating" content="general" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta name="theme-color" content="#EFEDE4" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#070D0D" media="(prefers-color-scheme: dark)" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "LaunchTrack - AI Career Coach",
              "description": "AI-powered career coach for job search, interview preparation, and career guidance",
              "url": "https://launchtrack.vercel.app",
              "applicationCategory": "EducationalApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "creator": {
                "@type": "Organization",
                "name": "GLA University",
                "url": "https://gla.ac.in"
              },
              "keywords": "AI Career Coach, Job Search, Interview Preparation, GLA University, LaunchTrack"
            })
          }}
        />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="LaunchTrack - AI Career Coach | GLA University" />
        <meta property="og:description" content="Your AI-powered career coach for personalized job search, interview preparation, and career guidance. From GLA University to global success." />
        <meta property="og:site_name" content="LaunchTrack" />
        <meta property="og:url" content="https://launchtrack.vercel.app" />
        <meta property="og:image" content="https://launchtrack.vercel.app/android-chrome-512x512.png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:alt" content="LaunchTrack - AI Career Coach Logo" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@LaunchTrack" />
        <meta name="twitter:creator" content="@LaunchTrack" />
        <meta name="twitter:title" content="LaunchTrack - AI Career Coach | GLA University" />
        <meta name="twitter:description" content="Your AI-powered career coach for personalized job search, interview preparation, and career guidance." />
        <meta name="twitter:image" content="https://launchtrack.vercel.app/android-chrome-512x512.png" />
        <meta name="twitter:image:alt" content="LaunchTrack - AI Career Coach Logo" />
      </head>
      <body
        className={`${inter.className} `}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* Header */}
            <Header/>
            <main className="min-h-screen">
{children}
            </main>
            <PWAInstallPrompt />
            <PWAStatus />
            <Toaster richColors/>
            {/* Footer */}
            <footer className="bg-muted/50  text-white py-12 text-center">
              <div className="container mx-auto px-4 text-center text-gray-300">
                <p className="text-sm">
                  © {new Date().getFullYear()} Ai Career Coach. All rights reserved.
                </p>
              </div>
            </footer>
          </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
