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
import { features } from "@/data/features";

// Icon mapping object to convert string names to actual icon components
const iconMap = {
  IconBrain,
  IconBriefcase,
  IconChartLine,
  IconFileText,
  IconUsers,
  IconTarget,
  IconBulb,
  IconCertificate,
};

export function FeatureSection() {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 gap-8">
        {features.map((feature, index) => (
          <Feature key={feature.id} {...feature} index={index} />
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
  const IconComponent = iconMap[icon];
  
  return (
    <div
      className={cn(
        "flex flex-col py-8 px-6 relative group/feature bg-transparent rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg"
      )}>
      <div
        className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-50 dark:from-blue-900/20 to-transparent pointer-events-none rounded-xl" />
      
      <div className="mb-4 relative z-10 text-blue-600 dark:text-blue-400">
        {IconComponent && <IconComponent />}
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
