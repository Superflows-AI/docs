// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
require('dotenv').config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Superflows Documentation',
  tagline: 'Guide to setting up your AI Product assistant',
  favicon: 'img/superflowsFavicon.png',

  // Set the production url of your site here
  url: 'https://docs.superflows.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Superflows-AI', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    [
      "posthog-docusaurus",
      {
        apiKey: process.env.POSTHOG_API_KEY,
        enableInDevelopment: false, // optional
        // other options are passed to posthog-js init as is
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Superflows-AI/docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 0,
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
      // Replace with your project's social card
      image: 'img/superflows-name-logo.png',
      themeConfig: {
        colorMode: {
          defaultMode: 'dark',
          disableSwitch: false,
          respectPrefersColorScheme: false,
        }},
      navbar: {
        title: 'Superflows',
        logo: {
          alt: 'Superflows Logo',
          src: 'img/superflowsFavicon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            to: "blog",
            position: 'left',
            label: 'Product Roadmap',
          },
          {
            href: 'https://github.com/Superflows-AI',
            label: 'GitHub',
            position: 'right',
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
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'Getting Started',
                to: '/docs/getting-started/onboarding',
              },
              {
                label: 'API',
                to: '/docs/api',
              },
              {
                label: 'Connecting your API',
                to: '/docs/category/connecting-your-api',
              },
              {
                label: 'Configuration',
                to: '/docs/category/configuration',
              },
              {
                label: 'Playground',
                to: '/docs/category/playground',
              },
              {
                label: 'Integration Guide',
                to: '/docs/06-integration-guide',
              }
            ],

          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://join.slack.com/t/superflowsusers/shared_invite/zt-1zf93teqq-0I9H_niiGruVDPFVSzGj9w',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/SuperflowsAI',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Landing Page',
                to: 'https://www.superflows.ai/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Superflows-AI',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Superflows AI. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
