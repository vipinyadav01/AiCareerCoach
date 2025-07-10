import HeroSection from "@/components/hero";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FeatureSection } from "@/components/feature";
import { Check, Users, Target, Trophy,ArrowRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { whyChooseUs } from "@/data/whyChooseUs";
import { faqs } from "../data/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// Icon mapping for why choose us section
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
        
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
                Powerful Features For Your Career Growth
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We offer a wide range of features to help you grow your career with cutting-edge AI technology.
              </p>
            </div>
            <FeatureSection />
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-transparent backdrop-blur-sm">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                Why Choose Our Platform?
              </h3>
              <p className="text-gray-700 dark:text-gray-200 max-w-3xl mx-auto text-lg">
                Join thousands of professionals who have accelerated their careers with our AI-powered platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {whyChooseUs.map((item) => {
                const IconComponent = iconMap[item.icon];
                return (
                  <div 
                    key={item.id} 
                    className="group/feature flex flex-col items-center justify-center space-y-6 p-8 bg-transparent backdrop-blur-md rounded-lg border border-white hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-xl transition-all duration-300 hover:scale-105 relative"
                  >
                    <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-50 dark:from-blue-900/20 to-transparent pointer-events-none rounded-lg" />
                    
                    <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 group-hover/feature:bg-blue-500 group-hover/feature:text-white transition-all duration-300 relative z-10 shadow-lg group-hover/feature:shadow-blue-500/25">
                      {IconComponent && <IconComponent className="w-8 h-8" />}
                    </div>
                    
                    <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white relative z-10">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm text-gray-700 dark:text-gray-200 text-center leading-relaxed relative z-10">
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
                <div
                  key={testimonial.id}
                  className="group/feature bg-transparent backdrop-blur-md border border-white p-6 hover:shadow-xl transition-all duration-300 rounded-lg relative"
                >
                  <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-50 dark:from-blue-900/20 to-transparent pointer-events-none rounded-lg" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 object-cover border-2 border-white/50 rounded-lg"
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

        {/* Frequently Asked Questions */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-700 dark:text-gray-200 max-w-3xl mx-auto text-lg">
                Find answers to common questions about our platform
              </p>            
            </div>
            <div className="max-w-6xl mx-auto">
              <Accordion type="single" collapsible>
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
        {/* CTA Section */}
      <section className="w-full">
        <div className="mx-auto py-24 gradient rounded-lg">
          <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
              Ready to Accelerate Your Career?
            </h2>
            <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
              Join thousands of professionals who are advancing their careers
              with AI-powered guidance.
            </p>
            <Link href="/dashboard" passHref>
              <Button
                size="lg"
                variant="secondary"
                className="h-11 mt-5 animate-bounce"
              >
                Start Your Journey Today <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}