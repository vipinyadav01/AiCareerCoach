import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { ContainerScroll } from './ui/container-scroll-animation'
import { TextHoverEffect } from './ui/text-hover-effect'
import { TypewriterEffect } from "./ui/typewriter-effect";

const HeroSection = () => {
   const words = [
  {
    text: "Accelerate",
  },
  {
    text: "Your",
  },
  {
    text: "Career",
  },
  {
    text: "with",
  },
  {
    text: "AI",
  },
  {
    text: "Insights",
    className: "text-neutral-800 dark:text-neutral-200",
  },
];

    return (
        <section className='relative w-full min-h-screen pt-20 md:pt-32 pb-8 md:pb-16 overflow-hidden bg-transparent'>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-72 h-72 md:w-96 md:h-96 bg-slate-200/20 dark:bg-slate-700/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-40 -left-40 w-56 h-56 md:w-80 md:h-80 bg-slate-300/15 dark:bg-slate-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute bottom-20 right-20 w-40 h-40 md:w-60 md:h-60 bg-slate-400/10 dark:bg-slate-500/10 rounded-full blur-2xl animate-pulse delay-2000" />
            </div>

            <div className='relative z-10'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center space-y-10'>

                        <div className='space-y-8'>
                            <div className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 rounded-full bg-background dark:bg-background/80 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs md:text-sm font-semibold mb-6 md:mb-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                                <span className="mr-2 text-base md:text-lg">🚀</span>
                                AI-Powered Career Guidance
                            </div>

                            <div className="space-y-6">
                                <h1 className="text-4xl sm:text-6xl md:text-8xl font-black leading-tight text-slate-900 dark:text-slate-100">
                                    <TextHoverEffect text="SIKHO" />
                                </h1>
                                <div className="flex justify-center">
                                    <TypewriterEffect
                                        words={words}
                                        className="text-lg sm:text-2xl md:text-4xl font-bold text-slate-700 dark:text-slate-300"
                                    />
                                </div>
                            </div>

                            <p className="text-base md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl md:max-w-4xl mx-auto leading-relaxed mt-6 md:mt-8 font-medium">
                                Transform your career journey with personalized AI guidance, intelligent job matching, and expert insights tailored to your unique path.
                            </p>
                        </div>

                        <div className='flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 pt-6 md:pt-8'>
                            <Link href="/dashboard">
                                <Button
                                    size="lg"
                                    className="w-40 md:w-52 h-12 md:h-14 rounded-2xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 text-white dark:text-slate-900 font-bold text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border-0"
                                >
                                    Start Your Journey
                                </Button>
                            </Link>
                            <Link href="/sign-in">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="w-40 md:w-52 h-12 md:h-14 rounded-2xl bg-transparent text-slate-900 dark:text-slate-100 border-2 border-slate-300 dark:border-slate-600 hover:border-slate-500 dark:hover:border-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 font-bold text-base md:text-lg transition-all duration-300 hover:shadow-lg backdrop-blur-sm"
                                >
                                    Explore Features
                                </Button>
                            </Link>
                        </div>

                        <div className="pt-10 md:pt-16">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
                                {[
                                    {
                                        title: "AI-Powered Matching",
                                        description: "Smart algorithms connect you with perfect opportunities",
                                        dotColor: "bg-emerald-500",
                                        delay: "",
                                    },
                                    {
                                        title: "Personalized Guidance",
                                        description: "Tailored advice based on your skills and goals",
                                        dotColor: "bg-sky-500",
                                        delay: "delay-200",
                                    },
                                    {
                                        title: "Career Analytics",
                                        description: "Data-driven insights to accelerate your growth",
                                        dotColor: "bg-violet-500",
                                        delay: "delay-500",
                                    },
                                ].map(({ title, description, dotColor, delay }, idx) => (
                                    <div
                                        key={idx}
                                        className="group flex flex-col items-center space-y-4 text-neutral-700 dark:text-neutral-300 bg-background dark:bg-background/80 rounded-2xl p-4 md:p-6 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                                    >
                                        <div
                                            className={`w-4 h-4 ${dotColor} rounded-full animate-pulse ${delay} group-hover:scale-110 transition-transform duration-300`}
                                        ></div>
                                        <div className="text-center">
                                            <h3 className="font-bold text-neutral-900 dark:text-neutral-100 mb-2 text-base md:text-lg">
                                                {title}
                                            </h3>
                                            <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-8 md:pt-12">
                            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-slate-600 dark:text-slate-400">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                                    <span className="text-xs md:text-sm font-medium">10+ Success Stories</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                                    <span className="text-xs md:text-sm font-medium">95% Match Accuracy</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                                    <span className="text-xs md:text-sm font-medium">24/7 AI Support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 md:mt-10 mb-0 md:mb-2">
                    <div className="flex flex-col overflow-hidden">
                        <ContainerScroll
                            titleComponent={
                                <>
                                    <h2 className="text-2xl md:text-6xl font-black text-center mb-8 md:mb-12 text-slate-900 dark:text-slate-100">
                                        Unleash the power of
                                        <br />
                                        <span className="text-3xl md:text-7xl bg-gradient-to-r from-slate-700 via-slate-900 to-slate-800 dark:from-slate-300 dark:via-slate-100 dark:to-slate-200 bg-clip-text text-transparent font-black mt-4 md:mt-6 leading-none">
                                            AI Career Coaching
                                        </span>
                                    </h2>
                                </>
                            }
                        >
                            <div className="relative group">
                                <img
                                    src={`/banner.png`}
                                    alt="AI Career Coach Dashboard Preview"
                                    height={320}
                                    width={800}
                                    className="mx-auto rounded-xl md:rounded-3xl object-cover w-full max-w-full h-auto object-left-top shadow-2xl border border-slate-200 dark:border-slate-700 group-hover:shadow-3xl transition-shadow duration-500"
                                    draggable={false}
                                />
                                <div className="absolute inset-0 rounded-xl md:rounded-3xl bg-gradient-to-t from-slate-900/20 via-transparent to-slate-100/10 dark:from-slate-900/40 dark:to-slate-800/20 pointer-events-none" />
                                <div className="absolute top-4 right-4 w-3 h-3 bg-slate-400 dark:bg-slate-500 rounded-full opacity-60"></div>
                                <div className="absolute bottom-4 left-4 w-2 h-2 bg-slate-500 dark:bg-slate-400 rounded-full opacity-40"></div>
                            </div>
                        </ContainerScroll>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection