import React from 'react';

const SEOOptimizer = ({ 
  pageTitle, 
  pageDescription, 
  pageKeywords = [], 
  pageUrl, 
  pageType = 'website',
  structuredData = null,
  breadcrumbs = []
}) => {
  // Generate breadcrumb structured data
  const breadcrumbStructuredData = breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  } : null;

  return (
    <>
      {/* Page-specific meta tags */}
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords.join(', ')} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content={pageType} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      
      {/* Breadcrumb structured data */}
      {breadcrumbStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbStructuredData)
          }}
        />
      )}
      
      {/* Custom structured data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
      
      {/* FAQ structured data for FAQ pages */}
      {pageType === 'faq' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is LaunchTrack?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "LaunchTrack is an AI-powered career coaching platform that generates role-based interview questions, provides analytics on the latest job trends, programming languages, and tech skills, and helps you create professional cover letters and resumes. It offers comprehensive tools for interview preparation, career guidance, and job search optimization."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does LaunchTrack help with job search and interview preparation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "LaunchTrack offers personalized job search assistance, generates interview questions tailored to specific roles, and provides analytics on trending skills and technologies. You can also build your resume and cover letter directly on the platform, making your job application process seamless and effective."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I create a cover letter and resume with LaunchTrack?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, LaunchTrack allows you to easily generate professional cover letters and resumes using AI-powered templates and suggestions, helping you stand out in your job applications."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is LaunchTrack free to use?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, LaunchTrack offers free access to its core features, including AI career coaching, role-based interview question generation, analytics on job trends, and resume and cover letter building tools."
                  }
                }
              ]
            })
          }}
        />
      )}
      
      {/* Article structured data for blog/content pages */}
      {pageType === 'article' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": pageTitle,
              "description": pageDescription,
              "author": {
                "@type": "Person",
                "name": "Vipin Yadav"
              },
              "publisher": {
                "@type": "Organization",
                "name": "LaunchTrack",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://launchtrack.vercel.app/android-chrome-512x512.png"
                }
              },
              "datePublished": new Date().toISOString(),
              "dateModified": new Date().toISOString(),
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": pageUrl
              }
            })
          }}
        />
      )}
    </>
  );
};

export default SEOOptimizer; 