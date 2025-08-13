"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <div 
      onClick={toggleTheme}
      className="flex items-center lg:gap-3 gap-1.5 sm:px-4 px-3 py-2.5 rounded-lg hover:bg-amber-50 dark:hover:bg-indigo-900/30 transition-all duration-200 group border border-transparent hover:border-amber-100 dark:hover:border-indigo-800 hover:shadow-sm dark:hover:shadow-indigo-900/20 cursor-pointer"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleTheme();
        }
      }}
    >
      <div className={`p-1.5 rounded-md transition-colors ${
        isDark 
          ? "bg-indigo-900/50 group-hover:bg-indigo-800/60" 
          : "bg-amber-100 group-hover:bg-amber-200"
      }`}>
        {isDark ? (
          <Sun className="w-4 h-4 text-indigo-300" />
        ) : (
          <Moon className="w-4 h-4 text-amber-600" />
        )}
      </div>
      <span className="lg:text-sm text-xs max-sm:hidden font-medium text-gray-700 dark:text-gray-300 group-hover:text-amber-700 dark:group-hover:text-indigo-300 transition-colors">
        {isDark ? "Light" : "Dark"}
      </span>
    </div>
  )
}