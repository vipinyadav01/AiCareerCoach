import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { VideoIcon, LayoutDashboard, MessageSquare, BarChart3, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 2px, transparent 0)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>
      
      {/* Floating orbs for visual appeal - hidden on mobile for better performance */}
      <div className="hidden md:block absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="hidden md:block absolute bottom-20 right-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="hidden lg:block absolute top-1/2 left-1/4 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 py-20 sm:py-24">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-center mb-4 gap-2 sm:gap-0">
            <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400 sm:mr-2 animate-pulse" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent text-center">
              LaunchTrack
            </h1>
            <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400 sm:ml-2 animate-pulse" />
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl px-2">
            Your ultimate platform for tracking and managing product launches with powerful features
          </p>
        </div>

        {/* Coming Soon Banner */}
        <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-sm border border-yellow-400/30 text-yellow-200 p-4 sm:p-6 mb-8 sm:mb-12 rounded-2xl w-full max-w-md shadow-2xl">
          <div className="flex items-center justify-center mb-2">
            <span className="text-2xl sm:text-3xl mr-2">🚀</span>
            <p className="font-bold text-lg sm:text-xl">Coming Soon!</p>
          </div>
          <p className="text-center text-yellow-100 text-sm sm:text-base">We're crafting something extraordinary. Stay tuned!</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-6xl w-full mb-8 sm:mb-12">
          <Card className="group p-6 sm:p-8 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-purple-500/20 hover:scale-105">
            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
              <div className="p-2 sm:p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl mr-0 sm:mr-4 mb-3 sm:mb-0 group-hover:scale-110 transition-transform">
                <VideoIcon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Online Interview</h3>
            </div>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Conduct seamless virtual interviews with advanced video capabilities and real-time interaction.
            </p>
          </Card>

          <Card className="group p-6 sm:p-8 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-indigo-500/20 hover:scale-105">
            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
              <div className="p-2 sm:p-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl sm:rounded-2xl mr-0 sm:mr-4 mb-3 sm:mb-0 group-hover:scale-110 transition-transform">
                <LayoutDashboard className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Dashboard</h3>
            </div>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Comprehensive overview of your launch progress with intuitive metrics and project tracking.
            </p>
          </Card>

          <Card className="group p-6 sm:p-8 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-emerald-500/20 hover:scale-105">
            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
              <div className="p-2 sm:p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl sm:rounded-2xl mr-0 sm:mr-4 mb-3 sm:mb-0 group-hover:scale-110 transition-transform">
                <MessageSquare className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Feedback</h3>
            </div>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Collect and manage feedback from stakeholders to improve your product launch strategy.
            </p>
          </Card>

          <Card className="group p-6 sm:p-8 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-orange-500/20 hover:scale-105">
            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
              <div className="p-2 sm:p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl sm:rounded-2xl mr-0 sm:mr-4 mb-3 sm:mb-0 group-hover:scale-110 transition-transform">
                <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Data Analysis</h3>
            </div>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Advanced analytics and insights to make data-driven decisions for successful launches.
            </p>
          </Card>
        </div>

        {/* CTA Button */}
        <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 border border-purple-500/20 w-full sm:w-auto">
          <Sparkles className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
          Get Early Access
        </Button>

        {/* Bottom accent */}
        <div className="mt-12 sm:mt-16 text-center px-4">
          <p className="text-gray-400 text-xs sm:text-sm">
            Join thousands of innovators transforming their product launches
          </p>
        </div>
      </div>
    </div>
  );
}
