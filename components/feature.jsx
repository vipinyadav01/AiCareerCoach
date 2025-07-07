import { cn } from "@/lib/utils";
import {
  IconBrain,
  IconBriefcase,
  IconChartLine,
  IconFileText,
  IconUsers,
  IconTarget,
  IconBulb,
  IconCertificate,
} from "@tabler/icons-react";

export function FeatureSection() {
  const features = [
    {
      title: "AI-Powered Career Guidance",
      description:
        "Get personalized career advice and insights powered by advanced AI technology.",
      icon: <IconBrain />,
    },
    {
      title: "Interview Preparation",
      description:
        "Practice with role-specific questions and get instant feedback to improve your performance.",
      icon: <IconBriefcase />,
    },
    {
      title: "Industry Insights",
      description:
        "Stay ahead with real-time industry trends, salary data, and market analysis.",
      icon: <IconChartLine />,
    },
    {
      title: "Smart Resume Creation",
      description: "Generate ATS-optimized resumes with AI assistance and professional templates.",
      icon: <IconFileText />,
    },
    {
      title: "Networking Opportunities",
      description: "Connect with industry professionals and expand your professional network.",
      icon: <IconUsers />,
    },
    {
      title: "Career Goal Setting",
      description:
        "Set and track your career milestones with personalized roadmaps and progress tracking.",
      icon: <IconTarget />,
    },
    {
      title: "Skill Development",
      description:
        "Identify skill gaps and get recommendations for courses and certifications.",
      icon: <IconBulb />,
    },
    {
      title: "Certification Tracking",
      description: "Monitor your professional certifications and get renewal reminders.",
      icon: <IconCertificate />,
    },
  ];
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 gap-8">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index
}) => {
  return (
    <div
      className={cn(
        "flex flex-col py-8 px-6 relative group/feature bg-transparent rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg"
      )}>
      <div
        className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-50 dark:from-blue-900/20 to-transparent pointer-events-none rounded-xl" />
      
      <div className="mb-4 relative z-10 text-blue-600 dark:text-blue-400">
        {icon}
      </div>
      
      <div className="text-lg font-bold mb-3 relative z-10">
        <span className="text-gray-900 dark:text-gray-100">
          {title}
        </span>
      </div>
      
      <p className="text-sm text-gray-600 dark:text-gray-300 relative z-10 leading-relaxed">
        {description}
      </p>
    </div>
  );
};
