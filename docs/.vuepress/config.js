module.exports = {
  title: 'LunchUI',
  description: 'A custom Vue component library',
  base: '/lunch-ui/',
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
    sidebar: {
      '/components/': [
        'mixins',
        'text',
        'grid',
        'button',
        'card',
        'dialog',
        'form-inputs',
      ],
      '/': [
        '',
      ],
    },
    lastUpdated: 'Last Updated',
  }
};
