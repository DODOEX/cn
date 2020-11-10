const math = require("remark-math");
const katex = require("rehype-katex");

module.exports = {
  title: "DODO Docs",
  tagline: "Let's DODO it!",
  url: "https://DODOEX.github.io/cn",
  baseUrl: "/cn/",
  favicon: "img/favicon.png",
  organizationName: "DODOEX", // Usually your GitHub org/user name.
  projectName: "cn", // Usually your repo name.
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq",
      crossorigin: "anonymous",
    },
  ],
  themeConfig: {
    navbar: {
      title: "DODO 文档中心",
      logo: {
        alt: "DODO",
        src: "img/logo.svg",
        href: "https://DODOEX.github.io/cn/",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs/",
          label: "文档",
          position: "left",
        },
        {
          to: "whitepaper",
          activeBasePath: "whitepaper",
          label: "白皮书",
          position: "left",
        },
        {
          href: "https://app.dodoex.io",
          label: "交易所",
          position: "left",
        },
        {
          href: "https://github.com/DODOEX",
          label: "GitHub",
          position: "left",
        },
        {
          href: "https://DODOEX.github.io/docs/",
          label: "EN",
          position: "left",
        },
      ],
    },
    footer: {
      style: "dark",
      // links: [
      //   {
      //     title: "Developer",
      //     items: [
      //       {
      //         label: "GitHub",
      //         href: "https://github.com/facebook/docusaurus",
      //       },
      //       {
      //         label: "Deployed Info",
      //         href: "https://github.com/facebook/docusaurus",
      //       },
      //     ],
      //   },
      //   {
      //     title: "Community",
      //     items: [
      //       {
      //         label: "Medium",
      //         href: "https://stackoverflow.com/questions/tagged/docusaurus",
      //       },
      //       {
      //         label: "Telegram",
      //         href: "https://discordapp.com/invite/docusaurus",
      //       },
      //       {
      //         label: "Twitter",
      //         href: "https://twitter.com/docusaurus",
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} DODOEX, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        debug: true,
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          // homePageId: "briefIntro",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/DODOEX/cn/edit/master/",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
