const sm = 640;
const md = 1024;
const lg = 1200;
const xl = 1840;

export default {
  data() {
    return {
      currentBreakpoint: 'xs',
    };
  },
  methods: {
    getCurrentBreakpoint() {
      this.$root.currentBreakpoint = 'xs';
      if (window.matchMedia) {
        if (this.isXl()) {
          this.$root.currentBreakpoint = 'xl';
        }
        if (this.isLg()) {
          this.$root.currentBreakpoint = 'lg';
        }
        if (this.isMd()) {
          this.$root.currentBreakpoint = 'md';
        }
        if (this.isSm()) {
          this.$root.currentBreakpoint = 'sm';
        }
      }
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
  },
  mounted() {
    if (typeof window !== 'undefined') {
      this.getCurrentBreakpoint();
      this.currentBreakpoint = this.$root.currentBreakpoint;
      if (!this.$root.hasResizeHandler) {
        window.addEventListener('resize', this.getCurrentBreakpoint);
        this.$root.hasResizeHandler = true;
      }
      setInterval(() => {
        this.currentBreakpoint = this.$root.currentBreakpoint;
      }, 500);
    }
  },
};
