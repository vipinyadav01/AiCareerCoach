import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { ContainerScroll } from './ui/container-scroll-animation'
import { TextHoverEffect } from './ui/text-hover-effect'
import { TypewriterEffect } from "./ui/typewriter-effect";

const HeroSection = () => {
    const words = [
        {
            text: "Your",
        },
        {
            text: "Career,",
        },
        {
            text: "Our",
        },
        {
            text: "AI,",
        },
        {
            text: "LaunchTrack.",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];

    return (
        <section className='relative w-full min-h-screen pt-20 md:pt-32 pb-16 overflow-hidden'>
            {/* Background gradient */}
            <div className="absolute inset-0 bg-transparent" />
            
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className='relative z-10'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center space-y-8'>
                        {/* Main heading section */}
                        <div className='space-y-6'>
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium mb-6">
                                🚀 AI-Powered Career Guidance
                            </div>
                            
                            <div className="space-y-4">
                                <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold leading-tight">
                                    <TextHoverEffect text="SIKHO" />
                                </h1>
                                <div className="flex justify-center">
                                    <TypewriterEffect 
                                        words={words} 
                                        className="text-2xl sm:text-3xl md:text-5xl"
                                    />
                                </div>
                            </div>
                            
                            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mt-6">
                                Transform your career journey with personalized AI guidance, smart job matching, and expert insights.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className='flex flex-col sm:flex-row items-center justify-center gap-4 pt-6'>
                            <Link href="/dashboard">
                                <Button 
                                    size="lg"
                                    className="w-48 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0"
                                >
                                    Join Now
                                </Button>
                            </Link>
                            <Link href="/sign-in">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="w-48 h-12 rounded-xl bg-white dark:bg-gray-800 text-black dark:text-white border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 font-semibold text-base transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                                >
                                    Learn More
                                </Button>
                            </Link>
                        </div>

                        {/* Features preview */}
                        <div className="pt-12">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                                <div className="flex items-center justify-center space-x-3 text-gray-600 dark:text-gray-300 bg-white/50 dark:bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-medium">AI-Powered Matching</span>
                                </div>
                                <div className="flex items-center justify-center space-x-3 text-gray-600 dark:text-gray-300 bg-white/50 dark:bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-200"></div>
                                    <span className="text-sm font-medium">Personalized Guidance</span>
                                </div>
                                <div className="flex items-center justify-center space-x-3 text-gray-600 dark:text-gray-300 bg-white/50 dark:bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
                                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-500"></div>
                                    <span className="text-sm font-medium">Career Analytics</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Container scroll section */}
                <div className="mt-2 md:mt-0">
                    <div className="flex flex-col overflow-hidden">
                        <ContainerScroll
                            titleComponent={
                                <>
                                    <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
                                        Unleash the power of
                                        <br />
                                        <span className="text-3xl md:text-6xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent font-extrabold mt-2 leading-none">
                                            AI Career Coaching
                                        </span>
                                    </h2>
                                </>
                            }
                        >
                            <div className="relative">
                                <img
                                    src={`/banner.png`}
                                    alt="AI Career Coach Dashboard Preview"
                                    height={720}
                                    width={1400}
                                    className="mx-auto rounded-3xl object-cover h-full object-left-top shadow-2xl border border-gray-200 dark:border-gray-700"
                                    draggable={false}
                                />
                                {/* Overlay for depth */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                            </div>
                        </ContainerScroll>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection