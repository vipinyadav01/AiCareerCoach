import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { FileText, LayoutDashboard, StarsIcon } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { DropdownMenuLabel } from '@radix-ui/react-dropdown-menu'

const Header = () => {
  return (
    <header className="fixed top-6 left-0 right-0 px-4 z-50">
      <div className="mx-auto max-w-6xl flex items-center justify-between border border-slate-200/50 dark:border-slate-700/50 bg-black/90 backdrop-blur-md rounded-xl shadow-lg py-3 px-6">
        {/* Logo/App Name */}
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
            LaunchTrack
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {/* Navigation Links - Only visible when signed in */}
          <SignedIn>
            <Link href="/dashboard" className="flex items-center">
              <Button>
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Industry Insight
              </Button>
            </Link>
          </SignedIn>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button>
                <StarsIcon className="mr-2 h-4 w-4" />
                Growth Tools
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href={"/resume"} className="flex items-center">
                <FileText className='h-4 w-4'/>
                <span className="ml-2">Build Resume</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Authentication */}
          <SignedOut>
            <div className="flex items-center gap-3">
              <SignInButton mode="modal">
                <button className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition">
                  Sign Up
                </button>
              </SignUpButton>
            </div>
          </SignedOut>

          <SignedIn>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "h-9 w-9"
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