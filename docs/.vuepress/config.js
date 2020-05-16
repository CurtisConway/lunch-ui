module.exports = {
  title: 'LunchUI',
  description: 'A custom Vue component library',
  base: '/lunch-ui/',
  evergreen: true,
  themeConfig: {
    repo: 'CurtisConway/lunch-ui',
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
