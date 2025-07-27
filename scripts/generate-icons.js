// PWA Icon Generator - Basic SVG icons for LaunchTrack
// You can replace these with actual designed icons

const createSVGIcon = (size, backgroundColor = '#070D0D', textColor = '#EFEDE4') => {
  return `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${size}" height="${size}" fill="${backgroundColor}" rx="${size * 0.1}"/>
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="${size * 0.25}" 
          font-weight="bold" fill="${textColor}" text-anchor="middle" dy="0.35em">LT</text>
  </svg>`;
};

// Export SVG strings for different sizes
export const icons = {
  '192': createSVGIcon(192),
  '256': createSVGIcon(256),
  '384': createSVGIcon(384),
  '512': createSVGIcon(512),
};

// Create favicon
export const favicon = `<svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" fill="#070D0D" rx="3"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="14" 
        font-weight="bold" fill="#EFEDE4" text-anchor="middle" dy="0.35em">LT</text>
</svg>`;
