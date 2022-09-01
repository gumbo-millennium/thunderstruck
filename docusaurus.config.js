// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Thunderstruck Festival',
  tagline: 'Kom ook naar Thunderstruck Festival 2022 - Gratis rockconcert voor studenten in Zwolle',
  url: 'https://thunderstruckfestival.nl',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'images/lightning.png',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          path: 'news',
          routeBasePath: '/news',
          blogTitle: 'News',
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Thunderstruck Festival',
        logo: {
          alt: 'Logo van Thunderstruck Festival',
          src: 'img/logo.png',
        },
        items: [
          {
            to: '/news',
            label: 'News',
            position: 'left',
          },
          {
            to: '/line-up',
            label: 'Line-up',
            position: 'left',
          },
          {
            to: '/about',
            label: 'About',
            position: 'left',
          },
          {
            to: '/partners',
            label: 'Partners',
            position: 'left',
          },
          {
            to: '/contact',
            label: 'Contact',
            position: 'left',
          },
          {
            href: 'https://gumbo-millennium.nl',
            label: 'Gumbo Millennium',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/news',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Gumbo Millennium.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
