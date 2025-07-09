import HeroSection from "@/components/hero";
import { FeatureSection } from "@/components/feature";
import { Check, Users, Target, Trophy } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { whyChooseUs } from "@/data/whyChooseUs";

const iconMap = {
  Check,
  Users,
  Target,
  Trophy,
};

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
              {whyChooseUs.map((item) => {
                const IconComponent = iconMap[item.icon];
                return (
                  <div key={item.id} className={`group/feature flex flex-col items-center justify-center space-y-4 p-8 bg-transparent backdrop-blur-md border border-gray-200/80 dark:border-gray-700/80 hover:border-${item.hoverBorder} dark:hover:border-${item.hoverBorderDark} transition-all duration-300 hover:shadow-lg relative`} style={{ borderRadius: '6px' }}>
                    <div className={`opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-${item.gradientFrom} dark:from-${item.gradientTo} to-transparent pointer-events-none`} style={{ borderRadius: '6px' }} />
                    <div className={`flex items-center justify-center w-12 h-12 bg-${item.color}-500/10 dark:bg-${item.color}-500/20 text-${item.color}-600 dark:text-${item.color}-400 group-hover/feature:bg-${item.color}-500 group-hover/feature:text-white transition-all duration-300 relative z-10`} style={{ borderRadius: '6px' }}>
                      {IconComponent && <IconComponent className="w-6 h-6" />}
                    </div>
                    <h3 className="text-lg font-semibold text-center text-gray-900 dark:text-white relative z-10">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 text-center relative z-10">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                Success Stories
              </h3>
              <p className="text-gray-700 dark:text-gray-200 max-w-3xl mx-auto text-lg">
                Hear from professionals who have transformed their careers with our AI-powered platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="group/feature bg-transparent backdrop-blur-md border border-gray-200/80 p-6 hover:shadow-xl transition-all duration-300 relative" style={{ borderRadius: '6px' }}>
                  <div className={`opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-${testimonial.gradientFrom} dark:from-${testimonial.gradientTo} to-transparent pointer-events-none`} style={{ borderRadius: '6px' }} />

                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 object-cover border-2 border-white/50"
                        style={{ borderRadius: '6px' }}
                      />
                      <div className="ml-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed italic">
                      "{testimonial.comment}"
                    </p>
                    <div className="flex text-yellow-400 mt-4">
                      {'⭐'.repeat(testimonial.rating)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
