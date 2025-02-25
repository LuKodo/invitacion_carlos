import { useState, useEffect } from 'react';

/**
 * A custom React hook that detects whether the current device is mobile or desktop
 * based on screen width and/or user agent.
 *
 * @param {number} mobileBreakpoint - The maximum width in pixels to consider as a mobile device
 * @returns {Object} An object containing isMobile and isDesktop boolean flags
 */
const useDeviceDetect = (mobileBreakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Helper function to check device type
    const checkDevice = () => {
      // Check width
      const isMobileByWidth = window.innerWidth < mobileBreakpoint;

      // Optional: Also check user agent (more comprehensive)
      const isMobileByAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

      // You can use either approach or combine them:
      // Approach 1: Just use screen width (simpler)
      const mobileCheck = isMobileByWidth;

      // Approach 2: Combine width and user agent (more comprehensive)
      // const mobileCheck = isMobileByWidth || isMobileByAgent;

      setIsMobile(mobileCheck);
      setIsDesktop(!mobileCheck);
    };

    // Check on initial render
    checkDevice();

    // Check on window resize
    window.addEventListener('resize', checkDevice);

    // Clean up event listener
    return () => window.removeEventListener('resize', checkDevice);
  }, [mobileBreakpoint]);

  return { isMobile, isDesktop };
};

export default useDeviceDetect;