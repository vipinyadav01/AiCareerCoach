import HeroSection from "@/components/hero";
import { FeatureSection } from "@/components/feature";
import { Check, Users, Target, Trophy } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div className="grid-background"></div>
      <HeroSection />
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">Powerful Features For Your Career Growth</h2>
        <p className="text-center text-gray-600 dark:text-gray-300">
          We offer a wide range of features to help you grow your career.
        </p>
      </div>
      <FeatureSection />

      <section className="w-full py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Our Platform?</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join thousands of professionals who have accelerated their careers with our AI-powered platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 p-6 bg-transparent rounded-lg border border-white dark:border-gray-700">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-center">
                Proven Success
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                95% of our users land their dream job within 6 months of using our platform.
              </p>
            </div>
            
            <div className="flex flex-col items-center justify-center space-y-4 p-6 bg-transparent rounded-lg border border-white dark:border-gray-700">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-center">
                Community Support
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                Connect with over 50,000+ professionals and industry experts worldwide.
              </p>
            </div>
            
            <div className="flex flex-col items-center justify-center space-y-4 p-6 bg-transparent rounded-lg border border-white dark:border-gray-700">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-500 text-white">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-center">
                Personalized Goals
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                AI-driven goal setting tailored to your unique career aspirations and skills.
              </p>
            </div>
            
            <div className="flex flex-col items-center justify-center space-y-4 p-6 bg-transparent rounded-lg border border-white  dark:border-gray-700">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-white">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-center">
                Award Winning
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                Recognized as the #1 AI Career Platform by leading industry publications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
