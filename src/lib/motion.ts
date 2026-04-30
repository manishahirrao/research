import { Variants, Transition } from 'framer-motion';

/**
 * Shared Framer Motion Configuration
 * Single source of truth for all animation variants
 */

// Default spring transition for page-level animations
export const springTransition: Transition = {
  type: 'spring',
  stiffness: 80,
  damping: 20,
};

// Default ease transition for micro-interactions
export const easeTransition: Transition = {
  duration: 0.2,
  ease: [0.25, 0.1, 0.25, 1],
};

// Fade In Animation
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { ...springTransition, duration: 0.5 } },
};

// Slide Up Animation
export const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: springTransition },
};

// Slide In from Left
export const slideInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: springTransition },
};

// Slide In from Right
export const slideInRightVariants: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: springTransition },
};

// Stagger Container
export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Mobile Drawer Animation
export const drawerVariants: Variants = {
  closed: { x: '100%', transition: { duration: 0.3, ease: 'easeInOut' } },
  open: { x: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
};

// Counter Animation
export const counterVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { ...springTransition, duration: 0.6 },
  },
};

/**
 * Motion configuration object for consistent animation settings
 */
export const motionConfig = {
  spring: springTransition,
  ease: easeTransition,
  variants: {
    fadeIn: fadeInVariants,
    slideUp: slideUpVariants,
    slideInLeft: slideInLeftVariants,
    slideInRight: slideInRightVariants,
    staggerContainer: staggerContainerVariants,
    drawer: drawerVariants,
    counter: counterVariants,
  },
};
