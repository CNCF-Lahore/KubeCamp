globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { defineEventHandler, handleCacheHeaders, splitCookiesString, isEvent, createEvent, getRequestHeader, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHost, getRequestProtocol, getQuery as getQuery$1, setHeader, appendHeader, setResponseStatus, setResponseHeader, send, getRequestHeaders, removeResponseHeader, createError, getResponseHeader, getCookie, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'file:///workspace/KubeCamp/node_modules/h3/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file:///workspace/KubeCamp/node_modules/ofetch/dist/node.mjs';
import destr, { destr as destr$1 } from 'file:///workspace/KubeCamp/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file:///workspace/KubeCamp/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file:///workspace/KubeCamp/node_modules/hookable/dist/index.mjs';
import { snakeCase, kebabCase, pascalCase, camelCase } from 'file:///workspace/KubeCamp/node_modules/scule/dist/index.mjs';
import { klona } from 'file:///workspace/KubeCamp/node_modules/klona/dist/index.mjs';
import defu, { defuFn, defu as defu$1 } from 'file:///workspace/KubeCamp/node_modules/defu/dist/defu.mjs';
import { hash } from 'file:///workspace/KubeCamp/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, hasProtocol, withHttps, withoutProtocol, withoutLeadingSlash, decodePath, withLeadingSlash, withoutTrailingSlash, isRelative } from 'file:///workspace/KubeCamp/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///workspace/KubeCamp/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///workspace/KubeCamp/node_modules/unstorage/drivers/fs.mjs';
import unstorage_47drivers_47memory from 'file:///workspace/KubeCamp/node_modules/unstorage/drivers/memory.mjs';
import unstorage_47drivers_47lru_45cache from 'file:///workspace/KubeCamp/node_modules/unstorage/drivers/lru-cache.mjs';
import unstorage_47drivers_47fs_45lite from 'file:///workspace/KubeCamp/node_modules/unstorage/drivers/fs-lite.mjs';
import { toRouteMatcher, createRouter } from 'file:///workspace/KubeCamp/node_modules/radix3/dist/index.mjs';
import { toValue } from 'file:///workspace/KubeCamp/node_modules/vue/index.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, extname } from 'file:///workspace/KubeCamp/node_modules/pathe/dist/index.mjs';
import { isSpecialLang, isSpecialTheme, addClassToHast, getHighlighterCore } from 'file:///workspace/KubeCamp/node_modules/shiki/dist/core.mjs';
import { transformerNotationDiff, transformerNotationFocus, transformerNotationHighlight, transformerNotationErrorLevel } from 'file:///workspace/KubeCamp/node_modules/@shikijs/transformers/dist/index.mjs';
import { unified } from 'file:///workspace/KubeCamp/node_modules/unified/index.js';
import { toString as toString$1 } from 'file:///workspace/KubeCamp/node_modules/mdast-util-to-string/index.js';
import { postprocess, preprocess } from 'file:///workspace/KubeCamp/node_modules/micromark/index.js';
import { stringifyPosition } from 'file:///workspace/KubeCamp/node_modules/unist-util-stringify-position/index.js';
import { markdownLineEnding, markdownSpace } from 'file:///workspace/KubeCamp/node_modules/micromark-util-character/index.js';
import { push, splice } from 'file:///workspace/KubeCamp/node_modules/micromark-util-chunked/index.js';
import { resolveAll } from 'file:///workspace/KubeCamp/node_modules/micromark-util-resolve-all/index.js';
import { normalizeUri } from 'file:///workspace/KubeCamp/node_modules/micromark-util-sanitize-uri/index.js';
import slugify from 'file:///workspace/KubeCamp/node_modules/slugify/slugify.js';
import remarkParse from 'file:///workspace/KubeCamp/node_modules/remark-parse/index.js';
import remark2rehype from 'file:///workspace/KubeCamp/node_modules/remark-rehype/index.js';
import remarkMDC, { parseFrontMatter } from 'file:///workspace/KubeCamp/node_modules/remark-mdc/dist/index.mjs';
import { toString } from 'file:///workspace/KubeCamp/node_modules/hast-util-to-string/index.js';
import Slugger from 'file:///workspace/KubeCamp/node_modules/github-slugger/index.js';
import { detab } from 'file:///workspace/KubeCamp/node_modules/detab/index.js';
import remarkEmoji from 'file:///workspace/KubeCamp/node_modules/remark-emoji/index.js';
import remarkGFM from 'file:///workspace/KubeCamp/node_modules/remark-gfm/index.js';
import rehypeExternalLinks from 'file:///workspace/KubeCamp/node_modules/rehype-external-links/index.js';
import rehypeSortAttributeValues from 'file:///workspace/KubeCamp/node_modules/rehype-sort-attribute-values/index.js';
import rehypeSortAttributes from 'file:///workspace/KubeCamp/node_modules/rehype-sort-attributes/index.js';
import rehypeRaw from 'file:///workspace/KubeCamp/node_modules/rehype-raw/index.js';

const defineAppConfig = (config) => config;

const appConfig0 = defineAppConfig({
  ui: {
    primary: "green",
    gray: "slate",
    footer: {
      bottom: {
        left: "text-sm text-gray-500 dark:text-gray-400",
        wrapper: "border-t border-gray-200 dark:border-gray-800"
      }
    }
  },
  seo: {
    siteName: "Nuxt UI Pro - Docs template"
  },
  header: {
    logo: {
      alt: "",
      light: "",
      dark: ""
    },
    search: true,
    colorMode: true,
    links: [{
      icon: "i-simple-icons-github",
      to: "https://github.com/nuxt-ui-pro/docs",
      target: "_blank",
      "aria-label": "Docs template on GitHub"
    }]
  },
  footer: {
    credits: "Copyright \xA9 2023",
    colorMode: false,
    links: [{
      icon: "i-simple-icons-nuxtdotjs",
      to: "https://nuxt.com",
      target: "_blank",
      "aria-label": "Nuxt Website"
    }, {
      icon: "i-simple-icons-discord",
      to: "https://discord.com/invite/ps2h6QT",
      target: "_blank",
      "aria-label": "Nuxt UI on Discord"
    }, {
      icon: "i-simple-icons-x",
      to: "https://x.com/nuxt_js",
      target: "_blank",
      "aria-label": "Nuxt on X"
    }, {
      icon: "i-simple-icons-github",
      to: "https://github.com/nuxt/ui",
      target: "_blank",
      "aria-label": "Nuxt UI on GitHub"
    }]
  },
  toc: {
    title: "Table of Contents",
    bottom: {
      title: "Community",
      edit: "https://github.com/nuxt-ui-pro/docs/edit/main/content",
      links: [{
        icon: "i-heroicons-star",
        label: "Star on GitHub",
        to: "https://github.com/nuxt/ui",
        target: "_blank"
      }, {
        icon: "i-heroicons-book-open",
        label: "Nuxt UI Pro docs",
        to: "https://ui.nuxt.com/pro/guide",
        target: "_blank"
      }, {
        icon: "i-simple-icons-nuxtdotjs",
        label: "Purchase a license",
        to: "https://ui.nuxt.com/pro/purchase",
        target: "_blank"
      }]
    }
  }
});

const appConfig1 = defineAppConfig({
  ui: {
    variables: {
      light: {
        background: "255 255 255",
        foreground: "var(--color-gray-700)"
      },
      dark: {
        background: "var(--color-gray-900)",
        foreground: "var(--color-gray-200)"
      },
      header: {
        height: "4rem"
      }
    },
    icons: {
      dark: "i-heroicons-moon-20-solid",
      light: "i-heroicons-sun-20-solid",
      system: "i-heroicons-computer-desktop-20-solid",
      search: "i-heroicons-magnifying-glass-20-solid",
      external: "i-heroicons-arrow-up-right-20-solid",
      chevron: "i-heroicons-chevron-down-20-solid",
      hash: "i-heroicons-hashtag-20-solid",
      menu: "i-heroicons-bars-3-20-solid",
      close: "i-heroicons-x-mark-20-solid",
      check: "i-heroicons-check-circle-20-solid"
    },
    presets: {
      button: {
        primary: {
          color: "white",
          variant: "solid"
        },
        secondary: {
          color: "gray",
          variant: "ghost"
        },
        input: {
          color: "white",
          variant: "outline",
          ui: {
            font: "",
            color: {
              white: {
                outline: "ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:ring-gray-300 dark:hover:ring-gray-700 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
              }
            }
          }
        }
      }
    }
  }
});

const inlineAppConfig = {
  "nuxt": {
    "buildId": "376337db-b2f0-4cae-a47b-f186cd038c95"
  },
  "ui": {
    "primary": "green",
    "gray": "cool",
    "colors": [
      "red",
      "orange",
      "amber",
      "yellow",
      "lime",
      "green",
      "emerald",
      "teal",
      "cyan",
      "sky",
      "blue",
      "indigo",
      "violet",
      "purple",
      "fuchsia",
      "pink",
      "rose",
      "primary"
    ],
    "strategy": "merge"
  }
};

const appConfig = defuFn(appConfig0, appConfig1, inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/api/search.json": {
        "prerender": true
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "mdc": {
      "components": {
        "prose": true,
        "map": {
          "p": "prose-p",
          "a": "prose-a",
          "blockquote": "prose-blockquote",
          "code-inline": "prose-code-inline",
          "code": "ProseCodeInline",
          "em": "prose-em",
          "h1": "prose-h1",
          "h2": "prose-h2",
          "h3": "prose-h3",
          "h4": "prose-h4",
          "h5": "prose-h5",
          "h6": "prose-h6",
          "hr": "prose-hr",
          "img": "prose-img",
          "ul": "prose-ul",
          "ol": "prose-ol",
          "li": "prose-li",
          "strong": "prose-strong",
          "table": "prose-table",
          "thead": "prose-thead",
          "tbody": "prose-tbody",
          "td": "prose-td",
          "th": "prose-th",
          "tr": "prose-tr"
        }
      },
      "headings": {
        "anchorLinks": {
          "h1": false,
          "h2": true,
          "h3": true,
          "h4": true,
          "h5": false,
          "h6": false
        }
      }
    },
    "content": {
      "locales": [],
      "defaultLocale": "",
      "integrity": 1711046667753,
      "experimental": {
        "stripQueryParameters": false,
        "advanceQuery": false,
        "clientDB": false
      },
      "respectPathCase": false,
      "api": {
        "baseURL": "/api/_content"
      },
      "navigation": {
        "fields": [
          "icon",
          "to",
          "target"
        ]
      },
      "tags": {
        "p": "prose-p",
        "a": "prose-a",
        "blockquote": "prose-blockquote",
        "code-inline": "prose-code-inline",
        "code": "ProseCodeInline",
        "em": "prose-em",
        "h1": "prose-h1",
        "h2": "prose-h2",
        "h3": "prose-h3",
        "h4": "prose-h4",
        "h5": "prose-h5",
        "h6": "prose-h6",
        "hr": "prose-hr",
        "img": "prose-img",
        "ul": "prose-ul",
        "ol": "prose-ol",
        "li": "prose-li",
        "strong": "prose-strong",
        "table": "prose-table",
        "thead": "prose-thead",
        "tbody": "prose-tbody",
        "td": "prose-td",
        "th": "prose-th",
        "tr": "prose-tr"
      },
      "highlight": {
        "theme": {
          "light": "material-theme-lighter",
          "default": "material-theme",
          "dark": "material-theme-palenight"
        },
        "preload": [
          "json",
          "js",
          "ts",
          "html",
          "css",
          "vue",
          "diff",
          "shell",
          "markdown",
          "yaml",
          "bash",
          "ini"
        ],
        "highlighter": "shiki",
        "langs": [
          "js",
          "jsx",
          "json",
          "ts",
          "tsx",
          "vue",
          "css",
          "html",
          "vue",
          "bash",
          "md",
          "mdc",
          "yaml",
          "json",
          "js",
          "ts",
          "html",
          "css",
          "vue",
          "diff",
          "shell",
          "markdown",
          "yaml",
          "bash",
          "ini"
        ]
      },
      "wsUrl": "",
      "documentDriven": false,
      "host": "",
      "trailingSlash": false,
      "search": "",
      "contentHead": true,
      "anchorLinks": {
        "depth": 4,
        "exclude": [
          1
        ]
      }
    },
    "studio": {
      "apiURL": "https://api.nuxt.studio",
      "iframeMessagingAllowedOrigins": ""
    }
  },
  "content": {
    "cacheVersion": 2,
    "cacheIntegrity": "42LCwcizp5",
    "transformers": [],
    "base": "",
    "api": {
      "baseURL": "/api/_content"
    },
    "watch": {
      "ws": {
        "port": {
          "port": 4000,
          "portRange": [
            4000,
            4040
          ]
        },
        "hostname": "localhost",
        "showURL": false
      }
    },
    "sources": {},
    "ignores": [],
    "locales": [],
    "defaultLocale": "",
    "highlight": {
      "theme": {
        "light": "material-theme-lighter",
        "default": "material-theme",
        "dark": "material-theme-palenight"
      },
      "preload": [
        "json",
        "js",
        "ts",
        "html",
        "css",
        "vue",
        "diff",
        "shell",
        "markdown",
        "yaml",
        "bash",
        "ini"
      ],
      "highlighter": "shiki",
      "langs": [
        "js",
        "jsx",
        "json",
        "ts",
        "tsx",
        "vue",
        "css",
        "html",
        "vue",
        "bash",
        "md",
        "mdc",
        "yaml",
        "json",
        "js",
        "ts",
        "html",
        "css",
        "vue",
        "diff",
        "shell",
        "markdown",
        "yaml",
        "bash",
        "ini"
      ]
    },
    "markdown": {
      "tags": {
        "p": "prose-p",
        "a": "prose-a",
        "blockquote": "prose-blockquote",
        "code-inline": "prose-code-inline",
        "code": "ProseCodeInline",
        "em": "prose-em",
        "h1": "prose-h1",
        "h2": "prose-h2",
        "h3": "prose-h3",
        "h4": "prose-h4",
        "h5": "prose-h5",
        "h6": "prose-h6",
        "hr": "prose-hr",
        "img": "prose-img",
        "ul": "prose-ul",
        "ol": "prose-ol",
        "li": "prose-li",
        "strong": "prose-strong",
        "table": "prose-table",
        "thead": "prose-thead",
        "tbody": "prose-tbody",
        "td": "prose-td",
        "th": "prose-th",
        "tr": "prose-tr"
      },
      "anchorLinks": {
        "depth": 4,
        "exclude": [
          1
        ]
      },
      "remarkPlugins": {},
      "rehypePlugins": {}
    },
    "yaml": {},
    "csv": {
      "delimeter": ",",
      "json": true
    },
    "navigation": {
      "fields": [
        "icon",
        "to",
        "target"
      ]
    },
    "contentHead": true,
    "documentDriven": false,
    "respectPathCase": false,
    "experimental": {
      "clientDB": false,
      "cacheContents": true,
      "stripQueryParameters": false,
      "advanceQuery": false,
      "search": ""
    }
  },
  "studio": {
    "publicToken": "",
    "project": "",
    "gitInfo": {
      "name": "KubeCamp",
      "owner": "CNCF-Lahore",
      "url": "https://github.com/CNCF-Lahore/KubeCamp"
    }
  },
  "nuxt-site-config": {
    "stack": [
      {
        "_priority": -20,
        "_context": "defaults",
        "defaultLocale": "en",
        "trailingSlash": false
      },
      {
        "_context": "system",
        "_priority": -15,
        "name": "KubeCamp",
        "env": "production"
      },
      {
        "_context": "package.json",
        "_priority": -10,
        "name": "nuxt-ui-pro-template-docs"
      }
    ],
    "version": "1.6.7",
    "debug": false
  },
  "nuxt-og-image": {
    "version": "2.2.4",
    "satoriOptions": {},
    "runtimeSatori": true,
    "runtimeBrowser": false,
    "defaults": {
      "provider": "satori",
      "component": "OgImageTemplateFallback",
      "width": 1200,
      "height": 630,
      "cache": true,
      "cacheTtl": 86400000
    },
    "runtimeCacheStorage": "default",
    "fonts": [
      {
        "name": "Inter",
        "weight": "400"
      },
      {
        "name": "Inter",
        "weight": "700"
      }
    ],
    "assetDirs": [
      "/workspace/KubeCamp/public",
      "/workspace/KubeCamp/node_modules/nuxt-og-image/dist/runtime/public-assets",
      "/workspace/KubeCamp/node_modules/nuxt-og-image/dist/runtime/public-assets-optional/inter-font",
      "/workspace/KubeCamp/node_modules/nuxt-og-image/dist/runtime/public-assets-optional/inter-font",
      "/workspace/KubeCamp/node_modules/nuxt-og-image/dist/runtime/public-assets-optional/resvg",
      "/workspace/KubeCamp/node_modules/nuxt-og-image/dist/runtime/public-assets-optional/yoga",
      "/workspace/KubeCamp/node_modules/nuxt-og-image/dist/runtime/public-assets-optional/svg2png"
    ]
  },
  "appConfigSchema": {
    "properties": {
      "id": "#appConfig",
      "properties": {
        "nuxtIcon": {
          "title": "Nuxt Icon",
          "description": "Configure Nuxt Icon module preferences.",
          "id": "#appConfig/nuxtIcon",
          "properties": {
            "size": {
              "title": "Icon Size",
              "description": "Set the default icon size. Set to false to disable the sizing of icon in style.",
              "tags": [
                "@studioIcon material-symbols:format-size-rounded"
              ],
              "tsType": "string | false",
              "id": "#appConfig/nuxtIcon/size",
              "default": "1em",
              "type": "string"
            },
            "class": {
              "title": "CSS Class",
              "description": "Set the default CSS class.",
              "tags": [
                "@studioIcon material-symbols:css"
              ],
              "id": "#appConfig/nuxtIcon/class",
              "default": "",
              "type": "string"
            },
            "aliases": {
              "title": "Icon aliases",
              "description": "Define Icon aliases to update them easily without code changes.",
              "tags": [
                "@studioIcon material-symbols:star-rounded"
              ],
              "tsType": "{ [alias: string]: string }",
              "id": "#appConfig/nuxtIcon/aliases",
              "default": {},
              "type": "object"
            },
            "iconifyApiOptions": {
              "title": "Iconify API Options",
              "description": "Define preferences for Iconify API fetch.",
              "tags": [
                "@studioIcon material-symbols:tv-options-input-settings"
              ],
              "id": "#appConfig/nuxtIcon/iconifyApiOptions",
              "properties": {
                "url": {
                  "title": "Iconify API URL",
                  "description": "Define a custom Iconify API URL. Useful if you want to use a self-hosted Iconify API. Learn more: https://iconify.design/docs/api.",
                  "tags": [
                    "@studioIcon material-symbols:api"
                  ],
                  "id": "#appConfig/nuxtIcon/iconifyApiOptions/url",
                  "default": "https://api.iconify.design",
                  "type": "string"
                },
                "publicApiFallback": {
                  "title": "Public Iconify API fallback",
                  "description": "Define if the public Iconify API should be used as fallback.",
                  "tags": [
                    "@studioIcon material-symbols:public"
                  ],
                  "id": "#appConfig/nuxtIcon/iconifyApiOptions/publicApiFallback",
                  "default": false,
                  "type": "boolean"
                }
              },
              "type": "object",
              "default": {
                "url": "https://api.iconify.design",
                "publicApiFallback": false
              }
            }
          },
          "type": "object",
          "default": {
            "size": "1em",
            "class": "",
            "aliases": {},
            "iconifyApiOptions": {
              "url": "https://api.iconify.design",
              "publicApiFallback": false
            }
          }
        },
        "ui": {
          "title": "UI",
          "description": "UI Customization.",
          "tags": [
            "@studioIcon i-mdi-palette-outline"
          ],
          "id": "#appConfig/ui",
          "properties": {
            "icons": {
              "title": "Icons",
              "description": "Manage icons used in UI Pro.",
              "tags": [
                "@studioIcon i-mdi-application-settings-outline"
              ],
              "id": "#appConfig/ui/icons",
              "properties": {
                "search": {
                  "type": "string",
                  "title": "Search Bar",
                  "description": "Icon to display in the search bar.",
                  "default": "i-heroicons-magnifying-glass-20-solid",
                  "tags": [
                    "@studioInput icon",
                    "@studioIcon i-mdi-magnify"
                  ],
                  "id": "#appConfig/ui/icons/search"
                },
                "dark": {
                  "type": "string",
                  "title": "Dark mode",
                  "description": "Icon of color mode button for dark mode.",
                  "default": "i-heroicons-moon-20-solid",
                  "tags": [
                    "@studioInput icon",
                    "@studioIcon i-mdi-moon-waning-crescent"
                  ],
                  "id": "#appConfig/ui/icons/dark"
                },
                "light": {
                  "type": "string",
                  "title": "Light mode",
                  "description": "Icon of color mode button for light mode.",
                  "default": "i-heroicons-sun-20-solid",
                  "tags": [
                    "@studioInput icon",
                    "@studioIcon i-mdi-white-balance-sunny"
                  ],
                  "id": "#appConfig/ui/icons/light"
                },
                "external": {
                  "type": "string",
                  "title": "External Link",
                  "description": "Icon for external link.",
                  "default": "i-heroicons-arrow-up-right-20-solid",
                  "tags": [
                    "@studioInput icon",
                    "@studioIcon i-mdi-arrow-top-right"
                  ],
                  "id": "#appConfig/ui/icons/external"
                },
                "chevron": {
                  "type": "string",
                  "title": "Chevron",
                  "description": "Icon for chevron.",
                  "default": "i-heroicons-chevron-down-20-solid",
                  "tags": [
                    "@studioInput icon",
                    "@studioIcon i-mdi-chevron-down"
                  ],
                  "id": "#appConfig/ui/icons/chevron"
                },
                "hash": {
                  "type": "string",
                  "title": "Hash",
                  "description": "Icon for hash anchors.",
                  "default": "i-heroicons-hashtag-20-solid",
                  "tags": [
                    "@studioInput icon",
                    "@studioIcon i-ph-hash"
                  ],
                  "id": "#appConfig/ui/icons/hash"
                }
              },
              "type": "object",
              "default": {
                "search": "i-heroicons-magnifying-glass-20-solid",
                "dark": "i-heroicons-moon-20-solid",
                "light": "i-heroicons-sun-20-solid",
                "external": "i-heroicons-arrow-up-right-20-solid",
                "chevron": "i-heroicons-chevron-down-20-solid",
                "hash": "i-heroicons-hashtag-20-solid"
              }
            },
            "primary": {
              "type": "string",
              "title": "Primary",
              "description": "Primary color of your UI.",
              "default": "green",
              "required": [
                "sky",
                "mint",
                "rose",
                "amber",
                "violet",
                "emerald",
                "fuchsia",
                "indigo",
                "lime",
                "orange",
                "pink",
                "purple",
                "red",
                "teal",
                "yellow",
                "green",
                "blue",
                "cyan",
                "gray",
                "white",
                "black"
              ],
              "tags": [
                "@studioInput string",
                "@studioIcon i-mdi-palette-outline"
              ],
              "id": "#appConfig/ui/primary"
            },
            "gray": {
              "type": "string",
              "title": "Gray",
              "description": "Gray color of your UI.",
              "default": "slate",
              "required": [
                "slate",
                "cool",
                "zinc",
                "neutral",
                "stone"
              ],
              "tags": [
                "@studioInput string",
                "@studioIcon i-mdi-palette-outline"
              ],
              "id": "#appConfig/ui/gray"
            }
          },
          "type": "object",
          "default": {
            "icons": {
              "search": "i-heroicons-magnifying-glass-20-solid",
              "dark": "i-heroicons-moon-20-solid",
              "light": "i-heroicons-sun-20-solid",
              "external": "i-heroicons-arrow-up-right-20-solid",
              "chevron": "i-heroicons-chevron-down-20-solid",
              "hash": "i-heroicons-hashtag-20-solid"
            },
            "primary": "green",
            "gray": "slate"
          }
        },
        "seo": {
          "title": "SEO",
          "description": "SEO configuration.",
          "tags": [
            "@studioIcon i-ph-app-window"
          ],
          "id": "#appConfig/seo",
          "properties": {
            "siteName": {
              "type": "string",
              "title": "Site Name",
              "description": "Name used in ogSiteName and used as second part of your page title (My page title - Nuxt UI Pro).",
              "default": [],
              "tags": [
                "@studioInput string",
                "@studioIcon i-mdi-web"
              ],
              "id": "#appConfig/seo/siteName"
            }
          },
          "type": "object",
          "default": {
            "siteName": []
          }
        },
        "header": {
          "title": "Header",
          "description": "Header configuration.",
          "tags": [
            "@studioIcon i-mdi-page-layout-header"
          ],
          "id": "#appConfig/header",
          "properties": {
            "logo": {
              "title": "Logo",
              "description": "Header logo configuration.",
              "tags": [
                "@studioIcon i-mdi-image-filter-center-focus-strong-outline"
              ],
              "id": "#appConfig/header/logo",
              "properties": {
                "light": {
                  "type": "string",
                  "title": "Light Mode Logo",
                  "description": "Pick an image from your gallery.",
                  "default": "",
                  "tags": [
                    "@studioInput media",
                    "@studioIcon i-mdi-white-balance-sunny"
                  ],
                  "id": "#appConfig/header/logo/light"
                },
                "dark": {
                  "type": "string",
                  "title": "Dark Mode Logo",
                  "description": "Pick an image from your gallery.",
                  "default": "",
                  "tags": [
                    "@studioInput media",
                    "@studioIcon i-mdi-moon-waning-crescent"
                  ],
                  "id": "#appConfig/header/logo/dark"
                },
                "alt": {
                  "type": "string",
                  "title": "Alt",
                  "description": "Alt to display for accessibility.",
                  "default": "",
                  "tags": [
                    "@studioInput string",
                    "@studioIcon i-mdi-alphabet-latin"
                  ],
                  "id": "#appConfig/header/logo/alt"
                }
              },
              "type": "object",
              "default": {
                "light": "",
                "dark": "",
                "alt": ""
              }
            },
            "search": {
              "type": "boolean",
              "title": "Search Bar",
              "description": "Hide or display the search bar.",
              "default": true,
              "tags": [
                "@studioInput boolean",
                "@studioIcon i-mdi-magnify"
              ],
              "id": "#appConfig/header/search"
            },
            "colorMode": {
              "type": "boolean",
              "title": "Color Mode",
              "description": "Hide or display the color mode button in your header.",
              "default": true,
              "tags": [
                "@studioInput boolean",
                "@studioIcon i-mdi-moon-waning-crescent"
              ],
              "id": "#appConfig/header/colorMode"
            },
            "links": {
              "type": "array",
              "title": "Links",
              "description": "Array of link object displayed in header.",
              "default": [],
              "tags": [
                "@studioInput array",
                "@studioIcon i-mdi-link-variant"
              ],
              "id": "#appConfig/header/links",
              "items": {
                "type": "any"
              }
            }
          },
          "type": "object",
          "default": {
            "logo": {
              "light": "",
              "dark": "",
              "alt": ""
            },
            "search": true,
            "colorMode": true,
            "links": []
          }
        },
        "footer": {
          "title": "Footer",
          "description": "Footer configuration.",
          "tags": [
            "@studioIcon i-mdi-page-layout-footer"
          ],
          "id": "#appConfig/footer",
          "properties": {
            "credits": {
              "type": "string",
              "title": "Footer credits section",
              "description": "Text to display as credits in the footer.",
              "default": "",
              "tags": [
                "@studioInput string",
                "@studioIcon i-mdi-circle-edit-outline"
              ],
              "id": "#appConfig/footer/credits"
            },
            "colorMode": {
              "type": "boolean",
              "title": "Color Mode",
              "description": "Hide or display the color mode button in the footer.",
              "default": false,
              "tags": [
                "@studioInput boolean",
                "@studioIcon i-mdi-moon-waning-crescent"
              ],
              "id": "#appConfig/footer/colorMode"
            },
            "links": {
              "type": "array",
              "title": "Links",
              "description": "Array of link object displayed in footer.",
              "default": [],
              "tags": [
                "@studioInput array",
                "@studioIcon i-mdi-link-variant"
              ],
              "id": "#appConfig/footer/links",
              "items": {
                "type": "any"
              }
            }
          },
          "type": "object",
          "default": {
            "credits": "",
            "colorMode": false,
            "links": []
          }
        },
        "toc": {
          "title": "Table of contents",
          "description": "TOC configuration.",
          "tags": [
            "@studioIcon i-mdi-table-of-contents"
          ],
          "id": "#appConfig/toc",
          "properties": {
            "title": {
              "type": "string",
              "title": "Title",
              "description": "Text to display as title of the main toc.",
              "default": "",
              "tags": [
                "@studioInput string",
                "@studioIcon i-mdi-format-title"
              ],
              "id": "#appConfig/toc/title"
            },
            "bottom": {
              "title": "Bottom",
              "description": "Bottom TOC configuration.",
              "tags": [
                "@studioIcon i-mdi-table-of-contents"
              ],
              "id": "#appConfig/toc/bottom",
              "properties": {
                "title": {
                  "type": "string",
                  "title": "Title",
                  "description": "Text to display as title of the bottom toc.",
                  "default": "",
                  "tags": [
                    "@studioInput string",
                    "@studioIcon i-mdi-format-title"
                  ],
                  "id": "#appConfig/toc/bottom/title"
                },
                "edit": {
                  "type": "string",
                  "title": "Edit Page Link",
                  "description": "URL of your repository content folder.",
                  "default": "",
                  "tags": [
                    "@studioInput string",
                    "@studioIcon i-ph-note-pencil"
                  ],
                  "id": "#appConfig/toc/bottom/edit"
                },
                "links": {
                  "type": "array",
                  "title": "Links",
                  "description": "Array of link object displayed in bottom toc.",
                  "default": [],
                  "tags": [
                    "@studioInput array",
                    "@studioIcon i-mdi-link-variant"
                  ],
                  "id": "#appConfig/toc/bottom/links",
                  "items": {
                    "type": "any"
                  }
                }
              },
              "type": "object",
              "default": {
                "title": "",
                "edit": "",
                "links": []
              }
            }
          },
          "type": "object",
          "default": {
            "title": "",
            "bottom": {
              "title": "",
              "edit": "",
              "links": []
            }
          }
        }
      },
      "type": "object",
      "default": {
        "nuxtIcon": {
          "size": "1em",
          "class": "",
          "aliases": {},
          "iconifyApiOptions": {
            "url": "https://api.iconify.design",
            "publicApiFallback": false
          }
        },
        "ui": {
          "icons": {
            "search": "i-heroicons-magnifying-glass-20-solid",
            "dark": "i-heroicons-moon-20-solid",
            "light": "i-heroicons-sun-20-solid",
            "external": "i-heroicons-arrow-up-right-20-solid",
            "chevron": "i-heroicons-chevron-down-20-solid",
            "hash": "i-heroicons-hashtag-20-solid"
          },
          "primary": "green",
          "gray": "slate"
        },
        "seo": {
          "siteName": []
        },
        "header": {
          "logo": {
            "light": "",
            "dark": "",
            "alt": ""
          },
          "search": true,
          "colorMode": true,
          "links": []
        },
        "footer": {
          "credits": "",
          "colorMode": false,
          "links": []
        },
        "toc": {
          "title": "",
          "bottom": {
            "title": "",
            "edit": "",
            "links": []
          }
        }
      }
    },
    "default": {
      "nuxtIcon": {
        "size": "1em",
        "class": "",
        "aliases": {},
        "iconifyApiOptions": {
          "url": "https://api.iconify.design",
          "publicApiFallback": false
        }
      },
      "ui": {
        "icons": {
          "search": "i-heroicons-magnifying-glass-20-solid",
          "dark": "i-heroicons-moon-20-solid",
          "light": "i-heroicons-sun-20-solid",
          "external": "i-heroicons-arrow-up-right-20-solid",
          "chevron": "i-heroicons-chevron-down-20-solid",
          "hash": "i-heroicons-hashtag-20-solid"
        },
        "primary": "green",
        "gray": "slate"
      },
      "seo": {
        "siteName": []
      },
      "header": {
        "logo": {
          "light": "",
          "dark": "",
          "alt": ""
        },
        "search": true,
        "colorMode": true,
        "links": []
      },
      "footer": {
        "credits": "",
        "colorMode": false,
        "links": []
      },
      "toc": {
        "title": "",
        "bottom": {
          "title": "",
          "edit": "",
          "links": []
        }
      }
    }
  },
  "contentSchema": {}
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
const _sharedAppConfig = _deepFreeze(klona(appConfig));
function useAppConfig(event) {
  if (!event) {
    return _sharedAppConfig;
  }
  if (event.context.nitro.appConfig) {
    return event.context.nitro.appConfig;
  }
  const appConfig$1 = klona(appConfig);
  event.context.nitro.appConfig = appConfig$1;
  return appConfig$1;
}
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"/workspace/KubeCamp/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('internal:nuxt:prerender', unstorage_47drivers_47memory({"driver":"memory"}));
storage.mount('internal:nuxt:prerender:island', unstorage_47drivers_47lru_45cache({"driver":"lruCache","max":1000}));
storage.mount('internal:nuxt:prerender:payload', unstorage_47drivers_47lru_45cache({"driver":"lruCache","max":1000}));
storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"/workspace/KubeCamp/.data/kv"}));
storage.mount('content:source:content', unstorage_47drivers_47fs({"name":"content:source:content","driver":"fs","base":"/workspace/KubeCamp/content","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache:content', unstorage_47drivers_47fs({"driver":"fs","base":"/workspace/KubeCamp/.nuxt/content-cache","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/workspace/KubeCamp","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/workspace/KubeCamp/server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/workspace/KubeCamp/.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/workspace/KubeCamp/.nuxt/cache","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
const unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
const reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
const escaped = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
const objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function devalue(value) {
  const counts = /* @__PURE__ */ new Map();
  let logNum = 0;
  function log(message) {
    if (logNum < 100) {
      console.warn(message);
      logNum += 1;
    }
  }
  function walk(thing) {
    if (typeof thing === "function") {
      log(`Cannot stringify a function ${thing.name}`);
      return;
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!isPrimitive(thing)) {
      const type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach(walk);
          break;
        case "Set":
        case "Map":
          Array.from(thing).forEach(walk);
          break;
        default:
          const proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== objectProtoOwnPropertyNames) {
            if (typeof thing.toJSON !== "function") {
              log(`Cannot stringify arbitrary non-POJOs ${thing.constructor.name}`);
            }
          } else if (Object.getOwnPropertySymbols(thing).length > 0) {
            log(`Cannot stringify POJOs with symbolic keys ${Object.getOwnPropertySymbols(thing).map((symbol) => symbol.toString())}`);
          } else {
            Object.keys(thing).forEach((key) => walk(thing[key]));
          }
      }
    }
  }
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a, b) => b[1] - a[1]).forEach((entry, i) => {
    names.set(entry[0], getName(i));
  });
  function stringify(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (isPrimitive(thing)) {
      return stringifyPrimitive(thing);
    }
    const type = getType(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify(thing.valueOf())})`;
      case "RegExp":
        return thing.toString();
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "Array":
        const members = thing.map((v, i) => i in thing ? stringify(v) : "");
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify).join(",")}])`;
      default:
        if (thing.toJSON) {
          let json = thing.toJSON();
          if (getType(json) === "String") {
            try {
              json = JSON.parse(json);
            } catch (e) {
            }
          }
          return stringify(json);
        }
        if (Object.getPrototypeOf(thing) === null) {
          if (Object.keys(thing).length === 0) {
            return "Object.create(null)";
          }
          return `Object.create(null,{${Object.keys(thing).map((key) => `${safeKey(key)}:{writable:true,enumerable:true,value:${stringify(thing[key])}}`).join(",")}})`;
        }
        return `{${Object.keys(thing).map((key) => `${safeKey(key)}:${stringify(thing[key])}`).join(",")}}`;
    }
  }
  const str = stringify(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (isPrimitive(thing)) {
        values.push(stringifyPrimitive(thing));
        return;
      }
      const type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v, i) => {
            statements.push(`${name}[${i}]=${stringify(v)}`);
          });
          break;
        case "Set":
          values.push("new Set");
          statements.push(`${name}.${Array.from(thing).map((v) => `add(${stringify(v)})`).join(".")}`);
          break;
        case "Map":
          values.push("new Map");
          statements.push(`${name}.${Array.from(thing).map(([k, v]) => `set(${stringify(k)}, ${stringify(v)})`).join(".")}`);
          break;
        default:
          values.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
          Object.keys(thing).forEach((key) => {
            statements.push(`${name}${safeProp(key)}=${stringify(thing[key])}`);
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(";")}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
function getName(num) {
  let name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
function isPrimitive(thing) {
  return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
  if (typeof thing === "string") {
    return stringifyString(thing);
  }
  if (thing === void 0) {
    return "void 0";
  }
  if (thing === 0 && 1 / thing < 0) {
    return "-0";
  }
  const str = String(thing);
  if (typeof thing === "number") {
    return str.replace(/^(-)?0\./, "$1.");
  }
  return str;
}
function getType(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
  return escaped[c] || c;
}
function escapeUnsafeChars(str) {
  return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? `.${key}` : `[${escapeUnsafeChars(JSON.stringify(key))}]`;
}
function stringifyString(str) {
  let result = '"';
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    const code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i + 1);
      if (code <= 56319 && (next >= 56320 && next <= 57343)) {
        result += char + str[++i];
      } else {
        result += `\\u${code.toString(16).toUpperCase()}`;
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}

function createSiteConfigStack(options) {
  const debug = options?.debug || false;
  const stack = [];
  function push(input) {
    if (!input || typeof input !== "object" || Object.keys(input).length === 0)
      return;
    if (!input._context && debug) {
      let lastFunctionName = new Error("tmp").stack?.split("\n")[2].split(" ")[5];
      if (lastFunctionName?.includes("/"))
        lastFunctionName = "anonymous";
      input._context = lastFunctionName;
    }
    const entry = {};
    for (const k in input) {
      const val = input[k];
      if (typeof val !== "undefined" && val !== "")
        entry[k] = val;
    }
    if (Object.keys(entry).filter((k) => !k.startsWith("_")).length > 0)
      stack.push(entry);
  }
  function get(options2) {
    const siteConfig = {};
    if (options2?.debug)
      siteConfig._context = {};
    for (const o in stack.sort((a, b) => (a._priority || 0) - (b._priority || 0))) {
      for (const k in stack[o]) {
        const key = k;
        const val = stack[o][k];
        if (!k.startsWith("_")) {
          siteConfig[k] = val;
          if (options2?.debug)
            siteConfig._context[key] = stack[o]._context?.[key] || stack[o]._context || "anonymous";
        }
      }
    }
    return normalizeSiteConfig(siteConfig);
  }
  return {
    stack,
    push,
    get
  };
}

function normalizeSiteConfig(config) {
  if (typeof config.indexable !== "undefined")
    config.indexable = String(config.indexable) !== "false";
  if (typeof config.trailingSlash !== "undefined")
    config.trailingSlash = String(config.trailingSlash) !== "false";
  if (config.url && !hasProtocol(config.url, { acceptRelative: true, strict: false }))
    config.url = withHttps(config.url);
  const keys = Object.keys(config).sort((a, b) => a.localeCompare(b));
  const newConfig = {};
  for (const k of keys)
    newConfig[k] = config[k];
  return newConfig;
}

const useProcessorPlugins = async (processor, plugins = {}) => {
  const toUse = Object.entries(plugins).filter((p) => p[1] !== false);
  for (const plugin of toUse) {
    const instance = plugin[1].instance || await import(
      /* @vite-ignore */
      plugin[0]
    ).then((m) => m.default || m);
    processor.use(instance, plugin[1].options);
  }
};

const unsafeLinkPrefix = [
  "javascript:",
  "data:text/html",
  "vbscript:",
  "data:text/javascript",
  "data:text/vbscript",
  "data:text/css",
  "data:text/plain",
  "data:text/xml"
];
const validateProp = (attribute, value) => {
  if (attribute.startsWith("on")) {
    return false;
  }
  if (attribute === "href" || attribute === "src") {
    return !unsafeLinkPrefix.some((prefix) => value.toLowerCase().startsWith(prefix));
  }
  return true;
};
const validateProps = (type, props) => {
  if (!props) {
    return {};
  }
  props = Object.fromEntries(
    Object.entries(props).filter(([name, value]) => {
      const isValid = validateProp(name, value);
      if (!isValid) {
        console.warn(`[@nuxtjs/mdc] removing unsafe attribute: ${name}="${value}"`);
      }
      return isValid;
    })
  );
  if (type === "pre") {
    if (typeof props.highlights === "string") {
      props.highlights = props.highlights.split(" ").map((i) => parseInt(i));
    }
  }
  return props;
};

function compileHast() {
  const slugs = new Slugger();
  function compileToJSON(node, parent) {
    if (node.type === "root") {
      return {
        type: "root",
        children: node.children.map((child) => compileToJSON(child, node)).filter(Boolean)
      };
    }
    if (node.type === "element") {
      if (node.tagName === "p" && node.children.every((child) => child.type === "text" && /^\s*$/.test(child.value))) {
        return null;
      }
      if (node.tagName === "li") {
        let hasPreviousParagraph = false;
        node.children = node.children?.flatMap((child) => {
          if (child.type === "element" && child.tagName === "p") {
            if (hasPreviousParagraph) {
              child.children.unshift({
                type: "element",
                tagName: "br",
                properties: {},
                children: []
              });
            }
            hasPreviousParagraph = true;
            return child.children;
          }
          return child;
        });
      }
      if (node.tagName?.match(/^h\d$/)) {
        node.properties = node.properties || {};
        node.properties.id = String(node.properties?.id || slugs.slug(toString(node))).replace(/-+/g, "-").replace(/^-|-$/g, "").replace(/^(\d)/, "_$1");
      }
      if (node.tagName === "component-slot") {
        node.tagName = "template";
      }
      const children = (node.tagName === "template" && node.content?.children.length ? node.content.children : node.children).map((child) => compileToJSON(child, node)).filter(Boolean);
      return {
        type: "element",
        tag: node.tagName,
        props: validateProps(node.tagName, node.properties),
        children
      };
    }
    if (node.type === "text") {
      if (node.value !== "\n" || parent?.properties?.emptyLinePlaceholder) {
        return {
          type: "text",
          value: node.value
        };
      }
    }
    return null;
  }
  this.Compiler = (tree) => {
    const body = compileToJSON(tree);
    let excerpt = void 0;
    const excerptIndex = tree.children.findIndex((node) => node.type === "comment" && node.value?.trim() === "more");
    if (excerptIndex !== -1) {
      excerpt = compileToJSON({
        type: "root",
        children: tree.children.slice(0, excerptIndex)
      });
      if (excerpt.children.find((node) => node.type === "element" && node.tag === "pre")) {
        const lastChild = body.children[body.children.length - 1];
        if (lastChild.type === "element" && lastChild.tag === "style") {
          excerpt.children.push(lastChild);
        }
      }
    }
    return {
      body,
      excerpt
    };
  };
}

function emphasis(state, node) {
  const result = {
    type: "element",
    tagName: "em",
    properties: node.attributes || {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function parseThematicBlock(lang) {
  if (!lang?.trim()) {
    return {
      language: void 0,
      highlights: void 0,
      filename: void 0,
      meta: void 0
    };
  }
  const languageMatches = lang.replace(/[{|[](.+)/, "").match(/^[^ \t]+(?=[ \t]|$)/);
  const highlightTokensMatches = lang.match(/{([^}]*)}/);
  const filenameMatches = lang.match(/\[((\\]|[^\]])*)\]/);
  const meta = lang.replace(languageMatches?.[0] ?? "", "").replace(highlightTokensMatches?.[0] ?? "", "").replace(filenameMatches?.[0] ?? "", "").trim();
  return {
    language: languageMatches?.[0] || void 0,
    highlights: parseHighlightedLines(highlightTokensMatches?.[1] || void 0),
    // https://github.com/nuxt/content/pull/2169
    filename: filenameMatches?.[1].replace(/\\]/g, "]") || void 0,
    meta
  };
}
function parseHighlightedLines(lines) {
  const lineArray = String(lines || "").split(",").filter(Boolean).flatMap((line) => {
    const [start, end] = line.trim().split("-").map((a) => Number(a.trim()));
    return Array.from({ length: (end || start) - start + 1 }).map((_, i) => start + i);
  });
  return lineArray.length ? lineArray : void 0;
}
const TAG_NAME_REGEXP = /^<\/?([A-Za-z0-9-_]+) ?[^>]*>/;
function getTagName(value) {
  const result = String(value).match(TAG_NAME_REGEXP);
  return result && result[1];
}

const code = (state, node) => {
  const lang = (node.lang || "") + " " + (node.meta || "");
  const { language, highlights, filename, meta } = parseThematicBlock(lang);
  const value = node.value ? detab(node.value + "\n") : "";
  let result = {
    type: "element",
    tagName: "code",
    properties: { __ignoreMap: "" },
    children: [{ type: "text", value }]
  };
  if (meta) {
    result.data = {
      // @ts-ignore
      meta
    };
  }
  state.patch(node, result);
  result = state.applyData(node, result);
  const properties = {
    language,
    filename,
    highlights,
    meta,
    code: value
  };
  if (language) {
    properties.className = ["language-" + language];
  }
  result = { type: "element", tagName: "pre", properties, children: [result] };
  state.patch(node, result);
  return result;
};

function html(state, node) {
  const tagName = getTagName(node.value);
  if (tagName && /[A-Z]/.test(tagName)) {
    node.value = node.value.replace(tagName, kebabCase(tagName));
  }
  if (state.dangerous || state.options?.allowDangerousHtml) {
    const result = { type: "raw", value: node.value };
    state.patch(node, result);
    return state.applyData(node, result);
  }
  return void 0;
}

function link$1(state, node) {
  const properties = {
    ...node.attributes || {},
    href: normalizeUri(node.url)
  };
  if (node.title !== null && node.title !== void 0) {
    properties.title = node.title;
  }
  const result = {
    type: "element",
    tagName: "a",
    properties,
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function list(state, node) {
  const properties = {};
  const results = state.all(node);
  let index = -1;
  if (typeof node.start === "number" && node.start !== 1) {
    properties.start = node.start;
  }
  while (++index < results.length) {
    const child = results[index];
    if (child.type === "element" && child.tagName === "li" && child.properties && Array.isArray(child.properties.className) && child.properties.className.includes("task-list-item")) {
      properties.className = ["contains-task-list"];
      break;
    }
  }
  if ((node.children || []).some((child) => typeof child.checked === "boolean")) {
    properties.className = ["contains-task-list"];
  }
  const result = {
    type: "element",
    tagName: node.ordered ? "ol" : "ul",
    properties,
    children: state.wrap(results, true)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

const htmlTags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];

function paragraph(state, node) {
  if (node.children && node.children[0] && node.children[0].type === "html") {
    const tagName = kebabCase(getTagName(node.children[0].value) || "div");
    if (!htmlTags.includes(tagName)) {
      return state.all(node);
    }
  }
  const result = {
    type: "element",
    tagName: "p",
    properties: {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function image(state, node) {
  const properties = { ...node.attributes, src: normalizeUri(node.url) };
  if (node.alt !== null && node.alt !== void 0) {
    properties.alt = node.alt;
  }
  if (node.title !== null && node.title !== void 0) {
    properties.title = node.title;
  }
  const result = { type: "element", tagName: "img", properties, children: [] };
  state.patch(node, result);
  return state.applyData(node, result);
}

function strong(state, node) {
  const result = {
    type: "element",
    tagName: "strong",
    properties: node.attributes || {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function inlineCode(state, node) {
  const language = node.attributes?.language || node.attributes?.lang;
  const text = { type: "text", value: node.value.replace(/\r?\n|\r/g, " ") };
  state.patch(node, text);
  const result = {
    type: "element",
    tagName: "code",
    properties: node.attributes || {},
    children: [text]
  };
  const classes = (result.properties.class || "").split(" ");
  delete result.properties.class;
  if (language) {
    result.properties.language = language;
    delete result.properties.lang;
    classes.push("language-" + language);
  }
  result.properties.className = classes.join(" ");
  state.patch(node, result);
  return state.applyData(node, result);
}

function containerComponent(state, node) {
  const result = {
    type: "element",
    tagName: node.name,
    properties: {
      ...node.attributes,
      ...node.data?.hProperties
    },
    children: state.all(node)
  };
  state.patch(node, result);
  result.attributes = node.attributes;
  result.fmAttributes = node.fmAttributes;
  return result;
}

const handlers$1 = {
  emphasis,
  code,
  link: link$1,
  paragraph,
  html,
  list,
  image,
  strong,
  inlineCode,
  containerComponent
};

const defaults = {
  remark: {
    plugins: {
      "remark-mdc": {
        instance: remarkMDC
      },
      "remark-emoji": {
        instance: remarkEmoji
      },
      "remark-gfm": {
        instance: remarkGFM
      }
    }
  },
  rehype: {
    options: {
      // @ts-ignore
      handlers: handlers$1,
      allowDangerousHtml: true
    },
    plugins: {
      "rehype-external-links": {
        instance: rehypeExternalLinks
      },
      "rehype-sort-attribute-values": {
        instance: rehypeSortAttributeValues
      },
      "rehype-sort-attributes": {
        instance: rehypeSortAttributes
      },
      "rehype-raw": {
        instance: rehypeRaw,
        options: {
          passThrough: ["element"]
        }
      }
    }
  },
  highlight: false,
  toc: {
    searchDepth: 2,
    depth: 2
  }
};

function flattenNodeText(node) {
  if (node.type === "text") {
    return node.value || "";
  } else {
    return (node.children || []).reduce((text, child) => {
      return text.concat(flattenNodeText(child));
    }, "");
  }
}
function flattenNode(node, maxDepth = 2, _depth = 0) {
  if (!Array.isArray(node.children) || _depth === maxDepth) {
    return [node];
  }
  return [
    node,
    ...node.children.reduce((acc, child) => acc.concat(flattenNode(child, maxDepth, _depth + 1)), [])
  ];
}

const TOC_TAGS = ["h2", "h3", "h4", "h5", "h6"];
const TOC_TAGS_DEPTH = TOC_TAGS.reduce((tags, tag) => {
  tags[tag] = Number(tag.charAt(tag.length - 1));
  return tags;
}, {});
const getHeaderDepth = (node) => TOC_TAGS_DEPTH[node.tag];
const getTocTags = (depth) => {
  if (depth < 1 || depth > 5) {
    console.log(`\`toc.depth\` is set to ${depth}. It should be a number between 1 and 5. `);
    depth = 1;
  }
  return TOC_TAGS.slice(0, depth);
};
function nestHeaders(headers) {
  if (headers.length <= 1) {
    return headers;
  }
  const toc = [];
  let parent;
  headers.forEach((header) => {
    if (!parent || header.depth <= parent.depth) {
      header.children = [];
      parent = header;
      toc.push(header);
    } else {
      parent.children.push(header);
    }
  });
  toc.forEach((header) => {
    if (header.children?.length) {
      header.children = nestHeaders(header.children);
    } else {
      delete header.children;
    }
  });
  return toc;
}
function generateFlatToc(body, options) {
  const { searchDepth, depth, title = "" } = options;
  const tags = getTocTags(depth);
  const headers = flattenNode(body, searchDepth).filter((node) => tags.includes(node.tag || ""));
  const links = headers.map((node) => ({
    id: node.props?.id,
    depth: getHeaderDepth(node),
    text: flattenNodeText(node)
  }));
  return {
    title,
    searchDepth,
    depth,
    links
  };
}
function generateToc(body, options) {
  const toc = generateFlatToc(body, options);
  toc.links = nestHeaders(toc.links);
  return toc;
}

function isTag(vnode, tag) {
  if (vnode.type === tag) {
    return true;
  }
  if (typeof vnode.type === "object" && vnode.type.tag === tag) {
    return true;
  }
  if (vnode.tag === tag) {
    return true;
  }
  return false;
}
function isText(vnode) {
  return isTag(vnode, "text") || isTag(vnode, Symbol.for("v-txt"));
}
function nodeChildren(node) {
  if (Array.isArray(node.children) || typeof node.children === "string") {
    return node.children;
  }
  if (typeof node.children?.default === "function") {
    return node.children.default();
  }
  return [];
}
function nodeTextContent(node) {
  if (!node) {
    return "";
  }
  if (Array.isArray(node)) {
    return node.map(nodeTextContent).join("");
  }
  if (isText(node)) {
    return node.children || node.value || "";
  }
  const children = nodeChildren(node);
  if (Array.isArray(children)) {
    return children.map(nodeTextContent).filter(Boolean).join("");
  }
  return "";
}

let moduleOptions;
let generatedMdcConfigs;
const parseMarkdown = async (md, inlineOptions = {}) => {
  if (!moduleOptions) {
    moduleOptions = await import(
      '../build/mdc-imports.mjs'
      /* @vite-ignore */
    ).catch(() => ({}));
  }
  if (!generatedMdcConfigs) {
    generatedMdcConfigs = await Promise.resolve().then(function () { return mdcConfigs; }).then((r) => r.getMdcConfigs()).catch(() => []);
  }
  const mdcConfigs$1 = [
    ...generatedMdcConfigs || [],
    ...inlineOptions.configs || []
  ];
  if (inlineOptions.highlight != null && inlineOptions.highlight != false && inlineOptions.highlight.highlighter !== void 0 && typeof inlineOptions.highlight.highlighter !== "function") {
    inlineOptions = {
      ...inlineOptions,
      highlight: {
        ...inlineOptions.highlight
      }
    };
    delete inlineOptions.highlight.highlighter;
  }
  const options = defu$1(inlineOptions, {
    remark: { plugins: moduleOptions?.remarkPlugins },
    rehype: { plugins: moduleOptions?.rehypePlugins },
    highlight: moduleOptions?.highlight
  }, defaults);
  if (options.rehype?.plugins?.highlight) {
    options.rehype.plugins.highlight.options = options.highlight || {};
  }
  let processor = unified();
  for (const config of mdcConfigs$1) {
    processor = await config.unified?.pre?.(processor) || processor;
  }
  processor.use(remarkParse);
  for (const config of mdcConfigs$1) {
    processor = await config.unified?.remark?.(processor) || processor;
  }
  await useProcessorPlugins(processor, options.remark?.plugins);
  processor.use(remark2rehype, options.rehype?.options);
  for (const config of mdcConfigs$1) {
    processor = await config.unified?.rehype?.(processor) || processor;
  }
  await useProcessorPlugins(processor, options.rehype?.plugins);
  processor.use(compileHast);
  for (const config of mdcConfigs$1) {
    processor = await config.unified?.post?.(processor) || processor;
  }
  const { content, data: frontmatter } = await parseFrontMatter(md);
  const processedFile = await processor.process({ value: content, data: frontmatter });
  const result = processedFile.result;
  const data = Object.assign(
    contentHeading(result.body),
    frontmatter,
    processedFile?.data || {}
  );
  let toc;
  if (data.toc !== false) {
    const tocOption = defu$1(data.toc || {}, options.toc);
    toc = generateToc(result.body, tocOption);
  }
  return {
    data,
    body: result.body,
    excerpt: result.excerpt,
    toc
  };
};
function contentHeading(body) {
  let title = "";
  let description = "";
  const children = body.children.filter((node) => node.type !== "text" && node.tag !== "hr");
  if (children.length && children[0].tag === "h1") {
    const node = children.shift();
    title = nodeTextContent(node);
  }
  if (children.length && children[0].tag === "p") {
    const node = children.shift();
    description = nodeTextContent(node);
  }
  return {
    title,
    description
  };
}

function useSiteConfig(e, _options) {
  e.context.siteConfig = e.context.siteConfig || createSiteConfigStack();
  const options = defu(_options, useRuntimeConfig()["nuxt-site-config"], { debug: false });
  return e.context.siteConfig.get(options);
}

function useNitroOrigin(e) {
  const cert = process.env.NITRO_SSL_CERT;
  const key = process.env.NITRO_SSL_KEY;
  let host = process.env.NITRO_HOST || process.env.HOST || false;
  let port;
  let protocol = cert && key || !false ? "https" : "http";
  if (!e) {
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      const origin = JSON.parse(process.env.NUXT_VITE_NODE_OPTIONS).baseURL.replace("/__nuxt_vite_node__", "");
      host = withoutProtocol(origin);
      protocol = origin.includes("https") ? "https" : "http";
    }
  } else {
    host = getRequestHost(e, { xForwardedHost: true }) || host;
    protocol = getRequestProtocol(e, { xForwardedProto: true }) || protocol;
  }
  if (typeof host === "string" && host.includes(":")) {
    port = host.split(":").pop();
    host = host.split(":")[0];
  }
  port = port ? `:${port}` : "";
  return `${protocol}://${host}${port}/`;
}

const PRERENDER_NO_SSR_ROUTES = /* @__PURE__ */ new Set(["/index.html", "/200.html", "/404.html"]);
const InjectStatePlugin = async (nitroApp) => {
  nitroApp.hooks.hook("render:html", async (ctx, { event }) => {
    const routeOptions = getRouteRules(event);
    const isIsland = event.path.startsWith("/__nuxt_island");
    const url = event.path;
    const noSSR = event.context.nuxt?.noSSR || routeOptions.ssr === false && !isIsland || (PRERENDER_NO_SSR_ROUTES.has(url) );
    if (noSSR) {
      const siteConfig = Object.fromEntries(
        Object.entries(useSiteConfig(event)).map(([k, v]) => [k, toValue(v)])
      );
      ctx.body.push(`<script>window.__NUXT_SITE_CONFIG__=${devalue(siteConfig)}<\/script>`);
    }
  });
};
const _MODpLJcAMH = InjectStatePlugin;

function decodeHtml(html) {
  return html.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&cent;/g, "\xA2").replace(/&pound;/g, "\xA3").replace(/&yen;/g, "\xA5").replace(/&euro;/g, "\u20AC").replace(/&copy;/g, "\xA9").replace(/&reg;/g, "\xAE").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&#x27;/g, "'").replace(/&#x2F;/g, "/").replace(/&#([0-9]+);/g, (full, int) => {
    return String.fromCharCode(Number.parseInt(int));
  });
}
function decodeObjectHtmlEntities(obj) {
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === "string")
      obj[key] = decodeHtml(value);
  });
  return obj;
}
function extractAndNormaliseOgImageOptions(path, html, routeRules, defaults) {
  const htmlPayload = html.match(/<script.+id="nuxt-og-image-options"[^>]*>(.+?)<\/script>/)?.[1];
  if (!htmlPayload)
    return false;
  let options;
  try {
    const payload = JSON.parse(htmlPayload);
    Object.entries(payload).forEach(([key, value]) => {
      if (!value)
        delete payload[key];
    });
    options = defu$1(payload, routeRules);
  } catch (e) {
    options = routeRules;
  }
  if (!options)
    return false;
  if (!options.description) {
    const description = html.match(/<meta property="og:description" content="(.*?)">/)?.[1];
    if (description)
      options.description = description;
    else
      options.description = html.match(/<meta name="description" content="(.*?)">/)?.[1];
  }
  const decoded = decodeObjectHtmlEntities(options);
  return defu$1(
    decoded,
    // runtime options
    { path },
    defaults
  );
}

async function useNitroCache(e, module, options) {
  const { runtimeCacheStorage, version } = useRuntimeConfig()[module];
  const enabled = options.cache && runtimeCacheStorage && options.cacheTtl && options.cacheTtl > 0;
  const baseCacheKey = runtimeCacheStorage === "default" ? `/cache/${module}@${version}` : `/${module}@${version}`;
  const cache = prefixStorage(useStorage(), `${baseCacheKey}/`);
  const key = options.key;
  let xCacheHeader = "DISABLED";
  let xCacheExpires = 0;
  const newExpires = Date.now() + (options.cacheTtl || 0);
  const purge = typeof getQuery$1(e).purge !== "undefined";
  let cachedItem = false;
  if (!options.skipRestore && enabled && await cache.hasItem(key).catch(() => false)) {
    const { value, expiresAt } = await cache.getItem(key).catch(() => ({ value: null, expiresAt: Date.now() }));
    if (purge) {
      xCacheHeader = "PURGE";
      xCacheExpires = newExpires;
      await cache.removeItem(key).catch(() => {
      });
    } else if (expiresAt > Date.now()) {
      xCacheHeader = "HIT";
      xCacheExpires = newExpires;
      cachedItem = value;
    } else {
      xCacheHeader = "MISS";
      xCacheExpires = expiresAt;
      await cache.removeItem(key).catch(() => {
      });
    }
  }
  if (options.headers) {
    setHeader(e, `x-${module}-cache`, xCacheHeader);
    setHeader(e, `x-${module}-expires`, xCacheExpires.toString());
  }
  return {
    enabled,
    cachedItem,
    async update(item) {
      enabled && await cache.setItem(key, { value: item, expiresAt: Date.now() + (options.cacheTtl || 0) });
    }
  };
}

const OgImagePrenderNitroPlugin = async (nitroApp) => {
  const { defaults } = useRuntimeConfig()["nuxt-og-image"];
  nitroApp.hooks.hook("render:html", async (ctx, { event }) => {
    const path = parseURL(event.path).pathname;
    if (path.includes(".") || path.startsWith("/__nuxt_island/"))
      return;
    const routeRules = getRouteRules(event)?.ogImage || {};
    if (routeRules === false)
      return;
    const options = extractAndNormaliseOgImageOptions(path, [
      // payload may move
      ctx.head.join("\n"),
      ctx.bodyAppend.join("\n")
    ].join("\n"), routeRules, defaults);
    if (!options)
      return;
    const key = [
      withoutLeadingSlash(path === "/" || !path ? "index" : path).replaceAll("/", "-"),
      "options"
    ].join(":");
    const { update } = await useNitroCache(event, "nuxt-og-image", {
      key,
      // shouldn't change for the prerender, 5 min cache
      cacheTtl: 5 * 60 * 1e3,
      cache: true,
      headers: false,
      skipRestore: true
    });
    await update(options);
    if (options.provider === "satori")
      appendHeader(event, "x-nitro-prerender", joinURL(path, "/__og_image__/og.png"));
  });
};
const _DhdPXVbJrc = OgImagePrenderNitroPlugin;

const script = "\"use strict\";(()=>{const a=window,e=document.documentElement,m=[\"dark\",\"light\"],c=window&&window.localStorage&&window.localStorage.getItem&&window.localStorage.getItem(\"nuxt-color-mode\")||\"system\";let n=c===\"system\"?d():c;const l=e.getAttribute(\"data-color-mode-forced\");l&&(n=l),i(n),a[\"__NUXT_COLOR_MODE__\"]={preference:c,value:n,getColorScheme:d,addColorScheme:i,removeColorScheme:f};function i(o){const t=\"\"+o+\"\",s=\"\";e.classList?e.classList.add(t):e.className+=\" \"+t,s&&e.setAttribute(\"data-\"+s,o)}function f(o){const t=\"\"+o+\"\",s=\"\";e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp(t,\"g\"),\"\"),s&&e.removeAttribute(\"data-\"+s)}function r(o){return a.matchMedia(\"(prefers-color-scheme\"+o+\")\")}function d(){if(a.matchMedia&&r(\"\").media!==\"not all\"){for(const o of m)if(r(\":\"+o).matches)return o}return\"light\"}})();\n";

const _W4OSX7lqu1 = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const plugins = [
  _MODpLJcAMH,
_DhdPXVbJrc,
_W4OSX7lqu1
];

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: "",
    // TODO: check and validate error.data for serialisation into query
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (!res) {
    const { template } = await import('../error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

const assets = {};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta":{"maxAge":31536000},"/_nuxt/builds":{"maxAge":1},"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    setResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

let configs;
function getMdcConfigs () {
if (!configs) {
  configs = Promise.all([
  ]);
}
return configs
}

const mdcConfigs = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getMdcConfigs: getMdcConfigs
});

function createShikiHighlighter({
  langs = [],
  themes = [],
  bundledLangs = {},
  bundledThemes = {},
  getMdcConfigs,
  options: shikiOptions
} = {}) {
  let shiki;
  let configs;
  async function _getShiki() {
    const shiki2 = await getHighlighterCore({
      langs,
      themes,
      loadWasm: () => import('file:///workspace/KubeCamp/node_modules/shiki/dist/wasm.mjs')
    });
    for await (const config of await getConfigs()) {
      await config.shiki?.setup?.(shiki2);
    }
    return shiki2;
  }
  async function getShiki() {
    if (!shiki) {
      shiki = _getShiki();
    }
    return shiki;
  }
  async function getConfigs() {
    if (!configs) {
      configs = Promise.resolve(getMdcConfigs?.() || []);
    }
    return configs;
  }
  const baseTransformers = [
    transformerNotationDiff(),
    transformerNotationFocus(),
    transformerNotationHighlight(),
    transformerNotationErrorLevel()
  ];
  const highlighter = async (code, lang, theme, options = {}) => {
    const shiki2 = await getShiki();
    const themesObject = typeof theme === "string" ? { default: theme } : theme || {};
    const loadedThemes = shiki2.getLoadedThemes();
    const loadedLanguages = shiki2.getLoadedLanguages();
    if (typeof lang === "string" && !loadedLanguages.includes(lang) && !isSpecialLang(lang)) {
      if (bundledLangs[lang]) {
        await shiki2.loadLanguage(bundledLangs[lang]);
      } else {
        lang = "text";
      }
    }
    for (const [color, theme2] of Object.entries(themesObject)) {
      if (typeof theme2 === "string" && !loadedThemes.includes(theme2) && !isSpecialTheme(theme2)) {
        if (bundledThemes[theme2]) {
          await shiki2.loadTheme(bundledThemes[theme2]);
        } else {
          themesObject[color] = "none";
        }
      }
    }
    const transformers = [
      ...baseTransformers
    ];
    for (const config of await getConfigs()) {
      const newTransformers = typeof config.shiki?.transformers === "function" ? await config.shiki?.transformers(code, lang, theme, options) : config.shiki?.transformers || [];
      transformers.push(...newTransformers);
    }
    const root = shiki2.codeToHast(code.trimEnd(), {
      lang,
      themes: themesObject,
      defaultColor: false,
      meta: {
        __raw: options.meta
      },
      transformers: [
        ...transformers,
        {
          name: "mdc:highlight",
          line(node, line) {
            if (options.highlights?.includes(line))
              addClassToHast(node, "highlight");
            node.properties.line = line;
          }
        },
        {
          name: "mdc:newline",
          line(node) {
            if (code?.includes("\n")) {
              if (node.children.length === 0 || node.children.length === 1 && node.children[0].type === "element" && node.children[0].children.length === 1 && node.children[0].children[0].type === "text" && node.children[0].children[0].value === "") {
                node.children = [{
                  type: "element",
                  tagName: "span",
                  properties: {
                    emptyLinePlaceholder: true
                  },
                  children: [{ type: "text", value: "\n" }]
                }];
                return;
              }
              const last = node.children.at(-1);
              if (last?.type === "element" && last.tagName === "span") {
                const text = last.children.at(-1);
                if (text?.type === "text")
                  text.value += "\n";
              }
            }
          }
        }
      ]
    });
    const preEl = root.children[0];
    const codeEl = preEl.children[0];
    const wrapperStyle = shikiOptions?.wrapperStyle;
    preEl.properties.style = wrapperStyle ? typeof wrapperStyle === "string" ? wrapperStyle : preEl.properties.style : "";
    const styles = [];
    Object.keys(themesObject).forEach((color) => {
      const colorScheme = color !== "default" ? `.${color}` : "";
      styles.push(
        wrapperStyle ? `${colorScheme} .shiki,` : "",
        `html .${color} .shiki span {`,
        `color: var(--shiki-${color});`,
        `background: var(--shiki-${color}-bg);`,
        `font-style: var(--shiki-${color}-font-style);`,
        `font-weight: var(--shiki-${color}-font-weight);`,
        `text-decoration: var(--shiki-${color}-text-decoration);`,
        "}"
      );
      styles.push(
        `html${colorScheme} .shiki span {`,
        `color: var(--shiki-${color});`,
        `background: var(--shiki-${color}-bg);`,
        `font-style: var(--shiki-${color}-font-style);`,
        `font-weight: var(--shiki-${color}-font-weight);`,
        `text-decoration: var(--shiki-${color}-text-decoration);`,
        "}"
      );
    });
    return {
      tree: codeEl.children,
      className: Array.isArray(preEl.properties.class) ? preEl.properties.class.join(" ") : preEl.properties.class,
      inlineStyle: preEl.properties.style,
      style: styles.join("")
    };
  };
  return highlighter;
}

const bundledLangs = {
"javascript": () => import('file:///workspace/KubeCamp/node_modules/shiki/dist/langs/javascript.mjs'),
"js": () => import('file:///workspace/KubeCamp/node_modules/shiki/dist/langs/javascript.mjs'),
"jsx": () => import('file:///workspace/KubeCamp/node_modules/shiki/dist/langs/jsx.mjs'),
"json": () => import('file:///workspace/KubeCamp/node_modules/shiki/dist/langs/json.mjs'),
"typescript": () => import('file:///workspace/KubeCamp/node_modules/shiki/dist/langs/typescript.mjs'),
"ts": () => import('file:///workspace/KubeCamp/node_modules/shiki/dist/langs/typescript.mjs'),
"tsx": () => import('file:///workspace/KubeCamp/node_modules/shiki/dist/langs/tsx.mjs'),
"vue": () => import('file:///workspace/KubeCamp/node_modules/shiki/dist/langs/vue.mjs'),
"css": () => import('file:///workspace/KubeCamp/node_modules/shiki/dist/langs/css.mjs'),
"html": () => import('file:///workspace/KubeCamp/node_modules/shiki/dist/langs/html.mjs'),
"shellscript": () => import('file:///workspace/KubeCamp/node_modules/shiki/dist/langs/shellscript.mjs'),
"bash": () => import('file:///workspace/KubeCamp/node_modules/shiki/dist/langs/shellscript.mjs'),
"sh": () => import('file:///workspace/KubeCamp/node_modules/shiki/dist/langs/shellscript.mjs'),
"shell": () => import('file:///workspace/KubeCamp/node_modules/shiki/dist/langs/shellscript.mjs'),
"zsh": () => import('file:///workspace/KubeCamp/node_modules/shiki/dist/langs/shellscript.mjs'),
"markdown": () => import('file:///workspace/KubeCamp/node_modules/shiki/dist/langs/markdown.mjs'),
"md": () => import('file:///workspace/KubeCamp/node_modules/shiki/dist/langs/markdown.mjs'),
"mdc": () => import('file:///workspace/KubeCamp/node_modules/shiki/dist/langs/mdc.mjs'),
"yaml": () => import('file:///workspace/KubeCamp/node_modules/shiki/dist/langs/yaml.mjs'),
"yml": () => import('file:///workspace/KubeCamp/node_modules/shiki/dist/langs/yaml.mjs'),
"diff": () => import('file:///workspace/KubeCamp/node_modules/shiki/dist/langs/diff.mjs'),
"ini": () => import('file:///workspace/KubeCamp/node_modules/shiki/dist/langs/ini.mjs'),
"properties": () => import('file:///workspace/KubeCamp/node_modules/shiki/dist/langs/ini.mjs'),
};
const bundledThemes = {
"material-theme-lighter": () => import('file:///workspace/KubeCamp/node_modules/shiki/dist/themes/material-theme-lighter.mjs').then(r => r.default),
"material-theme": () => import('file:///workspace/KubeCamp/node_modules/shiki/dist/themes/material-theme.mjs').then(r => r.default),
"material-theme-palenight": () => import('file:///workspace/KubeCamp/node_modules/shiki/dist/themes/material-theme-palenight.mjs').then(r => r.default),
};
const options = {"theme":{"light":"material-theme-lighter","default":"material-theme","dark":"material-theme-palenight"}};
const highlighter = createShikiHighlighter({ bundledLangs, bundledThemes, options, getMdcConfigs });

const mdcHighlighter = /*#__PURE__*/Object.freeze({
  __proto__: null,
  createShikiHighlighter: createShikiHighlighter,
  default: highlighter
});

const _Q2LdaI = eventHandler(async (event) => {
  const { code, lang, theme: themeString, options: optionsStr } = getQuery$1(event);
  const theme = JSON.parse(themeString);
  const options = optionsStr ? JSON.parse(optionsStr) : {};
  return await highlighter(code, lang, theme, options);
});

var version = "1.0.12";

const components = {
  "Callout": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Callout.vue",
    "pascalName": "Callout",
    "kebabName": "callout",
    "chunkName": "components/callout",
    "shortPath": "node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Callout.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Callout.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "icon",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Callout.vue",
              "range": [
                1600,
                1652
              ]
            }
          ],
          "schema": "string",
          "default": "undefined"
        },
        {
          "name": "color",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Callout.vue",
              "range": [
                1656,
                1746
              ]
            }
          ],
          "schema": "string",
          "default": "\"primary\""
        },
        {
          "name": "to",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Callout.vue",
              "range": [
                1750,
                1800
              ]
            }
          ],
          "schema": "string",
          "default": "undefined"
        },
        {
          "name": "target",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Callout.vue",
              "range": [
                1804,
                1858
              ]
            }
          ],
          "schema": "string",
          "default": "undefined"
        },
        {
          "name": "ui",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "any",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Callout.vue",
              "range": [
                1953,
                2046
              ]
            }
          ],
          "schema": "any",
          "default": "{}"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{ unwrap: string; }",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{ unwrap: string; }",
            "schema": {
              "unwrap": {
                "name": "unwrap",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "string",
                "declarations": [],
                "schema": "string"
              }
            }
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: { unwrap: string; }): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: { unwrap: string; }): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: { unwrap: string; }) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: { unwrap: string; }): any",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "icon",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Callout.vue",
              "range": [
                1600,
                1652
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "color",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Callout.vue",
              "range": [
                1656,
                1746
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "to",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Callout.vue",
              "range": [
                1750,
                1800
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "target",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Callout.vue",
              "range": [
                1804,
                1858
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "class",
          "type": "any",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Callout.vue",
              "range": [
                1862,
                1949
              ]
            }
          ],
          "schema": "any"
        },
        {
          "name": "ui",
          "type": "any",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Callout.vue",
              "range": [
                1953,
                2046
              ]
            }
          ],
          "schema": "any"
        }
      ]
    }
  },
  "Card": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Card.vue",
    "pascalName": "Card",
    "kebabName": "card",
    "chunkName": "components/card",
    "shortPath": "node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Card.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Card.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "icon",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Card.vue",
              "range": [
                1663,
                1715
              ]
            }
          ],
          "schema": "string",
          "default": "undefined"
        },
        {
          "name": "color",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Card.vue",
              "range": [
                1719,
                1809
              ]
            }
          ],
          "schema": "string",
          "default": "\"primary\""
        },
        {
          "name": "to",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Card.vue",
              "range": [
                1813,
                1863
              ]
            }
          ],
          "schema": "string",
          "default": "undefined"
        },
        {
          "name": "target",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Card.vue",
              "range": [
                1867,
                1921
              ]
            }
          ],
          "schema": "string",
          "default": "undefined"
        },
        {
          "name": "title",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Card.vue",
              "range": [
                1925,
                1978
              ]
            }
          ],
          "schema": "string",
          "default": "undefined"
        },
        {
          "name": "ui",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "any",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Card.vue",
              "range": [
                2073,
                2166
              ]
            }
          ],
          "schema": "any",
          "default": "{}"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{ unwrap: string; }",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{ unwrap: string; }",
            "schema": {
              "unwrap": {
                "name": "unwrap",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "string",
                "declarations": [],
                "schema": "string"
              }
            }
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: { unwrap: string; }): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: { unwrap: string; }): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: { unwrap: string; }) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: { unwrap: string; }): any",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "icon",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Card.vue",
              "range": [
                1663,
                1715
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "color",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Card.vue",
              "range": [
                1719,
                1809
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "to",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Card.vue",
              "range": [
                1813,
                1863
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "target",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Card.vue",
              "range": [
                1867,
                1921
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "title",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Card.vue",
              "range": [
                1925,
                1978
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "class",
          "type": "any",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Card.vue",
              "range": [
                1982,
                2069
              ]
            }
          ],
          "schema": "any"
        },
        {
          "name": "ui",
          "type": "any",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Card.vue",
              "range": [
                2073,
                2166
              ]
            }
          ],
          "schema": "any"
        }
      ]
    }
  },
  "CardGroup": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/CardGroup.vue",
    "pascalName": "CardGroup",
    "kebabName": "card-group",
    "chunkName": "components/card-group",
    "shortPath": "node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/CardGroup.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/CardGroup.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "class",
          "type": "any",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/CardGroup.vue",
              "range": [
                282,
                369
              ]
            }
          ],
          "schema": "any"
        }
      ]
    }
  },
  "CodeGroup": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/CodeGroup.vue",
    "pascalName": "CodeGroup",
    "kebabName": "code-group",
    "chunkName": "components/code-group",
    "shortPath": "node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/CodeGroup.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/CodeGroup.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "class",
          "type": "any",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/CodeGroup.vue",
              "range": [
                1207,
                1294
              ]
            }
          ],
          "schema": "any"
        },
        {
          "name": "selectedIndex",
          "type": "any",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/CodeGroup.vue",
              "range": [
                1466,
                1479
              ]
            }
          ],
          "schema": "any"
        }
      ]
    }
  },
  "Collapsible": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Collapsible.vue",
    "pascalName": "Collapsible",
    "kebabName": "collapsible",
    "chunkName": "components/collapsible",
    "shortPath": "node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Collapsible.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Collapsible.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "name",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Collapsible.vue",
              "range": [
                1080,
                1135
              ]
            }
          ],
          "schema": "string",
          "default": "\"properties\""
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{ unwrap: string; }",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{ unwrap: string; }",
            "schema": {
              "unwrap": {
                "name": "unwrap",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "string",
                "declarations": [],
                "schema": "string"
              }
            }
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: { unwrap: string; }): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: { unwrap: string; }): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: { unwrap: string; }) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: { unwrap: string; }): any",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "name",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Collapsible.vue",
              "range": [
                1080,
                1135
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "Field": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Field.vue",
    "pascalName": "Field",
    "kebabName": "field",
    "chunkName": "components/field",
    "shortPath": "node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Field.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Field.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "name",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Field.vue",
              "range": [
                953,
                1001
              ]
            },
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Field.vue",
              "range": [
                953,
                1001
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "default",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Field.vue",
              "range": [
                1181,
                1236
              ]
            }
          ],
          "schema": "string",
          "default": "undefined"
        },
        {
          "name": "type",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Field.vue",
              "range": [
                1068,
                1120
              ]
            }
          ],
          "schema": "string",
          "default": "undefined"
        },
        {
          "name": "description",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Field.vue",
              "range": [
                1005,
                1064
              ]
            }
          ],
          "schema": "string",
          "default": "undefined"
        },
        {
          "name": "required",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Field.vue",
              "range": [
                1124,
                1177
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          },
          "default": "false"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "default",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Field.vue",
              "range": [
                1181,
                1236
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "name",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Field.vue",
              "range": [
                953,
                1001
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "type",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Field.vue",
              "range": [
                1068,
                1120
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "required",
          "type": "boolean",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Field.vue",
              "range": [
                1124,
                1177
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        },
        {
          "name": "class",
          "type": "any",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Field.vue",
              "range": [
                1240,
                1327
              ]
            }
          ],
          "schema": "any"
        },
        {
          "name": "description",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Field.vue",
              "range": [
                1005,
                1064
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "FieldGroup": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/FieldGroup.vue",
    "pascalName": "FieldGroup",
    "kebabName": "field-group",
    "chunkName": "components/field-group",
    "shortPath": "node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/FieldGroup.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/FieldGroup.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "class",
          "type": "any",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/FieldGroup.vue",
              "range": [
                380,
                467
              ]
            }
          ],
          "schema": "any"
        }
      ]
    }
  },
  "Shortcut": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Shortcut.vue",
    "pascalName": "Shortcut",
    "kebabName": "shortcut",
    "chunkName": "components/shortcut",
    "shortPath": "node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Shortcut.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Shortcut.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "value",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Shortcut.vue",
              "range": [
                285,
                334
              ]
            },
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Shortcut.vue",
              "range": [
                285,
                334
              ]
            }
          ],
          "schema": "string"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "class",
          "type": "any",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Shortcut.vue",
              "range": [
                338,
                425
              ]
            }
          ],
          "schema": "any"
        },
        {
          "name": "value",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Shortcut.vue",
              "range": [
                285,
                334
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "Tabs": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Tabs.vue",
    "pascalName": "Tabs",
    "kebabName": "tabs",
    "chunkName": "components/tabs",
    "shortPath": "node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Tabs.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Tabs.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "selectedIndex",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Tabs.vue",
              "range": [
                1382,
                1435
              ]
            }
          ],
          "schema": "number",
          "default": "0"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "selectedIndex",
          "type": "number",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Tabs.vue",
              "range": [
                1382,
                1435
              ]
            }
          ],
          "schema": "number"
        },
        {
          "name": "class",
          "type": "any",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/Tabs.vue",
              "range": [
                1439,
                1526
              ]
            }
          ],
          "schema": "any"
        }
      ]
    }
  },
  "ProseCode": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseCode.vue",
    "pascalName": "ProseCode",
    "kebabName": "prose-code",
    "chunkName": "components/prose-code",
    "shortPath": "node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseCode.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseCode.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "code",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseCode.vue",
              "range": [
                78,
                126
              ]
            },
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseCode.vue",
              "range": [
                78,
                126
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "icon",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseCode.vue",
              "range": [
                130,
                182
              ]
            }
          ],
          "schema": "string",
          "default": "undefined"
        },
        {
          "name": "language",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseCode.vue",
              "range": [
                186,
                242
              ]
            }
          ],
          "schema": "string",
          "default": "undefined"
        },
        {
          "name": "filename",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseCode.vue",
              "range": [
                305,
                361
              ]
            }
          ],
          "schema": "string",
          "default": "undefined"
        },
        {
          "name": "highlights",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number[]",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseCode.vue",
              "range": [
                365,
                444
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "number[]",
            "schema": [
              "number"
            ]
          },
          "default": "undefined"
        },
        {
          "name": "meta",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseCode.vue",
              "range": [
                448,
                500
              ]
            }
          ],
          "schema": "string",
          "default": "undefined"
        },
        {
          "name": "hideHeader",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseCode.vue",
              "range": [
                246,
                301
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          },
          "default": "false"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "code",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseCode.vue",
              "range": [
                78,
                126
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "icon",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseCode.vue",
              "range": [
                130,
                182
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "language",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseCode.vue",
              "range": [
                186,
                242
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "hideHeader",
          "type": "boolean",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseCode.vue",
              "range": [
                246,
                301
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        },
        {
          "name": "filename",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseCode.vue",
              "range": [
                305,
                361
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "highlights",
          "type": "number[]",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseCode.vue",
              "range": [
                365,
                444
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "number[]",
            "schema": [
              "number"
            ]
          }
        },
        {
          "name": "meta",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseCode.vue",
              "range": [
                448,
                500
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "ProseCodeButton": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseCodeButton.vue",
    "pascalName": "ProseCodeButton",
    "kebabName": "prose-code-button",
    "chunkName": "components/prose-code-button",
    "shortPath": "node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseCodeButton.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseCodeButton.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "code",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseCodeButton.vue",
              "range": [
                55,
                103
              ]
            },
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseCodeButton.vue",
              "range": [
                55,
                103
              ]
            }
          ],
          "schema": "string"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "code",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseCodeButton.vue",
              "range": [
                55,
                103
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "ProseCodeIcon": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseCodeIcon.vue",
    "pascalName": "ProseCodeIcon",
    "kebabName": "prose-code-icon",
    "chunkName": "components/prose-code-icon",
    "shortPath": "node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseCodeIcon.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseCodeIcon.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "icon",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseCodeIcon.vue",
              "range": [
                55,
                107
              ]
            }
          ],
          "schema": "string",
          "default": "undefined"
        },
        {
          "name": "filename",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseCodeIcon.vue",
              "range": [
                111,
                167
              ]
            }
          ],
          "schema": "string",
          "default": "undefined"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "icon",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseCodeIcon.vue",
              "range": [
                55,
                107
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "filename",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseCodeIcon.vue",
              "range": [
                111,
                167
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "ProseH1": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseH1.vue",
    "pascalName": "ProseH1",
    "kebabName": "prose-h1",
    "chunkName": "components/prose-h1",
    "shortPath": "node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseH1.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseH1.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseH1.vue",
              "range": [
                414,
                460
              ]
            },
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseH1.vue",
              "range": [
                414,
                460
              ]
            }
          ],
          "schema": "string"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "id",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseH1.vue",
              "range": [
                414,
                460
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "ProseH2": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseH2.vue",
    "pascalName": "ProseH2",
    "kebabName": "prose-h2",
    "chunkName": "components/prose-h2",
    "shortPath": "node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseH2.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseH2.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseH2.vue",
              "range": [
                414,
                460
              ]
            },
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseH2.vue",
              "range": [
                414,
                460
              ]
            }
          ],
          "schema": "string"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "id",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseH2.vue",
              "range": [
                414,
                460
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "ProseH3": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseH3.vue",
    "pascalName": "ProseH3",
    "kebabName": "prose-h3",
    "chunkName": "components/prose-h3",
    "shortPath": "node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseH3.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseH3.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseH3.vue",
              "range": [
                414,
                460
              ]
            },
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseH3.vue",
              "range": [
                414,
                460
              ]
            }
          ],
          "schema": "string"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "id",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseH3.vue",
              "range": [
                414,
                460
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "ProseH4": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseH4.vue",
    "pascalName": "ProseH4",
    "kebabName": "prose-h4",
    "chunkName": "components/prose-h4",
    "shortPath": "node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseH4.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseH4.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseH4.vue",
              "range": [
                414,
                460
              ]
            },
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseH4.vue",
              "range": [
                414,
                460
              ]
            }
          ],
          "schema": "string"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "id",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/prose/ProseH4.vue",
              "range": [
                414,
                460
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "ContentDoc": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue",
    "pascalName": "ContentDoc",
    "kebabName": "content-doc",
    "chunkName": "components/content-doc",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "tag",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
              "range": [
                4632,
                4644
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "path",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
              "range": [
                4653,
                4666
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "query",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "QueryBuilderParams",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
              "range": [
                4675,
                4701
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "QueryBuilderParams",
            "schema": {
              "first": {
                "name": "first",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "boolean",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      9172,
                      9188
                    ]
                  }
                ],
                "schema": {
                  "kind": "enum",
                  "type": "boolean",
                  "schema": [
                    "false",
                    "true"
                  ]
                }
              },
              "skip": {
                "name": "skip",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "number",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      9193,
                      9207
                    ]
                  }
                ],
                "schema": "number"
              },
              "limit": {
                "name": "limit",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "number",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      9212,
                      9227
                    ]
                  }
                ],
                "schema": "number"
              },
              "only": {
                "name": "only",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "string[]",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      9232,
                      9248
                    ]
                  }
                ],
                "schema": {
                  "kind": "array",
                  "type": "string[]",
                  "schema": [
                    "string"
                  ]
                }
              },
              "without": {
                "name": "without",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "string[]",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      9253,
                      9272
                    ]
                  }
                ],
                "schema": "string[]"
              },
              "sort": {
                "name": "sort",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "SortOptions[]",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      9277,
                      9298
                    ]
                  }
                ],
                "schema": {
                  "kind": "array",
                  "type": "SortOptions[]",
                  "schema": [
                    {
                      "kind": "enum",
                      "type": "SortOptions",
                      "schema": [
                        {
                          "kind": "object",
                          "type": "SortParams",
                          "schema": {
                            "$locale": {
                              "name": "$locale",
                              "global": false,
                              "description": "Locale specifier for sorting\nA string with a BCP 47 language tag",
                              "tags": [
                                {
                                  "name": "default",
                                  "text": "undefined"
                                }
                              ],
                              "required": false,
                              "type": "string",
                              "declarations": [
                                {
                                  "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    3558,
                                    3575
                                  ]
                                }
                              ],
                              "schema": "string"
                            },
                            "$numeric": {
                              "name": "$numeric",
                              "global": false,
                              "description": "Whether numeric collation should be used, such that \"1\" < \"2\" < \"10\".\nPossible values are `true` and `false`;",
                              "tags": [
                                {
                                  "name": "default",
                                  "text": "false"
                                }
                              ],
                              "required": false,
                              "type": "boolean",
                              "declarations": [
                                {
                                  "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    3749,
                                    3768
                                  ]
                                }
                              ],
                              "schema": "boolean"
                            },
                            "$caseFirst": {
                              "name": "$caseFirst",
                              "global": false,
                              "description": "Whether upper case or lower case should sort first.\nPossible values are `\"upper\"`, `\"lower\"`, or `\"false\"`",
                              "tags": [
                                {
                                  "name": "default",
                                  "text": "\"depends on locale\""
                                }
                              ],
                              "required": false,
                              "type": "\"upper\" | \"lower\" | \"false\"",
                              "declarations": [
                                {
                                  "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    3953,
                                    3994
                                  ]
                                }
                              ],
                              "schema": {
                                "kind": "enum",
                                "type": "\"upper\" | \"lower\" | \"false\"",
                                "schema": [
                                  "\"upper\"",
                                  "\"lower\"",
                                  "\"false\""
                                ]
                              }
                            },
                            "$sensitivity": {
                              "name": "$sensitivity",
                              "global": false,
                              "description": "Which differences in the strings should lead to non-zero result values. Possible values are:\n - \"base\": Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A.\n - \"accent\": Only strings that differ in base letters or accents and other diacritic marks compare as unequal. Examples: a ≠ b, a ≠ á, a = A.\n - \"case\": Only strings that differ in base letters or case compare as unequal. Examples: a ≠ b, a = á, a ≠ A.\n - \"variant\": Strings that differ in base letters, accents and other diacritic marks, or case compare as unequal. Other differences may also be taken into consideration. Examples: a ≠ b, a ≠ á, a ≠ A.",
                              "tags": [
                                {
                                  "name": "default",
                                  "text": "\"variant\""
                                }
                              ],
                              "required": false,
                              "type": "\"base\" | \"accent\" | \"case\" | \"variant\"",
                              "declarations": [
                                {
                                  "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    4733,
                                    4787
                                  ]
                                }
                              ],
                              "schema": {
                                "kind": "enum",
                                "type": "\"base\" | \"accent\" | \"case\" | \"variant\"",
                                "schema": [
                                  "\"base\"",
                                  "\"accent\"",
                                  "\"case\"",
                                  "\"variant\""
                                ]
                              }
                            }
                          }
                        },
                        {
                          "kind": "object",
                          "type": "SortFields",
                          "schema": {}
                        }
                      ]
                    }
                  ]
                }
              },
              "where": {
                "name": "where",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "QueryBuilderWhere[]",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      9303,
                      9331
                    ]
                  }
                ],
                "schema": {
                  "kind": "array",
                  "type": "QueryBuilderWhere[]",
                  "schema": [
                    {
                      "kind": "object",
                      "type": "QueryBuilderWhere",
                      "schema": {
                        "$and": {
                          "name": "$and",
                          "global": false,
                          "description": "Match only if all of nested conditions are true",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n $and: [\n   { score: { $gte: 5 } },\n   { score: { $lte: 10 } }\n ]\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "QueryBuilderWhere[]",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                5305,
                                5332
                              ]
                            }
                          ],
                          "schema": "QueryBuilderWhere[]"
                        },
                        "$or": {
                          "name": "$or",
                          "global": false,
                          "description": "Match if any of nested conditions is true",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n $or: [\n   { score: { $gt: 5 } },\n   { score: { $lt: 3 } }\n ]\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "QueryBuilderWhere[]",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                5576,
                                5602
                              ]
                            }
                          ],
                          "schema": "QueryBuilderWhere[]"
                        },
                        "$not": {
                          "name": "$not",
                          "global": false,
                          "description": "Match is condition is false",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $not: 'Hello World'\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                5799,
                                5861
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "enum",
                            "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                            "schema": [
                              "string",
                              "number",
                              "false",
                              "true",
                              {
                                "kind": "object",
                                "type": "RegExp",
                                "schema": {
                                  "exec": {
                                    "name": "exec",
                                    "global": false,
                                    "description": "Executes a search on a string using a regular expression pattern, and returns an array containing the results of that search.",
                                    "tags": [
                                      {
                                        "name": "param",
                                        "text": "string The String object or string literal on which to perform the search."
                                      }
                                    ],
                                    "required": true,
                                    "type": "(string: string) => RegExpExecArray",
                                    "declarations": [
                                      {
                                        "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es5.d.ts",
                                        "range": [
                                          40945,
                                          40990
                                        ]
                                      }
                                    ],
                                    "schema": {
                                      "kind": "event",
                                      "type": "(string: string): RegExpExecArray",
                                      "schema": []
                                    }
                                  },
                                  "test": {
                                    "name": "test",
                                    "global": false,
                                    "description": "Returns a Boolean value that indicates whether or not a pattern exists in a searched string.",
                                    "tags": [
                                      {
                                        "name": "param",
                                        "text": "string String on which to perform the search."
                                      }
                                    ],
                                    "required": true,
                                    "type": "(string: string) => boolean",
                                    "declarations": [
                                      {
                                        "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es5.d.ts",
                                        "range": [
                                          41172,
                                          41202
                                        ]
                                      }
                                    ],
                                    "schema": {
                                      "kind": "event",
                                      "type": "(string: string): boolean",
                                      "schema": []
                                    }
                                  },
                                  "source": {
                                    "name": "source",
                                    "global": false,
                                    "description": "Returns a copy of the text of the regular expression pattern. Read-only. The regExp argument is a Regular expression object. It can be a variable name or a literal.",
                                    "tags": [],
                                    "required": true,
                                    "type": "string",
                                    "declarations": [
                                      {
                                        "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es5.d.ts",
                                        "range": [
                                          41384,
                                          41408
                                        ]
                                      }
                                    ],
                                    "schema": "string"
                                  },
                                  "global": {
                                    "name": "global",
                                    "global": false,
                                    "description": "Returns a Boolean value indicating the state of the global flag (g) used with a regular expression. Default is false. Read-only.",
                                    "tags": [],
                                    "required": true,
                                    "type": "boolean",
                                    "declarations": [
                                      {
                                        "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es5.d.ts",
                                        "range": [
                                          41554,
                                          41579
                                        ]
                                      }
                                    ],
                                    "schema": "boolean"
                                  },
                                  "ignoreCase": {
                                    "name": "ignoreCase",
                                    "global": false,
                                    "description": "Returns a Boolean value indicating the state of the ignoreCase flag (i) used with a regular expression. Default is false. Read-only.",
                                    "tags": [],
                                    "required": true,
                                    "type": "boolean",
                                    "declarations": [
                                      {
                                        "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es5.d.ts",
                                        "range": [
                                          41729,
                                          41758
                                        ]
                                      }
                                    ],
                                    "schema": "boolean"
                                  },
                                  "multiline": {
                                    "name": "multiline",
                                    "global": false,
                                    "description": "Returns a Boolean value indicating the state of the multiline flag (m) used with a regular expression. Default is false. Read-only.",
                                    "tags": [],
                                    "required": true,
                                    "type": "boolean",
                                    "declarations": [
                                      {
                                        "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es5.d.ts",
                                        "range": [
                                          41907,
                                          41935
                                        ]
                                      }
                                    ],
                                    "schema": "boolean"
                                  },
                                  "lastIndex": {
                                    "name": "lastIndex",
                                    "global": false,
                                    "description": "",
                                    "tags": [],
                                    "required": true,
                                    "type": "number",
                                    "declarations": [
                                      {
                                        "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es5.d.ts",
                                        "range": [
                                          41941,
                                          41959
                                        ]
                                      }
                                    ],
                                    "schema": "number"
                                  },
                                  "compile": {
                                    "name": "compile",
                                    "global": false,
                                    "description": "",
                                    "tags": [
                                      {
                                        "name": "deprecated",
                                        "text": "A legacy feature for browser compatibility"
                                      }
                                    ],
                                    "required": true,
                                    "type": "(pattern: string, flags?: string) => RegExp",
                                    "declarations": [
                                      {
                                        "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es5.d.ts",
                                        "range": [
                                          42062,
                                          42109
                                        ]
                                      }
                                    ],
                                    "schema": {
                                      "kind": "event",
                                      "type": "(pattern: string, flags?: string): RegExp",
                                      "schema": []
                                    }
                                  },
                                  "flags": {
                                    "name": "flags",
                                    "global": false,
                                    "description": "Returns a string indicating the flags of the regular expression in question. This field is read-only.\nThe characters in this string are sequenced and concatenated in the following order:\n\n   - \"g\" for global\n   - \"i\" for ignoreCase\n   - \"m\" for multiline\n   - \"u\" for unicode\n   - \"y\" for sticky\n\nIf no flags are set, the value is the empty string.",
                                    "tags": [],
                                    "required": true,
                                    "type": "string",
                                    "declarations": [
                                      {
                                        "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es2015.core.d.ts",
                                        "range": [
                                          14897,
                                          14920
                                        ]
                                      }
                                    ],
                                    "schema": "string"
                                  },
                                  "sticky": {
                                    "name": "sticky",
                                    "global": false,
                                    "description": "Returns a Boolean value indicating the state of the sticky flag (y) used with a regular\nexpression. Default is false. Read-only.",
                                    "tags": [],
                                    "required": true,
                                    "type": "boolean",
                                    "declarations": [
                                      {
                                        "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es2015.core.d.ts",
                                        "range": [
                                          15085,
                                          15110
                                        ]
                                      }
                                    ],
                                    "schema": "boolean"
                                  },
                                  "unicode": {
                                    "name": "unicode",
                                    "global": false,
                                    "description": "Returns a Boolean value indicating the state of the Unicode flag (u) used with a regular\nexpression. Default is false. Read-only.",
                                    "tags": [],
                                    "required": true,
                                    "type": "boolean",
                                    "declarations": [
                                      {
                                        "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es2015.core.d.ts",
                                        "range": [
                                          15276,
                                          15302
                                        ]
                                      }
                                    ],
                                    "schema": "boolean"
                                  },
                                  "dotAll": {
                                    "name": "dotAll",
                                    "global": false,
                                    "description": "Returns a Boolean value indicating the state of the dotAll flag (s) used with a regular expression.\nDefault is false. Read-only.",
                                    "tags": [],
                                    "required": true,
                                    "type": "boolean",
                                    "declarations": [
                                      {
                                        "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es2018.regexp.d.ts",
                                        "range": [
                                          1204,
                                          1229
                                        ]
                                      }
                                    ],
                                    "schema": "boolean"
                                  },
                                  "hasIndices": {
                                    "name": "hasIndices",
                                    "global": false,
                                    "description": "Returns a Boolean value indicating the state of the hasIndices flag (d) used with with a regular expression.\nDefault is false. Read-only.",
                                    "tags": [],
                                    "required": true,
                                    "type": "boolean",
                                    "declarations": [
                                      {
                                        "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es2022.regexp.d.ts",
                                        "range": [
                                          1304,
                                          1333
                                        ]
                                      }
                                    ],
                                    "schema": "boolean"
                                  },
                                  "__@match@3810": {
                                    "name": "__@match@3810",
                                    "global": false,
                                    "description": "Matches a string with this regular expression, and returns an array containing the results of\nthat search.",
                                    "tags": [
                                      {
                                        "name": "param",
                                        "text": "string A string to search within."
                                      }
                                    ],
                                    "required": true,
                                    "type": "(string: string) => RegExpMatchArray",
                                    "declarations": [
                                      {
                                        "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts",
                                        "range": [
                                          5644,
                                          5700
                                        ]
                                      }
                                    ],
                                    "schema": {
                                      "kind": "event",
                                      "type": "(string: string): RegExpMatchArray",
                                      "schema": []
                                    }
                                  },
                                  "__@replace@3812": {
                                    "name": "__@replace@3812",
                                    "global": false,
                                    "description": "Replaces text in a string, using this regular expression.",
                                    "tags": [
                                      {
                                        "name": "param",
                                        "text": "string A String object or string literal whose contents matching against\nthis regular expression will be replaced"
                                      },
                                      {
                                        "name": "param",
                                        "text": "replaceValue A String object or string literal containing the text to replace for every\nsuccessful match of this regular expression."
                                      },
                                      {
                                        "name": "param",
                                        "text": "string A String object or string literal whose contents matching against\nthis regular expression will be replaced"
                                      },
                                      {
                                        "name": "param",
                                        "text": "replacer A function that returns the replacement text."
                                      }
                                    ],
                                    "required": true,
                                    "type": "{ (string: string, replaceValue: string): string; (string: string, replacer: (substring: string, ...args: any[]) => string): string; }",
                                    "declarations": [
                                      {
                                        "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts",
                                        "range": [
                                          6110,
                                          6173
                                        ]
                                      },
                                      {
                                        "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts",
                                        "range": [
                                          6478,
                                          6576
                                        ]
                                      }
                                    ],
                                    "schema": "{ (string: string, replaceValue: string): string; (string: string, replacer: (substring: string, ...args: any[]) => string): string; }"
                                  },
                                  "__@search@3815": {
                                    "name": "__@search@3815",
                                    "global": false,
                                    "description": "Finds the position beginning first substring match in a regular expression search\nusing this regular expression.",
                                    "tags": [
                                      {
                                        "name": "param",
                                        "text": "string The string to search within."
                                      }
                                    ],
                                    "required": true,
                                    "type": "(string: string) => number",
                                    "declarations": [
                                      {
                                        "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts",
                                        "range": [
                                          6782,
                                          6822
                                        ]
                                      }
                                    ],
                                    "schema": {
                                      "kind": "event",
                                      "type": "(string: string): number",
                                      "schema": []
                                    }
                                  },
                                  "__@split@3817": {
                                    "name": "__@split@3817",
                                    "global": false,
                                    "description": "Returns an array of substrings that were delimited by strings in the original input that\nmatch against this regular expression.\n\nIf the regular expression contains capturing parentheses, then each time this\nregular expression matches, the results (including any undefined results) of the\ncapturing parentheses are spliced.",
                                    "tags": [
                                      {
                                        "name": "param",
                                        "text": "string string value to split"
                                      },
                                      {
                                        "name": "param",
                                        "text": "limit if not undefined, the output array is truncated so that it contains no more\nthan 'limit' elements."
                                      }
                                    ],
                                    "required": true,
                                    "type": "(string: string, limit?: number) => string[]",
                                    "declarations": [
                                      {
                                        "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts",
                                        "range": [
                                          7384,
                                          7441
                                        ]
                                      }
                                    ],
                                    "schema": {
                                      "kind": "event",
                                      "type": "(string: string, limit?: number): string[]",
                                      "schema": []
                                    }
                                  },
                                  "__@matchAll@3819": {
                                    "name": "__@matchAll@3819",
                                    "global": false,
                                    "description": "Matches a string with this regular expression, and returns an iterable of matches\ncontaining the results of that search.",
                                    "tags": [
                                      {
                                        "name": "param",
                                        "text": "string A string to search within."
                                      }
                                    ],
                                    "required": true,
                                    "type": "(str: string) => IterableIterator<RegExpMatchArray>",
                                    "declarations": [
                                      {
                                        "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es2020.symbol.wellknown.d.ts",
                                        "range": [
                                          1385,
                                          1452
                                        ]
                                      }
                                    ],
                                    "schema": {
                                      "kind": "event",
                                      "type": "(str: string): IterableIterator<RegExpMatchArray>",
                                      "schema": []
                                    }
                                  }
                                }
                              },
                              "QueryBuilderWhere"
                            ]
                          }
                        },
                        "$eq": {
                          "name": "$eq",
                          "global": false,
                          "description": "Match if item equals condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $eq: 'Hello World'\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | number | boolean | RegExp",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                6060,
                                6101
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "enum",
                            "type": "string | number | boolean | RegExp",
                            "schema": [
                              "string",
                              "number",
                              "false",
                              "true",
                              "RegExp"
                            ]
                          }
                        },
                        "$ne": {
                          "name": "$ne",
                          "global": false,
                          "description": "Match if item not equals condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n score: {\n   $ne: 100\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | number | boolean | RegExp",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                6294,
                                6335
                              ]
                            }
                          ],
                          "schema": "string | number | boolean | RegExp"
                        },
                        "$gt": {
                          "name": "$gt",
                          "global": false,
                          "description": "Check if item is greater than condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n score: {\n   $gt: 99.5\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "number",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                6533,
                                6546
                              ]
                            }
                          ],
                          "schema": "number"
                        },
                        "$gte": {
                          "name": "$gte",
                          "global": false,
                          "description": "Check if item is greater than or equal to condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n score: {\n   $gte: 99.5\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "number",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                6757,
                                6771
                              ]
                            }
                          ],
                          "schema": "number"
                        },
                        "$lt": {
                          "name": "$lt",
                          "global": false,
                          "description": "Check if item is less than condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n score: {\n   $lt: 99.5\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "number",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                6966,
                                6979
                              ]
                            }
                          ],
                          "schema": "number"
                        },
                        "$lte": {
                          "name": "$lte",
                          "global": false,
                          "description": "Check if item is less than or equal to condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n score: {\n   $lte: 99.5\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "number",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                7187,
                                7201
                              ]
                            }
                          ],
                          "schema": "number"
                        },
                        "$regex": {
                          "name": "$regex",
                          "global": false,
                          "description": "Provides regular expression capabilities for pattern matching strings.",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $regex: /^foo/\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | RegExp",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                7435,
                                7460
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "enum",
                            "type": "string | RegExp",
                            "schema": [
                              "string",
                              "RegExp"
                            ]
                          }
                        },
                        "$type": {
                          "name": "$type",
                          "global": false,
                          "description": "Match if type of item equals condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n field: {\n   $type: 'boolean'\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                7664,
                                7679
                              ]
                            }
                          ],
                          "schema": "string"
                        },
                        "$exists": {
                          "name": "$exists",
                          "global": false,
                          "description": "Check key existence",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n tag: {\n   $exists: false\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "boolean",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                7860,
                                7878
                              ]
                            }
                          ],
                          "schema": "boolean"
                        },
                        "$contains": {
                          "name": "$contains",
                          "global": false,
                          "description": "Match if item contains every condition or math every rule in condition array",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $contains: ['Hello', 'World']\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | number | boolean | (string | number | boolean)[]",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                8134,
                                8207
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "enum",
                            "type": "string | number | boolean | (string | number | boolean)[]",
                            "schema": [
                              "string",
                              "number",
                              "false",
                              "true",
                              {
                                "kind": "array",
                                "type": "(string | number | boolean)[]",
                                "schema": [
                                  {
                                    "kind": "enum",
                                    "type": "string | number | boolean",
                                    "schema": [
                                      "string",
                                      "number",
                                      "false",
                                      "true"
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        },
                        "$containsAny": {
                          "name": "$containsAny",
                          "global": false,
                          "description": "Match if item contains at least one rule from condition array",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $containsAny: ['Hello', 'World']\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "(string | number | boolean)[]",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                8450,
                                8498
                              ]
                            }
                          ],
                          "schema": "(string | number | boolean)[]"
                        },
                        "$icontains": {
                          "name": "$icontains",
                          "global": false,
                          "description": "Ignore case contains",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $icontains: 'hello world'\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                8694,
                                8714
                              ]
                            }
                          ],
                          "schema": "string"
                        },
                        "$in": {
                          "name": "$in",
                          "global": false,
                          "description": "Match if item is in condition array",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n category: {\n   $in: ['sport', 'nature', 'travel']\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | (string | number | boolean)[]",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                8937,
                                8985
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "enum",
                            "type": "string | (string | number | boolean)[]",
                            "schema": [
                              "string",
                              "(string | number | boolean)[]"
                            ]
                          }
                        },
                        "_id": {
                          "name": "_id",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [],
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_source": {
                          "name": "_source",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [],
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_path": {
                          "name": "_path",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [],
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "title": {
                          "name": "title",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [],
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_draft": {
                          "name": "_draft",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [],
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_partial": {
                          "name": "_partial",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [],
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_locale": {
                          "name": "_locale",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [],
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_type": {
                          "name": "_type",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [],
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_file": {
                          "name": "_file",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [],
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_extension": {
                          "name": "_extension",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [],
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        }
                      }
                    }
                  ]
                }
              },
              "surround": {
                "name": "surround",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "{ query: string | QueryBuilderWhere; before?: number; after?: number; }",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      9336,
                      9447
                    ]
                  }
                ],
                "schema": {
                  "kind": "object",
                  "type": "{ query: string | QueryBuilderWhere; before?: number; after?: number; }",
                  "schema": {
                    "query": {
                      "name": "query",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": true,
                      "type": "string | QueryBuilderWhere",
                      "declarations": [
                        {
                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            9357,
                            9391
                          ]
                        }
                      ],
                      "schema": {
                        "kind": "enum",
                        "type": "string | QueryBuilderWhere",
                        "schema": [
                          "string",
                          "QueryBuilderWhere"
                        ]
                      }
                    },
                    "before": {
                      "name": "before",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": false,
                      "type": "number",
                      "declarations": [
                        {
                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            9400,
                            9416
                          ]
                        }
                      ],
                      "schema": "number"
                    },
                    "after": {
                      "name": "after",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": false,
                      "type": "number",
                      "declarations": [
                        {
                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            9425,
                            9440
                          ]
                        }
                      ],
                      "schema": "number"
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "excerpt",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
              "range": [
                4606,
                4623
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        },
        {
          "name": "head",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
              "range": [
                4710,
                4724
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{ doc: ParsedContent; refresh: () => Promise<void>; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
              "range": [
                6347,
                6476
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "{ doc: ParsedContent; refresh: () => Promise<void>; }",
            "schema": {
              "doc": {
                "name": "doc",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "ParsedContent",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
                    "range": [
                      6380,
                      6399
                    ]
                  }
                ],
                "schema": {
                  "kind": "object",
                  "type": "ParsedContent",
                  "schema": {
                    "excerpt": {
                      "name": "excerpt",
                      "global": false,
                      "description": "Excerpt",
                      "tags": [],
                      "required": false,
                      "type": "MarkdownRoot",
                      "declarations": [
                        {
                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            2459,
                            2482
                          ]
                        }
                      ],
                      "schema": {
                        "kind": "object",
                        "type": "MarkdownRoot",
                        "schema": {
                          "type": {
                            "name": "type",
                            "global": false,
                            "description": "",
                            "tags": [],
                            "required": true,
                            "type": "\"root\"",
                            "declarations": [
                              {
                                "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                "range": [
                                  1465,
                                  1478
                                ]
                              }
                            ],
                            "schema": "\"root\""
                          },
                          "children": {
                            "name": "children",
                            "global": false,
                            "description": "",
                            "tags": [],
                            "required": true,
                            "type": "MarkdownNode[]",
                            "declarations": [
                              {
                                "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                "range": [
                                  1483,
                                  1508
                                ]
                              }
                            ],
                            "schema": {
                              "kind": "array",
                              "type": "MarkdownNode[]",
                              "schema": [
                                {
                                  "kind": "object",
                                  "type": "MarkdownNode",
                                  "schema": {
                                    "type": {
                                      "name": "type",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": true,
                                      "type": "string",
                                      "declarations": [
                                        {
                                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1214,
                                            1227
                                          ]
                                        }
                                      ],
                                      "schema": "string"
                                    },
                                    "tag": {
                                      "name": "tag",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": false,
                                      "type": "string",
                                      "declarations": [
                                        {
                                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1232,
                                            1245
                                          ]
                                        }
                                      ],
                                      "schema": "string"
                                    },
                                    "value": {
                                      "name": "value",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": false,
                                      "type": "string",
                                      "declarations": [
                                        {
                                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1250,
                                            1265
                                          ]
                                        }
                                      ],
                                      "schema": "string"
                                    },
                                    "props": {
                                      "name": "props",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": false,
                                      "type": "Record<string, any>",
                                      "declarations": [
                                        {
                                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1270,
                                            1298
                                          ]
                                        }
                                      ],
                                      "schema": "Record<string, any>"
                                    },
                                    "content": {
                                      "name": "content",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": false,
                                      "type": "any",
                                      "declarations": [
                                        {
                                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1303,
                                            1317
                                          ]
                                        }
                                      ],
                                      "schema": "any"
                                    },
                                    "children": {
                                      "name": "children",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": false,
                                      "type": "MarkdownNode[]",
                                      "declarations": [
                                        {
                                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1322,
                                            1348
                                          ]
                                        }
                                      ],
                                      "schema": "MarkdownNode[]"
                                    },
                                    "attributes": {
                                      "name": "attributes",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": false,
                                      "type": "Record<string, any>",
                                      "declarations": [
                                        {
                                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1353,
                                            1386
                                          ]
                                        }
                                      ],
                                      "schema": "Record<string, any>"
                                    },
                                    "fmAttributes": {
                                      "name": "fmAttributes",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": false,
                                      "type": "Record<string, any>",
                                      "declarations": [
                                        {
                                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1391,
                                            1426
                                          ]
                                        }
                                      ],
                                      "schema": "Record<string, any>"
                                    }
                                  }
                                }
                              ]
                            }
                          },
                          "props": {
                            "name": "props",
                            "global": false,
                            "description": "",
                            "tags": [],
                            "required": false,
                            "type": "Record<string, any>",
                            "declarations": [
                              {
                                "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                "range": [
                                  1513,
                                  1541
                                ]
                              }
                            ],
                            "schema": "Record<string, any>"
                          },
                          "toc": {
                            "name": "toc",
                            "global": false,
                            "description": "",
                            "tags": [],
                            "required": false,
                            "type": "Toc",
                            "declarations": [
                              {
                                "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                "range": [
                                  1546,
                                  1556
                                ]
                              }
                            ],
                            "schema": {
                              "kind": "object",
                              "type": "Toc",
                              "schema": {
                                "title": {
                                  "name": "title",
                                  "global": false,
                                  "description": "",
                                  "tags": [],
                                  "required": true,
                                  "type": "string",
                                  "declarations": [
                                    {
                                      "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                      "range": [
                                        1095,
                                        1109
                                      ]
                                    }
                                  ],
                                  "schema": "string"
                                },
                                "depth": {
                                  "name": "depth",
                                  "global": false,
                                  "description": "",
                                  "tags": [],
                                  "required": true,
                                  "type": "number",
                                  "declarations": [
                                    {
                                      "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                      "range": [
                                        1114,
                                        1128
                                      ]
                                    }
                                  ],
                                  "schema": "number"
                                },
                                "searchDepth": {
                                  "name": "searchDepth",
                                  "global": false,
                                  "description": "",
                                  "tags": [],
                                  "required": true,
                                  "type": "number",
                                  "declarations": [
                                    {
                                      "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                      "range": [
                                        1133,
                                        1153
                                      ]
                                    }
                                  ],
                                  "schema": "number"
                                },
                                "links": {
                                  "name": "links",
                                  "global": false,
                                  "description": "",
                                  "tags": [],
                                  "required": true,
                                  "type": "TocLink[]",
                                  "declarations": [
                                    {
                                      "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                      "range": [
                                        1158,
                                        1175
                                      ]
                                    }
                                  ],
                                  "schema": {
                                    "kind": "array",
                                    "type": "TocLink[]",
                                    "schema": [
                                      {
                                        "kind": "object",
                                        "type": "TocLink",
                                        "schema": {
                                          "id": {
                                            "name": "id",
                                            "global": false,
                                            "description": "",
                                            "tags": [],
                                            "required": true,
                                            "type": "string",
                                            "declarations": [
                                              {
                                                "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                                "range": [
                                                  991,
                                                  1002
                                                ]
                                              }
                                            ],
                                            "schema": "string"
                                          },
                                          "text": {
                                            "name": "text",
                                            "global": false,
                                            "description": "",
                                            "tags": [],
                                            "required": true,
                                            "type": "string",
                                            "declarations": [
                                              {
                                                "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                                "range": [
                                                  1007,
                                                  1020
                                                ]
                                              }
                                            ],
                                            "schema": "string"
                                          },
                                          "depth": {
                                            "name": "depth",
                                            "global": false,
                                            "description": "",
                                            "tags": [],
                                            "required": true,
                                            "type": "number",
                                            "declarations": [
                                              {
                                                "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                                "range": [
                                                  1025,
                                                  1039
                                                ]
                                              }
                                            ],
                                            "schema": "number"
                                          },
                                          "children": {
                                            "name": "children",
                                            "global": false,
                                            "description": "",
                                            "tags": [],
                                            "required": false,
                                            "type": "TocLink[]",
                                            "declarations": [
                                              {
                                                "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                                "range": [
                                                  1044,
                                                  1065
                                                ]
                                              }
                                            ],
                                            "schema": "TocLink[]"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "body": {
                      "name": "body",
                      "global": false,
                      "description": "Content body",
                      "tags": [],
                      "required": true,
                      "type": "MarkdownRoot",
                      "declarations": [
                        {
                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            2523,
                            2549
                          ]
                        }
                      ],
                      "schema": "MarkdownRoot"
                    },
                    "layout": {
                      "name": "layout",
                      "global": false,
                      "description": "Layout",
                      "tags": [],
                      "required": false,
                      "type": "\"docs\"",
                      "declarations": [
                        {
                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            2319,
                            2338
                          ]
                        }
                      ],
                      "schema": "\"docs\""
                    },
                    "_id": {
                      "name": "_id",
                      "global": false,
                      "description": "Content id",
                      "tags": [],
                      "required": true,
                      "type": "string",
                      "declarations": [
                        {
                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            185,
                            197
                          ]
                        }
                      ],
                      "schema": "string"
                    },
                    "_source": {
                      "name": "_source",
                      "global": false,
                      "description": "Content source",
                      "tags": [],
                      "required": false,
                      "type": "string",
                      "declarations": [
                        {
                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            240,
                            257
                          ]
                        }
                      ],
                      "schema": "string"
                    },
                    "_path": {
                      "name": "_path",
                      "global": false,
                      "description": "Content path, this path is source agnostic and it the content my live in any source",
                      "tags": [],
                      "required": false,
                      "type": "string",
                      "declarations": [
                        {
                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            369,
                            384
                          ]
                        }
                      ],
                      "schema": "string"
                    },
                    "title": {
                      "name": "title",
                      "global": false,
                      "description": "Content title",
                      "tags": [],
                      "required": false,
                      "type": "string",
                      "declarations": [
                        {
                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            426,
                            441
                          ]
                        }
                      ],
                      "schema": "string"
                    },
                    "_draft": {
                      "name": "_draft",
                      "global": false,
                      "description": "Content draft status",
                      "tags": [],
                      "required": false,
                      "type": "boolean",
                      "declarations": [
                        {
                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            490,
                            507
                          ]
                        }
                      ],
                      "schema": {
                        "kind": "enum",
                        "type": "boolean",
                        "schema": [
                          "false",
                          "true"
                        ]
                      }
                    },
                    "_partial": {
                      "name": "_partial",
                      "global": false,
                      "description": "Content partial status",
                      "tags": [],
                      "required": false,
                      "type": "boolean",
                      "declarations": [
                        {
                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            558,
                            577
                          ]
                        }
                      ],
                      "schema": "boolean"
                    },
                    "_locale": {
                      "name": "_locale",
                      "global": false,
                      "description": "Content locale",
                      "tags": [],
                      "required": false,
                      "type": "string",
                      "declarations": [
                        {
                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            620,
                            637
                          ]
                        }
                      ],
                      "schema": "string"
                    },
                    "_type": {
                      "name": "_type",
                      "global": false,
                      "description": "File type of the content, i.e `markdown`",
                      "tags": [],
                      "required": false,
                      "type": "\"markdown\" | \"yaml\" | \"json\" | \"csv\"",
                      "declarations": [
                        {
                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            706,
                            751
                          ]
                        }
                      ],
                      "schema": {
                        "kind": "enum",
                        "type": "\"markdown\" | \"yaml\" | \"json\" | \"csv\"",
                        "schema": [
                          "\"markdown\"",
                          "\"yaml\"",
                          "\"json\"",
                          "\"csv\""
                        ]
                      }
                    },
                    "_file": {
                      "name": "_file",
                      "global": false,
                      "description": "Path to the file relative to the content directory",
                      "tags": [],
                      "required": false,
                      "type": "string",
                      "declarations": [
                        {
                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            830,
                            845
                          ]
                        }
                      ],
                      "schema": "string"
                    },
                    "_extension": {
                      "name": "_extension",
                      "global": false,
                      "description": "Extension of the file",
                      "tags": [],
                      "required": false,
                      "type": "\"yaml\" | \"json\" | \"csv\" | \"md\" | \"yml\" | \"json5\"",
                      "declarations": [
                        {
                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            895,
                            957
                          ]
                        }
                      ],
                      "schema": {
                        "kind": "enum",
                        "type": "\"yaml\" | \"json\" | \"csv\" | \"md\" | \"yml\" | \"json5\"",
                        "schema": [
                          "\"yaml\"",
                          "\"json\"",
                          "\"csv\"",
                          "\"md\"",
                          "\"yml\"",
                          "\"json5\""
                        ]
                      }
                    }
                  }
                }
              },
              "refresh": {
                "name": "refresh",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "() => Promise<void>",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
                    "range": [
                      6412,
                      6441
                    ]
                  }
                ],
                "schema": {
                  "kind": "event",
                  "type": "(): Promise<void>"
                }
              }
            }
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default: (context: { doc: ParsedContent; refresh: () => Promise<void>; }) => VNode<RendererNode, RendererElement, { ...; }>[]; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            },
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
              "range": [
                6329,
                6483
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default: (context: { doc: ParsedContent; refresh: () => Promise<void>; }) => VNode<RendererNode, RendererElement, { ...; }>[]; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "(context: { doc: ParsedContent; refresh: () => Promise<void>; }) => VNode<RendererNode, RendererElement, { [key: string]: any; }>[]",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
                    "range": [
                      6347,
                      6476
                    ]
                  }
                ],
                "schema": {
                  "kind": "event",
                  "type": "(context: { doc: ParsedContent; refresh: () => Promise<void>; }): VNode<RendererNode, RendererElement, { [key: string]: any; }>[]",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "tag",
          "type": "string",
          "description": "The tag to use for the renderer element if it is used.",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
              "range": [
                3494,
                3606
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "excerpt",
          "type": "boolean",
          "description": "Whether or not to render the excerpt.",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
              "range": [
                3714,
                3803
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        },
        {
          "name": "path",
          "type": "string",
          "description": "The path of the content to load from content source.",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
              "range": [
                3983,
                4099
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "query",
          "type": "undefined",
          "description": "A query builder params object to be passed to <ContentQuery /> component.",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
              "range": [
                4217,
                4345
              ]
            }
          ],
          "schema": "undefined"
        },
        {
          "name": "head",
          "type": "boolean",
          "description": "Whether or not to map the document data to the `head` property.",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
              "range": [
                4453,
                4570
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        }
      ]
    }
  },
  "ContentList": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/ContentList.vue",
    "pascalName": "ContentList",
    "kebabName": "content-list",
    "chunkName": "components/content-list",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/ContentList.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "path",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue.d.ts",
              "range": [
                2373,
                2386
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "query",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "QueryBuilderParams",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue.d.ts",
              "range": [
                2395,
                2421
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "QueryBuilderParams",
            "schema": {
              "first": {
                "name": "first",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "boolean",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      9172,
                      9188
                    ]
                  }
                ],
                "schema": {
                  "kind": "enum",
                  "type": "boolean",
                  "schema": [
                    "false",
                    "true"
                  ]
                }
              },
              "skip": {
                "name": "skip",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "number",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      9193,
                      9207
                    ]
                  }
                ],
                "schema": "number"
              },
              "limit": {
                "name": "limit",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "number",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      9212,
                      9227
                    ]
                  }
                ],
                "schema": "number"
              },
              "only": {
                "name": "only",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "string[]",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      9232,
                      9248
                    ]
                  }
                ],
                "schema": {
                  "kind": "array",
                  "type": "string[]",
                  "schema": [
                    "string"
                  ]
                }
              },
              "without": {
                "name": "without",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "string[]",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      9253,
                      9272
                    ]
                  }
                ],
                "schema": "string[]"
              },
              "sort": {
                "name": "sort",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "SortOptions[]",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      9277,
                      9298
                    ]
                  }
                ],
                "schema": {
                  "kind": "array",
                  "type": "SortOptions[]",
                  "schema": [
                    {
                      "kind": "enum",
                      "type": "SortOptions",
                      "schema": [
                        {
                          "kind": "object",
                          "type": "SortParams",
                          "schema": {
                            "$locale": {
                              "name": "$locale",
                              "global": false,
                              "description": "Locale specifier for sorting\nA string with a BCP 47 language tag",
                              "tags": [
                                {
                                  "name": "default",
                                  "text": "undefined"
                                }
                              ],
                              "required": false,
                              "type": "string",
                              "declarations": [
                                {
                                  "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    3558,
                                    3575
                                  ]
                                }
                              ],
                              "schema": "string"
                            },
                            "$numeric": {
                              "name": "$numeric",
                              "global": false,
                              "description": "Whether numeric collation should be used, such that \"1\" < \"2\" < \"10\".\nPossible values are `true` and `false`;",
                              "tags": [
                                {
                                  "name": "default",
                                  "text": "false"
                                }
                              ],
                              "required": false,
                              "type": "boolean",
                              "declarations": [
                                {
                                  "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    3749,
                                    3768
                                  ]
                                }
                              ],
                              "schema": "boolean"
                            },
                            "$caseFirst": {
                              "name": "$caseFirst",
                              "global": false,
                              "description": "Whether upper case or lower case should sort first.\nPossible values are `\"upper\"`, `\"lower\"`, or `\"false\"`",
                              "tags": [
                                {
                                  "name": "default",
                                  "text": "\"depends on locale\""
                                }
                              ],
                              "required": false,
                              "type": "\"upper\" | \"lower\" | \"false\"",
                              "declarations": [
                                {
                                  "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    3953,
                                    3994
                                  ]
                                }
                              ],
                              "schema": {
                                "kind": "enum",
                                "type": "\"upper\" | \"lower\" | \"false\"",
                                "schema": [
                                  "\"upper\"",
                                  "\"lower\"",
                                  "\"false\""
                                ]
                              }
                            },
                            "$sensitivity": {
                              "name": "$sensitivity",
                              "global": false,
                              "description": "Which differences in the strings should lead to non-zero result values. Possible values are:\n - \"base\": Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A.\n - \"accent\": Only strings that differ in base letters or accents and other diacritic marks compare as unequal. Examples: a ≠ b, a ≠ á, a = A.\n - \"case\": Only strings that differ in base letters or case compare as unequal. Examples: a ≠ b, a = á, a ≠ A.\n - \"variant\": Strings that differ in base letters, accents and other diacritic marks, or case compare as unequal. Other differences may also be taken into consideration. Examples: a ≠ b, a ≠ á, a ≠ A.",
                              "tags": [
                                {
                                  "name": "default",
                                  "text": "\"variant\""
                                }
                              ],
                              "required": false,
                              "type": "\"base\" | \"accent\" | \"case\" | \"variant\"",
                              "declarations": [
                                {
                                  "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    4733,
                                    4787
                                  ]
                                }
                              ],
                              "schema": {
                                "kind": "enum",
                                "type": "\"base\" | \"accent\" | \"case\" | \"variant\"",
                                "schema": [
                                  "\"base\"",
                                  "\"accent\"",
                                  "\"case\"",
                                  "\"variant\""
                                ]
                              }
                            }
                          }
                        },
                        {
                          "kind": "object",
                          "type": "SortFields",
                          "schema": {}
                        }
                      ]
                    }
                  ]
                }
              },
              "where": {
                "name": "where",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "QueryBuilderWhere[]",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      9303,
                      9331
                    ]
                  }
                ],
                "schema": {
                  "kind": "array",
                  "type": "QueryBuilderWhere[]",
                  "schema": [
                    {
                      "kind": "object",
                      "type": "QueryBuilderWhere",
                      "schema": {
                        "$and": {
                          "name": "$and",
                          "global": false,
                          "description": "Match only if all of nested conditions are true",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n $and: [\n   { score: { $gte: 5 } },\n   { score: { $lte: 10 } }\n ]\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "QueryBuilderWhere[]",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                5305,
                                5332
                              ]
                            }
                          ],
                          "schema": "QueryBuilderWhere[]"
                        },
                        "$or": {
                          "name": "$or",
                          "global": false,
                          "description": "Match if any of nested conditions is true",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n $or: [\n   { score: { $gt: 5 } },\n   { score: { $lt: 3 } }\n ]\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "QueryBuilderWhere[]",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                5576,
                                5602
                              ]
                            }
                          ],
                          "schema": "QueryBuilderWhere[]"
                        },
                        "$not": {
                          "name": "$not",
                          "global": false,
                          "description": "Match is condition is false",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $not: 'Hello World'\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                5799,
                                5861
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "enum",
                            "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                            "schema": [
                              "string",
                              "number",
                              "false",
                              "true",
                              {
                                "kind": "object",
                                "type": "RegExp",
                                "schema": {
                                  "exec": {
                                    "name": "exec",
                                    "global": false,
                                    "description": "Executes a search on a string using a regular expression pattern, and returns an array containing the results of that search.",
                                    "tags": [
                                      {
                                        "name": "param",
                                        "text": "string The String object or string literal on which to perform the search."
                                      }
                                    ],
                                    "required": true,
                                    "type": "(string: string) => RegExpExecArray",
                                    "declarations": [
                                      {
                                        "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es5.d.ts",
                                        "range": [
                                          40945,
                                          40990
                                        ]
                                      }
                                    ],
                                    "schema": {
                                      "kind": "event",
                                      "type": "(string: string): RegExpExecArray",
                                      "schema": []
                                    }
                                  },
                                  "test": {
                                    "name": "test",
                                    "global": false,
                                    "description": "Returns a Boolean value that indicates whether or not a pattern exists in a searched string.",
                                    "tags": [
                                      {
                                        "name": "param",
                                        "text": "string String on which to perform the search."
                                      }
                                    ],
                                    "required": true,
                                    "type": "(string: string) => boolean",
                                    "declarations": [
                                      {
                                        "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es5.d.ts",
                                        "range": [
                                          41172,
                                          41202
                                        ]
                                      }
                                    ],
                                    "schema": {
                                      "kind": "event",
                                      "type": "(string: string): boolean",
                                      "schema": []
                                    }
                                  },
                                  "source": {
                                    "name": "source",
                                    "global": false,
                                    "description": "Returns a copy of the text of the regular expression pattern. Read-only. The regExp argument is a Regular expression object. It can be a variable name or a literal.",
                                    "tags": [],
                                    "required": true,
                                    "type": "string",
                                    "declarations": [
                                      {
                                        "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es5.d.ts",
                                        "range": [
                                          41384,
                                          41408
                                        ]
                                      }
                                    ],
                                    "schema": "string"
                                  },
                                  "global": {
                                    "name": "global",
                                    "global": false,
                                    "description": "Returns a Boolean value indicating the state of the global flag (g) used with a regular expression. Default is false. Read-only.",
                                    "tags": [],
                                    "required": true,
                                    "type": "boolean",
                                    "declarations": [
                                      {
                                        "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es5.d.ts",
                                        "range": [
                                          41554,
                                          41579
                                        ]
                                      }
                                    ],
                                    "schema": "boolean"
                                  },
                                  "ignoreCase": {
                                    "name": "ignoreCase",
                                    "global": false,
                                    "description": "Returns a Boolean value indicating the state of the ignoreCase flag (i) used with a regular expression. Default is false. Read-only.",
                                    "tags": [],
                                    "required": true,
                                    "type": "boolean",
                                    "declarations": [
                                      {
                                        "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es5.d.ts",
                                        "range": [
                                          41729,
                                          41758
                                        ]
                                      }
                                    ],
                                    "schema": "boolean"
                                  },
                                  "multiline": {
                                    "name": "multiline",
                                    "global": false,
                                    "description": "Returns a Boolean value indicating the state of the multiline flag (m) used with a regular expression. Default is false. Read-only.",
                                    "tags": [],
                                    "required": true,
                                    "type": "boolean",
                                    "declarations": [
                                      {
                                        "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es5.d.ts",
                                        "range": [
                                          41907,
                                          41935
                                        ]
                                      }
                                    ],
                                    "schema": "boolean"
                                  },
                                  "lastIndex": {
                                    "name": "lastIndex",
                                    "global": false,
                                    "description": "",
                                    "tags": [],
                                    "required": true,
                                    "type": "number",
                                    "declarations": [
                                      {
                                        "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es5.d.ts",
                                        "range": [
                                          41941,
                                          41959
                                        ]
                                      }
                                    ],
                                    "schema": "number"
                                  },
                                  "compile": {
                                    "name": "compile",
                                    "global": false,
                                    "description": "",
                                    "tags": [
                                      {
                                        "name": "deprecated",
                                        "text": "A legacy feature for browser compatibility"
                                      }
                                    ],
                                    "required": true,
                                    "type": "(pattern: string, flags?: string) => RegExp",
                                    "declarations": [
                                      {
                                        "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es5.d.ts",
                                        "range": [
                                          42062,
                                          42109
                                        ]
                                      }
                                    ],
                                    "schema": {
                                      "kind": "event",
                                      "type": "(pattern: string, flags?: string): RegExp",
                                      "schema": []
                                    }
                                  },
                                  "flags": {
                                    "name": "flags",
                                    "global": false,
                                    "description": "Returns a string indicating the flags of the regular expression in question. This field is read-only.\nThe characters in this string are sequenced and concatenated in the following order:\n\n   - \"g\" for global\n   - \"i\" for ignoreCase\n   - \"m\" for multiline\n   - \"u\" for unicode\n   - \"y\" for sticky\n\nIf no flags are set, the value is the empty string.",
                                    "tags": [],
                                    "required": true,
                                    "type": "string",
                                    "declarations": [
                                      {
                                        "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es2015.core.d.ts",
                                        "range": [
                                          14897,
                                          14920
                                        ]
                                      }
                                    ],
                                    "schema": "string"
                                  },
                                  "sticky": {
                                    "name": "sticky",
                                    "global": false,
                                    "description": "Returns a Boolean value indicating the state of the sticky flag (y) used with a regular\nexpression. Default is false. Read-only.",
                                    "tags": [],
                                    "required": true,
                                    "type": "boolean",
                                    "declarations": [
                                      {
                                        "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es2015.core.d.ts",
                                        "range": [
                                          15085,
                                          15110
                                        ]
                                      }
                                    ],
                                    "schema": "boolean"
                                  },
                                  "unicode": {
                                    "name": "unicode",
                                    "global": false,
                                    "description": "Returns a Boolean value indicating the state of the Unicode flag (u) used with a regular\nexpression. Default is false. Read-only.",
                                    "tags": [],
                                    "required": true,
                                    "type": "boolean",
                                    "declarations": [
                                      {
                                        "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es2015.core.d.ts",
                                        "range": [
                                          15276,
                                          15302
                                        ]
                                      }
                                    ],
                                    "schema": "boolean"
                                  },
                                  "dotAll": {
                                    "name": "dotAll",
                                    "global": false,
                                    "description": "Returns a Boolean value indicating the state of the dotAll flag (s) used with a regular expression.\nDefault is false. Read-only.",
                                    "tags": [],
                                    "required": true,
                                    "type": "boolean",
                                    "declarations": [
                                      {
                                        "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es2018.regexp.d.ts",
                                        "range": [
                                          1204,
                                          1229
                                        ]
                                      }
                                    ],
                                    "schema": "boolean"
                                  },
                                  "hasIndices": {
                                    "name": "hasIndices",
                                    "global": false,
                                    "description": "Returns a Boolean value indicating the state of the hasIndices flag (d) used with with a regular expression.\nDefault is false. Read-only.",
                                    "tags": [],
                                    "required": true,
                                    "type": "boolean",
                                    "declarations": [
                                      {
                                        "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es2022.regexp.d.ts",
                                        "range": [
                                          1304,
                                          1333
                                        ]
                                      }
                                    ],
                                    "schema": "boolean"
                                  },
                                  "__@match@3810": {
                                    "name": "__@match@3810",
                                    "global": false,
                                    "description": "Matches a string with this regular expression, and returns an array containing the results of\nthat search.",
                                    "tags": [
                                      {
                                        "name": "param",
                                        "text": "string A string to search within."
                                      }
                                    ],
                                    "required": true,
                                    "type": "(string: string) => RegExpMatchArray",
                                    "declarations": [
                                      {
                                        "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts",
                                        "range": [
                                          5644,
                                          5700
                                        ]
                                      }
                                    ],
                                    "schema": {
                                      "kind": "event",
                                      "type": "(string: string): RegExpMatchArray",
                                      "schema": []
                                    }
                                  },
                                  "__@replace@3812": {
                                    "name": "__@replace@3812",
                                    "global": false,
                                    "description": "Replaces text in a string, using this regular expression.",
                                    "tags": [
                                      {
                                        "name": "param",
                                        "text": "string A String object or string literal whose contents matching against\nthis regular expression will be replaced"
                                      },
                                      {
                                        "name": "param",
                                        "text": "replaceValue A String object or string literal containing the text to replace for every\nsuccessful match of this regular expression."
                                      },
                                      {
                                        "name": "param",
                                        "text": "string A String object or string literal whose contents matching against\nthis regular expression will be replaced"
                                      },
                                      {
                                        "name": "param",
                                        "text": "replacer A function that returns the replacement text."
                                      }
                                    ],
                                    "required": true,
                                    "type": "{ (string: string, replaceValue: string): string; (string: string, replacer: (substring: string, ...args: any[]) => string): string; }",
                                    "declarations": [
                                      {
                                        "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts",
                                        "range": [
                                          6110,
                                          6173
                                        ]
                                      },
                                      {
                                        "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts",
                                        "range": [
                                          6478,
                                          6576
                                        ]
                                      }
                                    ],
                                    "schema": "{ (string: string, replaceValue: string): string; (string: string, replacer: (substring: string, ...args: any[]) => string): string; }"
                                  },
                                  "__@search@3815": {
                                    "name": "__@search@3815",
                                    "global": false,
                                    "description": "Finds the position beginning first substring match in a regular expression search\nusing this regular expression.",
                                    "tags": [
                                      {
                                        "name": "param",
                                        "text": "string The string to search within."
                                      }
                                    ],
                                    "required": true,
                                    "type": "(string: string) => number",
                                    "declarations": [
                                      {
                                        "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts",
                                        "range": [
                                          6782,
                                          6822
                                        ]
                                      }
                                    ],
                                    "schema": {
                                      "kind": "event",
                                      "type": "(string: string): number",
                                      "schema": []
                                    }
                                  },
                                  "__@split@3817": {
                                    "name": "__@split@3817",
                                    "global": false,
                                    "description": "Returns an array of substrings that were delimited by strings in the original input that\nmatch against this regular expression.\n\nIf the regular expression contains capturing parentheses, then each time this\nregular expression matches, the results (including any undefined results) of the\ncapturing parentheses are spliced.",
                                    "tags": [
                                      {
                                        "name": "param",
                                        "text": "string string value to split"
                                      },
                                      {
                                        "name": "param",
                                        "text": "limit if not undefined, the output array is truncated so that it contains no more\nthan 'limit' elements."
                                      }
                                    ],
                                    "required": true,
                                    "type": "(string: string, limit?: number) => string[]",
                                    "declarations": [
                                      {
                                        "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts",
                                        "range": [
                                          7384,
                                          7441
                                        ]
                                      }
                                    ],
                                    "schema": {
                                      "kind": "event",
                                      "type": "(string: string, limit?: number): string[]",
                                      "schema": []
                                    }
                                  },
                                  "__@matchAll@3819": {
                                    "name": "__@matchAll@3819",
                                    "global": false,
                                    "description": "Matches a string with this regular expression, and returns an iterable of matches\ncontaining the results of that search.",
                                    "tags": [
                                      {
                                        "name": "param",
                                        "text": "string A string to search within."
                                      }
                                    ],
                                    "required": true,
                                    "type": "(str: string) => IterableIterator<RegExpMatchArray>",
                                    "declarations": [
                                      {
                                        "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es2020.symbol.wellknown.d.ts",
                                        "range": [
                                          1385,
                                          1452
                                        ]
                                      }
                                    ],
                                    "schema": {
                                      "kind": "event",
                                      "type": "(str: string): IterableIterator<RegExpMatchArray>",
                                      "schema": []
                                    }
                                  }
                                }
                              },
                              "QueryBuilderWhere"
                            ]
                          }
                        },
                        "$eq": {
                          "name": "$eq",
                          "global": false,
                          "description": "Match if item equals condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $eq: 'Hello World'\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | number | boolean | RegExp",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                6060,
                                6101
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "enum",
                            "type": "string | number | boolean | RegExp",
                            "schema": [
                              "string",
                              "number",
                              "false",
                              "true",
                              "RegExp"
                            ]
                          }
                        },
                        "$ne": {
                          "name": "$ne",
                          "global": false,
                          "description": "Match if item not equals condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n score: {\n   $ne: 100\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | number | boolean | RegExp",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                6294,
                                6335
                              ]
                            }
                          ],
                          "schema": "string | number | boolean | RegExp"
                        },
                        "$gt": {
                          "name": "$gt",
                          "global": false,
                          "description": "Check if item is greater than condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n score: {\n   $gt: 99.5\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "number",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                6533,
                                6546
                              ]
                            }
                          ],
                          "schema": "number"
                        },
                        "$gte": {
                          "name": "$gte",
                          "global": false,
                          "description": "Check if item is greater than or equal to condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n score: {\n   $gte: 99.5\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "number",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                6757,
                                6771
                              ]
                            }
                          ],
                          "schema": "number"
                        },
                        "$lt": {
                          "name": "$lt",
                          "global": false,
                          "description": "Check if item is less than condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n score: {\n   $lt: 99.5\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "number",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                6966,
                                6979
                              ]
                            }
                          ],
                          "schema": "number"
                        },
                        "$lte": {
                          "name": "$lte",
                          "global": false,
                          "description": "Check if item is less than or equal to condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n score: {\n   $lte: 99.5\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "number",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                7187,
                                7201
                              ]
                            }
                          ],
                          "schema": "number"
                        },
                        "$regex": {
                          "name": "$regex",
                          "global": false,
                          "description": "Provides regular expression capabilities for pattern matching strings.",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $regex: /^foo/\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | RegExp",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                7435,
                                7460
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "enum",
                            "type": "string | RegExp",
                            "schema": [
                              "string",
                              "RegExp"
                            ]
                          }
                        },
                        "$type": {
                          "name": "$type",
                          "global": false,
                          "description": "Match if type of item equals condition",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n field: {\n   $type: 'boolean'\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                7664,
                                7679
                              ]
                            }
                          ],
                          "schema": "string"
                        },
                        "$exists": {
                          "name": "$exists",
                          "global": false,
                          "description": "Check key existence",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n tag: {\n   $exists: false\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "boolean",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                7860,
                                7878
                              ]
                            }
                          ],
                          "schema": "boolean"
                        },
                        "$contains": {
                          "name": "$contains",
                          "global": false,
                          "description": "Match if item contains every condition or math every rule in condition array",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $contains: ['Hello', 'World']\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | number | boolean | (string | number | boolean)[]",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                8134,
                                8207
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "enum",
                            "type": "string | number | boolean | (string | number | boolean)[]",
                            "schema": [
                              "string",
                              "number",
                              "false",
                              "true",
                              {
                                "kind": "array",
                                "type": "(string | number | boolean)[]",
                                "schema": [
                                  {
                                    "kind": "enum",
                                    "type": "string | number | boolean",
                                    "schema": [
                                      "string",
                                      "number",
                                      "false",
                                      "true"
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        },
                        "$containsAny": {
                          "name": "$containsAny",
                          "global": false,
                          "description": "Match if item contains at least one rule from condition array",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $containsAny: ['Hello', 'World']\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "(string | number | boolean)[]",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                8450,
                                8498
                              ]
                            }
                          ],
                          "schema": "(string | number | boolean)[]"
                        },
                        "$icontains": {
                          "name": "$icontains",
                          "global": false,
                          "description": "Ignore case contains",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n title: {\n   $icontains: 'hello world'\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                8694,
                                8714
                              ]
                            }
                          ],
                          "schema": "string"
                        },
                        "$in": {
                          "name": "$in",
                          "global": false,
                          "description": "Match if item is in condition array",
                          "tags": [
                            {
                              "name": "example",
                              "text": "```ts\nqueryContent().where({\n category: {\n   $in: ['sport', 'nature', 'travel']\n }\n})\n```"
                            }
                          ],
                          "required": false,
                          "type": "string | (string | number | boolean)[]",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                8937,
                                8985
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "enum",
                            "type": "string | (string | number | boolean)[]",
                            "schema": [
                              "string",
                              "(string | number | boolean)[]"
                            ]
                          }
                        },
                        "_id": {
                          "name": "_id",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [],
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_source": {
                          "name": "_source",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [],
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_path": {
                          "name": "_path",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [],
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "title": {
                          "name": "title",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [],
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_draft": {
                          "name": "_draft",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [],
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_partial": {
                          "name": "_partial",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [],
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_locale": {
                          "name": "_locale",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [],
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_type": {
                          "name": "_type",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [],
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_file": {
                          "name": "_file",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [],
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        },
                        "_extension": {
                          "name": "_extension",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                          "declarations": [],
                          "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                        }
                      }
                    }
                  ]
                }
              },
              "surround": {
                "name": "surround",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "{ query: string | QueryBuilderWhere; before?: number; after?: number; }",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      9336,
                      9447
                    ]
                  }
                ],
                "schema": {
                  "kind": "object",
                  "type": "{ query: string | QueryBuilderWhere; before?: number; after?: number; }",
                  "schema": {
                    "query": {
                      "name": "query",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": true,
                      "type": "string | QueryBuilderWhere",
                      "declarations": [
                        {
                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            9357,
                            9391
                          ]
                        }
                      ],
                      "schema": {
                        "kind": "enum",
                        "type": "string | QueryBuilderWhere",
                        "schema": [
                          "string",
                          "QueryBuilderWhere"
                        ]
                      }
                    },
                    "before": {
                      "name": "before",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": false,
                      "type": "number",
                      "declarations": [
                        {
                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            9400,
                            9416
                          ]
                        }
                      ],
                      "schema": "number"
                    },
                    "after": {
                      "name": "after",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": false,
                      "type": "number",
                      "declarations": [
                        {
                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            9425,
                            9440
                          ]
                        }
                      ],
                      "schema": "number"
                    }
                  }
                }
              }
            }
          }
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{ list: ParsedContent[]; refresh: () => Promise<void>; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue.d.ts",
              "range": [
                3377,
                3509
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "{ list: ParsedContent[]; refresh: () => Promise<void>; }",
            "schema": {
              "list": {
                "name": "list",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "ParsedContent[]",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue.d.ts",
                    "range": [
                      3410,
                      3432
                    ]
                  }
                ],
                "schema": {
                  "kind": "array",
                  "type": "ParsedContent[]",
                  "schema": [
                    {
                      "kind": "object",
                      "type": "ParsedContent",
                      "schema": {
                        "excerpt": {
                          "name": "excerpt",
                          "global": false,
                          "description": "Excerpt",
                          "tags": [],
                          "required": false,
                          "type": "MarkdownRoot",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                2459,
                                2482
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "object",
                            "type": "MarkdownRoot",
                            "schema": {
                              "type": {
                                "name": "type",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": true,
                                "type": "\"root\"",
                                "declarations": [
                                  {
                                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1465,
                                      1478
                                    ]
                                  }
                                ],
                                "schema": "\"root\""
                              },
                              "children": {
                                "name": "children",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": true,
                                "type": "MarkdownNode[]",
                                "declarations": [
                                  {
                                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1483,
                                      1508
                                    ]
                                  }
                                ],
                                "schema": {
                                  "kind": "array",
                                  "type": "MarkdownNode[]",
                                  "schema": [
                                    {
                                      "kind": "object",
                                      "type": "MarkdownNode",
                                      "schema": {
                                        "type": {
                                          "name": "type",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": true,
                                          "type": "string",
                                          "declarations": [
                                            {
                                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                              "range": [
                                                1214,
                                                1227
                                              ]
                                            }
                                          ],
                                          "schema": "string"
                                        },
                                        "tag": {
                                          "name": "tag",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": false,
                                          "type": "string",
                                          "declarations": [
                                            {
                                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                              "range": [
                                                1232,
                                                1245
                                              ]
                                            }
                                          ],
                                          "schema": "string"
                                        },
                                        "value": {
                                          "name": "value",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": false,
                                          "type": "string",
                                          "declarations": [
                                            {
                                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                              "range": [
                                                1250,
                                                1265
                                              ]
                                            }
                                          ],
                                          "schema": "string"
                                        },
                                        "props": {
                                          "name": "props",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": false,
                                          "type": "Record<string, any>",
                                          "declarations": [
                                            {
                                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                              "range": [
                                                1270,
                                                1298
                                              ]
                                            }
                                          ],
                                          "schema": "Record<string, any>"
                                        },
                                        "content": {
                                          "name": "content",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": false,
                                          "type": "any",
                                          "declarations": [
                                            {
                                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                              "range": [
                                                1303,
                                                1317
                                              ]
                                            }
                                          ],
                                          "schema": "any"
                                        },
                                        "children": {
                                          "name": "children",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": false,
                                          "type": "MarkdownNode[]",
                                          "declarations": [
                                            {
                                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                              "range": [
                                                1322,
                                                1348
                                              ]
                                            }
                                          ],
                                          "schema": "MarkdownNode[]"
                                        },
                                        "attributes": {
                                          "name": "attributes",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": false,
                                          "type": "Record<string, any>",
                                          "declarations": [
                                            {
                                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                              "range": [
                                                1353,
                                                1386
                                              ]
                                            }
                                          ],
                                          "schema": "Record<string, any>"
                                        },
                                        "fmAttributes": {
                                          "name": "fmAttributes",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": false,
                                          "type": "Record<string, any>",
                                          "declarations": [
                                            {
                                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                              "range": [
                                                1391,
                                                1426
                                              ]
                                            }
                                          ],
                                          "schema": "Record<string, any>"
                                        }
                                      }
                                    }
                                  ]
                                }
                              },
                              "props": {
                                "name": "props",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "Record<string, any>",
                                "declarations": [
                                  {
                                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1513,
                                      1541
                                    ]
                                  }
                                ],
                                "schema": "Record<string, any>"
                              },
                              "toc": {
                                "name": "toc",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "Toc",
                                "declarations": [
                                  {
                                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1546,
                                      1556
                                    ]
                                  }
                                ],
                                "schema": {
                                  "kind": "object",
                                  "type": "Toc",
                                  "schema": {
                                    "title": {
                                      "name": "title",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": true,
                                      "type": "string",
                                      "declarations": [
                                        {
                                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1095,
                                            1109
                                          ]
                                        }
                                      ],
                                      "schema": "string"
                                    },
                                    "depth": {
                                      "name": "depth",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": true,
                                      "type": "number",
                                      "declarations": [
                                        {
                                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1114,
                                            1128
                                          ]
                                        }
                                      ],
                                      "schema": "number"
                                    },
                                    "searchDepth": {
                                      "name": "searchDepth",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": true,
                                      "type": "number",
                                      "declarations": [
                                        {
                                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1133,
                                            1153
                                          ]
                                        }
                                      ],
                                      "schema": "number"
                                    },
                                    "links": {
                                      "name": "links",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": true,
                                      "type": "TocLink[]",
                                      "declarations": [
                                        {
                                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1158,
                                            1175
                                          ]
                                        }
                                      ],
                                      "schema": {
                                        "kind": "array",
                                        "type": "TocLink[]",
                                        "schema": [
                                          {
                                            "kind": "object",
                                            "type": "TocLink",
                                            "schema": {
                                              "id": {
                                                "name": "id",
                                                "global": false,
                                                "description": "",
                                                "tags": [],
                                                "required": true,
                                                "type": "string",
                                                "declarations": [
                                                  {
                                                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                                    "range": [
                                                      991,
                                                      1002
                                                    ]
                                                  }
                                                ],
                                                "schema": "string"
                                              },
                                              "text": {
                                                "name": "text",
                                                "global": false,
                                                "description": "",
                                                "tags": [],
                                                "required": true,
                                                "type": "string",
                                                "declarations": [
                                                  {
                                                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                                    "range": [
                                                      1007,
                                                      1020
                                                    ]
                                                  }
                                                ],
                                                "schema": "string"
                                              },
                                              "depth": {
                                                "name": "depth",
                                                "global": false,
                                                "description": "",
                                                "tags": [],
                                                "required": true,
                                                "type": "number",
                                                "declarations": [
                                                  {
                                                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                                    "range": [
                                                      1025,
                                                      1039
                                                    ]
                                                  }
                                                ],
                                                "schema": "number"
                                              },
                                              "children": {
                                                "name": "children",
                                                "global": false,
                                                "description": "",
                                                "tags": [],
                                                "required": false,
                                                "type": "TocLink[]",
                                                "declarations": [
                                                  {
                                                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                                    "range": [
                                                      1044,
                                                      1065
                                                    ]
                                                  }
                                                ],
                                                "schema": "TocLink[]"
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "body": {
                          "name": "body",
                          "global": false,
                          "description": "Content body",
                          "tags": [],
                          "required": true,
                          "type": "MarkdownRoot",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                2523,
                                2549
                              ]
                            }
                          ],
                          "schema": "MarkdownRoot"
                        },
                        "layout": {
                          "name": "layout",
                          "global": false,
                          "description": "Layout",
                          "tags": [],
                          "required": false,
                          "type": "\"docs\"",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                2319,
                                2338
                              ]
                            }
                          ],
                          "schema": "\"docs\""
                        },
                        "_id": {
                          "name": "_id",
                          "global": false,
                          "description": "Content id",
                          "tags": [],
                          "required": true,
                          "type": "string",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                185,
                                197
                              ]
                            }
                          ],
                          "schema": "string"
                        },
                        "_source": {
                          "name": "_source",
                          "global": false,
                          "description": "Content source",
                          "tags": [],
                          "required": false,
                          "type": "string",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                240,
                                257
                              ]
                            }
                          ],
                          "schema": "string"
                        },
                        "_path": {
                          "name": "_path",
                          "global": false,
                          "description": "Content path, this path is source agnostic and it the content my live in any source",
                          "tags": [],
                          "required": false,
                          "type": "string",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                369,
                                384
                              ]
                            }
                          ],
                          "schema": "string"
                        },
                        "title": {
                          "name": "title",
                          "global": false,
                          "description": "Content title",
                          "tags": [],
                          "required": false,
                          "type": "string",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                426,
                                441
                              ]
                            }
                          ],
                          "schema": "string"
                        },
                        "_draft": {
                          "name": "_draft",
                          "global": false,
                          "description": "Content draft status",
                          "tags": [],
                          "required": false,
                          "type": "boolean",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                490,
                                507
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "enum",
                            "type": "boolean",
                            "schema": [
                              "false",
                              "true"
                            ]
                          }
                        },
                        "_partial": {
                          "name": "_partial",
                          "global": false,
                          "description": "Content partial status",
                          "tags": [],
                          "required": false,
                          "type": "boolean",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                558,
                                577
                              ]
                            }
                          ],
                          "schema": "boolean"
                        },
                        "_locale": {
                          "name": "_locale",
                          "global": false,
                          "description": "Content locale",
                          "tags": [],
                          "required": false,
                          "type": "string",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                620,
                                637
                              ]
                            }
                          ],
                          "schema": "string"
                        },
                        "_type": {
                          "name": "_type",
                          "global": false,
                          "description": "File type of the content, i.e `markdown`",
                          "tags": [],
                          "required": false,
                          "type": "\"markdown\" | \"yaml\" | \"json\" | \"csv\"",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                706,
                                751
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "enum",
                            "type": "\"markdown\" | \"yaml\" | \"json\" | \"csv\"",
                            "schema": [
                              "\"markdown\"",
                              "\"yaml\"",
                              "\"json\"",
                              "\"csv\""
                            ]
                          }
                        },
                        "_file": {
                          "name": "_file",
                          "global": false,
                          "description": "Path to the file relative to the content directory",
                          "tags": [],
                          "required": false,
                          "type": "string",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                830,
                                845
                              ]
                            }
                          ],
                          "schema": "string"
                        },
                        "_extension": {
                          "name": "_extension",
                          "global": false,
                          "description": "Extension of the file",
                          "tags": [],
                          "required": false,
                          "type": "\"yaml\" | \"json\" | \"csv\" | \"md\" | \"yml\" | \"json5\"",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                895,
                                957
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "enum",
                            "type": "\"yaml\" | \"json\" | \"csv\" | \"md\" | \"yml\" | \"json5\"",
                            "schema": [
                              "\"yaml\"",
                              "\"json\"",
                              "\"csv\"",
                              "\"md\"",
                              "\"yml\"",
                              "\"json5\""
                            ]
                          }
                        }
                      }
                    }
                  ]
                }
              },
              "refresh": {
                "name": "refresh",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "() => Promise<void>",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue.d.ts",
                    "range": [
                      3445,
                      3474
                    ]
                  }
                ],
                "schema": {
                  "kind": "event",
                  "type": "(): Promise<void>"
                }
              }
            }
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default: (context: { list: ParsedContent[]; refresh: () => Promise<void>; }) => VNode<RendererNode, RendererElement, { ...; }>[]; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            },
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue.d.ts",
              "range": [
                3359,
                3516
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default: (context: { list: ParsedContent[]; refresh: () => Promise<void>; }) => VNode<RendererNode, RendererElement, { ...; }>[]; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "(context: { list: ParsedContent[]; refresh: () => Promise<void>; }) => VNode<RendererNode, RendererElement, { [key: string]: any; }>[]",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue.d.ts",
                    "range": [
                      3377,
                      3509
                    ]
                  }
                ],
                "schema": {
                  "kind": "event",
                  "type": "(context: { list: ParsedContent[]; refresh: () => Promise<void>; }): VNode<RendererNode, RendererElement, { [key: string]: any; }>[]",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "path",
          "type": "string",
          "description": "The path of the content to load from content source.",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue.d.ts",
              "range": [
                1975,
                2091
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "query",
          "type": "undefined",
          "description": "A query builder params object to be passed to <ContentQuery /> component.",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue.d.ts",
              "range": [
                2209,
                2337
              ]
            }
          ],
          "schema": "undefined"
        }
      ]
    }
  },
  "ContentNavigation": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue",
    "pascalName": "ContentNavigation",
    "kebabName": "content-navigation",
    "chunkName": "components/content-navigation",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "query",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "QueryBuilderParams | QueryBuilder<ParsedContentMeta>",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue.d.ts",
              "range": [
                1708,
                1787
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "QueryBuilderParams | QueryBuilder<ParsedContentMeta>",
            "schema": [
              {
                "kind": "object",
                "type": "QueryBuilderParams",
                "schema": {
                  "first": {
                    "name": "first",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "boolean",
                    "declarations": [
                      {
                        "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                        "range": [
                          9172,
                          9188
                        ]
                      }
                    ],
                    "schema": {
                      "kind": "enum",
                      "type": "boolean",
                      "schema": [
                        "false",
                        "true"
                      ]
                    }
                  },
                  "skip": {
                    "name": "skip",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "number",
                    "declarations": [
                      {
                        "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                        "range": [
                          9193,
                          9207
                        ]
                      }
                    ],
                    "schema": "number"
                  },
                  "limit": {
                    "name": "limit",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "number",
                    "declarations": [
                      {
                        "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                        "range": [
                          9212,
                          9227
                        ]
                      }
                    ],
                    "schema": "number"
                  },
                  "only": {
                    "name": "only",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "string[]",
                    "declarations": [
                      {
                        "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                        "range": [
                          9232,
                          9248
                        ]
                      }
                    ],
                    "schema": {
                      "kind": "array",
                      "type": "string[]",
                      "schema": [
                        "string"
                      ]
                    }
                  },
                  "without": {
                    "name": "without",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "string[]",
                    "declarations": [
                      {
                        "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                        "range": [
                          9253,
                          9272
                        ]
                      }
                    ],
                    "schema": "string[]"
                  },
                  "sort": {
                    "name": "sort",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "SortOptions[]",
                    "declarations": [
                      {
                        "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                        "range": [
                          9277,
                          9298
                        ]
                      }
                    ],
                    "schema": {
                      "kind": "array",
                      "type": "SortOptions[]",
                      "schema": [
                        {
                          "kind": "enum",
                          "type": "SortOptions",
                          "schema": [
                            {
                              "kind": "object",
                              "type": "SortParams",
                              "schema": {
                                "$locale": {
                                  "name": "$locale",
                                  "global": false,
                                  "description": "Locale specifier for sorting\nA string with a BCP 47 language tag",
                                  "tags": [
                                    {
                                      "name": "default",
                                      "text": "undefined"
                                    }
                                  ],
                                  "required": false,
                                  "type": "string",
                                  "declarations": [
                                    {
                                      "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                      "range": [
                                        3558,
                                        3575
                                      ]
                                    }
                                  ],
                                  "schema": "string"
                                },
                                "$numeric": {
                                  "name": "$numeric",
                                  "global": false,
                                  "description": "Whether numeric collation should be used, such that \"1\" < \"2\" < \"10\".\nPossible values are `true` and `false`;",
                                  "tags": [
                                    {
                                      "name": "default",
                                      "text": "false"
                                    }
                                  ],
                                  "required": false,
                                  "type": "boolean",
                                  "declarations": [
                                    {
                                      "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                      "range": [
                                        3749,
                                        3768
                                      ]
                                    }
                                  ],
                                  "schema": "boolean"
                                },
                                "$caseFirst": {
                                  "name": "$caseFirst",
                                  "global": false,
                                  "description": "Whether upper case or lower case should sort first.\nPossible values are `\"upper\"`, `\"lower\"`, or `\"false\"`",
                                  "tags": [
                                    {
                                      "name": "default",
                                      "text": "\"depends on locale\""
                                    }
                                  ],
                                  "required": false,
                                  "type": "\"upper\" | \"lower\" | \"false\"",
                                  "declarations": [
                                    {
                                      "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                      "range": [
                                        3953,
                                        3994
                                      ]
                                    }
                                  ],
                                  "schema": {
                                    "kind": "enum",
                                    "type": "\"upper\" | \"lower\" | \"false\"",
                                    "schema": [
                                      "\"upper\"",
                                      "\"lower\"",
                                      "\"false\""
                                    ]
                                  }
                                },
                                "$sensitivity": {
                                  "name": "$sensitivity",
                                  "global": false,
                                  "description": "Which differences in the strings should lead to non-zero result values. Possible values are:\n - \"base\": Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A.\n - \"accent\": Only strings that differ in base letters or accents and other diacritic marks compare as unequal. Examples: a ≠ b, a ≠ á, a = A.\n - \"case\": Only strings that differ in base letters or case compare as unequal. Examples: a ≠ b, a = á, a ≠ A.\n - \"variant\": Strings that differ in base letters, accents and other diacritic marks, or case compare as unequal. Other differences may also be taken into consideration. Examples: a ≠ b, a ≠ á, a ≠ A.",
                                  "tags": [
                                    {
                                      "name": "default",
                                      "text": "\"variant\""
                                    }
                                  ],
                                  "required": false,
                                  "type": "\"base\" | \"accent\" | \"case\" | \"variant\"",
                                  "declarations": [
                                    {
                                      "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                      "range": [
                                        4733,
                                        4787
                                      ]
                                    }
                                  ],
                                  "schema": {
                                    "kind": "enum",
                                    "type": "\"base\" | \"accent\" | \"case\" | \"variant\"",
                                    "schema": [
                                      "\"base\"",
                                      "\"accent\"",
                                      "\"case\"",
                                      "\"variant\""
                                    ]
                                  }
                                }
                              }
                            },
                            {
                              "kind": "object",
                              "type": "SortFields",
                              "schema": {}
                            }
                          ]
                        }
                      ]
                    }
                  },
                  "where": {
                    "name": "where",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "QueryBuilderWhere[]",
                    "declarations": [
                      {
                        "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                        "range": [
                          9303,
                          9331
                        ]
                      }
                    ],
                    "schema": {
                      "kind": "array",
                      "type": "QueryBuilderWhere[]",
                      "schema": [
                        {
                          "kind": "object",
                          "type": "QueryBuilderWhere",
                          "schema": {
                            "$and": {
                              "name": "$and",
                              "global": false,
                              "description": "Match only if all of nested conditions are true",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n $and: [\n   { score: { $gte: 5 } },\n   { score: { $lte: 10 } }\n ]\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "QueryBuilderWhere[]",
                              "declarations": [
                                {
                                  "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    5305,
                                    5332
                                  ]
                                }
                              ],
                              "schema": "QueryBuilderWhere[]"
                            },
                            "$or": {
                              "name": "$or",
                              "global": false,
                              "description": "Match if any of nested conditions is true",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n $or: [\n   { score: { $gt: 5 } },\n   { score: { $lt: 3 } }\n ]\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "QueryBuilderWhere[]",
                              "declarations": [
                                {
                                  "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    5576,
                                    5602
                                  ]
                                }
                              ],
                              "schema": "QueryBuilderWhere[]"
                            },
                            "$not": {
                              "name": "$not",
                              "global": false,
                              "description": "Match is condition is false",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n title: {\n   $not: 'Hello World'\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                              "declarations": [
                                {
                                  "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    5799,
                                    5861
                                  ]
                                }
                              ],
                              "schema": {
                                "kind": "enum",
                                "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                                "schema": [
                                  "string",
                                  "number",
                                  "false",
                                  "true",
                                  {
                                    "kind": "object",
                                    "type": "RegExp",
                                    "schema": {}
                                  },
                                  "QueryBuilderWhere"
                                ]
                              }
                            },
                            "$eq": {
                              "name": "$eq",
                              "global": false,
                              "description": "Match if item equals condition",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n title: {\n   $eq: 'Hello World'\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "string | number | boolean | RegExp",
                              "declarations": [
                                {
                                  "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    6060,
                                    6101
                                  ]
                                }
                              ],
                              "schema": {
                                "kind": "enum",
                                "type": "string | number | boolean | RegExp",
                                "schema": [
                                  "string",
                                  "number",
                                  "false",
                                  "true",
                                  "RegExp"
                                ]
                              }
                            },
                            "$ne": {
                              "name": "$ne",
                              "global": false,
                              "description": "Match if item not equals condition",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n score: {\n   $ne: 100\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "string | number | boolean | RegExp",
                              "declarations": [
                                {
                                  "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    6294,
                                    6335
                                  ]
                                }
                              ],
                              "schema": "string | number | boolean | RegExp"
                            },
                            "$gt": {
                              "name": "$gt",
                              "global": false,
                              "description": "Check if item is greater than condition",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n score: {\n   $gt: 99.5\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "number",
                              "declarations": [
                                {
                                  "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    6533,
                                    6546
                                  ]
                                }
                              ],
                              "schema": "number"
                            },
                            "$gte": {
                              "name": "$gte",
                              "global": false,
                              "description": "Check if item is greater than or equal to condition",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n score: {\n   $gte: 99.5\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "number",
                              "declarations": [
                                {
                                  "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    6757,
                                    6771
                                  ]
                                }
                              ],
                              "schema": "number"
                            },
                            "$lt": {
                              "name": "$lt",
                              "global": false,
                              "description": "Check if item is less than condition",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n score: {\n   $lt: 99.5\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "number",
                              "declarations": [
                                {
                                  "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    6966,
                                    6979
                                  ]
                                }
                              ],
                              "schema": "number"
                            },
                            "$lte": {
                              "name": "$lte",
                              "global": false,
                              "description": "Check if item is less than or equal to condition",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n score: {\n   $lte: 99.5\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "number",
                              "declarations": [
                                {
                                  "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    7187,
                                    7201
                                  ]
                                }
                              ],
                              "schema": "number"
                            },
                            "$regex": {
                              "name": "$regex",
                              "global": false,
                              "description": "Provides regular expression capabilities for pattern matching strings.",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n title: {\n   $regex: /^foo/\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "string | RegExp",
                              "declarations": [
                                {
                                  "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    7435,
                                    7460
                                  ]
                                }
                              ],
                              "schema": {
                                "kind": "enum",
                                "type": "string | RegExp",
                                "schema": [
                                  "string",
                                  "RegExp"
                                ]
                              }
                            },
                            "$type": {
                              "name": "$type",
                              "global": false,
                              "description": "Match if type of item equals condition",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n field: {\n   $type: 'boolean'\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "string",
                              "declarations": [
                                {
                                  "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    7664,
                                    7679
                                  ]
                                }
                              ],
                              "schema": "string"
                            },
                            "$exists": {
                              "name": "$exists",
                              "global": false,
                              "description": "Check key existence",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n tag: {\n   $exists: false\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "boolean",
                              "declarations": [
                                {
                                  "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    7860,
                                    7878
                                  ]
                                }
                              ],
                              "schema": "boolean"
                            },
                            "$contains": {
                              "name": "$contains",
                              "global": false,
                              "description": "Match if item contains every condition or math every rule in condition array",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n title: {\n   $contains: ['Hello', 'World']\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "string | number | boolean | (string | number | boolean)[]",
                              "declarations": [
                                {
                                  "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    8134,
                                    8207
                                  ]
                                }
                              ],
                              "schema": {
                                "kind": "enum",
                                "type": "string | number | boolean | (string | number | boolean)[]",
                                "schema": [
                                  "string",
                                  "number",
                                  "false",
                                  "true",
                                  {
                                    "kind": "array",
                                    "type": "(string | number | boolean)[]",
                                    "schema": [
                                      {
                                        "kind": "enum",
                                        "type": "string | number | boolean",
                                        "schema": [
                                          "string",
                                          "number",
                                          "false",
                                          "true"
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            },
                            "$containsAny": {
                              "name": "$containsAny",
                              "global": false,
                              "description": "Match if item contains at least one rule from condition array",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n title: {\n   $containsAny: ['Hello', 'World']\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "(string | number | boolean)[]",
                              "declarations": [
                                {
                                  "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    8450,
                                    8498
                                  ]
                                }
                              ],
                              "schema": "(string | number | boolean)[]"
                            },
                            "$icontains": {
                              "name": "$icontains",
                              "global": false,
                              "description": "Ignore case contains",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n title: {\n   $icontains: 'hello world'\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "string",
                              "declarations": [
                                {
                                  "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    8694,
                                    8714
                                  ]
                                }
                              ],
                              "schema": "string"
                            },
                            "$in": {
                              "name": "$in",
                              "global": false,
                              "description": "Match if item is in condition array",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n category: {\n   $in: ['sport', 'nature', 'travel']\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "string | (string | number | boolean)[]",
                              "declarations": [
                                {
                                  "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                  "range": [
                                    8937,
                                    8985
                                  ]
                                }
                              ],
                              "schema": {
                                "kind": "enum",
                                "type": "string | (string | number | boolean)[]",
                                "schema": [
                                  "string",
                                  "(string | number | boolean)[]"
                                ]
                              }
                            },
                            "_id": {
                              "name": "_id",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                              "declarations": [],
                              "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                            },
                            "_source": {
                              "name": "_source",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                              "declarations": [],
                              "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                            },
                            "_path": {
                              "name": "_path",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                              "declarations": [],
                              "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                            },
                            "title": {
                              "name": "title",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                              "declarations": [],
                              "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                            },
                            "_draft": {
                              "name": "_draft",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                              "declarations": [],
                              "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                            },
                            "_partial": {
                              "name": "_partial",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                              "declarations": [],
                              "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                            },
                            "_locale": {
                              "name": "_locale",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                              "declarations": [],
                              "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                            },
                            "_type": {
                              "name": "_type",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                              "declarations": [],
                              "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                            },
                            "_file": {
                              "name": "_file",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                              "declarations": [],
                              "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                            },
                            "_extension": {
                              "name": "_extension",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere",
                              "declarations": [],
                              "schema": "string | number | boolean | RegExp | QueryBuilderWhere"
                            }
                          }
                        }
                      ]
                    }
                  },
                  "surround": {
                    "name": "surround",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "{ query: string | QueryBuilderWhere; before?: number; after?: number; }",
                    "declarations": [
                      {
                        "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                        "range": [
                          9336,
                          9447
                        ]
                      }
                    ],
                    "schema": {
                      "kind": "object",
                      "type": "{ query: string | QueryBuilderWhere; before?: number; after?: number; }",
                      "schema": {
                        "query": {
                          "name": "query",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": true,
                          "type": "string | QueryBuilderWhere",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                9357,
                                9391
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "enum",
                            "type": "string | QueryBuilderWhere",
                            "schema": [
                              "string",
                              "QueryBuilderWhere"
                            ]
                          }
                        },
                        "before": {
                          "name": "before",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "number",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                9400,
                                9416
                              ]
                            }
                          ],
                          "schema": "number"
                        },
                        "after": {
                          "name": "after",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "number",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                9425,
                                9440
                              ]
                            }
                          ],
                          "schema": "number"
                        }
                      }
                    }
                  }
                }
              },
              "QueryBuilder<ParsedContentMeta>"
            ]
          }
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{ navigation: NavItem[]; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue.d.ts",
              "range": [
                2590,
                2687
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "{ navigation: NavItem[]; }",
            "schema": {
              "navigation": {
                "name": "navigation",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "NavItem[]",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue.d.ts",
                    "range": [
                      2630,
                      2652
                    ]
                  }
                ],
                "schema": {
                  "kind": "array",
                  "type": "NavItem[]",
                  "schema": [
                    {
                      "kind": "object",
                      "type": "NavItem",
                      "schema": {
                        "title": {
                          "name": "title",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": true,
                          "type": "string",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                11206,
                                11220
                              ]
                            }
                          ],
                          "schema": "string"
                        },
                        "_path": {
                          "name": "_path",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": true,
                          "type": "string",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                11225,
                                11239
                              ]
                            }
                          ],
                          "schema": "string"
                        },
                        "_id": {
                          "name": "_id",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                11244,
                                11257
                              ]
                            }
                          ],
                          "schema": "string"
                        },
                        "_draft": {
                          "name": "_draft",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "boolean",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                11262,
                                11279
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "enum",
                            "type": "boolean",
                            "schema": [
                              "false",
                              "true"
                            ]
                          }
                        },
                        "children": {
                          "name": "children",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "NavItem[]",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                11284,
                                11305
                              ]
                            }
                          ],
                          "schema": "NavItem[]"
                        }
                      }
                    }
                  ]
                }
              }
            }
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default: ({ navigation }: { navigation: NavItem[]; }) => VNode<RendererNode, RendererElement, { ...; }>[]; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            },
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue.d.ts",
              "range": [
                2572,
                2694
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default: ({ navigation }: { navigation: NavItem[]; }) => VNode<RendererNode, RendererElement, { ...; }>[]; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "({ navigation }: { navigation: NavItem[]; }) => VNode<RendererNode, RendererElement, { [key: string]: any; }>[]",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue.d.ts",
                    "range": [
                      2590,
                      2687
                    ]
                  }
                ],
                "schema": {
                  "kind": "event",
                  "type": "({ navigation }: { navigation: NavItem[]; }): VNode<RendererNode, RendererElement, { [key: string]: any; }>[]",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "query",
          "type": "undefined",
          "description": "A query to be passed to `fetchContentNavigation()`.",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue.d.ts",
              "range": [
                1461,
                1642
              ]
            }
          ],
          "schema": "undefined"
        },
        {
          "name": "navigation",
          "type": "any",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue.d.ts",
              "range": [
                1662,
                1678
              ]
            }
          ],
          "schema": "any"
        }
      ]
    }
  },
  "ContentQuery": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue",
    "pascalName": "ContentQuery",
    "kebabName": "content-query",
    "chunkName": "components/content-query",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "skip",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                6505,
                6518
              ]
            }
          ],
          "schema": "number"
        },
        {
          "name": "limit",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                6527,
                6541
              ]
            }
          ],
          "schema": "number"
        },
        {
          "name": "only",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string[]",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                6550,
                6565
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "string[]",
            "schema": [
              "string"
            ]
          }
        },
        {
          "name": "without",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string[]",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                6574,
                6592
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "string[]",
            "schema": [
              "string"
            ]
          }
        },
        {
          "name": "sort",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "SortParams",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                6601,
                6618
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "SortParams",
            "schema": {
              "$locale": {
                "name": "$locale",
                "global": false,
                "description": "Locale specifier for sorting\nA string with a BCP 47 language tag",
                "tags": [
                  {
                    "name": "default",
                    "text": "undefined"
                  }
                ],
                "required": false,
                "type": "string",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      3558,
                      3575
                    ]
                  }
                ],
                "schema": "string"
              },
              "$numeric": {
                "name": "$numeric",
                "global": false,
                "description": "Whether numeric collation should be used, such that \"1\" < \"2\" < \"10\".\nPossible values are `true` and `false`;",
                "tags": [
                  {
                    "name": "default",
                    "text": "false"
                  }
                ],
                "required": false,
                "type": "boolean",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      3749,
                      3768
                    ]
                  }
                ],
                "schema": {
                  "kind": "enum",
                  "type": "boolean",
                  "schema": [
                    "false",
                    "true"
                  ]
                }
              },
              "$caseFirst": {
                "name": "$caseFirst",
                "global": false,
                "description": "Whether upper case or lower case should sort first.\nPossible values are `\"upper\"`, `\"lower\"`, or `\"false\"`",
                "tags": [
                  {
                    "name": "default",
                    "text": "\"depends on locale\""
                  }
                ],
                "required": false,
                "type": "\"upper\" | \"lower\" | \"false\"",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      3953,
                      3994
                    ]
                  }
                ],
                "schema": {
                  "kind": "enum",
                  "type": "\"upper\" | \"lower\" | \"false\"",
                  "schema": [
                    "\"upper\"",
                    "\"lower\"",
                    "\"false\""
                  ]
                }
              },
              "$sensitivity": {
                "name": "$sensitivity",
                "global": false,
                "description": "Which differences in the strings should lead to non-zero result values. Possible values are:\n - \"base\": Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A.\n - \"accent\": Only strings that differ in base letters or accents and other diacritic marks compare as unequal. Examples: a ≠ b, a ≠ á, a = A.\n - \"case\": Only strings that differ in base letters or case compare as unequal. Examples: a ≠ b, a = á, a ≠ A.\n - \"variant\": Strings that differ in base letters, accents and other diacritic marks, or case compare as unequal. Other differences may also be taken into consideration. Examples: a ≠ b, a ≠ á, a ≠ A.",
                "tags": [
                  {
                    "name": "default",
                    "text": "\"variant\""
                  }
                ],
                "required": false,
                "type": "\"base\" | \"accent\" | \"case\" | \"variant\"",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      4733,
                      4787
                    ]
                  }
                ],
                "schema": {
                  "kind": "enum",
                  "type": "\"base\" | \"accent\" | \"case\" | \"variant\"",
                  "schema": [
                    "\"base\"",
                    "\"accent\"",
                    "\"case\"",
                    "\"variant\""
                  ]
                }
              }
            }
          }
        },
        {
          "name": "where",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "{ [key: string]: any; }",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                6627,
                6678
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "{ [key: string]: any; }",
            "schema": {}
          }
        },
        {
          "name": "find",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "\"surround\" | \"one\"",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                6687,
                6712
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "\"surround\" | \"one\"",
            "schema": [
              "\"surround\"",
              "\"one\""
            ]
          }
        },
        {
          "name": "path",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                6721,
                6734
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "locale",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                6743,
                6758
              ]
            }
          ],
          "schema": "string"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "ContentQueryDefaultSlotContext",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                8930,
                9004
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "ContentQueryDefaultSlotContext",
            "schema": {
              "data": {
                "name": "data",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "ParsedContent | ParsedContent[]",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
                    "range": [
                      162,
                      205
                    ]
                  }
                ],
                "schema": {
                  "kind": "enum",
                  "type": "ParsedContent | ParsedContent[]",
                  "schema": [
                    {
                      "kind": "object",
                      "type": "ParsedContent",
                      "schema": {
                        "excerpt": {
                          "name": "excerpt",
                          "global": false,
                          "description": "Excerpt",
                          "tags": [],
                          "required": false,
                          "type": "MarkdownRoot",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                2459,
                                2482
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "object",
                            "type": "MarkdownRoot",
                            "schema": {
                              "type": {
                                "name": "type",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": true,
                                "type": "\"root\"",
                                "declarations": [
                                  {
                                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1465,
                                      1478
                                    ]
                                  }
                                ],
                                "schema": "\"root\""
                              },
                              "children": {
                                "name": "children",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": true,
                                "type": "MarkdownNode[]",
                                "declarations": [
                                  {
                                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1483,
                                      1508
                                    ]
                                  }
                                ],
                                "schema": {
                                  "kind": "array",
                                  "type": "MarkdownNode[]",
                                  "schema": [
                                    {
                                      "kind": "object",
                                      "type": "MarkdownNode",
                                      "schema": {
                                        "type": {
                                          "name": "type",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": true,
                                          "type": "string",
                                          "declarations": [
                                            {
                                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                              "range": [
                                                1214,
                                                1227
                                              ]
                                            }
                                          ],
                                          "schema": "string"
                                        },
                                        "tag": {
                                          "name": "tag",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": false,
                                          "type": "string",
                                          "declarations": [
                                            {
                                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                              "range": [
                                                1232,
                                                1245
                                              ]
                                            }
                                          ],
                                          "schema": "string"
                                        },
                                        "value": {
                                          "name": "value",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": false,
                                          "type": "string",
                                          "declarations": [
                                            {
                                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                              "range": [
                                                1250,
                                                1265
                                              ]
                                            }
                                          ],
                                          "schema": "string"
                                        },
                                        "props": {
                                          "name": "props",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": false,
                                          "type": "Record<string, any>",
                                          "declarations": [
                                            {
                                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                              "range": [
                                                1270,
                                                1298
                                              ]
                                            }
                                          ],
                                          "schema": "Record<string, any>"
                                        },
                                        "content": {
                                          "name": "content",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": false,
                                          "type": "any",
                                          "declarations": [
                                            {
                                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                              "range": [
                                                1303,
                                                1317
                                              ]
                                            }
                                          ],
                                          "schema": "any"
                                        },
                                        "children": {
                                          "name": "children",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": false,
                                          "type": "MarkdownNode[]",
                                          "declarations": [
                                            {
                                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                              "range": [
                                                1322,
                                                1348
                                              ]
                                            }
                                          ],
                                          "schema": "MarkdownNode[]"
                                        },
                                        "attributes": {
                                          "name": "attributes",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": false,
                                          "type": "Record<string, any>",
                                          "declarations": [
                                            {
                                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                              "range": [
                                                1353,
                                                1386
                                              ]
                                            }
                                          ],
                                          "schema": "Record<string, any>"
                                        },
                                        "fmAttributes": {
                                          "name": "fmAttributes",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": false,
                                          "type": "Record<string, any>",
                                          "declarations": [
                                            {
                                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                              "range": [
                                                1391,
                                                1426
                                              ]
                                            }
                                          ],
                                          "schema": "Record<string, any>"
                                        }
                                      }
                                    }
                                  ]
                                }
                              },
                              "props": {
                                "name": "props",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "Record<string, any>",
                                "declarations": [
                                  {
                                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1513,
                                      1541
                                    ]
                                  }
                                ],
                                "schema": "Record<string, any>"
                              },
                              "toc": {
                                "name": "toc",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "Toc",
                                "declarations": [
                                  {
                                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1546,
                                      1556
                                    ]
                                  }
                                ],
                                "schema": {
                                  "kind": "object",
                                  "type": "Toc",
                                  "schema": {
                                    "title": {
                                      "name": "title",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": true,
                                      "type": "string",
                                      "declarations": [
                                        {
                                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1095,
                                            1109
                                          ]
                                        }
                                      ],
                                      "schema": "string"
                                    },
                                    "depth": {
                                      "name": "depth",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": true,
                                      "type": "number",
                                      "declarations": [
                                        {
                                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1114,
                                            1128
                                          ]
                                        }
                                      ],
                                      "schema": "number"
                                    },
                                    "searchDepth": {
                                      "name": "searchDepth",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": true,
                                      "type": "number",
                                      "declarations": [
                                        {
                                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1133,
                                            1153
                                          ]
                                        }
                                      ],
                                      "schema": "number"
                                    },
                                    "links": {
                                      "name": "links",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": true,
                                      "type": "TocLink[]",
                                      "declarations": [
                                        {
                                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1158,
                                            1175
                                          ]
                                        }
                                      ],
                                      "schema": {
                                        "kind": "array",
                                        "type": "TocLink[]",
                                        "schema": [
                                          {
                                            "kind": "object",
                                            "type": "TocLink",
                                            "schema": {
                                              "id": {
                                                "name": "id",
                                                "global": false,
                                                "description": "",
                                                "tags": [],
                                                "required": true,
                                                "type": "string",
                                                "declarations": [
                                                  {
                                                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                                    "range": [
                                                      991,
                                                      1002
                                                    ]
                                                  }
                                                ],
                                                "schema": "string"
                                              },
                                              "text": {
                                                "name": "text",
                                                "global": false,
                                                "description": "",
                                                "tags": [],
                                                "required": true,
                                                "type": "string",
                                                "declarations": [
                                                  {
                                                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                                    "range": [
                                                      1007,
                                                      1020
                                                    ]
                                                  }
                                                ],
                                                "schema": "string"
                                              },
                                              "depth": {
                                                "name": "depth",
                                                "global": false,
                                                "description": "",
                                                "tags": [],
                                                "required": true,
                                                "type": "number",
                                                "declarations": [
                                                  {
                                                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                                    "range": [
                                                      1025,
                                                      1039
                                                    ]
                                                  }
                                                ],
                                                "schema": "number"
                                              },
                                              "children": {
                                                "name": "children",
                                                "global": false,
                                                "description": "",
                                                "tags": [],
                                                "required": false,
                                                "type": "TocLink[]",
                                                "declarations": [
                                                  {
                                                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                                    "range": [
                                                      1044,
                                                      1065
                                                    ]
                                                  }
                                                ],
                                                "schema": "TocLink[]"
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "body": {
                          "name": "body",
                          "global": false,
                          "description": "Content body",
                          "tags": [],
                          "required": true,
                          "type": "MarkdownRoot",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                2523,
                                2549
                              ]
                            }
                          ],
                          "schema": "MarkdownRoot"
                        },
                        "layout": {
                          "name": "layout",
                          "global": false,
                          "description": "Layout",
                          "tags": [],
                          "required": false,
                          "type": "\"docs\"",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                2319,
                                2338
                              ]
                            }
                          ],
                          "schema": "\"docs\""
                        },
                        "_id": {
                          "name": "_id",
                          "global": false,
                          "description": "Content id",
                          "tags": [],
                          "required": true,
                          "type": "string",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                185,
                                197
                              ]
                            }
                          ],
                          "schema": "string"
                        },
                        "_source": {
                          "name": "_source",
                          "global": false,
                          "description": "Content source",
                          "tags": [],
                          "required": false,
                          "type": "string",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                240,
                                257
                              ]
                            }
                          ],
                          "schema": "string"
                        },
                        "_path": {
                          "name": "_path",
                          "global": false,
                          "description": "Content path, this path is source agnostic and it the content my live in any source",
                          "tags": [],
                          "required": false,
                          "type": "string",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                369,
                                384
                              ]
                            }
                          ],
                          "schema": "string"
                        },
                        "title": {
                          "name": "title",
                          "global": false,
                          "description": "Content title",
                          "tags": [],
                          "required": false,
                          "type": "string",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                426,
                                441
                              ]
                            }
                          ],
                          "schema": "string"
                        },
                        "_draft": {
                          "name": "_draft",
                          "global": false,
                          "description": "Content draft status",
                          "tags": [],
                          "required": false,
                          "type": "boolean",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                490,
                                507
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "enum",
                            "type": "boolean",
                            "schema": [
                              "false",
                              "true"
                            ]
                          }
                        },
                        "_partial": {
                          "name": "_partial",
                          "global": false,
                          "description": "Content partial status",
                          "tags": [],
                          "required": false,
                          "type": "boolean",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                558,
                                577
                              ]
                            }
                          ],
                          "schema": "boolean"
                        },
                        "_locale": {
                          "name": "_locale",
                          "global": false,
                          "description": "Content locale",
                          "tags": [],
                          "required": false,
                          "type": "string",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                620,
                                637
                              ]
                            }
                          ],
                          "schema": "string"
                        },
                        "_type": {
                          "name": "_type",
                          "global": false,
                          "description": "File type of the content, i.e `markdown`",
                          "tags": [],
                          "required": false,
                          "type": "\"markdown\" | \"yaml\" | \"json\" | \"csv\"",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                706,
                                751
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "enum",
                            "type": "\"markdown\" | \"yaml\" | \"json\" | \"csv\"",
                            "schema": [
                              "\"markdown\"",
                              "\"yaml\"",
                              "\"json\"",
                              "\"csv\""
                            ]
                          }
                        },
                        "_file": {
                          "name": "_file",
                          "global": false,
                          "description": "Path to the file relative to the content directory",
                          "tags": [],
                          "required": false,
                          "type": "string",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                830,
                                845
                              ]
                            }
                          ],
                          "schema": "string"
                        },
                        "_extension": {
                          "name": "_extension",
                          "global": false,
                          "description": "Extension of the file",
                          "tags": [],
                          "required": false,
                          "type": "\"yaml\" | \"json\" | \"csv\" | \"md\" | \"yml\" | \"json5\"",
                          "declarations": [
                            {
                              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                895,
                                957
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "enum",
                            "type": "\"yaml\" | \"json\" | \"csv\" | \"md\" | \"yml\" | \"json5\"",
                            "schema": [
                              "\"yaml\"",
                              "\"json\"",
                              "\"csv\"",
                              "\"md\"",
                              "\"yml\"",
                              "\"json5\""
                            ]
                          }
                        }
                      }
                    },
                    {
                      "kind": "array",
                      "type": "ParsedContent[]",
                      "schema": [
                        "ParsedContent"
                      ]
                    }
                  ]
                }
              },
              "refresh": {
                "name": "refresh",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "() => Promise<void>",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
                    "range": [
                      210,
                      239
                    ]
                  }
                ],
                "schema": {
                  "kind": "event",
                  "type": "(): Promise<void>"
                }
              },
              "isPartial": {
                "name": "isPartial",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "boolean",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
                    "range": [
                      244,
                      263
                    ]
                  }
                ],
                "schema": "boolean"
              }
            }
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default: (context: ContentQueryDefaultSlotContext) => VNode<RendererNode, RendererElement, { ...; }>[]; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            },
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                8912,
                9011
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default: (context: ContentQueryDefaultSlotContext) => VNode<RendererNode, RendererElement, { ...; }>[]; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "(context: ContentQueryDefaultSlotContext) => VNode<RendererNode, RendererElement, { [key: string]: any; }>[]",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
                    "range": [
                      8930,
                      9004
                    ]
                  }
                ],
                "schema": {
                  "kind": "event",
                  "type": "(context: ContentQueryDefaultSlotContext): VNode<RendererNode, RendererElement, { [key: string]: any; }>[]",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "sort",
          "type": "undefined",
          "description": "Sort results",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                5522,
                5641
              ]
            }
          ],
          "schema": "undefined"
        },
        {
          "name": "find",
          "type": "\"surround\" | \"one\"",
          "description": "A type of query to be made.",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                6272,
                6399
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "\"surround\" | \"one\"",
            "schema": [
              "\"surround\"",
              "\"one\""
            ]
          }
        },
        {
          "name": "path",
          "type": "string",
          "description": "The path of the content to load from content source.",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                4752,
                4868
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "only",
          "type": "string[]",
          "description": "Select a subset of fields",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                4938,
                5055
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "string[]",
            "schema": [
              "string"
            ]
          }
        },
        {
          "name": "without",
          "type": "string[]",
          "description": "Remove a subset of fields",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                5125,
                5245
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "string[]",
            "schema": [
              "string"
            ]
          }
        },
        {
          "name": "where",
          "type": "undefined",
          "description": "Filter results",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                5304,
                5465
              ]
            }
          ],
          "schema": "undefined"
        },
        {
          "name": "limit",
          "type": "number",
          "description": "Limit number of results",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                5709,
                5825
              ]
            }
          ],
          "schema": "number"
        },
        {
          "name": "skip",
          "type": "number",
          "description": "Skip number of results",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                5892,
                6007
              ]
            }
          ],
          "schema": "number"
        },
        {
          "name": "locale",
          "type": "string",
          "description": "Filter contents based on locale",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                6083,
                6200
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "isPartial",
          "type": "any",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                6419,
                6434
              ]
            }
          ],
          "schema": "any"
        },
        {
          "name": "data",
          "type": "any",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                6443,
                6453
              ]
            }
          ],
          "schema": "any"
        },
        {
          "name": "refresh",
          "type": "any",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
              "range": [
                6462,
                6475
              ]
            }
          ],
          "schema": "any"
        }
      ]
    }
  },
  "ContentRenderer": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue",
    "pascalName": "ContentRenderer",
    "kebabName": "content-renderer",
    "chunkName": "components/content-renderer",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "tag",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue.d.ts",
              "range": [
                1256,
                1268
              ]
            }
          ],
          "schema": "string",
          "default": "\"div\""
        },
        {
          "name": "value",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "Record<string, any>",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue.d.ts",
              "range": [
                1273,
                1300
              ]
            }
          ],
          "schema": "Record<string, any>",
          "default": "{}"
        },
        {
          "name": "excerpt",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue.d.ts",
              "range": [
                1234,
                1251
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          },
          "default": "false"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "tag",
          "type": "string",
          "description": "The tag to use for the renderer element if it is used.",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue.d.ts",
              "range": [
                1151,
                1222
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "excerpt",
          "type": "boolean",
          "description": "Whether or not to render the excerpt.",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue.d.ts",
              "range": [
                969,
                1046
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        },
        {
          "name": "value",
          "type": "Record<string, any>",
          "description": "The document to render.",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue.d.ts",
              "range": [
                781,
                881
              ]
            }
          ],
          "schema": "Record<string, any>"
        }
      ]
    }
  },
  "ContentRendererMarkdown": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
    "pascalName": "ContentRendererMarkdown",
    "kebabName": "content-renderer-markdown",
    "chunkName": "components/content-renderer-markdown",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "value",
          "global": false,
          "description": "Content to render",
          "tags": [],
          "required": true,
          "type": "Record<string, any>",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
              "range": [
                359,
                408
              ]
            },
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
              "range": [
                359,
                408
              ]
            }
          ],
          "schema": "Record<string, any>"
        },
        {
          "name": "tag",
          "global": false,
          "description": "Root tag to use for rendering",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
              "range": [
                556,
                603
              ]
            }
          ],
          "schema": "string",
          "default": "\"div\""
        },
        {
          "name": "data",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "Record<string, any>",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
              "range": [
                739,
                792
              ]
            }
          ],
          "schema": "Record<string, any>",
          "default": "{}"
        },
        {
          "name": "components",
          "global": false,
          "description": "The map of custom components to use for rendering.",
          "tags": [],
          "required": false,
          "type": "Record<string, any>",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
              "range": [
                675,
                734
              ]
            }
          ],
          "schema": "Record<string, any>",
          "default": "{}"
        },
        {
          "name": "excerpt",
          "global": false,
          "description": "Render only the excerpt",
          "tags": [],
          "required": false,
          "type": "boolean",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
              "range": [
                453,
                505
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          },
          "default": "false"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "tag",
          "type": "string",
          "description": "Root tag to use for rendering",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
              "range": [
                556,
                603
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "excerpt",
          "type": "boolean",
          "description": "Render only the excerpt",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
              "range": [
                453,
                505
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        },
        {
          "name": "data",
          "type": "Record<string, any>",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
              "range": [
                739,
                792
              ]
            }
          ],
          "schema": "Record<string, any>"
        },
        {
          "name": "value",
          "type": "Record<string, any>",
          "description": "Content to render",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
              "range": [
                359,
                408
              ]
            }
          ],
          "schema": "Record<string, any>"
        },
        {
          "name": "components",
          "type": "Record<string, any>",
          "description": "The map of custom components to use for rendering.",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
              "range": [
                675,
                734
              ]
            }
          ],
          "schema": "Record<string, any>"
        }
      ]
    }
  },
  "ContentSlot": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue",
    "pascalName": "ContentSlot",
    "kebabName": "content-slot",
    "chunkName": "components/content-slot",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "use",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "Function",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue.d.ts",
              "range": [
                881,
                895
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Function",
            "schema": {
              "apply": {
                "name": "apply",
                "global": false,
                "description": "Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.",
                "tags": [
                  {
                    "name": "param",
                    "text": "thisArg The object to be used as the this object."
                  },
                  {
                    "name": "param",
                    "text": "argArray A set of arguments to be passed to the function."
                  }
                ],
                "required": true,
                "type": "(this: Function, thisArg: any, argArray?: any) => any",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es5.d.ts",
                    "range": [
                      10258,
                      10315
                    ]
                  }
                ],
                "schema": {
                  "kind": "event",
                  "type": "(this: Function, thisArg: any, argArray?: any): any",
                  "schema": []
                }
              },
              "call": {
                "name": "call",
                "global": false,
                "description": "Calls a method of an object, substituting another object for the current object.",
                "tags": [
                  {
                    "name": "param",
                    "text": "thisArg The object to be used as the current object."
                  },
                  {
                    "name": "param",
                    "text": "argArray A list of arguments to be passed to the method."
                  }
                ],
                "required": true,
                "type": "(this: Function, thisArg: any, ...argArray: any[]) => any",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es5.d.ts",
                    "range": [
                      10563,
                      10623
                    ]
                  }
                ],
                "schema": {
                  "kind": "event",
                  "type": "(this: Function, thisArg: any, ...argArray: any[]): any",
                  "schema": []
                }
              },
              "bind": {
                "name": "bind",
                "global": false,
                "description": "For a given function, creates a bound function that has the same body as the original function.\nThe this object of the bound function is associated with the specified object, and has the specified initial parameters.",
                "tags": [
                  {
                    "name": "param",
                    "text": "thisArg An object to which the this keyword can refer inside the new function."
                  },
                  {
                    "name": "param",
                    "text": "argArray A list of arguments to be passed to the new function."
                  }
                ],
                "required": true,
                "type": "(this: Function, thisArg: any, ...argArray: any[]) => any",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es5.d.ts",
                    "range": [
                      11046,
                      11106
                    ]
                  }
                ],
                "schema": {
                  "kind": "event",
                  "type": "(this: Function, thisArg: any, ...argArray: any[]): any",
                  "schema": []
                }
              },
              "toString": {
                "name": "toString",
                "global": false,
                "description": "Returns a string representation of a function.",
                "tags": [],
                "required": true,
                "type": "() => string",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es5.d.ts",
                    "range": [
                      11170,
                      11189
                    ]
                  }
                ],
                "schema": {
                  "kind": "event",
                  "type": "(): string"
                }
              },
              "prototype": {
                "name": "prototype",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "any",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es5.d.ts",
                    "range": [
                      11195,
                      11210
                    ]
                  }
                ],
                "schema": "any"
              },
              "length": {
                "name": "length",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "number",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es5.d.ts",
                    "range": [
                      11215,
                      11239
                    ]
                  }
                ],
                "schema": "number"
              },
              "arguments": {
                "name": "arguments",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "any",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es5.d.ts",
                    "range": [
                      11276,
                      11291
                    ]
                  }
                ],
                "schema": "any"
              },
              "caller": {
                "name": "caller",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "Function",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es5.d.ts",
                    "range": [
                      11296,
                      11313
                    ]
                  }
                ],
                "schema": "Function"
              },
              "name": {
                "name": "name",
                "global": false,
                "description": "Returns the name of the function. Function names are read-only and can not be changed.",
                "tags": [],
                "required": true,
                "type": "string",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es2015.core.d.ts",
                    "range": [
                      4364,
                      4386
                    ]
                  }
                ],
                "schema": "string"
              },
              "__@hasInstance@324": {
                "name": "__@hasInstance@324",
                "global": false,
                "description": "Determines whether the given value inherits from this function if this function was used\nas a constructor function.\n\nA constructor function can control which objects are recognized as its instances by\n'instanceof' by overriding this method.",
                "tags": [],
                "required": true,
                "type": "(value: any) => boolean",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts",
                    "range": [
                      5097,
                      5139
                    ]
                  }
                ],
                "schema": {
                  "kind": "event",
                  "type": "(value: any): boolean",
                  "schema": []
                }
              },
              "__@metadata@326": {
                "name": "__@metadata@326",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "DecoratorMetadataObject",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.esnext.decorators.d.ts",
                    "range": [
                      1023,
                      1067
                    ]
                  }
                ],
                "schema": {
                  "kind": "object",
                  "type": "DecoratorMetadataObject",
                  "schema": {}
                }
              }
            }
          },
          "default": "void 0"
        },
        {
          "name": "unwrap",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | boolean",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue.d.ts",
              "range": [
                900,
                925
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | boolean",
            "schema": [
              "string",
              "false",
              "true"
            ]
          },
          "default": "false"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "use",
          "type": "Function",
          "description": "A slot name or function",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue.d.ts",
              "range": [
                606,
                682
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Function",
            "schema": {
              "apply": {
                "name": "apply",
                "global": false,
                "description": "Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.",
                "tags": [
                  {
                    "name": "param",
                    "text": "thisArg The object to be used as the this object."
                  },
                  {
                    "name": "param",
                    "text": "argArray A set of arguments to be passed to the function."
                  }
                ],
                "required": true,
                "type": "(this: Function, thisArg: any, argArray?: any) => any",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es5.d.ts",
                    "range": [
                      10258,
                      10315
                    ]
                  }
                ],
                "schema": {
                  "kind": "event",
                  "type": "(this: Function, thisArg: any, argArray?: any): any",
                  "schema": []
                }
              },
              "call": {
                "name": "call",
                "global": false,
                "description": "Calls a method of an object, substituting another object for the current object.",
                "tags": [
                  {
                    "name": "param",
                    "text": "thisArg The object to be used as the current object."
                  },
                  {
                    "name": "param",
                    "text": "argArray A list of arguments to be passed to the method."
                  }
                ],
                "required": true,
                "type": "(this: Function, thisArg: any, ...argArray: any[]) => any",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es5.d.ts",
                    "range": [
                      10563,
                      10623
                    ]
                  }
                ],
                "schema": {
                  "kind": "event",
                  "type": "(this: Function, thisArg: any, ...argArray: any[]): any",
                  "schema": []
                }
              },
              "bind": {
                "name": "bind",
                "global": false,
                "description": "For a given function, creates a bound function that has the same body as the original function.\nThe this object of the bound function is associated with the specified object, and has the specified initial parameters.",
                "tags": [
                  {
                    "name": "param",
                    "text": "thisArg An object to which the this keyword can refer inside the new function."
                  },
                  {
                    "name": "param",
                    "text": "argArray A list of arguments to be passed to the new function."
                  }
                ],
                "required": true,
                "type": "(this: Function, thisArg: any, ...argArray: any[]) => any",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es5.d.ts",
                    "range": [
                      11046,
                      11106
                    ]
                  }
                ],
                "schema": {
                  "kind": "event",
                  "type": "(this: Function, thisArg: any, ...argArray: any[]): any",
                  "schema": []
                }
              },
              "toString": {
                "name": "toString",
                "global": false,
                "description": "Returns a string representation of a function.",
                "tags": [],
                "required": true,
                "type": "() => string",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es5.d.ts",
                    "range": [
                      11170,
                      11189
                    ]
                  }
                ],
                "schema": {
                  "kind": "event",
                  "type": "(): string"
                }
              },
              "prototype": {
                "name": "prototype",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "any",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es5.d.ts",
                    "range": [
                      11195,
                      11210
                    ]
                  }
                ],
                "schema": "any"
              },
              "length": {
                "name": "length",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "number",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es5.d.ts",
                    "range": [
                      11215,
                      11239
                    ]
                  }
                ],
                "schema": "number"
              },
              "arguments": {
                "name": "arguments",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "any",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es5.d.ts",
                    "range": [
                      11276,
                      11291
                    ]
                  }
                ],
                "schema": "any"
              },
              "caller": {
                "name": "caller",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "Function",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es5.d.ts",
                    "range": [
                      11296,
                      11313
                    ]
                  }
                ],
                "schema": "Function"
              },
              "name": {
                "name": "name",
                "global": false,
                "description": "Returns the name of the function. Function names are read-only and can not be changed.",
                "tags": [],
                "required": true,
                "type": "string",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es2015.core.d.ts",
                    "range": [
                      4364,
                      4386
                    ]
                  }
                ],
                "schema": "string"
              },
              "__@hasInstance@324": {
                "name": "__@hasInstance@324",
                "global": false,
                "description": "Determines whether the given value inherits from this function if this function was used\nas a constructor function.\n\nA constructor function can control which objects are recognized as its instances by\n'instanceof' by overriding this method.",
                "tags": [],
                "required": true,
                "type": "(value: any) => boolean",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts",
                    "range": [
                      5097,
                      5139
                    ]
                  }
                ],
                "schema": {
                  "kind": "event",
                  "type": "(value: any): boolean",
                  "schema": []
                }
              },
              "__@metadata@326": {
                "name": "__@metadata@326",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "DecoratorMetadataObject",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/typescript/lib/lib.esnext.decorators.d.ts",
                    "range": [
                      1023,
                      1067
                    ]
                  }
                ],
                "schema": {
                  "kind": "object",
                  "type": "DecoratorMetadataObject",
                  "schema": {}
                }
              }
            }
          }
        },
        {
          "name": "unwrap",
          "type": "string | boolean",
          "description": "Tags to unwrap separated by spaces\nExample: 'ul li'",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue.d.ts",
              "range": [
                769,
                869
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | boolean",
            "schema": [
              "string",
              "false",
              "true"
            ]
          }
        }
      ]
    }
  },
  "DocumentDrivenEmpty": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue",
    "pascalName": "DocumentDrivenEmpty",
    "kebabName": "document-driven-empty",
    "chunkName": "components/document-driven-empty",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "value",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "ParsedContent",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue.d.ts",
              "range": [
                470,
                548
              ]
            },
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue.d.ts",
              "range": [
                470,
                548
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "ParsedContent",
            "schema": {
              "excerpt": {
                "name": "excerpt",
                "global": false,
                "description": "Excerpt",
                "tags": [],
                "required": false,
                "type": "MarkdownRoot",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      2459,
                      2482
                    ]
                  }
                ],
                "schema": {
                  "kind": "object",
                  "type": "MarkdownRoot",
                  "schema": {
                    "type": {
                      "name": "type",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": true,
                      "type": "\"root\"",
                      "declarations": [
                        {
                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            1465,
                            1478
                          ]
                        }
                      ],
                      "schema": "\"root\""
                    },
                    "children": {
                      "name": "children",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": true,
                      "type": "MarkdownNode[]",
                      "declarations": [
                        {
                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            1483,
                            1508
                          ]
                        }
                      ],
                      "schema": {
                        "kind": "array",
                        "type": "MarkdownNode[]",
                        "schema": [
                          {
                            "kind": "object",
                            "type": "MarkdownNode",
                            "schema": {
                              "type": {
                                "name": "type",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": true,
                                "type": "string",
                                "declarations": [
                                  {
                                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1214,
                                      1227
                                    ]
                                  }
                                ],
                                "schema": "string"
                              },
                              "tag": {
                                "name": "tag",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "string",
                                "declarations": [
                                  {
                                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1232,
                                      1245
                                    ]
                                  }
                                ],
                                "schema": "string"
                              },
                              "value": {
                                "name": "value",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "string",
                                "declarations": [
                                  {
                                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1250,
                                      1265
                                    ]
                                  }
                                ],
                                "schema": "string"
                              },
                              "props": {
                                "name": "props",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "Record<string, any>",
                                "declarations": [
                                  {
                                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1270,
                                      1298
                                    ]
                                  }
                                ],
                                "schema": "Record<string, any>"
                              },
                              "content": {
                                "name": "content",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "any",
                                "declarations": [
                                  {
                                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1303,
                                      1317
                                    ]
                                  }
                                ],
                                "schema": "any"
                              },
                              "children": {
                                "name": "children",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "MarkdownNode[]",
                                "declarations": [
                                  {
                                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1322,
                                      1348
                                    ]
                                  }
                                ],
                                "schema": "MarkdownNode[]"
                              },
                              "attributes": {
                                "name": "attributes",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "Record<string, any>",
                                "declarations": [
                                  {
                                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1353,
                                      1386
                                    ]
                                  }
                                ],
                                "schema": "Record<string, any>"
                              },
                              "fmAttributes": {
                                "name": "fmAttributes",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "Record<string, any>",
                                "declarations": [
                                  {
                                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1391,
                                      1426
                                    ]
                                  }
                                ],
                                "schema": "Record<string, any>"
                              }
                            }
                          }
                        ]
                      }
                    },
                    "props": {
                      "name": "props",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": false,
                      "type": "Record<string, any>",
                      "declarations": [
                        {
                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            1513,
                            1541
                          ]
                        }
                      ],
                      "schema": "Record<string, any>"
                    },
                    "toc": {
                      "name": "toc",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": false,
                      "type": "Toc",
                      "declarations": [
                        {
                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            1546,
                            1556
                          ]
                        }
                      ],
                      "schema": {
                        "kind": "object",
                        "type": "Toc",
                        "schema": {
                          "title": {
                            "name": "title",
                            "global": false,
                            "description": "",
                            "tags": [],
                            "required": true,
                            "type": "string",
                            "declarations": [
                              {
                                "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                "range": [
                                  1095,
                                  1109
                                ]
                              }
                            ],
                            "schema": "string"
                          },
                          "depth": {
                            "name": "depth",
                            "global": false,
                            "description": "",
                            "tags": [],
                            "required": true,
                            "type": "number",
                            "declarations": [
                              {
                                "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                "range": [
                                  1114,
                                  1128
                                ]
                              }
                            ],
                            "schema": "number"
                          },
                          "searchDepth": {
                            "name": "searchDepth",
                            "global": false,
                            "description": "",
                            "tags": [],
                            "required": true,
                            "type": "number",
                            "declarations": [
                              {
                                "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                "range": [
                                  1133,
                                  1153
                                ]
                              }
                            ],
                            "schema": "number"
                          },
                          "links": {
                            "name": "links",
                            "global": false,
                            "description": "",
                            "tags": [],
                            "required": true,
                            "type": "TocLink[]",
                            "declarations": [
                              {
                                "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                "range": [
                                  1158,
                                  1175
                                ]
                              }
                            ],
                            "schema": {
                              "kind": "array",
                              "type": "TocLink[]",
                              "schema": [
                                {
                                  "kind": "object",
                                  "type": "TocLink",
                                  "schema": {
                                    "id": {
                                      "name": "id",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": true,
                                      "type": "string",
                                      "declarations": [
                                        {
                                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            991,
                                            1002
                                          ]
                                        }
                                      ],
                                      "schema": "string"
                                    },
                                    "text": {
                                      "name": "text",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": true,
                                      "type": "string",
                                      "declarations": [
                                        {
                                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1007,
                                            1020
                                          ]
                                        }
                                      ],
                                      "schema": "string"
                                    },
                                    "depth": {
                                      "name": "depth",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": true,
                                      "type": "number",
                                      "declarations": [
                                        {
                                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1025,
                                            1039
                                          ]
                                        }
                                      ],
                                      "schema": "number"
                                    },
                                    "children": {
                                      "name": "children",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": false,
                                      "type": "TocLink[]",
                                      "declarations": [
                                        {
                                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1044,
                                            1065
                                          ]
                                        }
                                      ],
                                      "schema": "TocLink[]"
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "body": {
                "name": "body",
                "global": false,
                "description": "Content body",
                "tags": [],
                "required": true,
                "type": "MarkdownRoot",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      2523,
                      2549
                    ]
                  }
                ],
                "schema": "MarkdownRoot"
              },
              "layout": {
                "name": "layout",
                "global": false,
                "description": "Layout",
                "tags": [],
                "required": false,
                "type": "\"docs\"",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      2319,
                      2338
                    ]
                  }
                ],
                "schema": "\"docs\""
              },
              "_id": {
                "name": "_id",
                "global": false,
                "description": "Content id",
                "tags": [],
                "required": true,
                "type": "string",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      185,
                      197
                    ]
                  }
                ],
                "schema": "string"
              },
              "_source": {
                "name": "_source",
                "global": false,
                "description": "Content source",
                "tags": [],
                "required": false,
                "type": "string",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      240,
                      257
                    ]
                  }
                ],
                "schema": "string"
              },
              "_path": {
                "name": "_path",
                "global": false,
                "description": "Content path, this path is source agnostic and it the content my live in any source",
                "tags": [],
                "required": false,
                "type": "string",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      369,
                      384
                    ]
                  }
                ],
                "schema": "string"
              },
              "title": {
                "name": "title",
                "global": false,
                "description": "Content title",
                "tags": [],
                "required": false,
                "type": "string",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      426,
                      441
                    ]
                  }
                ],
                "schema": "string"
              },
              "_draft": {
                "name": "_draft",
                "global": false,
                "description": "Content draft status",
                "tags": [],
                "required": false,
                "type": "boolean",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      490,
                      507
                    ]
                  }
                ],
                "schema": {
                  "kind": "enum",
                  "type": "boolean",
                  "schema": [
                    "false",
                    "true"
                  ]
                }
              },
              "_partial": {
                "name": "_partial",
                "global": false,
                "description": "Content partial status",
                "tags": [],
                "required": false,
                "type": "boolean",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      558,
                      577
                    ]
                  }
                ],
                "schema": "boolean"
              },
              "_locale": {
                "name": "_locale",
                "global": false,
                "description": "Content locale",
                "tags": [],
                "required": false,
                "type": "string",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      620,
                      637
                    ]
                  }
                ],
                "schema": "string"
              },
              "_type": {
                "name": "_type",
                "global": false,
                "description": "File type of the content, i.e `markdown`",
                "tags": [],
                "required": false,
                "type": "\"markdown\" | \"yaml\" | \"json\" | \"csv\"",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      706,
                      751
                    ]
                  }
                ],
                "schema": {
                  "kind": "enum",
                  "type": "\"markdown\" | \"yaml\" | \"json\" | \"csv\"",
                  "schema": [
                    "\"markdown\"",
                    "\"yaml\"",
                    "\"json\"",
                    "\"csv\""
                  ]
                }
              },
              "_file": {
                "name": "_file",
                "global": false,
                "description": "Path to the file relative to the content directory",
                "tags": [],
                "required": false,
                "type": "string",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      830,
                      845
                    ]
                  }
                ],
                "schema": "string"
              },
              "_extension": {
                "name": "_extension",
                "global": false,
                "description": "Extension of the file",
                "tags": [],
                "required": false,
                "type": "\"yaml\" | \"json\" | \"csv\" | \"md\" | \"yml\" | \"json5\"",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      895,
                      957
                    ]
                  }
                ],
                "schema": {
                  "kind": "enum",
                  "type": "\"yaml\" | \"json\" | \"csv\" | \"md\" | \"yml\" | \"json5\"",
                  "schema": [
                    "\"yaml\"",
                    "\"json\"",
                    "\"csv\"",
                    "\"md\"",
                    "\"yml\"",
                    "\"json5\""
                  ]
                }
              }
            }
          }
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "value",
          "type": "ParsedContent",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue.d.ts",
              "range": [
                470,
                548
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "ParsedContent",
            "schema": {
              "excerpt": {
                "name": "excerpt",
                "global": false,
                "description": "Excerpt",
                "tags": [],
                "required": false,
                "type": "MarkdownRoot",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      2459,
                      2482
                    ]
                  }
                ],
                "schema": {
                  "kind": "object",
                  "type": "MarkdownRoot",
                  "schema": {
                    "type": {
                      "name": "type",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": true,
                      "type": "\"root\"",
                      "declarations": [
                        {
                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            1465,
                            1478
                          ]
                        }
                      ],
                      "schema": "\"root\""
                    },
                    "children": {
                      "name": "children",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": true,
                      "type": "MarkdownNode[]",
                      "declarations": [
                        {
                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            1483,
                            1508
                          ]
                        }
                      ],
                      "schema": {
                        "kind": "array",
                        "type": "MarkdownNode[]",
                        "schema": [
                          {
                            "kind": "object",
                            "type": "MarkdownNode",
                            "schema": {
                              "type": {
                                "name": "type",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": true,
                                "type": "string",
                                "declarations": [
                                  {
                                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1214,
                                      1227
                                    ]
                                  }
                                ],
                                "schema": "string"
                              },
                              "tag": {
                                "name": "tag",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "string",
                                "declarations": [
                                  {
                                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1232,
                                      1245
                                    ]
                                  }
                                ],
                                "schema": "string"
                              },
                              "value": {
                                "name": "value",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "string",
                                "declarations": [
                                  {
                                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1250,
                                      1265
                                    ]
                                  }
                                ],
                                "schema": "string"
                              },
                              "props": {
                                "name": "props",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "Record<string, any>",
                                "declarations": [
                                  {
                                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1270,
                                      1298
                                    ]
                                  }
                                ],
                                "schema": "Record<string, any>"
                              },
                              "content": {
                                "name": "content",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "any",
                                "declarations": [
                                  {
                                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1303,
                                      1317
                                    ]
                                  }
                                ],
                                "schema": "any"
                              },
                              "children": {
                                "name": "children",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "MarkdownNode[]",
                                "declarations": [
                                  {
                                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1322,
                                      1348
                                    ]
                                  }
                                ],
                                "schema": "MarkdownNode[]"
                              },
                              "attributes": {
                                "name": "attributes",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "Record<string, any>",
                                "declarations": [
                                  {
                                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1353,
                                      1386
                                    ]
                                  }
                                ],
                                "schema": "Record<string, any>"
                              },
                              "fmAttributes": {
                                "name": "fmAttributes",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "Record<string, any>",
                                "declarations": [
                                  {
                                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                    "range": [
                                      1391,
                                      1426
                                    ]
                                  }
                                ],
                                "schema": "Record<string, any>"
                              }
                            }
                          }
                        ]
                      }
                    },
                    "props": {
                      "name": "props",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": false,
                      "type": "Record<string, any>",
                      "declarations": [
                        {
                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            1513,
                            1541
                          ]
                        }
                      ],
                      "schema": "Record<string, any>"
                    },
                    "toc": {
                      "name": "toc",
                      "global": false,
                      "description": "",
                      "tags": [],
                      "required": false,
                      "type": "Toc",
                      "declarations": [
                        {
                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            1546,
                            1556
                          ]
                        }
                      ],
                      "schema": {
                        "kind": "object",
                        "type": "Toc",
                        "schema": {
                          "title": {
                            "name": "title",
                            "global": false,
                            "description": "",
                            "tags": [],
                            "required": true,
                            "type": "string",
                            "declarations": [
                              {
                                "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                "range": [
                                  1095,
                                  1109
                                ]
                              }
                            ],
                            "schema": "string"
                          },
                          "depth": {
                            "name": "depth",
                            "global": false,
                            "description": "",
                            "tags": [],
                            "required": true,
                            "type": "number",
                            "declarations": [
                              {
                                "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                "range": [
                                  1114,
                                  1128
                                ]
                              }
                            ],
                            "schema": "number"
                          },
                          "searchDepth": {
                            "name": "searchDepth",
                            "global": false,
                            "description": "",
                            "tags": [],
                            "required": true,
                            "type": "number",
                            "declarations": [
                              {
                                "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                "range": [
                                  1133,
                                  1153
                                ]
                              }
                            ],
                            "schema": "number"
                          },
                          "links": {
                            "name": "links",
                            "global": false,
                            "description": "",
                            "tags": [],
                            "required": true,
                            "type": "TocLink[]",
                            "declarations": [
                              {
                                "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                "range": [
                                  1158,
                                  1175
                                ]
                              }
                            ],
                            "schema": {
                              "kind": "array",
                              "type": "TocLink[]",
                              "schema": [
                                {
                                  "kind": "object",
                                  "type": "TocLink",
                                  "schema": {
                                    "id": {
                                      "name": "id",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": true,
                                      "type": "string",
                                      "declarations": [
                                        {
                                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            991,
                                            1002
                                          ]
                                        }
                                      ],
                                      "schema": "string"
                                    },
                                    "text": {
                                      "name": "text",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": true,
                                      "type": "string",
                                      "declarations": [
                                        {
                                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1007,
                                            1020
                                          ]
                                        }
                                      ],
                                      "schema": "string"
                                    },
                                    "depth": {
                                      "name": "depth",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": true,
                                      "type": "number",
                                      "declarations": [
                                        {
                                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1025,
                                            1039
                                          ]
                                        }
                                      ],
                                      "schema": "number"
                                    },
                                    "children": {
                                      "name": "children",
                                      "global": false,
                                      "description": "",
                                      "tags": [],
                                      "required": false,
                                      "type": "TocLink[]",
                                      "declarations": [
                                        {
                                          "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                                          "range": [
                                            1044,
                                            1065
                                          ]
                                        }
                                      ],
                                      "schema": "TocLink[]"
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "body": {
                "name": "body",
                "global": false,
                "description": "Content body",
                "tags": [],
                "required": true,
                "type": "MarkdownRoot",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      2523,
                      2549
                    ]
                  }
                ],
                "schema": "MarkdownRoot"
              },
              "layout": {
                "name": "layout",
                "global": false,
                "description": "Layout",
                "tags": [],
                "required": false,
                "type": "\"docs\"",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      2319,
                      2338
                    ]
                  }
                ],
                "schema": "\"docs\""
              },
              "_id": {
                "name": "_id",
                "global": false,
                "description": "Content id",
                "tags": [],
                "required": true,
                "type": "string",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      185,
                      197
                    ]
                  }
                ],
                "schema": "string"
              },
              "_source": {
                "name": "_source",
                "global": false,
                "description": "Content source",
                "tags": [],
                "required": false,
                "type": "string",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      240,
                      257
                    ]
                  }
                ],
                "schema": "string"
              },
              "_path": {
                "name": "_path",
                "global": false,
                "description": "Content path, this path is source agnostic and it the content my live in any source",
                "tags": [],
                "required": false,
                "type": "string",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      369,
                      384
                    ]
                  }
                ],
                "schema": "string"
              },
              "title": {
                "name": "title",
                "global": false,
                "description": "Content title",
                "tags": [],
                "required": false,
                "type": "string",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      426,
                      441
                    ]
                  }
                ],
                "schema": "string"
              },
              "_draft": {
                "name": "_draft",
                "global": false,
                "description": "Content draft status",
                "tags": [],
                "required": false,
                "type": "boolean",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      490,
                      507
                    ]
                  }
                ],
                "schema": {
                  "kind": "enum",
                  "type": "boolean",
                  "schema": [
                    "false",
                    "true"
                  ]
                }
              },
              "_partial": {
                "name": "_partial",
                "global": false,
                "description": "Content partial status",
                "tags": [],
                "required": false,
                "type": "boolean",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      558,
                      577
                    ]
                  }
                ],
                "schema": "boolean"
              },
              "_locale": {
                "name": "_locale",
                "global": false,
                "description": "Content locale",
                "tags": [],
                "required": false,
                "type": "string",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      620,
                      637
                    ]
                  }
                ],
                "schema": "string"
              },
              "_type": {
                "name": "_type",
                "global": false,
                "description": "File type of the content, i.e `markdown`",
                "tags": [],
                "required": false,
                "type": "\"markdown\" | \"yaml\" | \"json\" | \"csv\"",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      706,
                      751
                    ]
                  }
                ],
                "schema": {
                  "kind": "enum",
                  "type": "\"markdown\" | \"yaml\" | \"json\" | \"csv\"",
                  "schema": [
                    "\"markdown\"",
                    "\"yaml\"",
                    "\"json\"",
                    "\"csv\""
                  ]
                }
              },
              "_file": {
                "name": "_file",
                "global": false,
                "description": "Path to the file relative to the content directory",
                "tags": [],
                "required": false,
                "type": "string",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      830,
                      845
                    ]
                  }
                ],
                "schema": "string"
              },
              "_extension": {
                "name": "_extension",
                "global": false,
                "description": "Extension of the file",
                "tags": [],
                "required": false,
                "type": "\"yaml\" | \"json\" | \"csv\" | \"md\" | \"yml\" | \"json5\"",
                "declarations": [
                  {
                    "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      895,
                      957
                    ]
                  }
                ],
                "schema": {
                  "kind": "enum",
                  "type": "\"yaml\" | \"json\" | \"csv\" | \"md\" | \"yml\" | \"json5\"",
                  "schema": [
                    "\"yaml\"",
                    "\"json\"",
                    "\"csv\"",
                    "\"md\"",
                    "\"yml\"",
                    "\"json5\""
                  ]
                }
              }
            }
          }
        }
      ]
    }
  },
  "DocumentDrivenNotFound": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenNotFound.vue",
    "pascalName": "DocumentDrivenNotFound",
    "kebabName": "document-driven-not-found",
    "chunkName": "components/document-driven-not-found",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenNotFound.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenNotFound.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Markdown": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/Markdown.vue",
    "pascalName": "Markdown",
    "kebabName": "markdown",
    "chunkName": "components/markdown",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/Markdown.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/Markdown.vue",
    "meta": {
      "type": null,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ProseCodeInline": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue",
    "pascalName": "ProseCodeInline",
    "kebabName": "prose-code-inline",
    "chunkName": "components/prose-code-inline",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProsePre": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
    "pascalName": "ProsePre",
    "kebabName": "prose-pre",
    "chunkName": "components/prose-pre",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "code",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
              "range": [
                248,
                293
              ]
            }
          ],
          "schema": "string",
          "default": "\"\""
        },
        {
          "name": "language",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
              "range": [
                297,
                348
              ]
            }
          ],
          "schema": "string",
          "default": "null"
        },
        {
          "name": "filename",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
              "range": [
                352,
                403
              ]
            }
          ],
          "schema": "string",
          "default": "null"
        },
        {
          "name": "highlights",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number[]",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
              "range": [
                407,
                481
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "number[]",
            "schema": [
              "number"
            ]
          },
          "default": "[]"
        },
        {
          "name": "meta",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
              "range": [
                485,
                532
              ]
            }
          ],
          "schema": "string",
          "default": "null"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "class",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
              "range": [
                536,
                584
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "style",
          "type": "string | Record<string, any>",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
              "range": [
                588,
                646
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | Record<string, any>",
            "schema": [
              "string",
              "Record<string, any>"
            ]
          }
        },
        {
          "name": "code",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
              "range": [
                248,
                293
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "language",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
              "range": [
                297,
                348
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "filename",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
              "range": [
                352,
                403
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "highlights",
          "type": "number[]",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
              "range": [
                407,
                481
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "number[]",
            "schema": [
              "number"
            ]
          }
        },
        {
          "name": "meta",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
              "range": [
                485,
                532
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "ProseA": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue",
    "pascalName": "ProseA",
    "kebabName": "prose-a",
    "chunkName": "components/prose-a",
    "shortPath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "href",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue",
              "range": [
                146,
                191
              ]
            }
          ],
          "schema": "string",
          "default": "\"\""
        },
        {
          "name": "target",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue",
              "range": [
                195,
                270
              ]
            }
          ],
          "schema": "string",
          "default": "undefined"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "href",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue",
              "range": [
                146,
                191
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "target",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue",
              "range": [
                195,
                270
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "ProseBlockquote": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseBlockquote.vue",
    "pascalName": "ProseBlockquote",
    "kebabName": "prose-blockquote",
    "chunkName": "components/prose-blockquote",
    "shortPath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseBlockquote.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseBlockquote.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseEm": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseEm.vue",
    "pascalName": "ProseEm",
    "kebabName": "prose-em",
    "chunkName": "components/prose-em",
    "shortPath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseEm.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseEm.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseH5": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue",
    "pascalName": "ProseH5",
    "kebabName": "prose-h5",
    "chunkName": "components/prose-h5",
    "shortPath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue",
              "range": [
                264,
                275
              ]
            },
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue",
              "range": [
                264,
                275
              ]
            }
          ],
          "schema": "string"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "id",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue",
              "range": [
                264,
                275
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "ProseH6": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue",
    "pascalName": "ProseH6",
    "kebabName": "prose-h6",
    "chunkName": "components/prose-h6",
    "shortPath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue",
              "range": [
                264,
                275
              ]
            },
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue",
              "range": [
                264,
                275
              ]
            }
          ],
          "schema": "string"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "id",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue",
              "range": [
                264,
                275
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "ProseHr": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseHr.vue",
    "pascalName": "ProseHr",
    "kebabName": "prose-hr",
    "chunkName": "components/prose-hr",
    "shortPath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseHr.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseHr.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ProseImg": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue",
    "pascalName": "ProseImg",
    "kebabName": "prose-img",
    "chunkName": "components/prose-img",
    "shortPath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "src",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue",
              "range": [
                289,
                333
              ]
            }
          ],
          "schema": "string",
          "default": "\"\""
        },
        {
          "name": "alt",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue",
              "range": [
                337,
                381
              ]
            }
          ],
          "schema": "string",
          "default": "\"\""
        },
        {
          "name": "width",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | number",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue",
              "range": [
                385,
                448
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | number",
            "schema": [
              "string",
              "number"
            ]
          },
          "default": "undefined"
        },
        {
          "name": "height",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | number",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue",
              "range": [
                452,
                516
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | number",
            "schema": [
              "string",
              "number"
            ]
          },
          "default": "undefined"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "src",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue",
              "range": [
                289,
                333
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "alt",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue",
              "range": [
                337,
                381
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "width",
          "type": "string | number",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue",
              "range": [
                385,
                448
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | number",
            "schema": [
              "string",
              "number"
            ]
          }
        },
        {
          "name": "height",
          "type": "string | number",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue",
              "range": [
                452,
                516
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | number",
            "schema": [
              "string",
              "number"
            ]
          }
        }
      ]
    }
  },
  "ProseLi": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseLi.vue",
    "pascalName": "ProseLi",
    "kebabName": "prose-li",
    "chunkName": "components/prose-li",
    "shortPath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseLi.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseLi.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseOl": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseOl.vue",
    "pascalName": "ProseOl",
    "kebabName": "prose-ol",
    "chunkName": "components/prose-ol",
    "shortPath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseOl.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseOl.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseP": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseP.vue",
    "pascalName": "ProseP",
    "kebabName": "prose-p",
    "chunkName": "components/prose-p",
    "shortPath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseP.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseP.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseScript": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue",
    "pascalName": "ProseScript",
    "kebabName": "prose-script",
    "chunkName": "components/prose-script",
    "shortPath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "src",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue",
              "range": [
                317,
                361
              ]
            }
          ],
          "schema": "string",
          "default": "\"\""
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "src",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue",
              "range": [
                317,
                361
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "ProseStrong": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseStrong.vue",
    "pascalName": "ProseStrong",
    "kebabName": "prose-strong",
    "chunkName": "components/prose-strong",
    "shortPath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseStrong.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseStrong.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseTable": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTable.vue",
    "pascalName": "ProseTable",
    "kebabName": "prose-table",
    "chunkName": "components/prose-table",
    "shortPath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTable.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTable.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseTbody": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTbody.vue",
    "pascalName": "ProseTbody",
    "kebabName": "prose-tbody",
    "chunkName": "components/prose-tbody",
    "shortPath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTbody.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTbody.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseTd": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTd.vue",
    "pascalName": "ProseTd",
    "kebabName": "prose-td",
    "chunkName": "components/prose-td",
    "shortPath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTd.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTd.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseTh": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTh.vue",
    "pascalName": "ProseTh",
    "kebabName": "prose-th",
    "chunkName": "components/prose-th",
    "shortPath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTh.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTh.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseThead": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseThead.vue",
    "pascalName": "ProseThead",
    "kebabName": "prose-thead",
    "chunkName": "components/prose-thead",
    "shortPath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseThead.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseThead.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseTr": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTr.vue",
    "pascalName": "ProseTr",
    "kebabName": "prose-tr",
    "chunkName": "components/prose-tr",
    "shortPath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTr.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTr.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseUl": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseUl.vue",
    "pascalName": "ProseUl",
    "kebabName": "prose-ul",
    "chunkName": "components/prose-ul",
    "shortPath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseUl.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseUl.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        }
      ]
    }
  },
  "UButton": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue",
    "pascalName": "UButton",
    "kebabName": "u-button",
    "chunkName": "components/u-button",
    "shortPath": "node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "size",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "ButtonSize",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                8034,
                8051
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "ButtonSize",
            "schema": [
              "\"md\"",
              "\"2xs\"",
              "\"xs\"",
              "\"sm\"",
              "\"lg\"",
              "\"xl\""
            ]
          },
          "default": "config.default.size"
        },
        {
          "name": "ui",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "any",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                8056,
                8064
              ]
            }
          ],
          "schema": "any",
          "default": "{}"
        },
        {
          "name": "icon",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                8092,
                8105
              ]
            }
          ],
          "schema": "string",
          "default": "null"
        },
        {
          "name": "color",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "any",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                8110,
                8121
              ]
            }
          ],
          "schema": "any",
          "default": "config.default.color"
        },
        {
          "name": "type",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                8126,
                8139
              ]
            }
          ],
          "schema": "string",
          "default": "\"button\""
        },
        {
          "name": "target",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "NuxtLinkProps",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                8160,
                8182
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "NuxtLinkProps",
            "schema": []
          }
        },
        {
          "name": "rel",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "NuxtLinkProps",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                8187,
                8206
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "NuxtLinkProps",
            "schema": []
          }
        },
        {
          "name": "noRel",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "NuxtLinkProps",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                8211,
                8232
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "NuxtLinkProps",
            "schema": []
          }
        },
        {
          "name": "prefetch",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "NuxtLinkProps",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                8237,
                8261
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "NuxtLinkProps",
            "schema": []
          }
        },
        {
          "name": "noPrefetch",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "NuxtLinkProps",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                8266,
                8292
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "NuxtLinkProps",
            "schema": []
          }
        },
        {
          "name": "activeClass",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "NuxtLinkProps",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                8297,
                8324
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "NuxtLinkProps",
            "schema": []
          }
        },
        {
          "name": "exactActiveClass",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "NuxtLinkProps",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                8329,
                8361
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "NuxtLinkProps",
            "schema": []
          }
        },
        {
          "name": "prefetchedClass",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "NuxtLinkProps",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                8366,
                8397
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "NuxtLinkProps",
            "schema": []
          }
        },
        {
          "name": "replace",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "NuxtLinkProps",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                8402,
                8425
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "NuxtLinkProps",
            "schema": []
          }
        },
        {
          "name": "ariaCurrentValue",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "NuxtLinkProps",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                8430,
                8462
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "NuxtLinkProps",
            "schema": []
          }
        },
        {
          "name": "external",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "NuxtLinkProps",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                8467,
                8491
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "NuxtLinkProps",
            "schema": []
          }
        },
        {
          "name": "variant",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "ButtonVariant",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                8518,
                8541
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "ButtonVariant",
            "schema": [
              "\"solid\"",
              "\"outline\"",
              "\"soft\"",
              "\"ghost\"",
              "\"link\""
            ]
          },
          "default": "config.default.variant"
        },
        {
          "name": "label",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                8546,
                8560
              ]
            }
          ],
          "schema": "string",
          "default": "null"
        },
        {
          "name": "loadingIcon",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                8651,
                8671
              ]
            }
          ],
          "schema": "string",
          "default": "config.default.loadingIcon"
        },
        {
          "name": "leadingIcon",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                8676,
                8696
              ]
            }
          ],
          "schema": "string",
          "default": "null"
        },
        {
          "name": "trailingIcon",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                8701,
                8722
              ]
            }
          ],
          "schema": "string",
          "default": "null"
        },
        {
          "name": "to",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "RouteLocationRaw",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                8771,
                8792
              ]
            }
          ],
          "schema": "RouteLocationRaw"
        },
        {
          "name": "href",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "RouteLocationRaw",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                8797,
                8820
              ]
            }
          ],
          "schema": "RouteLocationRaw"
        },
        {
          "name": "truncate",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                8069,
                8087
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          },
          "default": "false"
        },
        {
          "name": "leading",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                8496,
                8513
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          },
          "default": "false"
        },
        {
          "name": "loading",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                8565,
                8582
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          },
          "default": "false"
        },
        {
          "name": "disabled",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                8587,
                8605
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          },
          "default": "false"
        },
        {
          "name": "block",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                8610,
                8625
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          },
          "default": "false"
        },
        {
          "name": "padded",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                8630,
                8646
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          },
          "default": "true"
        },
        {
          "name": "trailing",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                8727,
                8745
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          },
          "default": "false"
        },
        {
          "name": "square",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                8750,
                8766
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          },
          "default": "false"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "class",
          "type": "any",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                6019,
                6090
              ]
            }
          ],
          "schema": "any"
        },
        {
          "name": "type",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                4506,
                4578
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "icon",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                5363,
                5433
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "variant",
          "type": "ButtonVariant",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                5231,
                5358
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "ButtonVariant",
            "schema": [
              "\"solid\"",
              "\"outline\"",
              "\"soft\"",
              "\"ghost\"",
              "\"link\""
            ]
          }
        },
        {
          "name": "href",
          "type": "RouteLocationRaw",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                6307,
                6443
              ]
            }
          ],
          "schema": "RouteLocationRaw"
        },
        {
          "name": "target",
          "type": "NuxtLinkProps",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                6448,
                6583
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "NuxtLinkProps",
            "schema": []
          }
        },
        {
          "name": "block",
          "type": "boolean",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                4583,
                4658
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        },
        {
          "name": "label",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                4663,
                4734
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "loading",
          "type": "boolean",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                4739,
                4816
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        },
        {
          "name": "disabled",
          "type": "boolean",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                4821,
                4899
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        },
        {
          "name": "padded",
          "type": "boolean",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                4904,
                4980
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        },
        {
          "name": "size",
          "type": "ButtonSize",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                4985,
                5106
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "ButtonSize",
            "schema": [
              "\"md\"",
              "\"2xs\"",
              "\"xs\"",
              "\"sm\"",
              "\"lg\"",
              "\"xl\""
            ]
          }
        },
        {
          "name": "color",
          "type": "any",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                5111,
                5226
              ]
            }
          ],
          "schema": "any"
        },
        {
          "name": "loadingIcon",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                5438,
                5520
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "leadingIcon",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                5525,
                5602
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "trailingIcon",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                5607,
                5685
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "trailing",
          "type": "boolean",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                5690,
                5768
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        },
        {
          "name": "leading",
          "type": "boolean",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                5773,
                5850
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        },
        {
          "name": "square",
          "type": "boolean",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                5855,
                5931
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        },
        {
          "name": "truncate",
          "type": "boolean",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                5936,
                6014
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        },
        {
          "name": "to",
          "type": "RouteLocationRaw",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                6168,
                6302
              ]
            }
          ],
          "schema": "RouteLocationRaw"
        },
        {
          "name": "rel",
          "type": "NuxtLinkProps",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                6588,
                6720
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "NuxtLinkProps",
            "schema": []
          }
        },
        {
          "name": "noRel",
          "type": "NuxtLinkProps",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                6725,
                6859
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "NuxtLinkProps",
            "schema": []
          }
        },
        {
          "name": "prefetch",
          "type": "NuxtLinkProps",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                6864,
                7001
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "NuxtLinkProps",
            "schema": []
          }
        },
        {
          "name": "noPrefetch",
          "type": "NuxtLinkProps",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                7006,
                7145
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "NuxtLinkProps",
            "schema": []
          }
        },
        {
          "name": "activeClass",
          "type": "NuxtLinkProps",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                7150,
                7290
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "NuxtLinkProps",
            "schema": []
          }
        },
        {
          "name": "exactActiveClass",
          "type": "NuxtLinkProps",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                7295,
                7440
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "NuxtLinkProps",
            "schema": []
          }
        },
        {
          "name": "prefetchedClass",
          "type": "NuxtLinkProps",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                7445,
                7589
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "NuxtLinkProps",
            "schema": []
          }
        },
        {
          "name": "replace",
          "type": "NuxtLinkProps",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                7594,
                7730
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "NuxtLinkProps",
            "schema": []
          }
        },
        {
          "name": "ariaCurrentValue",
          "type": "NuxtLinkProps",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                7735,
                7880
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "NuxtLinkProps",
            "schema": []
          }
        },
        {
          "name": "external",
          "type": "NuxtLinkProps",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                7885,
                8022
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "NuxtLinkProps",
            "schema": []
          }
        },
        {
          "name": "ui",
          "type": "any",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                3685,
                3720
              ]
            }
          ],
          "schema": "any"
        },
        {
          "name": "attrs",
          "type": "Pick<{ [x: string]: unknown; }, string>",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                3725,
                3811
              ]
            }
          ],
          "schema": "Pick<{ [x: string]: unknown; }, string>"
        },
        {
          "name": "isLeading",
          "type": "string | true",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                3816,
                3868
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | true",
            "schema": [
              "string",
              "true"
            ]
          }
        },
        {
          "name": "isTrailing",
          "type": "string | true",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                3873,
                3926
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | true",
            "schema": [
              "string",
              "true"
            ]
          }
        },
        {
          "name": "isSquare",
          "type": "boolean",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                3931,
                3976
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        },
        {
          "name": "buttonClass",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                3981,
                4028
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "leadingIconName",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                4033,
                4096
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "trailingIconName",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                4101,
                4165
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "leadingIconClass",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                4170,
                4222
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "trailingIconClass",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                4227,
                4280
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "linkProps",
          "type": "{}",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue.d.ts",
              "range": [
                4285,
                4326
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ]
    }
  },
  "UIcon": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/ui/dist/runtime/components/elements/Icon.vue",
    "pascalName": "UIcon",
    "kebabName": "u-icon",
    "chunkName": "components/u-icon",
    "shortPath": "node_modules/@nuxt/ui/dist/runtime/components/elements/Icon.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Icon.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "name",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Icon.vue.d.ts",
              "range": [
                443,
                514
              ]
            },
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Icon.vue.d.ts",
              "range": [
                443,
                514
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "dynamic",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Icon.vue.d.ts",
              "range": [
                608,
                625
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          },
          "default": "false"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "name",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Icon.vue.d.ts",
              "range": [
                443,
                514
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "dynamic",
          "type": "any",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@nuxt/ui/dist/runtime/components/elements/Icon.vue.d.ts",
              "range": [
                223,
                263
              ]
            }
          ],
          "schema": "any"
        }
      ]
    }
  },
  "Icon": {
    "export": "default",
    "chunkName": "components/icon",
    "global": true,
    "kebabName": "icon",
    "pascalName": "Icon",
    "prefetch": false,
    "preload": false,
    "mode": "all",
    "shortPath": "/workspace/KubeCamp/node_modules/nuxt-icon/dist/runtime/Icon.vue",
    "priority": 0,
    "name": "Icon",
    "filePath": "node_modules/nuxt-icon/dist/runtime/Icon.vue",
    "fullPath": "/workspace/KubeCamp/node_modules/nuxt-icon/dist/runtime/Icon.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "name",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/nuxt-icon/dist/runtime/Icon.vue",
              "range": [
                669,
                717
              ]
            },
            {
              "file": "/workspace/KubeCamp/node_modules/nuxt-icon/dist/runtime/Icon.vue",
              "range": [
                669,
                717
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "size",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/nuxt-icon/dist/runtime/Icon.vue",
              "range": [
                721,
                766
              ]
            }
          ],
          "schema": "string",
          "default": "\"\""
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(_: {}) => any",
                "declarations": [],
                "schema": {
                  "kind": "event",
                  "type": "(_: {}): any",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "size",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/nuxt-icon/dist/runtime/Icon.vue",
              "range": [
                721,
                766
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "name",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/nuxt-icon/dist/runtime/Icon.vue",
              "range": [
                669,
                717
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "IconCSS": {
    "export": "default",
    "chunkName": "components/icon-css",
    "global": true,
    "kebabName": "icon-css",
    "pascalName": "IconCSS",
    "prefetch": false,
    "preload": false,
    "mode": "all",
    "shortPath": "/workspace/KubeCamp/node_modules/nuxt-icon/dist/runtime/IconCSS.vue",
    "priority": 0,
    "name": "IconCSS",
    "filePath": "node_modules/nuxt-icon/dist/runtime/IconCSS.vue",
    "fullPath": "/workspace/KubeCamp/node_modules/nuxt-icon/dist/runtime/IconCSS.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "name",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/nuxt-icon/dist/runtime/IconCSS.vue",
              "range": [
                387,
                435
              ]
            },
            {
              "file": "/workspace/KubeCamp/node_modules/nuxt-icon/dist/runtime/IconCSS.vue",
              "range": [
                387,
                435
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "size",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/nuxt-icon/dist/runtime/IconCSS.vue",
              "range": [
                439,
                484
              ]
            }
          ],
          "schema": "string",
          "default": "\"\""
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "size",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/nuxt-icon/dist/runtime/IconCSS.vue",
              "range": [
                439,
                484
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "name",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/KubeCamp/node_modules/nuxt-icon/dist/runtime/IconCSS.vue",
              "range": [
                387,
                435
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  }
};

const _iMhA6V = eventHandler(async () => {
  const componentsIgnoredPrefix = ["Content", "DocumentDriven", "Markdown"];
  const filteredComponents = Object.values(components).filter((c) => c.global && !componentsIgnoredPrefix.some((prefix) => c.pascalName.startsWith(prefix))).map(({ pascalName, filePath, meta }) => {
    return {
      name: pascalName,
      path: filePath,
      meta: {
        props: meta.props,
        slots: meta.slots,
        events: meta.events
      }
    };
  });
  const appConfig = useAppConfig();
  const runtimeConfig = useRuntimeConfig();
  const { app, contentSchema, appConfigSchema, studio, content: { sources, ignores, locales, defaultLocale, highlight, navigation, documentDriven, experimental } } = runtimeConfig;
  const safeSources = {};
  Object.keys(sources).forEach((name) => {
    const { driver, prefix, base, repo, branch, dir } = sources[name] || {};
    safeSources[name] = {
      driver,
      prefix,
      base,
      repo,
      branch,
      dir
    };
  });
  const hasPinceau = runtimeConfig?.pinceau?.studio;
  let tokensConfig;
  let tokensConfigSchema;
  if (hasPinceau) {
    tokensConfig = await $fetch.native(joinURL(app.baseURL, "/__pinceau_tokens_config.json")).then((r) => r.json());
    tokensConfigSchema = await $fetch.native(joinURL(app.baseURL, "/__pinceau_tokens_schema.json")).then((r) => r.json());
  }
  return {
    // Studio version
    version,
    project: studio?.project,
    tokens: studio?.publicToken,
    gitInfo: studio?.gitInfo || {},
    // nuxt.schema for Nuxt Content frontmatter
    contentSchema: contentSchema || {},
    // app.config
    appConfigSchema: appConfigSchema || {},
    appConfig,
    // tokens.config
    tokensConfigSchema,
    tokensConfig,
    // @nuxt/content
    content: { sources: safeSources, ignores, locales, defaultLocale, highlight, navigation, documentDriven, experimental },
    // nuxt-component-meta
    components: filteredComponents
  };
});

const _eQ5KNq = defineEventHandler((event) => {
  appendHeader(event, "Access-Control-Allow-Origin", "*");
  const componentName = (event.context.params["component?"] || "").replace(/\.json$/, "");
  if (componentName) {
    const meta = components[pascalCase(componentName)];
    if (!meta) {
      throw createError({
        statusMessage: "Components not found!",
        statusCode: 404,
        data: {
          description: "Please make sure you are looking for correct component"
        }
      });
    }
    return meta;
  }
  return components;
});

function getEnv(config) {
  const key = config.toUpperCase();
  const env = globalThis._importMeta_.env || {};
  const privateKey = `NUXT_SITE_${key}`;
  const publicKey = `NUXT_PUBLIC_SITE_${key}`;
  if (privateKey in env)
    return env[privateKey];
  if (publicKey in env)
    return env[publicKey];
}
const _VYFD8u = defineEventHandler((e) => {
  const config = useRuntimeConfig()["nuxt-site-config"];
  const siteConfig = e.context.siteConfig || createSiteConfigStack({
    debug: config.debug
  });
  if (siteConfig) {
    const appConfig = useAppConfig();
    const nitroOrigin = useNitroOrigin(e);
    e.context.siteConfigNitroOrigin = nitroOrigin;
    siteConfig.push({
      _context: "nitro:init",
      _priority: -4,
      url: nitroOrigin
    });
    siteConfig.push({
      _context: "runtimeEnv",
      _priority: 0,
      env: getEnv("Env"),
      url: getEnv("Url"),
      name: getEnv("Name"),
      description: getEnv("Description"),
      logo: getEnv("Image"),
      defaultLocale: getEnv("Language"),
      indexable: getEnv("Indexable")
    });
    const buildStack = config.stack || [];
    buildStack.forEach((c) => siteConfig.push(c));
    if (appConfig.site) {
      siteConfig.push({
        _priority: -2,
        _context: "app:config",
        ...appConfig.site
      });
    }
    if (e.context._nitro.routeRules.site) {
      siteConfig.push({
        _context: "route-rules",
        ...e.context._nitro.routeRules.site
      });
    }
    const curStack = siteConfig.get();
    if (typeof curStack.indexable === "undefined") {
      siteConfig.push({
        _context: "computed-env",
        _priority: -4,
        // allow overriding from the module
        indexable: curStack.env === "production"
      });
    }
  }
  e.context.siteConfig = siteConfig;
});

const get = (obj, path) => path.split(".").reduce((acc, part) => acc && acc[part], obj);
const _pick = (obj, condition) => Object.keys(obj).filter(condition).reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
const omit = (keys) => (obj) => keys && keys.length ? _pick(obj, (key) => !keys.includes(key)) : obj;
const apply = (fn) => (data) => Array.isArray(data) ? data.map((item) => fn(item)) : fn(data);
const detectProperties = (keys) => {
  const prefixes = [];
  const properties = [];
  for (const key of keys) {
    if (["$", "_"].includes(key)) {
      prefixes.push(key);
    } else {
      properties.push(key);
    }
  }
  return { prefixes, properties };
};
const withoutKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => !properties.includes(key) && !prefixes.includes(key[0]));
};
const withKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => properties.includes(key) || prefixes.includes(key[0]));
};
const sortList = (data, params) => {
  const comperable = new Intl.Collator(params.$locale, {
    numeric: params.$numeric,
    caseFirst: params.$caseFirst,
    sensitivity: params.$sensitivity
  });
  const keys = Object.keys(params).filter((key) => !key.startsWith("$"));
  for (const key of keys) {
    data = data.sort((a, b) => {
      const values = [get(a, key), get(b, key)].map((value) => {
        if (value === null) {
          return void 0;
        }
        if (value instanceof Date) {
          return value.toISOString();
        }
        return value;
      });
      if (params[key] === -1) {
        values.reverse();
      }
      return comperable.compare(values[0], values[1]);
    });
  }
  return data;
};
const assertArray = (value, message = "Expected an array") => {
  if (!Array.isArray(value)) {
    throw new TypeError(message);
  }
};
const ensureArray = (value) => {
  return Array.isArray(value) ? value : [void 0, null].includes(value) ? [] : [value];
};

const arrayParams = ["sort", "where", "only", "without"];
function createQuery(fetcher, opts = {}) {
  const queryParams = {};
  for (const key of Object.keys(opts.initialParams || {})) {
    queryParams[key] = arrayParams.includes(key) ? ensureArray(opts.initialParams[key]) : opts.initialParams[key];
  }
  const $set = (key, fn = (v) => v) => {
    return (...values) => {
      queryParams[key] = fn(...values);
      return query;
    };
  };
  const resolveResult = (result) => {
    if (opts.legacy) {
      if (result?.surround) {
        return result.surround;
      }
      if (!result) {
        return result;
      }
      if (result?.dirConfig) {
        result.result = {
          _path: result.dirConfig?._path,
          ...result.result,
          _dir: result.dirConfig
        };
      }
      return result?._path || Array.isArray(result) || !Object.prototype.hasOwnProperty.call(result, "result") ? result : result?.result;
    }
    return result;
  };
  const query = {
    params: () => ({
      ...queryParams,
      ...queryParams.where ? { where: [...ensureArray(queryParams.where)] } : {},
      ...queryParams.sort ? { sort: [...ensureArray(queryParams.sort)] } : {}
    }),
    only: $set("only", ensureArray),
    without: $set("without", ensureArray),
    where: $set("where", (q) => [...ensureArray(queryParams.where), ...ensureArray(q)]),
    sort: $set("sort", (sort) => [...ensureArray(queryParams.sort), ...ensureArray(sort)]),
    limit: $set("limit", (v) => parseInt(String(v), 10)),
    skip: $set("skip", (v) => parseInt(String(v), 10)),
    // find
    find: () => fetcher(query).then(resolveResult),
    findOne: () => fetcher($set("first")(true)).then(resolveResult),
    count: () => fetcher($set("count")(true)).then(resolveResult),
    // locale
    locale: (_locale) => query.where({ _locale }),
    withSurround: $set("surround", (surroundQuery, options) => ({ query: surroundQuery, ...options })),
    withDirConfig: () => $set("dirConfig")(true)
  };
  if (opts.legacy) {
    query.findSurround = (surroundQuery, options) => {
      return query.withSurround(surroundQuery, options).find().then(resolveResult);
    };
    return query;
  }
  return query;
}

const defineTransformer = (transformer) => {
  return transformer;
};

function createTokenizer(parser, initialize, from) {
  let point = Object.assign(
    from ? Object.assign({}, from) : {
      line: 1,
      column: 1,
      offset: 0
    },
    {
      _index: 0,
      _bufferIndex: -1
    }
  );
  const columnStart = {};
  const resolveAllConstructs = [];
  let chunks = [];
  let stack = [];
  const effects = {
    consume,
    enter,
    exit,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    })
  };
  const context = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser,
    sliceStream,
    sliceSerialize,
    now,
    defineSkip,
    write
  };
  let state = initialize.tokenize.call(context, effects);
  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }
  return context;
  function write(slice) {
    chunks = push(chunks, slice);
    main();
    if (chunks[chunks.length - 1] !== null) {
      return [];
    }
    addResult(initialize, 0);
    context.events = resolveAll(resolveAllConstructs, context.events, context);
    return context.events;
  }
  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs);
  }
  function sliceStream(token) {
    return sliceChunks(chunks, token);
  }
  function now() {
    return Object.assign({}, point);
  }
  function defineSkip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
  }
  function main() {
    let chunkIndex;
    while (point._index < chunks.length) {
      const chunk = chunks[point._index];
      if (typeof chunk === "string") {
        chunkIndex = point._index;
        if (point._bufferIndex < 0) {
          point._bufferIndex = 0;
        }
        while (point._index === chunkIndex && point._bufferIndex < chunk.length) {
          go(chunk.charCodeAt(point._bufferIndex));
        }
      } else {
        go(chunk);
      }
    }
  }
  function go(code) {
    state = state(code);
  }
  function consume(code) {
    if (markdownLineEnding(code)) {
      point.line++;
      point.column = 1;
      point.offset += code === -3 ? 2 : 1;
      accountForPotentialSkip();
    } else if (code !== -1) {
      point.column++;
      point.offset++;
    }
    if (point._bufferIndex < 0) {
      point._index++;
    } else {
      point._bufferIndex++;
      if (point._bufferIndex === chunks[point._index].length) {
        point._bufferIndex = -1;
        point._index++;
      }
    }
    context.previous = code;
  }
  function enter(type, fields) {
    const token = fields || {};
    token.type = type;
    token.start = now();
    context.events.push(["enter", token, context]);
    stack.push(token);
    return token;
  }
  function exit(type) {
    const token = stack.pop();
    token.end = now();
    context.events.push(["exit", token, context]);
    return token;
  }
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }
  function onsuccessfulcheck(_, info) {
    info.restore();
  }
  function constructFactory(onreturn, fields) {
    return hook;
    function hook(constructs, returnState, bogusState) {
      let listOfConstructs;
      let constructIndex;
      let currentConstruct;
      let info;
      return Array.isArray(constructs) ? (
        /* c8 ignore next 1 */
        handleListOfConstructs(constructs)
      ) : "tokenize" in constructs ? handleListOfConstructs([constructs]) : handleMapOfConstructs(constructs);
      function handleMapOfConstructs(map) {
        return start;
        function start(code) {
          const def = code !== null && map[code];
          const all = code !== null && map.null;
          const list = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(def) ? def : def ? [def] : [],
            ...Array.isArray(all) ? all : all ? [all] : []
          ];
          return handleListOfConstructs(list)(code);
        }
      }
      function handleListOfConstructs(list) {
        listOfConstructs = list;
        constructIndex = 0;
        if (list.length === 0) {
          return bogusState;
        }
        return handleConstruct(list[constructIndex]);
      }
      function handleConstruct(construct) {
        return start;
        function start(code) {
          info = store();
          currentConstruct = construct;
          if (!construct.partial) {
            context.currentConstruct = construct;
          }
          if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) {
            return nok();
          }
          return construct.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            fields ? Object.assign(Object.create(context), fields) : context,
            effects,
            ok,
            nok
          )(code);
        }
      }
      function ok(code) {
        onreturn(currentConstruct, info);
        return returnState;
      }
      function nok(code) {
        info.restore();
        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex]);
        }
        return bogusState;
      }
    }
  }
  function addResult(construct, from2) {
    if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
      resolveAllConstructs.push(construct);
    }
    if (construct.resolve) {
      splice(
        context.events,
        from2,
        context.events.length - from2,
        construct.resolve(context.events.slice(from2), context)
      );
    }
    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
  }
  function store() {
    const startPoint = now();
    const startPrevious = context.previous;
    const startCurrentConstruct = context.currentConstruct;
    const startEventsIndex = context.events.length;
    const startStack = Array.from(stack);
    return {
      restore,
      from: startEventsIndex
    };
    function restore() {
      point = startPoint;
      context.previous = startPrevious;
      context.currentConstruct = startCurrentConstruct;
      context.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
    }
  }
  function accountForPotentialSkip() {
    if (point.line in columnStart && point.column < 2) {
      point.column = columnStart[point.line];
      point.offset += columnStart[point.line] - 1;
    }
  }
}
function sliceChunks(chunks, token) {
  const startIndex = token.start._index;
  const startBufferIndex = token.start._bufferIndex;
  const endIndex = token.end._index;
  const endBufferIndex = token.end._bufferIndex;
  let view;
  if (startIndex === endIndex) {
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);
    if (startBufferIndex > -1) {
      view[0] = view[0].slice(startBufferIndex);
    }
    if (endBufferIndex > 0) {
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }
  return view;
}
function serializeChunks(chunks, expandTabs) {
  let index = -1;
  const result = [];
  let atTab;
  while (++index < chunks.length) {
    const chunk = chunks[index];
    let value;
    if (typeof chunk === "string") {
      value = chunk;
    } else
      switch (chunk) {
        case -5: {
          value = "\r";
          break;
        }
        case -4: {
          value = "\n";
          break;
        }
        case -3: {
          value = "\r\n";
          break;
        }
        case -2: {
          value = expandTabs ? " " : "	";
          break;
        }
        case -1: {
          if (!expandTabs && atTab)
            continue;
          value = " ";
          break;
        }
        default: {
          value = String.fromCharCode(chunk);
        }
      }
    atTab = chunk === -2;
    result.push(value);
  }
  return result.join("");
}

function initializeDocument(effects) {
  const self = this;
  const delimiter = (this.parser.delimiter || ",").charCodeAt(0);
  return enterRow;
  function enterRow(code) {
    return effects.attempt(
      { tokenize: attemptLastLine },
      (code2) => {
        effects.consume(code2);
        return enterRow;
      },
      (code2) => {
        effects.enter("row");
        return enterColumn(code2);
      }
    )(code);
  }
  function enterColumn(code) {
    effects.enter("column");
    return content(code);
  }
  function content(code) {
    if (code === null) {
      effects.exit("column");
      effects.exit("row");
      effects.consume(code);
      return content;
    }
    if (code === 34) {
      return quotedData(code);
    }
    if (code === delimiter) {
      if (self.previous === delimiter || markdownLineEnding(self.previous) || self.previous === null) {
        effects.enter("data");
        effects.exit("data");
      }
      effects.exit("column");
      effects.enter("columnSeparator");
      effects.consume(code);
      effects.exit("columnSeparator");
      effects.enter("column");
      return content;
    }
    if (markdownLineEnding(code)) {
      effects.exit("column");
      effects.enter("newline");
      effects.consume(code);
      effects.exit("newline");
      effects.exit("row");
      return enterRow;
    }
    return data(code);
  }
  function data(code) {
    effects.enter("data");
    return dataChunk(code);
  }
  function dataChunk(code) {
    if (code === null || markdownLineEnding(code) || code === delimiter) {
      effects.exit("data");
      return content(code);
    }
    if (code === 92) {
      return escapeCharacter(code);
    }
    effects.consume(code);
    return dataChunk;
  }
  function escapeCharacter(code) {
    effects.consume(code);
    return function(code2) {
      effects.consume(code2);
      return content;
    };
  }
  function quotedData(code) {
    effects.enter("quotedData");
    effects.enter("quotedDataChunk");
    effects.consume(code);
    return quotedDataChunk;
  }
  function quotedDataChunk(code) {
    if (code === 92) {
      return escapeCharacter(code);
    }
    if (code === 34) {
      return effects.attempt(
        { tokenize: attemptDoubleQuote },
        (code2) => {
          effects.exit("quotedDataChunk");
          effects.enter("quotedDataChunk");
          return quotedDataChunk(code2);
        },
        (code2) => {
          effects.consume(code2);
          effects.exit("quotedDataChunk");
          effects.exit("quotedData");
          return content;
        }
      )(code);
    }
    effects.consume(code);
    return quotedDataChunk;
  }
}
function attemptDoubleQuote(effects, ok, nok) {
  return startSequence;
  function startSequence(code) {
    if (code !== 34) {
      return nok(code);
    }
    effects.enter("quoteFence");
    effects.consume(code);
    return sequence;
  }
  function sequence(code) {
    if (code !== 34) {
      return nok(code);
    }
    effects.consume(code);
    effects.exit("quoteFence");
    return (code2) => ok(code2);
  }
}
function attemptLastLine(effects, ok, nok) {
  return enterLine;
  function enterLine(code) {
    if (!markdownSpace(code) && code !== null) {
      return nok(code);
    }
    effects.enter("emptyLine");
    return continueLine(code);
  }
  function continueLine(code) {
    if (markdownSpace(code)) {
      effects.consume(code);
      return continueLine;
    }
    if (code === null) {
      effects.exit("emptyLine");
      return ok(code);
    }
    return nok(code);
  }
}
const parse = (options) => {
  return createTokenizer(
    { ...options },
    { tokenize: initializeDocument },
    void 0
  );
};

const own = {}.hasOwnProperty;
const initialPoint = {
  line: 1,
  column: 1,
  offset: 0
};
const fromCSV = function(value, encoding, options) {
  if (typeof encoding !== "string") {
    options = encoding;
    encoding = void 0;
  }
  return compiler()(
    postprocess(
      parse(options).write(preprocess()(value, encoding, true))
    )
  );
};
function compiler() {
  const config = {
    enter: {
      column: opener(openColumn),
      row: opener(openRow),
      data: onenterdata,
      quotedData: onenterdata
    },
    exit: {
      row: closer(),
      column: closer(),
      data: onexitdata,
      quotedData: onexitQuotedData
    }
  };
  return compile;
  function compile(events) {
    const tree = {
      type: "root",
      children: []
    };
    const stack = [tree];
    const tokenStack = [];
    const context = {
      stack,
      tokenStack,
      config,
      enter,
      exit,
      resume
    };
    let index = -1;
    while (++index < events.length) {
      const handler = config[events[index][0]];
      if (own.call(handler, events[index][1].type)) {
        handler[events[index][1].type].call(
          Object.assign(
            {
              sliceSerialize: events[index][2].sliceSerialize
            },
            context
          ),
          events[index][1]
        );
      }
    }
    if (tokenStack.length > 0) {
      const tail = tokenStack[tokenStack.length - 1];
      const handler = tail[1] || defaultOnError;
      handler.call(context, void 0, tail[0]);
    }
    tree.position = {
      start: point(
        events.length > 0 ? events[0][1].start : initialPoint
      ),
      end: point(
        events.length > 0 ? events[events.length - 2][1].end : initialPoint
      )
    };
    return tree;
  }
  function point(d) {
    return {
      line: d.line,
      column: d.column,
      offset: d.offset
    };
  }
  function opener(create, and) {
    return open;
    function open(token) {
      enter.call(this, create(token), token);
      if (and) {
        and.call(this, token);
      }
    }
  }
  function enter(node, token, errorHandler) {
    const parent = this.stack[this.stack.length - 1];
    parent.children.push(node);
    this.stack.push(node);
    this.tokenStack.push([token, errorHandler]);
    node.position = {
      start: point(token.start)
    };
    return node;
  }
  function closer(and) {
    return close;
    function close(token) {
      if (and) {
        and.call(this, token);
      }
      exit.call(this, token);
    }
  }
  function exit(token, onExitError) {
    const node = this.stack.pop();
    const open = this.tokenStack.pop();
    if (!open) {
      throw new Error(
        "Cannot close `" + token.type + "` (" + stringifyPosition({
          start: token.start,
          end: token.end
        }) + "): it\u2019s not open"
      );
    } else if (open[0].type !== token.type) {
      if (onExitError) {
        onExitError.call(this, token, open[0]);
      } else {
        const handler = open[1] || defaultOnError;
        handler.call(this, token, open[0]);
      }
    }
    node.position.end = point(token.end);
    return node;
  }
  function resume() {
    return toString$1(this.stack.pop());
  }
  function onenterdata(token) {
    const parent = this.stack[this.stack.length - 1];
    let tail = parent.children[parent.children.length - 1];
    if (!tail || tail.type !== "text") {
      tail = text();
      tail.position = {
        start: point(token.start)
      };
      parent.children.push(tail);
    }
    this.stack.push(tail);
  }
  function onexitdata(token) {
    const tail = this.stack.pop();
    tail.value += this.sliceSerialize(token).trim().replace(/""/g, '"');
    tail.position.end = point(token.end);
  }
  function onexitQuotedData(token) {
    const tail = this.stack.pop();
    const value = this.sliceSerialize(token);
    tail.value += this.sliceSerialize(token).trim().substring(1, value.length - 1).replace(/""/g, '"');
    tail.position.end = point(token.end);
  }
  function text() {
    return {
      type: "text",
      value: ""
    };
  }
  function openColumn() {
    return {
      type: "column",
      children: []
    };
  }
  function openRow() {
    return {
      type: "row",
      children: []
    };
  }
}
function defaultOnError(left, right) {
  if (left) {
    throw new Error(
      "Cannot close `" + left.type + "` (" + stringifyPosition({
        start: left.start,
        end: left.end
      }) + "): a different token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is open"
    );
  } else {
    throw new Error(
      "Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is still open"
    );
  }
}

function csvParse(options) {
  const parser = (doc) => {
    return fromCSV(doc, options);
  };
  Object.assign(this, { Parser: parser });
  const toJsonObject = (tree) => {
    const [header, ...rows] = tree.children;
    const columns = header.children.map((col) => col.children[0].value);
    const data = rows.map((row) => {
      return row.children.reduce((acc, col, i) => {
        acc[String(columns[i])] = col.children[0]?.value;
        return acc;
      }, {});
    });
    return data;
  };
  const toJsonArray = (tree) => {
    const data = tree.children.map((row) => {
      return row.children.map((col) => col.children[0]?.value);
    });
    return data;
  };
  const compiler = (doc) => {
    if (options.json) {
      return toJsonObject(doc);
    }
    return toJsonArray(doc);
  };
  Object.assign(this, { Compiler: compiler });
}
const csv = defineTransformer({
  name: "csv",
  extensions: [".csv"],
  parse: async (_id, content, options = {}) => {
    const stream = unified().use(csvParse, {
      delimiter: ",",
      json: true,
      ...options
    });
    const { result } = await stream.process(content);
    return {
      _id,
      _type: "csv",
      body: result
    };
  }
});

const SEMVER_REGEX = /^(\d+)(\.\d+)*(\.x)?$/;
const describeId = (id) => {
  const [_source, ...parts] = id.split(":");
  const [, filename, _extension] = parts[parts.length - 1]?.match(/(.*)\.([^.]+)$/) || [];
  if (filename) {
    parts[parts.length - 1] = filename;
  }
  const _path = (parts || []).join("/");
  return {
    _source,
    _path,
    _extension,
    _file: _extension ? `${_path}.${_extension}` : _path
  };
};
const pathMeta = defineTransformer({
  name: "path-meta",
  extensions: [".*"],
  transform(content, options = {}) {
    const { locales = [], defaultLocale = "en", respectPathCase = false } = options;
    const { _source, _file, _path, _extension } = describeId(content._id);
    const parts = _path.split("/");
    const _locale = locales.includes(parts[0]) ? parts.shift() : defaultLocale;
    const filePath = generatePath(parts.join("/"), { respectPathCase });
    return {
      _path: filePath,
      _dir: filePath.split("/").slice(-2)[0],
      _draft: content._draft ?? isDraft(_path),
      _partial: isPartial(_path),
      _locale,
      ...content,
      // TODO: move title to Markdown parser
      title: content.title || generateTitle(refineUrlPart(parts[parts.length - 1])),
      _source,
      _file,
      _extension
    };
  }
});
const isDraft = (path) => !!path.match(/\.draft(\/|\.|$)/);
const isPartial = (path) => path.split(/[:/]/).some((part) => part.match(/^_.*/));
const generatePath = (path, { forceLeadingSlash = true, respectPathCase = false } = {}) => {
  path = path.split("/").map((part) => slugify(refineUrlPart(part), { lower: !respectPathCase })).join("/");
  return forceLeadingSlash ? withLeadingSlash(withoutTrailingSlash(path)) : path;
};
const generateTitle = (path) => path.split(/[\s-]/g).map(pascalCase).join(" ");
function refineUrlPart(name) {
  name = name.split(/[/:]/).pop();
  if (SEMVER_REGEX.test(name)) {
    return name;
  }
  return name.replace(/(\d+\.)?(.*)/, "$2").replace(/^index(\.draft)?$/, "").replace(/\.draft$/, "");
}

const markdown = defineTransformer({
  name: "markdown",
  extensions: [".md"],
  parse: async (_id, content, options = {}) => {
    const config = { ...options };
    config.rehypePlugins = await importPlugins(config.rehypePlugins);
    config.remarkPlugins = await importPlugins(config.remarkPlugins);
    const highlightOptions = options.highlight ? {
      ...options.highlight,
      // Pass only when it's an function. String values are handled by `@nuxtjs/mdc`
      highlighter: typeof options.highlight?.highlighter === "function" ? options.highlight.highlighter : void 0
    } : void 0;
    const parsed = await parseMarkdown(content, {
      highlight: highlightOptions,
      remark: {
        plugins: config.remarkPlugins
      },
      rehype: {
        options: {
          handlers: {
            link
          }
        },
        plugins: config.rehypePlugins
      },
      toc: config.toc
    });
    return {
      ...parsed.data,
      excerpt: parsed.excerpt,
      body: {
        ...parsed.body,
        toc: parsed.toc
      },
      _type: "markdown",
      _id
    };
  }
});
async function importPlugins(plugins = {}) {
  const resolvedPlugins = {};
  for (const [name, plugin] of Object.entries(plugins)) {
    if (plugin) {
      resolvedPlugins[name] = {
        instance: plugin.instance || await import(
          /* @vite-ignore */
          name
        ).then((m) => m.default || m),
        options: plugin
      };
    } else {
      resolvedPlugins[name] = false;
    }
  }
  return resolvedPlugins;
}
function link(state, node) {
  const properties = {
    ...node.attributes || {},
    href: normalizeUri(normalizeLink(node.url))
  };
  if (node.title !== null && node.title !== void 0) {
    properties.title = node.title;
  }
  const result = {
    type: "element",
    tagName: "a",
    properties,
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}
function normalizeLink(link2) {
  const match = link2.match(/#.+$/);
  const hash = match ? match[0] : "";
  if (link2.replace(/#.+$/, "").endsWith(".md") && (isRelative(link2) || !/^https?/.test(link2) && !link2.startsWith("/"))) {
    return generatePath(link2.replace(".md" + hash, ""), { forceLeadingSlash: false }) + hash;
  } else {
    return link2;
  }
}

const yaml = defineTransformer({
  name: "Yaml",
  extensions: [".yml", ".yaml"],
  parse: (_id, content) => {
    const { data } = parseFrontMatter(`---
${content}
---`);
    let parsed = data;
    if (Array.isArray(data)) {
      console.warn(`YAML array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = { body: data };
    }
    return {
      ...parsed,
      _id,
      _type: "yaml"
    };
  }
});

const json = defineTransformer({
  name: "Json",
  extensions: [".json", ".json5"],
  parse: async (_id, content) => {
    let parsed;
    if (typeof content === "string") {
      if (_id.endsWith("json5")) {
        parsed = (await import('file:///workspace/KubeCamp/node_modules/json5/lib/index.js').then((m) => m.default || m)).parse(content);
      } else if (_id.endsWith("json")) {
        parsed = destr$1(content);
      }
    } else {
      parsed = content;
    }
    if (Array.isArray(parsed)) {
      console.warn(`JSON array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = {
        body: parsed
      };
    }
    return {
      ...parsed,
      _id,
      _type: "json"
    };
  }
});

const TRANSFORMERS = [
  csv,
  markdown,
  json,
  yaml,
  pathMeta
];
function getParser(ext, additionalTransformers = []) {
  let parser = additionalTransformers.find((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.parse);
  if (!parser) {
    parser = TRANSFORMERS.find((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.parse);
  }
  return parser;
}
function getTransformers(ext, additionalTransformers = []) {
  return [
    ...additionalTransformers.filter((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.transform),
    ...TRANSFORMERS.filter((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.transform)
  ];
}
async function transformContent(id, content, options = {}) {
  const { transformers = [] } = options;
  const file = { _id: id, body: content };
  const ext = extname(id);
  const parser = getParser(ext, transformers);
  if (!parser) {
    console.warn(`${ext} files are not supported, "${id}" falling back to raw content`);
    return file;
  }
  const parserOptions = options[camelCase(parser.name)] || {};
  const parsed = await parser.parse(file._id, file.body, parserOptions);
  const matchedTransformers = getTransformers(ext, transformers);
  const result = await matchedTransformers.reduce(async (prev, cur) => {
    const next = await prev || parsed;
    const transformOptions = options[camelCase(cur.name)];
    if (transformOptions === false) {
      return next;
    }
    return cur.transform(next, transformOptions || {});
  }, Promise.resolve(parsed));
  return result;
}

function makeIgnored(ignores) {
  const rxAll = ["/\\.", "/-", ...ignores.filter((p) => p)].map((p) => new RegExp(p));
  return function isIgnored(key) {
    const path = "/" + key.replace(/:/g, "/");
    return rxAll.some((rx) => rx.test(path));
  };
}

function createMatch(opts = {}) {
  const operators = createOperators(match, opts.operators);
  function match(item, conditions) {
    if (typeof conditions !== "object" || conditions instanceof RegExp) {
      return operators.$eq(item, conditions);
    }
    return Object.keys(conditions || {}).every((key) => {
      const condition = conditions[key];
      if (key.startsWith("$") && operators[key]) {
        const fn = operators[key];
        return typeof fn === "function" ? fn(item, condition) : false;
      }
      return match(get(item, key), condition);
    });
  }
  return match;
}
function createOperators(match, operators = {}) {
  return {
    $match: (item, condition) => match(item, condition),
    /**
     * Match if item equals condition
     **/
    $eq: (item, condition) => condition instanceof RegExp ? condition.test(item) : item === condition,
    /**
     * Match if item not equals condition
     **/
    $ne: (item, condition) => condition instanceof RegExp ? !condition.test(item) : item !== condition,
    /**
     * Match is condition is false
     **/
    $not: (item, condition) => !match(item, condition),
    /**
     * Match only if all of nested conditions are true
     **/
    $and: (item, condition) => {
      assertArray(condition, "$and requires an array as condition");
      return condition.every((cond) => match(item, cond));
    },
    /**
     * Match if any of nested conditions is true
     **/
    $or: (item, condition) => {
      assertArray(condition, "$or requires an array as condition");
      return condition.some((cond) => match(item, cond));
    },
    /**
     * Match if item is in condition array
     **/
    $in: (item, condition) => ensureArray(condition).some(
      (cond) => Array.isArray(item) ? match(item, { $contains: cond }) : match(item, cond)
    ),
    /**
     * Match if item contains every condition or math every rule in condition array
     **/
    $contains: (item, condition) => {
      item = Array.isArray(item) ? item : String(item);
      return ensureArray(condition).every((i) => item.includes(i));
    },
    /**
     * Ignore case contains
     **/
    $icontains: (item, condition) => {
      if (typeof condition !== "string") {
        throw new TypeError("$icontains requires a string, use $contains instead");
      }
      item = String(item).toLocaleLowerCase();
      return ensureArray(condition).every((i) => item.includes(i.toLocaleLowerCase()));
    },
    /**
     * Match if item contains at least one rule from condition array
     */
    $containsAny: (item, condition) => {
      assertArray(condition, "$containsAny requires an array as condition");
      item = Array.isArray(item) ? item : String(item);
      return condition.some((i) => item.includes(i));
    },
    /**
     * Check key existence
     */
    $exists: (item, condition) => condition ? typeof item !== "undefined" : typeof item === "undefined",
    /**
     * Match if type of item equals condition
     */
    $type: (item, condition) => typeof item === String(condition),
    /**
     * Provides regular expression capabilities for pattern matching strings.
     */
    $regex: (item, condition) => {
      if (!(condition instanceof RegExp)) {
        const matched = String(condition).match(/\/(.*)\/([dgimsuy]*)$/);
        condition = matched ? new RegExp(matched[1], matched[2] || "") : new RegExp(condition);
      }
      return condition.test(String(item || ""));
    },
    /**
     * Check if item is less than condition
     */
    $lt: (item, condition) => {
      return item < condition;
    },
    /**
     * Check if item is less than or equal to condition
     */
    $lte: (item, condition) => {
      return item <= condition;
    },
    /**
     * Check if item is greater than condition
     */
    $gt: (item, condition) => {
      return item > condition;
    },
    /**
     * Check if item is greater than or equal to condition
     */
    $gte: (item, condition) => {
      return item >= condition;
    },
    ...operators || {}
  };
}

function createPipelineFetcher(getContentsList) {
  const match = createMatch();
  const surround = (data, { query, before, after }) => {
    const matchQuery = typeof query === "string" ? { _path: query } : query;
    const index = data.findIndex((item) => match(item, matchQuery));
    before = before ?? 1;
    after = after ?? 1;
    const slice = new Array(before + after).fill(null, 0);
    return index === -1 ? slice : slice.map((_, i) => data[index - before + i + Number(i >= before)] || null);
  };
  const matchingPipelines = [
    // Conditions
    (state, params) => {
      const filtered = state.result.filter((item) => ensureArray(params.where).every((matchQuery) => match(item, matchQuery)));
      return {
        ...state,
        result: filtered,
        total: filtered.length
      };
    },
    // Sort data
    (state, params) => ensureArray(params.sort).forEach((options) => sortList(state.result, options)),
    function fetchSurround(state, params, db) {
      if (params.surround) {
        let _surround = surround(state.result?.length === 1 ? db : state.result, params.surround);
        _surround = apply(withoutKeys(params.without))(_surround);
        _surround = apply(withKeys(params.only))(_surround);
        state.surround = _surround;
      }
      return state;
    }
  ];
  const transformingPiples = [
    // Skip first items
    (state, params) => {
      if (params.skip) {
        return {
          ...state,
          result: state.result.slice(params.skip),
          skip: params.skip
        };
      }
    },
    // Pick first items
    (state, params) => {
      if (params.limit) {
        return {
          ...state,
          result: state.result.slice(0, params.limit),
          limit: params.limit
        };
      }
    },
    function fetchDirConfig(state, params, db) {
      if (params.dirConfig) {
        const path = state.result[0]?._path || params.where?.find((w) => w._path)?._path;
        if (typeof path === "string") {
          const dirConfig = db.find((item) => item._path === joinURL(path, "_dir"));
          if (dirConfig) {
            state.dirConfig = { _path: dirConfig._path, ...withoutKeys(["_"])(dirConfig) };
          }
        }
      }
      return state;
    },
    // Remove unwanted fields
    (state, params) => ({
      ...state,
      result: apply(withoutKeys(params.without))(state.result)
    }),
    // Select only wanted fields
    (state, params) => ({
      ...state,
      result: apply(withKeys(params.only))(state.result)
    })
  ];
  return async (query) => {
    const db = await getContentsList();
    const params = query.params();
    const result1 = {
      result: db,
      limit: 0,
      skip: 0,
      total: db.length
    };
    const matchedData = matchingPipelines.reduce(($data, pipe) => pipe($data, params, db) || $data, result1);
    if (params.count) {
      return {
        result: matchedData.result.length
      };
    }
    const result = transformingPiples.reduce(($data, pipe) => pipe($data, params, db) || $data, matchedData);
    if (params.first) {
      return {
        ...omit(["skip", "limit", "total"])(result),
        result: result.result[0]
      };
    }
    return result;
  };
}

const isPreview = (event) => {
  const previewToken = getQuery$1(event).previewToken || getCookie(event, "previewToken");
  return !!previewToken;
};
const getPreview = (event) => {
  const key = getQuery$1(event).previewToken || getCookie(event, "previewToken");
  return { key };
};

async function getContentIndex(event) {
  const defaultLocale = useRuntimeConfig().content.defaultLocale;
  let contentIndex = await cacheStorage.getItem("content-index.json");
  if (!contentIndex) {
    const data = await getContentsList(event);
    contentIndex = data.reduce((acc, item) => {
      acc[item._path] = acc[item._path] || [];
      if (item._locale === defaultLocale) {
        acc[item._path].unshift(item._id);
      } else {
        acc[item._path].push(item._id);
      }
      return acc;
    }, {});
    await cacheStorage.setItem("content-index.json", contentIndex);
  }
  return contentIndex;
}
async function getIndexedContentsList(event, query) {
  const params = query.params();
  const path = params?.where?.find((wh) => wh._path)?._path;
  if (!isPreview(event) && !params.surround && !params.dirConfig && (typeof path === "string" || path instanceof RegExp)) {
    const index = await getContentIndex(event);
    const keys = Object.keys(index).filter((key) => path.test ? path.test(key) : key === String(path)).flatMap((key) => index[key]);
    const contents = await Promise.all(keys.map((key) => getContent(event, key)));
    return contents;
  }
  return getContentsList(event);
}

const transformers = [];

const sourceStorage = prefixStorage(useStorage(), "content:source");
const cacheStorage = prefixStorage(useStorage(), "cache:content");
const cacheParsedStorage = prefixStorage(useStorage(), "cache:content:parsed");
const contentConfig = useRuntimeConfig().content;
const isIgnored = makeIgnored(contentConfig.ignores);
const invalidKeyCharacters = `'"?#/`.split("");
const contentIgnorePredicate = (key) => {
  if (key.startsWith("preview:") || isIgnored(key)) {
    return false;
  }
  if (invalidKeyCharacters.some((ik) => key.includes(ik))) {
    console.warn(`Ignoring [${key}]. File name should not contain any of the following characters: ${invalidKeyCharacters.join(", ")}`);
    return false;
  }
  return true;
};
const getContentsIds = async (event, prefix) => {
  let keys = [];
  if (keys.length === 0) {
    keys = await sourceStorage.getKeys(prefix);
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewPrefix = `preview:${key}:${prefix || ""}`;
    const previewKeys = await sourceStorage.getKeys(previewPrefix);
    if (previewKeys.length) {
      const keysSet = new Set(keys);
      await Promise.all(
        previewKeys.map(async (key2) => {
          const meta = await sourceStorage.getMeta(key2);
          if (meta?.__deleted) {
            keysSet.delete(key2.substring(previewPrefix.length));
          } else {
            keysSet.add(key2.substring(previewPrefix.length));
          }
        })
      );
      keys = Array.from(keysSet);
    }
  }
  return keys.filter(contentIgnorePredicate);
};
function* chunksFromArray(arr, n) {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n);
  }
}
const getContentsList = /* @__PURE__ */ (() => {
  let cachedContents = [];
  let pendingContentsListPromise = null;
  const _getContentsList = async (event, prefix) => {
    const keys = await getContentsIds(event, prefix);
    const keyChunks = [...chunksFromArray(keys, 10)];
    const contents = [];
    for (const chunk of keyChunks) {
      const result = await Promise.all(chunk.map((key) => getContent(event, key)));
      contents.push(...result);
    }
    return contents;
  };
  return (event, prefix) => {
    if (event.context.__contentList) {
      return event.context.__contentList;
    }
    if (cachedContents.length) {
      return cachedContents;
    }
    if (!pendingContentsListPromise) {
      pendingContentsListPromise = _getContentsList(event, prefix);
      pendingContentsListPromise.then((result) => {
        {
          cachedContents = result;
        }
        event.context.__contentList = result;
        pendingContentsListPromise = null;
      });
    }
    return pendingContentsListPromise;
  };
})();
const pendingPromises = {};
const getContent = async (event, id) => {
  const contentId = id;
  if (!contentIgnorePredicate(id)) {
    return { _id: contentId, body: null };
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewId = `preview:${key}:${id}`;
    const draft = await sourceStorage.getItem(previewId);
    if (draft) {
      id = previewId;
    }
  }
  const cached = await cacheParsedStorage.getItem(id);
  const meta = await sourceStorage.getMeta(id);
  const mtime = meta.mtime;
  const size = meta.size || 0;
  const hash$1 = hash({
    // Last modified time
    mtime,
    // File size
    size,
    // Add Content version to the hash, to revalidate the cache on content update
    version: contentConfig.cacheVersion,
    integrity: contentConfig.cacheIntegrity
  });
  if (cached?.hash === hash$1) {
    return cached.parsed;
  }
  if (!pendingPromises[id + hash$1]) {
    pendingPromises[id + hash$1] = new Promise(async (resolve) => {
      const body = await sourceStorage.getItem(id);
      if (body === null) {
        return resolve({ _id: contentId, body: null });
      }
      const parsed = await parseContent(contentId, body);
      await cacheParsedStorage.setItem(id, { parsed, hash: hash$1 }).catch(() => {
      });
      resolve(parsed);
      delete pendingPromises[id + hash$1];
    });
  }
  return pendingPromises[id + hash$1];
};
const parseContent = async (id, content, opts = {}) => {
  const nitroApp = useNitroApp();
  const options = defu(
    opts,
    {
      markdown: {
        ...contentConfig.markdown,
        highlight: contentConfig.highlight
      },
      csv: contentConfig.csv,
      yaml: contentConfig.yaml,
      transformers: transformers,
      pathMeta: {
        defaultLocale: contentConfig.defaultLocale,
        locales: contentConfig.locales,
        respectPathCase: contentConfig.respectPathCase
      }
    }
  );
  const file = { _id: id, body: typeof content === "string" ? content.replace(/\r\n|\r/g, "\n") : content };
  await nitroApp.hooks.callHook("content:file:beforeParse", file);
  const result = await transformContent(id, file.body, options);
  await nitroApp.hooks.callHook("content:file:afterParse", result);
  return result;
};
const createServerQueryFetch = (event) => (query) => {
  return createPipelineFetcher(() => getIndexedContentsList(event, query))(query);
};
function serverQueryContent(event, query, ...pathParts) {
  const { advanceQuery } = useRuntimeConfig().public.content.experimental;
  const queryBuilder = advanceQuery ? createQuery(createServerQueryFetch(event), { initialParams: typeof query !== "string" ? query || {} : {}, legacy: false }) : createQuery(createServerQueryFetch(event), { initialParams: typeof query !== "string" ? query || {} : {}, legacy: true });
  let path;
  if (typeof query === "string") {
    path = withLeadingSlash(joinURL(query, ...pathParts));
  }
  const originalParamsFn = queryBuilder.params;
  queryBuilder.params = () => {
    const params = originalParamsFn();
    if (path) {
      params.where = params.where || [];
      if (params.first && (params.where || []).length === 0) {
        params.where.push({ _path: withoutTrailingSlash(path) });
      } else {
        params.where.push({ _path: new RegExp(`^${path.replace(/[-[\]{}()*+.,^$\s/]/g, "\\$&")}`) });
      }
    }
    if (!params.sort?.length) {
      params.sort = [{ _file: 1, $numeric: true }];
    }
    if (contentConfig.locales.length) {
      const queryLocale = params.where?.find((w) => w._locale)?._locale;
      if (!queryLocale) {
        params.where = params.where || [];
        params.where.push({ _locale: contentConfig.defaultLocale });
      }
    }
    return params;
  };
  return queryBuilder;
}

function jsonParse(value) {
  return JSON.parse(value, regExpReviver);
}
function regExpReviver(_key, value) {
  const withOperator = typeof value === "string" && value.match(/^--([A-Z]+) (.+)$/) || [];
  if (withOperator[1] === "REGEX") {
    const regex = withOperator[2].match(/\/(.*)\/([dgimsuy]*)$/);
    return regex ? new RegExp(regex[1], regex[2] || "") : value;
  }
  return value;
}

const parseJSONQueryParams = (body) => {
  try {
    return jsonParse(body);
  } catch (e) {
    throw createError({ statusCode: 400, message: "Invalid _params query" });
  }
};
const decodeQueryParams = (encoded) => {
  encoded = encoded.replace(/\//g, "");
  encoded = encoded.replace(/-/g, "+").replace(/_/g, "/");
  encoded = encoded.padEnd(encoded.length + (4 - encoded.length % 4) % 4, "=");
  return parseJSONQueryParams(typeof Buffer !== "undefined" ? Buffer.from(encoded, "base64").toString() : atob(encoded));
};
const memory = {};
const getContentQuery = (event) => {
  const { params } = event.context.params || {};
  if (params) {
    return decodeQueryParams(params.replace(/.json$/, ""));
  }
  const qid = event.context.params?.qid?.replace(/.json$/, "");
  const query = getQuery$1(event) || {};
  if (qid && query._params) {
    memory[qid] = parseJSONQueryParams(decodeURIComponent(query._params));
    if (memory[qid].where && !Array.isArray(memory[qid].where)) {
      memory[qid].where = [memory[qid].where];
    }
    return memory[qid];
  }
  if (qid && memory[qid]) {
    return memory[qid];
  }
  if (query._params) {
    return parseJSONQueryParams(decodeURIComponent(query._params));
  }
  if (typeof query.only === "string" && query.only.includes(",")) {
    query.only = query.only.split(",").map((s) => s.trim());
  }
  if (typeof query.without === "string" && query.without.includes(",")) {
    query.without = query.without.split(",").map((s) => s.trim());
  }
  const where = query.where || {};
  for (const key of ["draft", "partial", "empty"]) {
    if (query[key] && ["true", "false"].includes(query[key])) {
      where[key] = query[key] === "true";
      delete query[key];
    }
  }
  if (query.sort) {
    query.sort = String(query.sort).split(",").map((s) => {
      const [key, order] = s.split(":");
      return [key, +order];
    });
  }
  const reservedKeys = ["partial", "draft", "only", "without", "where", "sort", "limit", "skip"];
  for (const key of Object.keys(query)) {
    if (reservedKeys.includes(key)) {
      continue;
    }
    query.where = query.where || {};
    query.where[key] = query[key];
  }
  if (Object.keys(where).length > 0) {
    query.where = [where];
  } else {
    delete query.where;
  }
  return query;
};

const _8EcGM7 = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  const { advanceQuery } = useRuntimeConfig().public.content.experimental;
  if (query.first) {
    let contentQuery = serverQueryContent(event, query);
    if (!advanceQuery) {
      contentQuery = contentQuery.withDirConfig();
    }
    const content = await contentQuery.findOne();
    const _result = advanceQuery ? content?.result : content;
    const missing = !_result && !content?.dirConfig?.navigation?.redirect && !content?._dir?.navigation?.redirect;
    if (missing) {
      throw createError({
        statusMessage: "Document not found!",
        statusCode: 404,
        data: {
          description: "Could not find document for the given query.",
          query
        }
      });
    }
    return content;
  }
  if (query.count) {
    return serverQueryContent(event, query).count();
  }
  return serverQueryContent(event, query).find();
});

const _wQhr0P = defineEventHandler(async (event) => {
  const { content } = useRuntimeConfig();
  const now = Date.now();
  const contents = await serverQueryContent(event).find();
  await getContentIndex(event);
  const navigation = await $fetch(`${content.api.baseURL}/navigation`);
  await cacheStorage.setItem("content-navigation.json", navigation);
  return {
    generatedAt: now,
    generateTime: Date.now() - now,
    contents: content.experimental.cacheContents ? contents : [],
    navigation
  };
});

function createNav(contents, configs) {
  const { navigation } = useRuntimeConfig().public.content;
  if (navigation === false) {
    return [];
  }
  const pickNavigationFields = (content) => ({
    ...pick(["title", ...navigation.fields])(content),
    ...isObject(content?.navigation) ? content.navigation : {}
  });
  const nav = contents.sort((a, b) => a._path.localeCompare(b._path)).reduce((nav2, content) => {
    const parts = content._path.substring(1).split("/");
    const idParts = content._id.split(":").slice(1);
    const isIndex = !!idParts[idParts.length - 1].match(/([1-9][0-9]*\.)?index.md/g);
    const getNavItem = (content2) => ({
      title: content2.title,
      _path: content2._path,
      _file: content2._file,
      children: [],
      ...pickNavigationFields(content2),
      ...content2._draft ? { _draft: true } : {}
    });
    const navItem = getNavItem(content);
    if (isIndex) {
      const dirConfig = configs[navItem._path];
      if (typeof dirConfig?.navigation !== "undefined" && !dirConfig?.navigation) {
        return nav2;
      }
      if (content._path !== "/") {
        const indexItem = getNavItem(content);
        navItem.children.push(indexItem);
      }
      Object.assign(
        navItem,
        pickNavigationFields(dirConfig)
      );
    }
    if (parts.length === 1) {
      nav2.push(navItem);
      return nav2;
    }
    const siblings = parts.slice(0, -1).reduce((nodes, part, i) => {
      const currentPathPart = "/" + parts.slice(0, i + 1).join("/");
      const conf = configs[currentPathPart];
      if (typeof conf?.navigation !== "undefined" && !conf.navigation) {
        return [];
      }
      let parent = nodes.find((n) => n._path === currentPathPart);
      if (!parent) {
        parent = {
          title: generateTitle(part),
          _path: currentPathPart,
          _file: content._file,
          children: [],
          ...pickNavigationFields(conf)
        };
        nodes.push(parent);
      }
      return parent.children;
    }, nav2);
    siblings.push(navItem);
    return nav2;
  }, []);
  return sortAndClear(nav);
}
const collator = new Intl.Collator(void 0, { numeric: true, sensitivity: "base" });
function sortAndClear(nav) {
  nav.forEach((item) => {
    item._file = item._file.split(".").slice(0, -1).join(".");
  });
  const sorted = nav.sort((a, b) => collator.compare(a._file, b._file));
  for (const item of sorted) {
    if (item.children?.length) {
      sortAndClear(item.children);
    } else {
      delete item.children;
    }
    delete item._file;
  }
  return nav;
}
function pick(keys) {
  return (obj) => {
    obj = obj || {};
    if (keys && keys.length) {
      return keys.filter((key) => typeof obj[key] !== "undefined").reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
    }
    return obj;
  };
}
function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

const _T7WdzT = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  if (!isPreview(event) && Object.keys(query).length === 0) {
    const cache = await cacheStorage.getItem("content-navigation.json");
    if (cache) {
      return cache;
    }
  }
  const contents = await serverQueryContent(event, query).where({
    /**
     * Partial contents are not included in the navigation
     * A partial content is a content that has `_` prefix in its path
     */
    _partial: false,
    /**
     * Exclude any pages which have opted out of navigation via frontmatter.
     */
    navigation: {
      $ne: false
    }
  }).find();
  const dirConfigs = await serverQueryContent(event).where({ _path: /\/_dir$/i, _partial: true }).find();
  const configs = (dirConfigs?.result || dirConfigs).reduce((configs2, conf) => {
    if (conf.title?.toLowerCase() === "dir") {
      conf.title = void 0;
    }
    const key = conf._path.split("/").slice(0, -1).join("/") || "/";
    configs2[key] = {
      ...conf,
      // Extract meta from body. (non MD files)
      ...conf.body
    };
    return configs2;
  }, {});
  return createNav(contents?.result || contents, configs);
});

const _lazy_upco1I = () => import('../search.json.get.mjs');
const _lazy_qM44hK = () => import('../handlers/og.png.mjs');
const _lazy_4dtbjt = () => import('../handlers/html.mjs');
const _lazy_AVdx67 = () => import('../handlers/options.mjs');
const _lazy_quXq3o = () => import('../handlers/svg.mjs');
const _lazy_yAsjNx = () => import('../handlers/vnode.mjs');
const _lazy_kgsGBb = () => import('../handlers/font.mjs');
const _lazy_ex2KTa = () => import('../renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/api/search.json', handler: _lazy_upco1I, lazy: true, middleware: false, method: "get" },
  { route: '/api/_mdc/highlight', handler: _Q2LdaI, lazy: false, middleware: false, method: undefined },
  { route: '/__studio.json', handler: _iMhA6V, lazy: false, middleware: false, method: "get" },
  { route: '/api/component-meta', handler: _eQ5KNq, lazy: false, middleware: false, method: "get" },
  { route: '/api/component-meta.json', handler: _eQ5KNq, lazy: false, middleware: false, method: "get" },
  { route: '/api/component-meta/:component?', handler: _eQ5KNq, lazy: false, middleware: false, method: "get" },
  { route: '', handler: _VYFD8u, lazy: false, middleware: true, method: undefined },
  { route: '', handler: _lazy_qM44hK, lazy: true, middleware: false, method: undefined },
  { route: '/api/og-image-html', handler: _lazy_4dtbjt, lazy: true, middleware: false, method: undefined },
  { route: '/api/og-image-options', handler: _lazy_AVdx67, lazy: true, middleware: false, method: undefined },
  { route: '/api/og-image-svg', handler: _lazy_quXq3o, lazy: true, middleware: false, method: undefined },
  { route: '/api/og-image-vnode', handler: _lazy_yAsjNx, lazy: true, middleware: false, method: undefined },
  { route: '/api/og-image-font', handler: _lazy_kgsGBb, lazy: true, middleware: false, method: undefined },
  { route: '/api/_content/query/:qid/**:params', handler: _8EcGM7, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query/:qid', handler: _8EcGM7, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query', handler: _8EcGM7, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/cache.1711046667753.json', handler: _wQhr0P, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid/**:params', handler: _T7WdzT, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid', handler: _T7WdzT, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation', handler: _T7WdzT, lazy: false, middleware: false, method: "get" },
  { route: '/**', handler: _lazy_ex2KTa, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const localFetch = nitroApp.localFetch;
trapUnhandledNodeErrors();

export { useNitroCache as a, useNitroOrigin as b, useStorage as c, decodeHtml as d, extractAndNormaliseOgImageOptions as e, cachedEventHandler as f, getRouteRules as g, useNitroApp as h, localFetch as l, mdcHighlighter as m, serverQueryContent as s, useRuntimeConfig as u };
//# sourceMappingURL=nitro-prerenderer.mjs.map
