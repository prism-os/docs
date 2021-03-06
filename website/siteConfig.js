/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// const blogUrl = 'https://blog.prismos.dev';
const repoProjectName = 'os';
const repoOrganizationName = 'prism-os';

const siteConfig = {
  title: 'Prism', // Title for your website.
  tagline: 'Learn how to build apps for Prism OS',
  url: 'https://prismos.dev', // Your website URL
  baseUrl: '/docs/', // Base URL for your project */
  docsUrl: '',
  // blogUrl,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: '',
  organizationName: 'prism-os',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'setting-up-device', label: 'Docs'},
    {doc: 'app-structure', label: 'API'},
    // {href: blogUrl, label: 'Blog'},
  ],

  /* path to images for header/footer */
  headerIcon: 'favicon.ico',
  footerIcon: 'favicon.ico',
  favicon: 'favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#003EE6',
    secondaryColor: '#4C77ED',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Prism`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js', 'crisp.js'],

  // custom stylesheets
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Lato',
  ],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterUsername: 'prism_os',
  twitterImage: 'img/undraw_tweetstorm.svg',
  facebookAppId: '1890949264519838',
  gaTrackingId: 'UA-101219891-4',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoProjectName,
  repoOrganizationName,
  repoUrl: `https://github.com/${repoOrganizationName}/${repoProjectName}`,
  stackOverflowTag: 'prismos',
  projectChatUrl: 'https://join.slack.com/t/prism-os/shared_invite/enQtODA2NTQ3NDQzNjcxLTc4YWEyMTk2MDZhMzdiZWQ5MmE2ZWQ0MTU5NTdjZTc2MzlkNGZiZDI3MTYzZTkwMDQyODAxNzk5Y2YwMDI1Yzc',
  footerDocsLinks: [
    {
      doc: 'setting-up-device',
      label: 'Getting Started',
    },
    {
      doc: 'setup-prism-cli',
      label: 'Guides',
    },
    {
      doc: 'app-structure',
      label: 'API Reference',
    },
  ],
};

module.exports = siteConfig;
