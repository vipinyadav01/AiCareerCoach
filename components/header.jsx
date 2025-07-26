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
      <div className="mx-auto max-w-7xl flex items-center justify-between border border-[#EFEDE4]/20 bg-gradient-to-r from-[#070D0D]/95 via-[#0A1010]/95 to-[#070D0D]/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-[#070D0D]/40 py-3 sm:py-4 px-4 sm:px-8 transition-all duration-300 hover:shadow-[#EFEDE4]/10 hover:border-[#EFEDE4]/30">
        {/* Logo/App Name */}
        <div className="flex items-center">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#EFEDE4] via-amber-200 to-[#EFEDE4] hover:scale-105 transition-all duration-300 hover:from-amber-100 hover:via-[#EFEDE4] hover:to-amber-100 drop-shadow-sm">
            Launch Track
          </Link>
        </div>

        <div className="flex items-center gap-3 sm:gap-6">
          {/* Navigation Links - Hidden on mobile, visible on tablet+ */}
          <SignedIn>
            <div className="hidden md:flex items-center gap-4">
              <Link href="/dashboard" className="flex items-center group">
                <Button variant="outline" size="sm" className="border-[#EFEDE4]/30 bg-[#070D0D]/70 hover:border-[#EFEDE4]/60 hover:bg-[#EFEDE4]/10 text-[#EFEDE4]/90 hover:text-[#EFEDE4] transition-all duration-300 shadow-lg hover:shadow-[#EFEDE4]/10 backdrop-blur-sm">
                  <LayoutDashboard className="mr-1 sm:mr-2 h-4 w-4 group-hover:text-amber-200 transition-colors" />
                  <span className="hidden lg:inline">Industry Insights</span>
                  <span className="lg:hidden">Insights</span>
                </Button>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="sm" className="bg-gradient-to-r from-[#EFEDE4]/90 to-amber-100/90 hover:from-[#EFEDE4] hover:to-amber-50 text-[#070D0D] shadow-lg hover:shadow-[#EFEDE4]/20 transition-all duration-300 border-0 font-semibold">
                    <StarsIcon className="mr-1 sm:mr-2 h-4 w-4" />
                    <span className="hidden lg:inline">Growth Tools</span>
                    <span className="lg:hidden">Tools</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#070D0D]/95 border-[#EFEDE4]/20 backdrop-blur-xl rounded-xl shadow-2xl p-2 min-w-[200px]">
                  <DropdownMenuItem asChild className="hover:bg-[#EFEDE4]/15 focus:bg-[#EFEDE4]/15 rounded-lg transition-colors duration-200 mb-1">
                    <Link href="/resume" className="flex items-center py-3 px-4">
                      <FileText className="h-4 w-4 text-amber-300" />
                      <span className="ml-3 text-[#EFEDE4]/95 font-medium">Build Resume</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="hover:bg-[#EFEDE4]/15 focus:bg-[#EFEDE4]/15 rounded-lg transition-colors duration-200 mb-1">
                    <Link href="/ai-cover-letter" className="flex items-center py-3 px-4">
                      <PenBox className="h-4 w-4 text-amber-200" />
                      <span className="ml-3 text-[#EFEDE4]/95 font-medium">Cover Letter</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="hover:bg-[#EFEDE4]/15 focus:bg-[#EFEDE4]/15 rounded-lg transition-colors duration-200">
                    <Link href="/interview" className="flex items-center py-3 px-4">
                      <GraduationCap className="h-4 w-4 text-amber-100" />
                      <span className="ml-3 text-[#EFEDE4]/95 font-medium">Interview Prep</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Mobile Menu - Visible only on mobile */}
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="sm" variant="outline" className="border-[#EFEDE4]/30 bg-[#070D0D]/70 hover:border-[#EFEDE4]/60 hover:bg-[#EFEDE4]/10 text-[#EFEDE4]/90 transition-all duration-300 backdrop-blur-sm">
                    <Menu className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#070D0D]/95 border-[#EFEDE4]/20 backdrop-blur-xl w-56 rounded-xl shadow-2xl p-2">
                  <DropdownMenuItem asChild className="hover:bg-[#EFEDE4]/15 focus:bg-[#EFEDE4]/15 rounded-lg transition-colors duration-200">
                    <Link href="/dashboard" className="flex items-center py-3 px-4">
                      <LayoutDashboard className="h-4 w-4 text-amber-300" />
                      <span className="ml-3 text-[#EFEDE4]/95 font-medium">Industry Insights</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="hover:bg-[#EFEDE4]/15 focus:bg-[#EFEDE4]/15 rounded-lg transition-colors duration-200">
                    <Link href="/resume" className="flex items-center py-3 px-4">
                      <FileText className="h-4 w-4 text-amber-300" />
                      <span className="ml-3 text-[#EFEDE4]/95 font-medium">Build Resume</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="hover:bg-[#EFEDE4]/15 focus:bg-[#EFEDE4]/15 rounded-lg transition-colors duration-200">
                    <Link href="/ai-cover-letter" className="flex items-center py-3 px-4">
                      <PenBox className="h-4 w-4 text-amber-200" />
                      <span className="ml-3 text-[#EFEDE4]/95 font-medium">Cover Letter</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="hover:bg-[#EFEDE4]/15 focus:bg-[#EFEDE4]/15 rounded-lg transition-colors duration-200">
                    <Link href="/interview" className="flex items-center py-3 px-4">
                      <GraduationCap className="h-4 w-4 text-amber-100" />
                      <span className="ml-3 text-[#EFEDE4]/95 font-medium">Interview Prep</span>
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
                <button className="text-[#EFEDE4]/80 hover:text-[#EFEDE4] transition-all duration-300 px-3 sm:px-4 py-2 rounded-xl hover:bg-[#EFEDE4]/10 text-sm sm:text-base font-medium backdrop-blur-sm">
                  Sign In
                </button>
              </Link>
              <Link href="/sign-up">
                <button className="bg-gradient-to-r from-[#EFEDE4]/90 to-amber-100/90 hover:from-[#EFEDE4] hover:to-amber-50 text-[#070D0D] px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#EFEDE4]/20 font-semibold text-sm sm:text-base">
                  Get Started
                </button>
              </Link>
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "h-9 w-9 sm:h-11 sm:w-11 rounded-full border-2 border-[#EFEDE4]/60 shadow-lg shadow-[#EFEDE4]/10 hover:border-[#EFEDE4]/80 transition-all duration-300 backdrop-blur-sm",
                  userButtonPopoverCard: "bg-[#070D0D]/95 backdrop-blur-xl border border-[#EFEDE4]/20 shadow-2xl rounded-xl",
                  userButtonPopoverActionButton: "text-[#EFEDE4]/80 hover:bg-[#EFEDE4]/15 hover:text-[#EFEDE4] p-3 rounded-lg transition-all duration-200",
                  userPreviewMainIdentifier: "font-bold text-[#EFEDE4] text-lg",
                  userPreviewSecondaryIdentifier: "text-[#EFEDE4]/60"
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