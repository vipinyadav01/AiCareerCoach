import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from '@clerk/themes'
import { Toaster } from "@/components/ui/sonner";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "LaunchTrack-AI Career Coach",
  description: " Your AI-powered career coach for personalized job search and interview preparation.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
    <html lang="en" suppressHydrationWarning>
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
