import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
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
    className: "text-foreground",
  },
];

    return (
        <section className='relative w-full min-h-screen pt-20 md:pt-32 pb-16 overflow-hidden bg-transparent'>
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/8 via-primary/3 to-transparent rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-40 -left-40 w-80 h-80 bg-gradient-to-tr from-secondary/12 via-secondary/6 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute bottom-20 right-20 w-60 h-60 bg-gradient-to-tl from-accent/8 via-accent/3 to-transparent rounded-full blur-2xl animate-pulse delay-2000" />
                
                <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-muted/10 rounded-full blur-xl animate-bounce" style={{ animationDuration: '6s' }} />
                <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-muted/8 rounded-full blur-lg animate-bounce delay-3000" style={{ animationDuration: '8s' }} />
                
                <div className="absolute inset-0 bg-grid-small-border/[0.01] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
            </div>

            <div className='relative z-10'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center space-y-12'>
                        <div className='space-y-10'>
                            <Badge variant="secondary" className="px-6 py-3 text-sm font-medium bg-background/60 backdrop-blur-md border-border/50 hover:bg-background/80 transition-all duration-300 hover:scale-105">
                                <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse" />
                                AI-Powered Career Guidance
                                <div className="ml-3 text-lg">🚀</div>
                            </Badge>

                            <div className="space-y-8">
                                <div className="relative">
                                    <h1 className="text-6xl sm:text-8xl md:text-[8rem] font-black leading-[0.9] text-foreground tracking-tight">
                                        <TextHoverEffect text="SIKHO" />
                                    </h1>
                                </div>
                                
                                <div className="flex justify-center">
                                    <TypewriterEffect
                                        words={words}
                                        className="text-xl sm:text-3xl md:text-4xl font-semibold text-muted-foreground"
                                    />
                                </div>
                            </div>

                            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                                Transform your career journey with{' '}
                                <span className="font-semibold text-foreground">personalized AI guidance</span>,{' '}
                                intelligent job matching, and expert insights tailored to your unique path.
                            </p>
                        </div>

                        <div className='flex flex-col sm:flex-row items-center justify-center gap-4 pt-8'>
                            <Link href="/dashboard">
                                <Button
                                    size="lg"
                                    className="w-48 h-12 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                                >
                                    Start Your Journey
                                    <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                                </Button>
                            </Link>
                            <Link href="/sign-in">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="w-48 h-12 rounded-xl font-semibold text-base transition-all duration-300 hover:scale-105 bg-background/60 backdrop-blur-md border-border/50"
                                >
                                    Explore Features
                                </Button>
                            </Link>
                        </div>

                        <div className="pt-16">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                                {[
                                    {
                                        title: "AI-Powered Matching",
                                        description: "Smart algorithms connect you with perfect opportunities",
                                        icon: "🎯"
                                    },
                                    {
                                        title: "Personalized Guidance", 
                                        description: "Tailored advice based on your skills and goals",
                                        icon: "🧭"
                                    },
                                    {
                                        title: "Career Analytics",
                                        description: "Data-driven insights to accelerate your growth",
                                        icon: "📊"
                                    },
                                ].map(({ title, description, icon }, idx) => (
                                    <Card
                                        key={idx}
                                        className="group bg-card/30 backdrop-blur-md border-border/50 hover:border-border/80 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-card/40"
                                    >
                                        <CardHeader className="text-center space-y-4 pb-2">
                                            <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                                                {icon}
                                            </div>
                                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse mx-auto" />
                                            <CardTitle className="text-lg">
                                                {title}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="text-center pt-0">
                                            <CardDescription className="text-sm leading-relaxed">
                                                {description}
                                            </CardDescription>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        <div className="pt-12">
                            <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
                                {[
                                    { stat: "10+ Success Stories", icon: "⭐" },
                                    { stat: "95% Match Accuracy", icon: "🎯" },
                                    { stat: "24/7 AI Support", icon: "🤖" },
                                ].map(({ stat, icon }, idx) => (
                                    <Badge key={idx} variant="outline" className="px-4 py-2 bg-background/40 backdrop-blur-md border-border/30 hover:bg-background/60 hover:text-foreground transition-all duration-300">
                                        <span className="text-base mr-2">{icon}</span>
                                        <span className="text-sm font-medium">{stat}</span>
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20">
                    <div className="flex flex-col overflow-hidden">
                        <ContainerScroll
                            titleComponent={
                                <>
                                    <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 text-foreground tracking-tight">
                                        Unleash the power of
                                        <br />
                                        <span className="text-5xl md:text-7xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent font-bold mt-4 leading-tight">
                                            AI Career Platform
                                        </span>
                                    </h2>
                                </>
                            }
                        >
                            <Card className="w-full rounded-xl overflow-hidden aspect-[2/1] border-border shadow-xl bg-card/80 backdrop-blur-md">
                                <CardContent className="p-0 relative">
                                    <img
                                        src={`/banner.png`}
                                        alt="AI Career Platform Dashboard Preview"
                                        height={720}
                                        width={1400}
                                        className="w-full h-full object-cover object-left-top"
                                        draggable={false}
                                    />
                                    
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent pointer-events-none" />
                                    
                                    <div className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-1000" />
                                </CardContent>
                            </Card>
                        </ContainerScroll>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection