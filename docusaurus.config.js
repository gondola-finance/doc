const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Gondola Finance",
  tagline: "Connect any asset on Avalanche",
  url: "https://gondola-finance.github.io/",
  baseUrl: "/doc/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "gondola-finance", // Usually your GitHub org/user name.
  projectName: "doc", // Usually your repo name.
    themeConfig: {
      colorMode: {
        // "light" | "dark"
        defaultMode: "dark",
        respectPrefersColorScheme: true,
        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        //disableSwitch: true,
        
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      navbar: {
        title: "Gondola Finance",
        logo: {
          alt: "Gondola.finance Logo",
          src: "img/logo.webp",
        },
        items: [
          {
            type: "doc",
            docId: "getting-started/introduction",
            position: "left",
            label: "Getting started",
          },
          {
            type: "doc",
            docId: "developers/introduction",
            position: "left",
            label: "Developers",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Getting started",
                to: "/docs/getting-started/introduction",
              },
              {
                label: "Developers",
                to: "/docs/developers/introduction",
              },
            ],
          },
  
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/7yf87Afh",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/gondola_finance",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Website",
                href: "https://gondola.finance",
              },
              {
                label: "Dapp",
                href: "https://app.gondola.finance",
              },
              {
                label: "Medium",
                href: "https://gondola-finance.medium.com/",
              },
              {
                label: "GitHub",
                href: "https://github.com/gondola-finance",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Gondola Finance.`,
      },
    },
    presets: [
      [
        "@docusaurus/preset-classic",
        {
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            // Please change this to your repo.
            editUrl:
              'https://github.com/gondola-finance/doc',
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        },
      ],
    ],
  };
  