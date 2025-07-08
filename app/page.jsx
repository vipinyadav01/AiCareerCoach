import HeroSection from "@/components/hero";
import { FeatureSection } from "@/components/feature";
import { Check, Users, Target, Trophy } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="grid-background"></div>
      <div className="relative z-10">
        <HeroSection />
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">Powerful Features For Your Career Growth</h2>
          <p className="text-center text-gray-600 dark:text-gray-300">
            We offer a wide range of features to help you grow your career.
          </p>
        </div>
        <FeatureSection />

        <section className="w-full py-12 md:py-20 bg-transparent backdrop-blur-sm">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Our Platform?</h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Join thousands of professionals who have accelerated their careers with our AI-powered platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 max-w-7xl mx-auto">
              <div className="group/feature flex flex-col items-center justify-center space-y-4 p-8 bg-transparent backdrop-blur-md border border-gray-200/80 dark:border-gray-700/80 hover:border-green-300 dark:hover:border-green-600 transition-all duration-300 hover:shadow-lg relative" style={{borderRadius: '6px'}}>
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-green-50 dark:from-green-900/20 to-transparent pointer-events-none" style={{borderRadius: '6px'}} />
                <div className="flex items-center justify-center w-12 h-12 bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400 group-hover/feature:bg-green-500 group-hover/feature:text-white transition-all duration-300 relative z-10" style={{borderRadius: '6px'}}>
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-center text-gray-900 dark:text-white relative z-10">
                  Proven Success
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 text-center relative z-10">
                  95% of our users land their dream job within 6 months of using our platform.
                </p>
              </div>
              
              <div className="group/feature flex flex-col items-center justify-center space-y-4 p-8 bg-transparent backdrop-blur-md border border-gray-200/80 dark:border-gray-700/80 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg relative" style={{borderRadius: '6px'}}>
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-50 dark:from-blue-900/20 to-transparent pointer-events-none" style={{borderRadius: '6px'}} />
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 group-hover/feature:bg-blue-500 group-hover/feature:text-white transition-all duration-300 relative z-10" style={{borderRadius: '6px'}}>
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-center text-gray-900 dark:text-white relative z-10">
                  Community Support
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 text-center relative z-10">
                  Connect with over 50,000+ professionals and industry experts worldwide.
                </p>
              </div>
              
              <div className="group/feature flex flex-col items-center justify-center space-y-4 p-8 bg-transparent backdrop-blur-md border border-gray-200/80 dark:border-gray-700/80 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-lg relative" style={{borderRadius: '6px'}}>
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-purple-50 dark:from-purple-900/20 to-transparent pointer-events-none" style={{borderRadius: '6px'}} />
                <div className="flex items-center justify-center w-12 h-12 bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 group-hover/feature:bg-purple-500 group-hover/feature:text-white transition-all duration-300 relative z-10" style={{borderRadius: '6px'}}>
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-center text-gray-900 dark:text-white relative z-10">
                  Personalized Goals
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 text-center relative z-10">
                  AI-driven goal setting tailored to your unique career aspirations and skills.
                </p>
              </div>
              
              <div className="group/feature flex flex-col items-center justify-center space-y-4 p-8 bg-transparent backdrop-blur-md border border-gray-200/80 dark:border-gray-700/80 hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-300 hover:shadow-lg relative" style={{borderRadius: '6px'}}>
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-orange-50 dark:from-orange-900/20 to-transparent pointer-events-none" style={{borderRadius: '6px'}} />
                <div className="flex items-center justify-center w-12 h-12 bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 group-hover/feature:bg-orange-500 group-hover/feature:text-white transition-all duration-300 relative z-10" style={{borderRadius: '6px'}}>
                  <Trophy className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-center text-gray-900 dark:text-white relative z-10">
                  Award Winning
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 text-center relative z-10">
                  Recognized as the #1 AI Career Platform by leading industry publications.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
