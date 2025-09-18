// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeNova from "starlight-theme-nova";
import starlightLinksValidator from "starlight-links-validator";

// https://astro.build/config
export default defineConfig({
  site: "https://siderakb.ziteh.dev/",
  compressHTML: true,
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  integrations: [
    starlight({
      title: "SideraKB",
      social: [
        { icon: "youtube", label: "YouTube", href: "https://www.youtube.com/@siderakb" },
        { icon: "github", label: "GitHub", href: "https://github.com/siderakb" },
      ],
      sidebar: [
        {
          label: "Introduction",
          link: "/intro",
        },
        {
          label: "Keyboards",
          translations: {
            "zh-TW": "鍵盤",
          },
          items: [
            {
              label: "List",
              link: "/keyboards/list",
              // attrs: { class: "large" },
            },
            {
              label: "ErgoSNM",
              badge: { text: "Pop", variant: "note" },
              items: [
                { label: "Rev 2.x", link: "/keyboards/ergosnm/rev2" },
                { label: "Rev 1.x", link: "/keyboards/ergosnm/rev1" },
              ],
            },
            {
              label: "Facade",
              autogenerate: { directory: "keyboards/facade" },
            },
            {
              label: "Calcite",
              link: "https://github.com/siderakb/calcite",
            },
            {
              label: "MS60",
              link: "https://github.com/siderakb/ms60",
            },
            {
              label: "Miniboard",
              link: "https://github.com/siderakb/miniboard",
            },
            {
              label: "Keypad",
              link: "https://github.com/siderakb/Keypad",
            },
          ],
        },
        {
          label: "Mouse Sensors",
          items: [
            {
              label: "PMW3610 PCB",
              badge: { text: "Pop", variant: "note" },
              items: [
                {
                  label: "Rev 2.x",
                  link: "/mouse-sensors/pmw3610/rev2",
                },
              ],
            },
          ],
        },
        {
          label: "General Guides",
          autogenerate: { directory: "guides" },
        },
      ],
      editLink: {
        baseUrl: "https://github.com/siderakb/siderakb-website/edit/starlight/main/",
      },
      customCss: [
        "./src/styles/custom.css",
        "@fontsource/inter/400.css",
        "@fontsource/inter/800.css",
        "@fontsource/inter/400-italic.css",
        "@fontsource/inter/800-italic.css",
        "@fontsource/noto-sans-tc/400.css",
        "@fontsource/noto-sans-tc/800.css",
      ],
      favicon: "/favicon.ico",
      head: [
        {
          tag: "meta",
          attrs: {
            name: "google-site-verification",
            content: process.env.GOOGLE_SITE_VERIFICATION,
          },
        },
        // {
        //   tag: "link",
        //   attrs: {
        //     rel: "preconnect",
        //     href: "https://fonts.googleapis.com",
        //   },
        // },
        // {
        //   tag: "link",
        //   attrs: {
        //     rel: "preconnect",
        //     href: "https://fonts.gstatic.com",
        //     crossorigin: "",
        //   },
        // },
        // {
        //   tag: "link",
        //   attrs: {
        //     href: "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400,700&display=swap",
        //     rel: "stylesheet",
        //   },
        // },
      ],
      // i18n
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        "zh-tw": {
          label: "繁體中文",
          lang: "zh-TW",
        },
      },
      // Code
      expressiveCode: {
        // https://expressive-code.com/guides/themes/
        themes: ["one-dark-pro", "min-light"],
        styleOverrides: {
          codeFontFamily:
            "'Roboto Mono Variable', SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
        },
      },
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 4 },
      pagination: true,
      credits: false,
      plugins: [
        starlightThemeNova({
          nav: [
            {
              label: "ErgoSNM",
              href: {
                en: "/keyboards/ergosnm/rev2/",
                "zh-TW": "/zh-tw/keyboards/ergosnm/rev2/",
              },
            },
            {
              label: "PMW3610 PCB",
              href: {
                en: "/mouse-sensors/pmw3610/rev2/",
                "zh-TW": "/zh-tw/mouse-sensors/pmw3610/rev2/",
              },
            },
          ],
        }),
        starlightLinksValidator({
          exclude: ["/zh-tw/**"], // TODO
        }),
      ],
    }),
  ],
});
