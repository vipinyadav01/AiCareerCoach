import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { FileText, GraduationCap, LayoutDashboard, PenBox, StarsIcon, Menu } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'

const Header = () => {
  return (
    <header className="fixed top-3 sm:top-6 left-0 right-0 px-2 sm:px-4 z-50">
      <div className="mx-auto max-w-6xl flex items-center justify-between border border-slate-200/50 dark:border-slate-700/50 bg-gradient-to-r from-black/95 to-indigo-950/95 backdrop-blur-md rounded-xl shadow-xl py-2 sm:py-3.5 px-3 sm:px-6 transition-all duration-300 hover:shadow-indigo-500/20">
        {/* Logo/App Name */}
        <div className="flex items-center">
          <Link href="/" className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 hover:scale-105 transition-transform">
            LaunchTrack
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-5">
          {/* Navigation Links - Hidden on mobile, visible on tablet+ */}
          <SignedIn>
            <div className="hidden md:flex items-center gap-3">
              <Link href="/dashboard" className="flex items-center">
                <Button variant="outline" size="sm" className="border-slate-600/40 hover:border-indigo-500/70 hover:bg-indigo-500/10 transition-colors">
                  <LayoutDashboard className="mr-1 sm:mr-2 h-4 w-4" />
                  <span className="hidden lg:inline">Industry Insight</span>
                  <span className="lg:hidden">Insight</span>
                </Button>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 shadow-md hover:shadow-indigo-600/30 transition-all">
                    <StarsIcon className="mr-1 sm:mr-2 h-4 w-4" />
                    <span className="hidden lg:inline">Growth Tools</span>
                    <span className="lg:hidden">Tools</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-gray-900/90 border-slate-700 backdrop-blur-md">
                  <DropdownMenuItem asChild className="hover:bg-indigo-600/30 focus:bg-indigo-600/30">
                    <Link href="/resume" className="flex items-center">
                      <FileText className="h-4 w-4 text-indigo-400" />
                      <span className="ml-2">Build Resume</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="hover:bg-indigo-600/30 focus:bg-indigo-600/30">
                    <Link href="/ai-cover-letter" className="flex items-center">
                      <PenBox className="h-4 w-4 text-indigo-400" />
                      <span className="ml-2">Cover Letter</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="hover:bg-indigo-600/30 focus:bg-indigo-600/30">
                    <Link href="/interview" className="flex items-center">
                      <GraduationCap className="h-4 w-4 text-indigo-400" />
                      <span className="ml-2">Interview Prep</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Mobile Menu - Visible only on mobile */}
            <div className="md:hidden ">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="sm" variant="outline" className="border-slate-600/40 hover:border-indigo-500/70 hover:bg-indigo-500/10 ">
                    <Menu className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-gray-900/90 border-slate-700 backdrop-blur-md w-48 ">
                  <DropdownMenuItem asChild className="hover:bg-indigo-600/30 focus:bg-indigo-600/30">
                    <Link href="/dashboard" className="flex items-center">
                      <LayoutDashboard className="h-4 w-4 text-indigo-400" />
                      <span className="ml-2">Industry Insight</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="hover:bg-indigo-600/30 focus:bg-indigo-600/30">
                    <Link href="/resume" className="flex items-center">
                      <FileText className="h-4 w-4 text-indigo-400" />
                      <span className="ml-2">Build Resume</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="hover:bg-indigo-600/30 focus:bg-indigo-600/30">
                    <Link href="/ai-cover-letter" className="flex items-center">
                      <PenBox className="h-4 w-4 text-indigo-400" />
                      <span className="ml-2">Cover Letter</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="hover:bg-indigo-600/30 focus:bg-indigo-600/30">
                    <Link href="/interview" className="flex items-center">
                      <GraduationCap className="h-4 w-4 text-indigo-400" />
                      <span className="ml-2">Interview Prep</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </SignedIn>

          {/* Authentication */}
          <SignedOut>
            <div className="flex items-center gap-2 sm:gap-4">
              <Link href="/sign-in">
                <button className="text-gray-300 hover:text-indigo-400 transition px-2 sm:px-3 py-1 rounded-lg hover:bg-indigo-600/10 text-sm sm:text-base">
                  Sign In
                </button>
              </Link>
              <Link href="/sign-up">
                <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg transition shadow-md hover:shadow-indigo-600/50 font-medium text-sm sm:text-base">
                  Sign Up
                </button>
              </Link>
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "h-8 w-8 sm:h-10 sm:w-10 rounded-full border-2 border-indigo-500/70 shadow-md shadow-indigo-500/30",
                  userButtonPopoverCard: "bg-gray-900/95 backdrop-blur-md border border-indigo-500/30 shadow-xl rounded-xl",
                  userButtonPopoverActionButton: "text-gray-300 hover:bg-indigo-600/20 hover:text-indigo-300 p-2 rounded transition-colors",
                  userPreviewMainIdentifier: "font-bold text-indigo-300 text-lg"
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