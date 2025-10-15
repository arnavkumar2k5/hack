/**
 * Performance utilities for mobile optimization
 */

// Detect if user is on mobile device
export const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) || window.innerWidth <= 768;
};

// Detect if device has low performance
export const isLowPerformanceDevice = () => {
  if (typeof navigator === 'undefined') return false;
  
  // Check for low-end devices
  const hardwareConcurrency = navigator.hardwareConcurrency || 1;
  const memory = navigator.deviceMemory || 4;
  
  return hardwareConcurrency <= 4 || memory <= 4;
};

// Reduce motion preference
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Disable animations on low-end devices
export const shouldDisableAnimations = () => {
  return isMobileDevice() || isLowPerformanceDevice() || prefersReducedMotion();
};

// Apply performance class to body
export const applyPerformanceMode = () => {
  if (typeof document === 'undefined') return;
  
  if (isMobileDevice()) {
    document.body.classList.add('mobile-device');
  }
  
  if (isLowPerformanceDevice()) {
    document.body.classList.add('low-performance');
  }
  
  if (prefersReducedMotion()) {
    document.body.classList.add('reduced-motion');
  }
};
