"use client"

import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { FileText, GraduationCap, LayoutDashboard, PenBox, StarsIcon, Menu } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { ThemeToggle } from './theme-toggle'

const Header = () => {
  return (
    <header className="fixed top-2 sm:top-4 lg:top-6 left-0 right-0 px-2 sm:px-4 lg:px-6 z-50">
      <div className="mx-auto max-w-7xl flex items-center justify-between border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60 supports-[backdrop-filter]:backdrop-blur-sm rounded-2xl shadow-2xl shadow-black/40 py-3 sm:py-4 px-4 sm:px-8 transition-all duration-300 hover:shadow-primary/10 hover:border-primary/30">
        <div className="flex items-center">
          <Link href="/" className="mr-3 flex items-center">
            <img src="/apple-touch-icon.png" alt="Launch Track Logo" className="h-8 w-8 sm:h-10 sm:w-10 rounded-full shadow-lg" />
          </Link>
          <Link href="/" className="text-xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary hover:scale-105 transition-all duration-300 hover:from-primary/80 hover:via-primary hover:to-primary/80 drop-shadow-sm font-inter">
            Launch Track
          </Link>
        </div>

        <div className="flex items-center gap-3 sm:gap-6">
          <SignedIn>
            <div className="hidden md:flex items-center gap-4">
              <Link href="/dashboard" className="flex items-center group">
                <Button variant="outline" size="sm" className="border-border bg-background/70 hover:bg-accent text-foreground hover:text-foreground transition-all duration-300 shadow-lg backdrop-blur-sm font-inter">
                  <LayoutDashboard className="mr-1 sm:mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
                  <span className="hidden lg:inline">Industry Insights</span>
                  <span className="lg:hidden">Insights</span>
                </Button>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/20 transition-all duration-300 border-0 font-semibold font-inter">
                    <StarsIcon className="mr-1 sm:mr-2 h-4 w-4" />
                    <span className="hidden lg:inline">Growth Tools</span>
                    <span className="lg:hidden">Tools</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-popover border-border backdrop-blur-xl rounded-xl shadow-2xl p-2 min-w-[200px]">
                  <DropdownMenuItem asChild className="hover:bg-accent focus:bg-accent rounded-lg transition-colors duration-200 mb-1">
                    <Link href="/resume" className="flex items-center py-3 px-4 font-inter">
                      <FileText className="h-4 w-4 text-primary" />
                      <span className="ml-3 text-foreground font-medium">Build Resume</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="hover:bg-accent focus:bg-accent rounded-lg transition-colors duration-200 mb-1">
                    <Link href="/ai-cover-letter" className="flex items-center py-3 px-4 font-inter">
                      <PenBox className="h-4 w-4 text-primary" />
                      <span className="ml-3 text-foreground font-medium">Cover Letter</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="hover:bg-accent focus:bg-accent rounded-lg transition-colors duration-200">
                    <Link href="/interview" className="flex items-center py-3 px-4 font-inter">
                      <GraduationCap className="h-4 w-4 text-primary" />
                      <span className="ml-3 text-foreground font-medium">Interview Prep</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="md:hidden  ">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-10 w-10 p-0 rounded-full border border-border/50 bg-background/80 hover:bg-primary/10 hover:border-primary/30 text-foreground transition-all duration-300 backdrop-blur-md shadow-lg hover:shadow-primary/20"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="bg-background/95 border border-border/50 backdrop-blur-xl w-64 rounded-2xl shadow-2xl p-1 mr-4 mt-2"
                  align="end"
                  sideOffset={8}
                >
                  <div className="p-3 border-b border-border/30 mb-1">
                    <p className="text-sm font-semibold text-foreground/80 font-inter">Navigation</p>
                  </div>
                  <DropdownMenuItem asChild className="hover:bg-primary/10 focus:bg-primary/10 rounded-xl transition-all duration-200 m-1">
                    <Link href="/dashboard" className="flex items-center py-3 px-4 font-inter group">
                      <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors">
                        <LayoutDashboard className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-foreground font-medium">Industry Insights</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="hover:bg-primary/10 focus:bg-primary/10 rounded-xl transition-all duration-200 m-1">
                    <Link href="/resume" className="flex items-center py-3 px-4 font-inter group">
                      <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors">
                        <FileText className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-foreground font-medium">Build Resume</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="hover:bg-primary/10 focus:bg-primary/10 rounded-xl transition-all duration-200 m-1">
                    <Link href="/ai-cover-letter" className="flex items-center py-3 px-4 font-inter group">
                      <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors">
                        <PenBox className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-foreground font-medium">Cover Letter</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="hover:bg-primary/10 focus:bg-primary/10 rounded-xl transition-all duration-200 m-1">
                    <Link href="/interview" className="flex items-center py-3 px-4 font-inter group">
                      <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors">
                        <GraduationCap className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-foreground font-medium">Interview Prep</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-3 sm:gap-4">
              <Link href="/sign-in">
                <button className="text-muted-foreground hover:text-foreground transition-all duration-300 px-3 sm:px-4 py-2 rounded-xl hover:bg-accent text-sm sm:text-base font-medium backdrop-blur-sm font-inter">
                  Sign In
                </button>
              </Link>
              <Link href="/sign-up">
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-primary/20 font-semibold text-sm sm:text-base font-inter">
                  Get Started
                </button>
              </Link>
            </div>
          </SignedOut>
          
          <ThemeToggle />
          
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "h-9 w-9 sm:h-11 sm:w-11 rounded-full border-2 border-border shadow-lg hover:border-primary/80 transition-all duration-300 backdrop-blur-sm",
                  userButtonPopoverCard: "bg-popover backdrop-blur-xl border border-border shadow-2xl rounded-xl",
                  userButtonPopoverActionButton: "text-muted-foreground hover:bg-accent hover:text-foreground p-3 rounded-lg transition-all duration-200 font-inter",
                  userPreviewMainIdentifier: "font-bold text-foreground text-lg font-inter",
                  userPreviewSecondaryIdentifier: "text-muted-foreground font-inter"
                }
              }}
            />
          </SignedIn>
        </div>
      </div>
    </header>
  )
}
export default Header