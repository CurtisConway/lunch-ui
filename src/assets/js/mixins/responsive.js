const sm = 640;
const md = 1024;
const lg = 1200;
const xl = 1840;

export default {
  getCurrentBreakpoint() {
    if (this.isXl()) {
      return 'xl';
    }
    if (this.isLg()) {
      return 'lg';
    }
    if (this.isMd()) {
      return 'md';
    }
    if (this.isSm()) {
      return 'sm';
    }
    return 'xs';
  },
  isXl() {
    return window.matchMedia(`(min-width: ${xl + 1}px)`).matches;
  },
  isLg() {
    return window.matchMedia(`(min-width: ${lg + 1}px) and (max-width: ${xl}px)`).matches;
  },
  isMd() {
    return window.matchMedia(`(min-width: ${md + 1}px) and (max-width: ${lg}px)`).matches;
  },
  isSm() {
    return window.matchMedia(`(min-width: ${sm + 1}px) and (max-width: ${md}px)`).matches;
  },
};
