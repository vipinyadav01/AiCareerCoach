import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { FileText, GraduationCap, LayoutDashboard, PenBox, StarsIcon, Menu } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { checkUser } from '@/lib/checkUser'

const Header =  async () => {
  await checkUser();
  return (
    <header className="fixed top-4 sm:top-6 left-0 right-0 px-3 sm:px-6 z-50">
      <div className="mx-auto max-w-7xl flex items-center justify-between border border-white/10 bg-gradient-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/20 py-3 sm:py-4 px-4 sm:px-8 transition-all duration-300 hover:shadow-indigo-500/10 hover:border-indigo-500/20">
        {/* Logo/App Name */}
        <div className="flex items-center">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 hover:scale-105 transition-all duration-300 hover:from-indigo-300 hover:via-purple-300 hover:to-pink-300">
            Launch Track
          </Link>
        </div>

        <div className="flex items-center gap-3 sm:gap-6">
          {/* Navigation Links - Hidden on mobile, visible on tablet+ */}
          <SignedIn>
            <div className="hidden md:flex items-center gap-4">
              <Link href="/dashboard" className="flex items-center group">
                <Button variant="outline" size="sm" className="border-slate-600/50 bg-slate-800/50 hover:border-indigo-400/70 hover:bg-indigo-500/20 text-slate-200 hover:text-indigo-300 transition-all duration-300 shadow-lg hover:shadow-indigo-500/20">
                  <LayoutDashboard className="mr-1 sm:mr-2 h-4 w-4 group-hover:text-indigo-400 transition-colors" />
                  <span className="hidden lg:inline">Industry Insights</span>
                  <span className="lg:hidden">Insights</span>
                </Button>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="sm" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 border-0">
                    <StarsIcon className="mr-1 sm:mr-2 h-4 w-4" />
                    <span className="hidden lg:inline">Growth Tools</span>
                    <span className="lg:hidden">Tools</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-slate-900/95 border-slate-700/50 backdrop-blur-xl rounded-xl shadow-2xl p-2">
                  <DropdownMenuItem asChild className="hover:bg-indigo-600/30 focus:bg-indigo-600/30 rounded-lg transition-colors duration-200">
                    <Link href="/resume" className="flex items-center py-2 px-3">
                      <FileText className="h-4 w-4 text-indigo-400" />
                      <span className="ml-3 text-slate-200">Build Resume</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="hover:bg-purple-600/30 focus:bg-purple-600/30 rounded-lg transition-colors duration-200">
                    <Link href="/ai-cover-letter" className="flex items-center py-2 px-3">
                      <PenBox className="h-4 w-4 text-purple-400" />
                      <span className="ml-3 text-slate-200">Cover Letter</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="hover:bg-pink-600/30 focus:bg-pink-600/30 rounded-lg transition-colors duration-200">
                    <Link href="/interview" className="flex items-center py-2 px-3">
                      <GraduationCap className="h-4 w-4 text-pink-400" />
                      <span className="ml-3 text-slate-200">Interview Prep</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Mobile Menu - Visible only on mobile */}
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="sm" variant="outline" className="border-slate-600/50 bg-slate-800/50 hover:border-indigo-400/70 hover:bg-indigo-500/20 text-slate-200 transition-all duration-300">
                    <Menu className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-slate-900/95 border-slate-700/50 backdrop-blur-xl w-52 rounded-xl shadow-2xl p-2">
                  <DropdownMenuItem asChild className="hover:bg-indigo-600/30 focus:bg-indigo-600/30 rounded-lg transition-colors duration-200">
                    <Link href="/dashboard" className="flex items-center py-2 px-3">
                      <LayoutDashboard className="h-4 w-4 text-indigo-400" />
                      <span className="ml-3 text-slate-200">Industry Insights</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="hover:bg-indigo-600/30 focus:bg-indigo-600/30 rounded-lg transition-colors duration-200">
                    <Link href="/resume" className="flex items-center py-2 px-3">
                      <FileText className="h-4 w-4 text-indigo-400" />
                      <span className="ml-3 text-slate-200">Build Resume</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="hover:bg-purple-600/30 focus:bg-purple-600/30 rounded-lg transition-colors duration-200">
                    <Link href="/ai-cover-letter" className="flex items-center py-2 px-3">
                      <PenBox className="h-4 w-4 text-purple-400" />
                      <span className="ml-3 text-slate-200">Cover Letter</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="hover:bg-pink-600/30 focus:bg-pink-600/30 rounded-lg transition-colors duration-200">
                    <Link href="/interview" className="flex items-center py-2 px-3">
                      <GraduationCap className="h-4 w-4 text-pink-400" />
                      <span className="ml-3 text-slate-200">Interview Prep</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </SignedIn>

          {/* Authentication */}
          <SignedOut>
            <div className="flex items-center gap-3 sm:gap-4">
              <Link href="/sign-in">
                <button className="text-slate-300 hover:text-indigo-400 transition-all duration-300 px-3 sm:px-4 py-2 rounded-xl hover:bg-indigo-600/10 text-sm sm:text-base font-medium">
                  Sign In
                </button>
              </Link>
              <Link href="/sign-up">
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/30 font-medium text-sm sm:text-base">
                  Get Started
                </button>
              </Link>
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "h-9 w-9 sm:h-11 sm:w-11 rounded-full border-2 border-indigo-400/70 shadow-lg shadow-indigo-500/20 hover:border-indigo-300/90 transition-all duration-300",
                  userButtonPopoverCard: "bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 shadow-2xl rounded-xl",
                  userButtonPopoverActionButton: "text-slate-300 hover:bg-indigo-600/20 hover:text-indigo-300 p-3 rounded-lg transition-all duration-200",
                  userPreviewMainIdentifier: "font-bold text-indigo-300 text-lg",
                  userPreviewSecondaryIdentifier: "text-slate-400"
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