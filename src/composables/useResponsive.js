import { useBreakpoints } from '@vueuse/core';

export function useResponsive() {

  const breakpoints = useBreakpoints({
    mobile: 768,
    tablet: 1367
  });

  const mobile = breakpoints.smaller('mobile');
  const desktop = breakpoints.greater('tablet');

  return {
    mobile,
    desktop
  }
}