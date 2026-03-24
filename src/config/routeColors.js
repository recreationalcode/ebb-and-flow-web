// Centralized color config for page transitions, backgrounds, and theme styling.
// All hex values correspond to shades in tailwind.config.js.

// Base color palettes (from tailwind.config.js)
const palette = {
  blue: {
    overlay: '#5D739C',   // blue-500 — teardrop / color wash
    bg: '#4D6188',        // blue-600 — page section background
    bgDark: '#3F5073',    // blue-700 — fade-to during transition
    // Tailwind classes for page styling
    bgClass: 'bg-blue-600',
    h1Color: 'text-white',
    bodyText: 'text-gray-100',
    sectionHeading: 'text-white',
    ghost: 'blue',
    ghostText: '!text-gray-200',
  },
  purple: {
    overlay: '#9277AB',   // purple-500 — teardrop / color wash
    bg: '#7D6396',        // purple-600 — page section background
    bgDark: '#685280',    // purple-700 — fade-to during transition
    bgClass: 'bg-purple-600',
    h1Color: 'text-white',
    bodyText: 'text-gray-100',
    sectionHeading: 'text-white',
    ghost: 'purple',
    ghostText: '!text-gray-200',
  },
  gray: {
    overlay: '#F0F0F0',   // gray-100 — teardrop / color wash
    bg: '#E6E6E6',        // gray-200 — page section background
    bgDark: '#D4D4D4',    // gray-300 — fade-to during transition
    bgClass: 'bg-gray-200',
    h1Color: 'text-purple',
    bodyText: 'text-gray-600',
    sectionHeading: 'text-gray-800',
    ghost: 'gray',
    ghostText: '!text-gray-500',
  },
};

// Which base palette each route uses
const routeTheme = {
  '/': 'gray',
  '/about': 'gray',
  '/services/lymphatic/manual-lymphatic-drainage': 'blue',
  '/services/lymphatic/pre-post-op-lymphatic-massage': 'purple',
  '/services/lymphatic/lymphedema-lipedema-management': 'gray',
  '/services/lymphatic/fertility-ivf-support-massage': 'blue',
  '/services/lymphatic/pregnancy-postpartum-lymphatic-massage': 'purple',
  '/services/oncology-massage': 'purple',
  '/services/craniosacral-therapy': 'gray',
  '/faq': 'gray',
  '/privacy-policy': 'gray',
  '/terms-and-conditions': 'gray',
};

// Derive all route-specific color maps from palette + routeTheme
export const routeColors = Object.fromEntries(
  Object.entries(routeTheme).map(([path, theme]) => [path, theme]),
);

export const routeBackgrounds = Object.fromEntries(
  Object.entries(routeTheme).map(([path, theme]) => [path, palette[theme].bg]),
);


// Resolve overlay color from a color name (for DropRevealOverlay)
export function getOverlayColor(colorName) {
  return palette[colorName]?.overlay || palette.gray.overlay;
}

// Get full theme (hex colors + Tailwind classes) for a route
export function getTheme(path) {
  const themeName = routeTheme[path] || 'gray';
  return palette[themeName];
}
