"use client";

import Head from 'next/head';

export default function SEOTags({ 
  title = "LaunchTrack - AI Career Coach | Vipin Yadav",
  description = "Your AI-powered career coach for personalized job search, interview preparation, and career guidance. From GLA University to global success.",
  keywords = [],
  canonical = "https://launchtrack.vercel.app",
  ogImage = "/android-chrome-512x512.png",
  noindex = false,
  structuredData = null
}) {
  const defaultKeywords = [
    "LaunchTrack",
    "LaunchTrack GLA",
    "AI Career Coach", 
    "GLA University",
    "Job Search AI",
    "Interview Preparation",
    "Cover Letter Generator",
    "Career Guidance"
  ];

  const allKeywords = [...defaultKeywords, ...keywords].join(", ");

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "LaunchTrack - AI Career Coach",
    "description": description,
    "url": canonical,
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "creator": {
      "@type": "Organization", 
      "name": "GLA University",
      "url": "https://gla.ac.in"
    },
    "keywords": allKeywords
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`https://launchtrack.vercel.app${ogImage}`} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://launchtrack.vercel.app${ogImage}`} />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData || defaultStructuredData)
        }}
      />
    </Head>
  );
}
