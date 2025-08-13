"use client"
import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'

export function GitHubStars({ className = "", showIcon = true, repoUrl = "vipinyadav01/AiCareerCoach" }) {
  const [starsCount, setStarsCount] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchStars = async () => {
      try {
        setLoading(true)
        setError(false)
        
        // Use the correct GitHub API endpoint for your repository
        const apiUrl = `https://api.github.com/repos/${repoUrl}`
        
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'AiCareerCoach-App'
          },
        })
        
        if (response.ok) {
          const data = await response.json()
          setStarsCount(data.stargazers_count || 0)
        } else {
          setStarsCount(3) // Fallback to actual star count
          setError(true)
        }
      } catch (error) {
        console.error('Failed to fetch GitHub stars:', error)
        setStarsCount(3) // Fallback to actual star count
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchStars()
  }, [repoUrl])

  if (loading) {
    return (
      <div className={`flex items-center gap-1 ${className}`}>
        {showIcon && <Star className="w-3 h-3 text-yellow-500 animate-pulse" />}
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">...</span>
      </div>
    )
  }

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {showIcon && (
        <Star 
          className={`w-3 h-3 ${error ? 'text-gray-400 dark:text-gray-500' : 'text-yellow-500'}`} 
        />
      )}
      <span className={`text-xs font-medium ${error ? 'text-gray-500 dark:text-gray-400' : ''}`}>
        {starsCount?.toLocaleString() || '66'}
      </span>
    </div>
  )
}
