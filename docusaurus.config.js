/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Gondola.finance',
  tagline: 'Connect any asset on Avalanche',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/gondola-doc/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'gondola-finance', // Usually your GitHub org/user name.
  projectName: 'gondola-doc', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Gondola.finance',
      logo: {
        alt: 'Gondola.finance Logo',
        src: 'img/logo.webp',
      },
      items: [
        {
          type: 'doc',
          docId:  'getting-started/introduction',
          position: 'left',
          label: 'Getting started',
        },
        {
          type: 'doc',
          docId:  'developers/introduction',
          position: 'left',
          label: 'Developers',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting started',
              to: '/docs/getting-started/introduction',
            },
            {
              label: 'Developers',
              to: '/docs/developers/introduction',
            },
          ],
        },
  
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/7yf87Afh',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/gondola_finance',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Website',
              href: 'https://gondola.finance'
            },
            {
              label: 'Medium',
              href: 'https://gondola-finance.medium.com/'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/gondola-finance',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/gondola-finance/gondola-doc',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
