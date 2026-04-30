import { NavigationItem } from '@/types/content';

/**
 * Main navigation items
 * Used in Header and Footer components
 */
export const navItems: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact Us', href: '/contact' },
];

/**
 * Company contact information
 */
export const contactInfo = {
  email: 'apresearchbusiness@gmail.com',
  phone: '+91 7304275983',
  address: 'Office no:118, 1st Floor, Sonal Shopping Mall, Station Road, Nallasopara(W), Mumbai - 401203',
  city: 'Mumbai, India',
  website: 'sugoi-insights.com',
  linkedin: 'https://www.linkedin.com/company/sugoi-insights',
  twitter: 'https://twitter.com/sugoiinsights',
  facebook: 'https://www.facebook.com/sugoiinsights',
  instagram: 'https://www.instagram.com/sugoiinsights',
};

/**
 * Company tagline
 */
export const tagline = 'Transforming data into strategic advantage.';
