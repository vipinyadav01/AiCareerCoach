"use client"

import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { FileText, GraduationCap, LayoutDashboard, PenBox, Menu, Sun, Moon, Home, Github } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { ThemeToggle } from './theme-toggle'
import { GitHubStars } from './github-stars'

const Header = () => {
  return (
    <div className="fixed top-1.5 left-0 w-screen h-16 sm:h-18 bg-transparent z-50 flex gap-1 sm:gap-2 items-center justify-center px-2">
      <div className="h-full w-auto px-2 sm:px-3 md:px-4 flex items-center justify-center relative group transition-transform duration-200 hover:scale-105">
        <SignedOut>
          <Link href="/" className="flex items-center gap-2 sm:gap-3 relative z-10">
            <div className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-lg bg-white/80 dark:bg-gray-900/80 shadow-md border border-gray-200 dark:border-gray-800 transition-all">
              <img
                src="/favicon-32x32.png"
                alt="Launch Track Logo"
                className="h-7 w-7 sm:h-8 sm:w-8 object-contain"
                style={{ minWidth: 28, minHeight: 28 }}
              />
            </div>
            <span className="ml-1 sm:ml-2 text-gray-800 dark:text-gray-100 text-sm sm:text-base md:text-lg font-bold font-nav tracking-tight max-sm:hidden">
              Launch Track
            </span>
          </Link>
        </SignedOut>
        <SignedIn>
          <Link href="/dashboard" className="flex items-center gap-2 sm:gap-3 relative z-10">
            <div className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-lg bg-white/80 dark:bg-gray-900/80 shadow-md border border-gray-200 dark:border-gray-800 transition-all">
              <img
                src="/favicon-32x32.png"
                alt="Launch Track Logo"
                className="h-7 w-7 sm:h-8 sm:w-8 object-contain"
                style={{ minWidth: 28, minHeight: 28 }}
              />
            </div>
            <span className="ml-1 sm:ml-2 text-gray-800 dark:text-gray-100 text-sm sm:text-base md:text-lg font-bold font-nav tracking-tight max-sm:hidden">
              Launch Track
            </span>
          </Link>
        </SignedIn>
        <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-br from-gray-100/40 via-white/10 to-gray-300/20 dark:from-gray-700/30 dark:via-gray-800/20 dark:to-gray-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Navigation Section */}
      <div className="h-full flex-1 max-w-4xl bg-transparent backdrop-blur-lg rounded-lg flex items-center justify-center px-2 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 dark:from-blue-400/20 dark:via-transparent dark:to-purple-400/20"></div>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 20">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-300 dark:text-gray-600" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        <SignedIn>
          <nav className="flex items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 relative z-10 w-full justify-center">
            <Link href="/dashboard" className="flex items-center gap-1 sm:gap-2 md:gap-3 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200 group border border-transparent hover:border-blue-100 dark:hover:border-blue-800 hover:shadow-sm dark:hover:shadow-blue-900/20">
              <div className="p-1 sm:p-1.5 rounded-md bg-blue-100 dark:bg-blue-900/50 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/60 transition-colors">
                <Home className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 transition-colors" />
              </div>
              <span className="hidden sm:block text-xs sm:text-sm md:text-base font-bold font-nav text-gray-700 dark:text-gray-300 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                Dashboard
              </span>
            </Link>

            <Link href="/resume" className="flex items-center gap-1 sm:gap-2 md:gap-3 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all duration-200 group border border-transparent hover:border-purple-100 dark:hover:border-purple-800 hover:shadow-sm dark:hover:shadow-purple-900/20">
              <div className="p-1 sm:p-1.5 rounded-md bg-purple-100 dark:bg-purple-900/50 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/60 transition-colors">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 dark:text-purple-400 transition-colors" />
              </div>
              <span className="hidden sm:block text-xs sm:text-sm md:text-base font-bold font-nav text-gray-700 dark:text-gray-300 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
                Resume
              </span>
            </Link>

            <Link href="/ai-cover-letter" className="flex items-center gap-1 sm:gap-2 md:gap-3 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-all duration-200 group border border-transparent hover:border-emerald-100 dark:hover:border-emerald-800 hover:shadow-sm dark:hover:shadow-emerald-900/20">
              <div className="p-1 sm:p-1.5 rounded-md bg-emerald-100 dark:bg-emerald-900/50 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800/60 transition-colors">
                <PenBox className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 dark:text-emerald-400 transition-colors" />
              </div>
              <span className="hidden sm:block text-xs sm:text-sm md:text-base font-bold font-nav text-gray-700 dark:text-gray-300 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                Cover Letter
              </span>
            </Link>

            <Link href="/interview" className="flex items-center gap-1 sm:gap-2 md:gap-3 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/30 transition-all duration-200 group border border-transparent hover:border-orange-100 dark:hover:border-orange-800 hover:shadow-sm dark:hover:shadow-orange-900/20">
              <div className="p-1 sm:p-1.5 rounded-md bg-orange-100 dark:bg-orange-900/50 group-hover:bg-orange-200 dark:group-hover:bg-orange-800/60 transition-colors">
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 dark:text-orange-400 transition-colors" />
              </div>
              <span className="hidden sm:block text-xs sm:text-sm md:text-base font-bold font-nav text-gray-700 dark:text-gray-300 group-hover:text-orange-700 dark:group-hover:text-orange-300 transition-colors">
                Interview
              </span>
            </Link>

            <span className="mx-1 w-px h-6 bg-gray-300 dark:bg-gray-700 rounded-full" aria-hidden="true"></span>
            <ThemeToggle />
          </nav>
        </SignedIn>

        <SignedOut>
          <nav className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 relative z-10 w-full justify-center">
            <Link href="/" className="flex items-center gap-1 sm:gap-2 md:gap-3 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200 group border border-transparent hover:border-blue-100 dark:hover:border-blue-800">
              <div className="p-1 sm:p-1.5 rounded-md bg-blue-100 dark:bg-blue-900/50 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/60 transition-colors">
                <Home className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 transition-colors" />
              </div>
              <span className="hidden sm:block text-xs sm:text-sm md:text-base font-bold font-nav text-gray-700 dark:text-gray-300 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                Home
              </span>
            </Link>

            <Link href="/sign-in" className="flex items-center gap-1 sm:gap-2 md:gap-3 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all duration-200 group border border-transparent hover:border-purple-100 dark:hover:border-purple-800">
              <div className="p-1 sm:p-1.5 rounded-md bg-purple-100 dark:bg-purple-900/50 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/60 transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 dark:text-purple-400 transition-colors" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M21 12H9" />
                </svg>
              </div>
              <span className="hidden sm:block text-xs sm:text-sm md:text-base font-bold font-nav text-gray-700 dark:text-gray-300 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
                Sign In
              </span>
            </Link>
            <span className="mx-1 w-px h-6 bg-gray-300 dark:bg-gray-700 rounded-full" aria-hidden="true"></span>
            <ThemeToggle />
          </nav>
        </SignedOut>
      </div>

      {/* User Section */}
      <SignedIn>
        <div className="h-full w-auto min-w-fit dark:bg-transparent backdrop-blur-lg rounded-lg flex flex-row items-center justify-center gap-1 sm:gap-2 px-2 sm:px-3 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl dark:shadow-black/50 dark:hover:shadow-black/70 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 via-gray-200/20 to-gray-400/20 dark:from-gray-600/30 dark:via-gray-500/30 dark:to-gray-800/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <UserButton
            appearance={{
              elements: {
                avatarBox: "w-8 h-8 sm:w-9 sm:h-9 relative z-10",
                userButtonPopoverCard: "bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200 dark:border-gray-700 shadow-2xl rounded-xl",
                userButtonPopoverActionButton: "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 p-3 rounded-lg transition-all duration-200 font-nav",
                userPreviewMainIdentifier: "font-medium font-nav text-gray-900 dark:text-gray-100 text-sm",
                userPreviewSecondaryIdentifier: "text-gray-500 dark:text-gray-400 text-xs font-nav"
              }
            }}
          />
          <div className="hidden lg:flex items-center gap-1 relative z-10">
            <Github className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
            <GitHubStars className="text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors" showIcon={false} />
          </div>
          <div className="lg:hidden relative z-10">
            <GitHubStars className="text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors" />
          </div>
        </div>
      </SignedIn>

      <SignedOut>
        <div className="h-full w-auto min-w-fit dark:bg-transparent backdrop-blur-lg rounded-lg flex flex-row items-center justify-center gap-1 sm:gap-2 px-2 sm:px-3 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl dark:shadow-black/50 dark:hover:shadow-black/70 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 via-gray-200/20 to-gray-400/20 dark:from-gray-600/30 dark:via-gray-500/30 dark:to-gray-800/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="hidden lg:flex items-center gap-1 relative z-10">
            <Github className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
            <GitHubStars className="text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors" showIcon={false} />
          </div>
          <div className="lg:hidden relative z-10">
            <GitHubStars className="text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors" />
          </div>
        </div>
      </SignedOut>

      {/* Hidden Mobile Menu (unused but kept for potential future use) */}
      <div className="hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="sm" variant="ghost" className="h-10 w-10 p-0">
              <Menu className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default Header