/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  docsSidebar: [
    'intro',
    // {
    //   type: 'category',
    //   label: 'Development Boards',
    //   link: { type: 'generated-index', },
    //   items: [
    //     'rp-micro',
    //   ],
    // },
    {
      type: 'category',
      label: 'General Guide',
      link: { type: 'generated-index', },
      items: [
        'general-guide/dfu',
        'general-guide/soldering',
      ],
    },
    'how-to-get',
    'promicro-pinmap',
    'research',
  ],
  keyboardSidebar: [
    {
      type: 'doc',
      label: 'List',
      id: 'keyboard-list',
    },
    {
      type: 'category',
      label: 'ErgoSNM',
      link: {
        type: 'doc',
        id: 'ergosnm/intro'
      },
      items: [
        {
          type: 'doc',
          label: 'Rev 2.x',
          id: 'ergosnm/rev2',
        },
        {
          type: 'doc',
          label: 'Rev 1.x',
          id: 'ergosnm/rev1',
        },
      ],
    },
    {
      type: 'link',
      label: 'Calcite',
      href: 'https://github.com/siderakb/calcite',
    },
    {
      type: 'doc',
      label: 'Facade',
      id: 'facade/intro',
    },
    {
      type: 'link',
      label: 'MS60',
      href: 'https://github.com/siderakb/ms60',
    },
    {
      type: 'link',
      label: 'Miniboard',
      href: 'https://github.com/siderakb/miniboard',
    },
    {
      type: 'link',
      label: 'Keypad',
      href: 'https://github.com/siderakb/Keypad',
    },
  ],
};

module.exports = sidebars;
