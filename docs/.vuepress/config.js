module.exports = {
  title: 'LunchUI',
  description: 'A custom Vue component library',
  dest: 'docs/dist',
  evergreen: true,
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      {
        text: 'Usage Guide',
        link: '/'
      },
      {
        text: 'Components',
        link: '/components/'
      },
    ],
    sidebar: 'auto',
    lastUpdated: 'Last Updated',
  },
};
