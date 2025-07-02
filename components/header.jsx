import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { FileText, GraduationCap, LayoutDashboard, PenBox, StarsIcon } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'

const Header = () => {
  return (
    <header className="fixed top-6 left-0 right-0 px-4 z-50">
      <div className="mx-auto max-w-6xl flex items-center justify-between border border-slate-200/50 dark:border-slate-700/50 bg-gradient-to-r from-black/95 to-indigo-950/95 backdrop-blur-md rounded-xl shadow-xl py-3.5 px-6 transition-all duration-300 hover:shadow-indigo-500/20">
        {/* Logo/App Name */}
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 hover:scale-105 transition-transform">
            LaunchTrack
          </Link>
        </div>

        <div className="flex items-center gap-5">
          {/* Navigation Links - Only visible when signed in */}
          <SignedIn>
            <Link href="/dashboard" className="flex items-center">
              <Button variant="outline" className="border-slate-600/40 hover:border-indigo-500/70 hover:bg-indigo-500/10 transition-colors">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Industry Insight
              </Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-indigo-600 hover:bg-indigo-700 shadow-md hover:shadow-indigo-600/30 transition-all">
                  <StarsIcon className="mr-2 h-4 w-4" />
                  Growth Tools
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
          </SignedIn>
          {/* Authentication */}
          <SignedOut>
            <div className="flex items-center gap-4">
              <Link href="/sign-in">
                <button className="text-gray-300 hover:text-indigo-400 transition px-3 py-1 rounded-lg hover:bg-indigo-600/10">
                  Sign In
                </button>
              </Link>
              <Link href="/sign-up">
                <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-lg transition shadow-md hover:shadow-indigo-600/50 font-medium">
                  Sign Up
                </button>
              </Link>
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "h-10 w-10 rounded-full border-2 border-indigo-500/70 shadow-md shadow-indigo-500/30",
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