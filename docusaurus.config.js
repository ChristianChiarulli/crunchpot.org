// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const socials = require("./socials");
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Crunch Pot',
  tagline: 'Health, Wellness, Life',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  favicon: 'img/logo.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'crunchpot', // Usually your GitHub org/user name.
  projectName: 'crunchpot', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: "en",
  //   locales: ["en", "de", "es"],
  //   localeConfigs: {
  //     en: {
  //       label: "English",
  //     },
  //     de: {
  //       label: "Deutsch",
  //     },
  //     es: {
  //       label: "Español",
  //     },
  //   },
  // },
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
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        title: 'Home',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Cookbook'
            ,
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          ...socials,

          {
            href: 'https://www.patreon.com/thestorykeeper',
            label: 'Donate',
            position: 'right',
          },
          // {
          //   type: "localeDropdown",
          //   position: "right",
          // },
        ],
      },
      announcementBar: {
        id: 'Sign Up for Emails',
        content: 'Preview Recipes: <a target="_blank" rel="noopener noreferrer" href="https://www.patreon.com/thestorykeeper"> Sign up</a>',
        backgroundColor: 'var(--primary-fg)',
        textColor: 'var(--primary-bg)',
        isCloseable: true,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [

              {
                label: 'About us',
                to: '/docs/intro',
              },
              {
                label: 'Cookbook',
                to: '/docs/intro',
              },
              {
                label: 'Blog',
                to: '/docs/blog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Pinterest',
                href: 'https://www.pinterest.com/crunchpot/',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UC6qryr48KAtVOHXqiiRGJ8A',
              },
            ],
          },
          {
            title: 'Support',
            items: [
              
              {
                label: 'Patreon',
                href: 'https://www.patreon.com/thestorykeeper',
              },
              {
                label: 'Youtube',
                href: 'https://www.patreon.com/thestorykeeper',
              },
              {
                label: 'Email',
                href: 'https://www.patreon.com/thestorykeeper',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The Crunch Pot, Inc. Built with Docusaurus.`,
      },
      
      // prism: {
      //   theme: lightCodeTheme,
      //   darkTheme: darkCodeTheme,
      // },
    }),
    /// add search bar 
    // plugins: [
    //   [
    //     require.resolve("@easyops-cn/docusaurus-search-local"),
    //     ({
    //       hashed: true,
    //       language: ["en"],
    //       indexDocs: true,
    //       indexBlog: false,
    //       indexPages: false,
    //       explicitSearchResultPath: true
    //     }),
    //   ],
    // ],
};

module.exports = config;
