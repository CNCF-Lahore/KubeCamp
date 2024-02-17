globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { defineEventHandler, handleCacheHeaders, splitCookiesString, isEvent, createEvent, getRequestHeader, eventHandler, setHeaders, sendRedirect, proxyRequest, setResponseStatus, setResponseHeader, send, getRequestHeaders, removeResponseHeader, createError, getResponseHeader, appendHeader, lazyEventHandler, getQuery as getQuery$1, getCookie, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent } from 'file:///workspace/Kubernetes-Bootcamp/node_modules/h3/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file:///workspace/Kubernetes-Bootcamp/node_modules/ofetch/dist/node.mjs';
import destr, { destr as destr$1 } from 'file:///workspace/Kubernetes-Bootcamp/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file:///workspace/Kubernetes-Bootcamp/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file:///workspace/Kubernetes-Bootcamp/node_modules/hookable/dist/index.mjs';
import { snakeCase, kebabCase, pascalCase, camelCase } from 'file:///workspace/Kubernetes-Bootcamp/node_modules/scule/dist/index.mjs';
import { klona } from 'file:///workspace/Kubernetes-Bootcamp/node_modules/klona/dist/index.mjs';
import defu, { defuFn, defu as defu$1 } from 'file:///workspace/Kubernetes-Bootcamp/node_modules/defu/dist/defu.mjs';
import { hash } from 'file:///workspace/Kubernetes-Bootcamp/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, decodePath, withLeadingSlash, withoutTrailingSlash, isRelative } from 'file:///workspace/Kubernetes-Bootcamp/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///workspace/Kubernetes-Bootcamp/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///workspace/Kubernetes-Bootcamp/node_modules/unstorage/drivers/fs.mjs';
import unstorage_47drivers_47memory from 'file:///workspace/Kubernetes-Bootcamp/node_modules/unstorage/drivers/memory.mjs';
import unstorage_47drivers_47lru_45cache from 'file:///workspace/Kubernetes-Bootcamp/node_modules/unstorage/drivers/lru-cache.mjs';
import unstorage_47drivers_47fs_45lite from 'file:///workspace/Kubernetes-Bootcamp/node_modules/unstorage/drivers/fs-lite.mjs';
import { toRouteMatcher, createRouter } from 'file:///workspace/Kubernetes-Bootcamp/node_modules/radix3/dist/index.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, extname } from 'file:///workspace/Kubernetes-Bootcamp/node_modules/pathe/dist/index.mjs';
import { addClassToHast, getHighlighter, loadWasm } from 'file:///workspace/Kubernetes-Bootcamp/node_modules/shikiji/dist/index.mjs';
import { transformerNotationDiff, transformerNotationFocus, transformerNotationHighlight, transformerNotationErrorLevel } from 'file:///workspace/Kubernetes-Bootcamp/node_modules/shikiji-transformers/dist/index.mjs';
import { unified } from 'file:///workspace/Kubernetes-Bootcamp/node_modules/unified/index.js';
import { toString as toString$1 } from 'file:///workspace/Kubernetes-Bootcamp/node_modules/mdast-util-to-string/index.js';
import { postprocess, preprocess } from 'file:///workspace/Kubernetes-Bootcamp/node_modules/micromark/index.js';
import { stringifyPosition } from 'file:///workspace/Kubernetes-Bootcamp/node_modules/unist-util-stringify-position/index.js';
import { markdownLineEnding, markdownSpace } from 'file:///workspace/Kubernetes-Bootcamp/node_modules/micromark-util-character/index.js';
import { push, splice } from 'file:///workspace/Kubernetes-Bootcamp/node_modules/micromark-util-chunked/index.js';
import { resolveAll } from 'file:///workspace/Kubernetes-Bootcamp/node_modules/micromark-util-resolve-all/index.js';
import { normalizeUri } from 'file:///workspace/Kubernetes-Bootcamp/node_modules/micromark-util-sanitize-uri/index.js';
import slugify from 'file:///workspace/Kubernetes-Bootcamp/node_modules/slugify/slugify.js';
import remarkParse from 'file:///workspace/Kubernetes-Bootcamp/node_modules/remark-parse/index.js';
import remark2rehype from 'file:///workspace/Kubernetes-Bootcamp/node_modules/remark-rehype/index.js';
import remarkMDC, { parseFrontMatter } from 'file:///workspace/Kubernetes-Bootcamp/node_modules/remark-mdc/dist/index.mjs';
import { toString } from 'file:///workspace/Kubernetes-Bootcamp/node_modules/hast-util-to-string/index.js';
import Slugger from 'file:///workspace/Kubernetes-Bootcamp/node_modules/github-slugger/index.js';
import { detab } from 'file:///workspace/Kubernetes-Bootcamp/node_modules/detab/index.js';
import remarkEmoji from 'file:///workspace/Kubernetes-Bootcamp/node_modules/remark-emoji/index.js';
import remarkGFM from 'file:///workspace/Kubernetes-Bootcamp/node_modules/remark-gfm/index.js';
import rehypeExternalLinks from 'file:///workspace/Kubernetes-Bootcamp/node_modules/rehype-external-links/index.js';
import rehypeSortAttributeValues from 'file:///workspace/Kubernetes-Bootcamp/node_modules/rehype-sort-attribute-values/index.js';
import rehypeSortAttributes from 'file:///workspace/Kubernetes-Bootcamp/node_modules/rehype-sort-attributes/index.js';
import rehypeRaw from 'file:///workspace/Kubernetes-Bootcamp/node_modules/rehype-raw/index.js';

const defineAppConfig = (config) => config;

const appConfig0 = defineAppConfig({
  docus: {
    title: "Kubernetes BootCamp",
    description: "The best place to start your Kubernetes Journey",
    url: "cncf-lahore.github.io/Kubernetes-Bootcamp",
    image: "https://i.ibb.co/PGkhK2D/logo-07df0d71aa68491bbca25e45a62ac299.png",
    socials: {},
    layout: "default",
    header: {
      title: "",
      logo: false,
      showLinkIcon: false,
      fluid: false,
      exclude: []
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    footer: {
      credits: {
        icon: "",
        text: "Made with \u2764\uFE0Fby Adil Shahzad",
        href: "https://www.linkedin.com/in/adilshehzad7/"
      },
      textLinks: [],
      iconLinks: [],
      fluid: false
    },
    github: {
      branch: "main",
      repo: "/Kubernetes-Bootcamp/",
      owner: "CNCF-Lahore",
      edit: false
    }
  }
});

const appConfig1 = defineAppConfig({
  docus: {
    title: "Docus",
    description: "The best place to start your documentation.",
    url: "https://docus.dev",
    image: "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
    socials: {},
    layout: "default",
    header: {
      title: "",
      logo: false,
      showLinkIcon: false,
      fluid: false,
      exclude: []
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    footer: {
      credits: {
        icon: "IconDocus",
        text: "Powered by Docus",
        href: "https://docus.dev"
      },
      textLinks: [],
      iconLinks: [],
      fluid: false
    },
    github: {
      dir: void 0,
      branch: void 0,
      repo: void 0,
      owner: void 0,
      edit: false
    }
  }
});

const appConfig2 = defineAppConfig({
  prose: {
    copyButton: {
      iconCopy: "ph:copy",
      iconCopied: "ph:check"
    },
    headings: {
      icon: "ph:link"
    }
  }
});

const appConfig3 = defineAppConfig({});

const inlineAppConfig = {
  "nuxt": {
    "buildId": "f8ced477-efdd-4bd5-bb8e-d5095951d390"
  }
};

const appConfig = defuFn(appConfig0, appConfig1, appConfig2, appConfig3, inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/Kubernetes-Bootcamp/",
    "buildAssetsDir": "assets",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/api/search": {
        "prerender": true,
        "cache": true
      },
      "/assets/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/assets/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      },
      "/assets/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "plausible": {
      "hashMode": false,
      "trackLocalhost": false,
      "domain": "",
      "apiHost": "https://plausible.io",
      "autoPageviews": true,
      "autoOutboundTracking": false
    },
    "studio": {
      "apiURL": "https://api.nuxt.studio"
    },
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
      "integrity": 1708190307408,
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
          "titleTemplate",
          "header",
          "main",
          "aside",
          "footer",
          "layout"
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
          "dark": "github-dark",
          "default": "github-light"
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
        ]
      },
      "wsUrl": "",
      "documentDriven": {
        "page": true,
        "navigation": true,
        "surround": true,
        "globals": {},
        "layoutFallbacks": [
          "theme"
        ],
        "injectPage": true
      },
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
    }
  },
  "pinceau": {
    "studio": true,
    "outputDir": "/workspace/Kubernetes-Bootcamp/.nuxt/pinceau/"
  },
  "studio": {
    "publicToken": "",
    "project": ""
  },
  "mdc": {
    "highlight": {
      "theme": {
        "dark": "github-dark",
        "default": "github-light"
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
      "wrapperStyle": ""
    }
  },
  "content": {
    "cacheVersion": 2,
    "cacheIntegrity": "4q9TnkKRqO",
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
        "dark": "github-dark",
        "default": "github-light"
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
        "titleTemplate",
        "header",
        "main",
        "aside",
        "footer",
        "layout"
      ]
    },
    "contentHead": true,
    "documentDriven": true,
    "respectPathCase": false,
    "experimental": {
      "clientDB": false,
      "cacheContents": true,
      "stripQueryParameters": false,
      "advanceQuery": false,
      "search": ""
    }
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
        "prose": {
          "title": "Prose configuration from Nuxt Typography",
          "description": "",
          "tags": [
            "@studioIcon material-symbols:short-text-rounded",
            "@studioInput icon"
          ],
          "id": "#appConfig/prose",
          "properties": {
            "copyButton": {
              "title": "Copy button (used in code blocks)",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:content-copy"
              ],
              "id": "#appConfig/prose/copyButton",
              "properties": {
                "iconCopy": {
                  "title": "Icon displayed to copy",
                  "description": "",
                  "tags": [],
                  "id": "#appConfig/prose/copyButton/iconCopy",
                  "default": "ph:copy",
                  "type": "string"
                },
                "iconCopied": {
                  "title": "Icon displayed when copied",
                  "description": "",
                  "tags": [],
                  "id": "#appConfig/prose/copyButton/iconCopied",
                  "default": "ph:check",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "iconCopy": "ph:copy",
                "iconCopied": "ph:check"
              }
            },
            "headings": {
              "title": "Default configuration for all headings (h1, h2, h3, h4, h5 and h6)",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:title"
              ],
              "id": "#appConfig/prose/headings",
              "properties": {
                "icon": {
                  "title": "Default icon for anchor link on hover",
                  "description": "",
                  "tags": [],
                  "tsType": "string|false",
                  "id": "#appConfig/prose/headings/icon",
                  "default": "ph:link",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "icon": "ph:link"
              }
            },
            "h1": {
              "title": "First heading configuration",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:format-h1"
              ],
              "id": "#appConfig/prose/h1",
              "properties": {
                "icon": {
                  "title": "Icon displayed for anchor link on hover",
                  "description": "",
                  "tags": [],
                  "tsType": "string|false",
                  "id": "#appConfig/prose/h1/icon",
                  "default": "",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "icon": ""
              }
            },
            "h2": {
              "title": "Second heading configuration",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:format-h2"
              ],
              "id": "#appConfig/prose/h2",
              "properties": {
                "icon": {
                  "title": "Icon displayed for anchor link on hover",
                  "description": "",
                  "tags": [],
                  "tsType": "string|false",
                  "id": "#appConfig/prose/h2/icon",
                  "default": "",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "icon": ""
              }
            },
            "h3": {
              "title": "Third heading configuration",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:format-h3"
              ],
              "id": "#appConfig/prose/h3",
              "properties": {
                "icon": {
                  "title": "Icon displayed for anchor link on hover",
                  "description": "",
                  "tags": [],
                  "tsType": "string|false",
                  "id": "#appConfig/prose/h3/icon",
                  "default": "",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "icon": ""
              }
            },
            "h4": {
              "title": "Fourth heading configuration",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:format-h4"
              ],
              "id": "#appConfig/prose/h4",
              "properties": {
                "icon": {
                  "title": "Icon displayed for anchor link on hover",
                  "description": "",
                  "tags": [],
                  "tsType": "string|false",
                  "id": "#appConfig/prose/h4/icon",
                  "default": "",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "icon": ""
              }
            },
            "h5": {
              "title": "Fifth heading configuration",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:format-h5"
              ],
              "id": "#appConfig/prose/h5",
              "properties": {
                "icon": {
                  "title": "Icon displayed for anchor link on hover",
                  "description": "",
                  "tags": [],
                  "tsType": "string|false",
                  "id": "#appConfig/prose/h5/icon",
                  "default": "",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "icon": ""
              }
            },
            "h6": {
              "title": "Sixth heading configuration",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:format-h6"
              ],
              "id": "#appConfig/prose/h6",
              "properties": {
                "icon": {
                  "title": "Icon displayed for anchor link on hover",
                  "description": "",
                  "tags": [],
                  "tsType": "string|false",
                  "id": "#appConfig/prose/h6/icon",
                  "default": "",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "icon": ""
              }
            }
          },
          "type": "object",
          "default": {
            "copyButton": {
              "iconCopy": "ph:copy",
              "iconCopied": "ph:check"
            },
            "headings": {
              "icon": "ph:link"
            },
            "h1": {
              "icon": ""
            },
            "h2": {
              "icon": ""
            },
            "h3": {
              "icon": ""
            },
            "h4": {
              "icon": ""
            },
            "h5": {
              "icon": ""
            },
            "h6": {
              "icon": ""
            }
          }
        },
        "docus": {
          "title": "Docus theme configuration.",
          "description": "",
          "tags": [
            "@studioIcon material-symbols:docs"
          ],
          "id": "#appConfig/docus",
          "properties": {
            "title": {
              "title": "Website title, used as header default title and meta title.",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:title"
              ],
              "id": "#appConfig/docus/title",
              "default": "Docus",
              "type": "string"
            },
            "titleTemplate": {
              "title": "The website title template, to overwrite the default one.",
              "description": "",
              "tags": [],
              "id": "#appConfig/docus/titleTemplate",
              "default": "%s · Docus",
              "type": "string"
            },
            "description": {
              "title": "Website description, used for meta description.",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:description"
              ],
              "id": "#appConfig/docus/description",
              "default": "The best place to start your documentation.",
              "type": "string"
            },
            "image": {
              "title": "Cover image.",
              "description": "",
              "tags": [
                "@example '/cover.jpg'",
                "@studioIcon dashicons:cover-image",
                "@studioInput file"
              ],
              "id": "#appConfig/docus/image",
              "default": "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
              "type": "string"
            },
            "socials": {
              "title": "Social links",
              "description": "Will be used in AppSocialIcons component.",
              "tags": [
                "@studioIcon material-symbols:share-outline"
              ],
              "id": "#appConfig/docus/socials",
              "properties": {
                "twitter": {
                  "title": "Twitter social handle",
                  "description": "",
                  "tags": [
                    "@example 'nuxt_js'",
                    "@studioIcon simple-icons:twitter"
                  ],
                  "id": "#appConfig/docus/socials/twitter",
                  "default": "",
                  "type": "string"
                },
                "github": {
                  "title": "GitHub org or repository",
                  "description": "",
                  "tags": [
                    "@example 'nuxt/framework'",
                    "@studioIcon simple-icons:github"
                  ],
                  "id": "#appConfig/docus/socials/github",
                  "default": "",
                  "type": "string"
                },
                "facebook": {
                  "title": "Facebook page url",
                  "description": "",
                  "tags": [
                    "@example https://www.facebook.com/groups/nuxtjs",
                    "@studioIcon simple-icons:facebook"
                  ],
                  "id": "#appConfig/docus/socials/facebook",
                  "default": "",
                  "type": "string"
                },
                "instagram": {
                  "title": "Instagram page url",
                  "description": "",
                  "tags": [
                    "@example https://www.instagram.com/wearenuxt",
                    "@studioIcon simple-icons:instagram"
                  ],
                  "id": "#appConfig/docus/socials/instagram",
                  "default": "",
                  "type": "string"
                },
                "tiktok": {
                  "title": "Instagram page url",
                  "description": "",
                  "tags": [
                    "@example https://www.youtube.com/@NuxtLabs",
                    "@studioIcon simple-icons:youtube"
                  ],
                  "id": "#appConfig/docus/socials/tiktok",
                  "default": "",
                  "type": "string"
                },
                "youtube": {
                  "title": "TikTok page url",
                  "description": "",
                  "tags": [
                    "@example https://www.tiktok.com/@tiktok",
                    "@studioIcon simple-icons:tiktok"
                  ],
                  "id": "#appConfig/docus/socials/youtube",
                  "default": "",
                  "type": "string"
                },
                "medium": {
                  "title": "Medium page url",
                  "description": "",
                  "tags": [
                    "@example https://medium.com/nuxt",
                    "@studioIcon simple-icons:medium"
                  ],
                  "id": "#appConfig/docus/socials/medium",
                  "default": "",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "twitter": "",
                "github": "",
                "facebook": "",
                "instagram": "",
                "tiktok": "",
                "youtube": "",
                "medium": ""
              }
            },
            "layout": {
              "title": "Theme layout configuration.",
              "description": "",
              "tags": [
                "@studioIcon tabler:arrow-autofit-width"
              ],
              "tsType": "'default'|'page'",
              "id": "#appConfig/docus/layout",
              "default": "default",
              "type": "string"
            },
            "aside": {
              "title": "Aside navigation configuration.",
              "description": "",
              "tags": [
                "@studioIcon fluent:document-page-24-regular"
              ],
              "id": "#appConfig/docus/aside",
              "properties": {
                "level": {
                  "title": "Aside navigation level",
                  "description": "Use 0 to disable all nesting. Use 1 and more to display nested navigation in header and aside navigation.",
                  "tags": [],
                  "id": "#appConfig/docus/aside/level",
                  "default": 0,
                  "type": "number"
                },
                "collapsed": {
                  "title": "Specify if default collapsibles state globally for aside navigation.",
                  "description": "",
                  "tags": [],
                  "id": "#appConfig/docus/aside/collapsed",
                  "default": false,
                  "type": "boolean"
                },
                "exclude": {
                  "title": "Paths to be excluded from aside navigation.",
                  "description": "",
                  "tags": [],
                  "tsType": "string[]",
                  "id": "#appConfig/docus/aside/exclude",
                  "default": [],
                  "type": "array",
                  "items": {
                    "type": "any"
                  }
                }
              },
              "type": "object",
              "default": {
                "level": 0,
                "collapsed": false,
                "exclude": []
              }
            },
            "header": {
              "title": "Header configuration.",
              "description": "",
              "tags": [
                "@studioIcon fluent:document-header-24-regular"
              ],
              "id": "#appConfig/docus/header",
              "properties": {
                "title": {
                  "title": "Website title",
                  "description": "Title to be displayed in header or as aria-label if logo is defined.\nDefault to docus.title",
                  "tags": [
                    "@studioIcon material-symbols:title"
                  ],
                  "id": "#appConfig/docus/header/title",
                  "default": "",
                  "type": "string"
                },
                "logo": {
                  "title": "Logo configuration",
                  "description": "Boolean to disable or use the `Logo.vue` component.\nString to be used as a name of a component.\nObject that sets the light and dark logos.",
                  "tags": [
                    "@example 'MyLogo'",
                    "@studioInput boolean"
                  ],
                  "tsType": "boolean|string|{dark: string, light: string}",
                  "id": "#appConfig/docus/header/logo",
                  "default": false,
                  "type": "boolean"
                },
                "showLinkIcon": {
                  "title": "Header links",
                  "description": "Toggle links icons in the header.",
                  "tags": [],
                  "id": "#appConfig/docus/header/showLinkIcon",
                  "default": false,
                  "type": "boolean"
                },
                "exclude": {
                  "title": "Paths to be excluded from header links.",
                  "description": "",
                  "tags": [],
                  "tsType": "string[]",
                  "id": "#appConfig/docus/header/exclude",
                  "default": [],
                  "type": "array",
                  "items": {
                    "type": "any"
                  }
                },
                "fluid": {
                  "title": "Makes the content of the header fluid.",
                  "description": "",
                  "tags": [],
                  "id": "#appConfig/docus/header/fluid",
                  "default": false,
                  "type": "boolean"
                }
              },
              "type": "object",
              "default": {
                "title": "",
                "logo": false,
                "showLinkIcon": false,
                "exclude": [],
                "fluid": false
              }
            },
            "main": {
              "title": "Main content configuration.",
              "description": "",
              "tags": [
                "@studioIcon fluent:document-header-footer-24-filled"
              ],
              "id": "#appConfig/docus/main",
              "properties": {
                "fluid": {
                  "title": "Makes the content of the main container fluid.",
                  "description": "",
                  "tags": [],
                  "id": "#appConfig/docus/main/fluid",
                  "default": false,
                  "type": "boolean"
                },
                "padded": {
                  "title": "Makes the content of the main container padded.",
                  "description": "",
                  "tags": [],
                  "id": "#appConfig/docus/main/padded",
                  "default": true,
                  "type": "boolean"
                }
              },
              "type": "object",
              "default": {
                "fluid": false,
                "padded": true
              }
            },
            "footer": {
              "title": "Footer configuration",
              "description": "",
              "tags": [
                "@studioIcon fluent:document-footer-24-regular"
              ],
              "id": "#appConfig/docus/footer",
              "properties": {
                "credits": {
                  "title": "Website credits configuration.",
                  "description": "",
                  "tags": [
                    "@studioIcon material-symbols:copyright"
                  ],
                  "tsType": "false|{icon: string, text: string, href: string}",
                  "id": "#appConfig/docus/footer/credits",
                  "properties": {
                    "icon": {
                      "title": "Icon to show on credits",
                      "description": "",
                      "tags": [
                        "@formtype Icon"
                      ],
                      "id": "#appConfig/docus/footer/credits/icon",
                      "default": "IconDocus",
                      "type": "string"
                    },
                    "text": {
                      "type": "string",
                      "id": "#appConfig/docus/footer/credits/text",
                      "default": "Powered by Docus"
                    },
                    "href": {
                      "type": "string",
                      "id": "#appConfig/docus/footer/credits/href",
                      "default": "https://docus.dev"
                    }
                  },
                  "type": "object",
                  "default": {
                    "icon": "IconDocus",
                    "text": "Powered by Docus",
                    "href": "https://docus.dev"
                  }
                },
                "textLinks": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "required": [
                      "text",
                      "href"
                    ],
                    "properties": {
                      "href": {
                        "type": "string",
                        "description": "URL when clicking the link"
                      },
                      "text": {
                        "type": "string",
                        "description": "Text of the link"
                      },
                      "target": {
                        "type": "string",
                        "description": "Target attribute of the link"
                      },
                      "rel": {
                        "type": "string",
                        "description": "Rel attribute of the link"
                      }
                    }
                  },
                  "title": "Text links",
                  "description": "Will be added into center section of the footer.",
                  "tags": [
                    "@studioIcon material-symbols:add-link"
                  ],
                  "id": "#appConfig/docus/footer/textLinks"
                },
                "iconLinks": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "required": [
                      "icon",
                      "href"
                    ],
                    "properties": {
                      "icon": {
                        "type": "string",
                        "description": "Icon name"
                      },
                      "href": {
                        "type": "string",
                        "description": "Link when clicking on the icon"
                      },
                      "label": {
                        "type": "string",
                        "description": "Label of the icon"
                      },
                      "rel": {
                        "type": "string",
                        "description": "Rel attribute of the link"
                      }
                    }
                  },
                  "title": "Icon links",
                  "description": "Icons to be added to Social Icons in footer.",
                  "tags": [
                    "@studioIcon material-symbols:add-link"
                  ],
                  "id": "#appConfig/docus/footer/iconLinks"
                },
                "fluid": {
                  "title": "Makes the content of the footer fluid.",
                  "description": "",
                  "tags": [],
                  "id": "#appConfig/docus/footer/fluid",
                  "default": true,
                  "type": "boolean"
                }
              },
              "type": "object",
              "default": {
                "credits": {
                  "icon": "IconDocus",
                  "text": "Powered by Docus",
                  "href": "https://docus.dev"
                },
                "fluid": true
              }
            },
            "github": {
              "title": "GitHub integration",
              "description": "Configure the Edit on Github integration.",
              "tags": [
                "@studioIcon simple-icons:github"
              ],
              "id": "#appConfig/docus/github",
              "properties": {
                "baseUrl": {
                  "title": "Base URL",
                  "description": "You can use this to link to GitHub Enterprise.",
                  "tags": [],
                  "id": "#appConfig/docus/github/baseUrl",
                  "default": "https://github.com",
                  "type": "string"
                },
                "dir": {
                  "title": "Directory",
                  "description": "Your GitHub repository root directory.",
                  "tags": [],
                  "id": "#appConfig/docus/github/dir",
                  "default": "",
                  "type": "string"
                },
                "branch": {
                  "title": "Branch",
                  "description": "Your GitHub repository branch.",
                  "tags": [],
                  "id": "#appConfig/docus/github/branch",
                  "default": "",
                  "type": "string"
                },
                "repo": {
                  "title": "Repository",
                  "description": "Your GitHub repository name.",
                  "tags": [],
                  "id": "#appConfig/docus/github/repo",
                  "default": "",
                  "type": "string"
                },
                "owner": {
                  "title": "Owner",
                  "description": "Your GitHub repository owner.",
                  "tags": [],
                  "id": "#appConfig/docus/github/owner",
                  "default": "",
                  "type": "string"
                },
                "edit": {
                  "title": "EditOnGithub",
                  "description": "Display EditOnGithub button.",
                  "tags": [],
                  "id": "#appConfig/docus/github/edit",
                  "default": false,
                  "type": "boolean"
                }
              },
              "type": "object",
              "default": {
                "baseUrl": "https://github.com",
                "dir": "",
                "branch": "",
                "repo": "",
                "owner": "",
                "edit": false
              }
            }
          },
          "type": "object",
          "default": {
            "title": "Docus",
            "titleTemplate": "%s · Docus",
            "description": "The best place to start your documentation.",
            "image": "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
            "socials": {
              "twitter": "",
              "github": "",
              "facebook": "",
              "instagram": "",
              "tiktok": "",
              "youtube": "",
              "medium": ""
            },
            "layout": "default",
            "aside": {
              "level": 0,
              "collapsed": false,
              "exclude": []
            },
            "header": {
              "title": "",
              "logo": false,
              "showLinkIcon": false,
              "exclude": [],
              "fluid": false
            },
            "main": {
              "fluid": false,
              "padded": true
            },
            "footer": {
              "credits": {
                "icon": "IconDocus",
                "text": "Powered by Docus",
                "href": "https://docus.dev"
              },
              "fluid": true
            },
            "github": {
              "baseUrl": "https://github.com",
              "dir": "",
              "branch": "",
              "repo": "",
              "owner": "",
              "edit": false
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
        "prose": {
          "copyButton": {
            "iconCopy": "ph:copy",
            "iconCopied": "ph:check"
          },
          "headings": {
            "icon": "ph:link"
          },
          "h1": {
            "icon": ""
          },
          "h2": {
            "icon": ""
          },
          "h3": {
            "icon": ""
          },
          "h4": {
            "icon": ""
          },
          "h5": {
            "icon": ""
          },
          "h6": {
            "icon": ""
          }
        },
        "docus": {
          "title": "Docus",
          "titleTemplate": "%s · Docus",
          "description": "The best place to start your documentation.",
          "image": "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
          "socials": {
            "twitter": "",
            "github": "",
            "facebook": "",
            "instagram": "",
            "tiktok": "",
            "youtube": "",
            "medium": ""
          },
          "layout": "default",
          "aside": {
            "level": 0,
            "collapsed": false,
            "exclude": []
          },
          "header": {
            "title": "",
            "logo": false,
            "showLinkIcon": false,
            "exclude": [],
            "fluid": false
          },
          "main": {
            "fluid": false,
            "padded": true
          },
          "footer": {
            "credits": {
              "icon": "IconDocus",
              "text": "Powered by Docus",
              "href": "https://docus.dev"
            },
            "fluid": true
          },
          "github": {
            "baseUrl": "https://github.com",
            "dir": "",
            "branch": "",
            "repo": "",
            "owner": "",
            "edit": false
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
      "prose": {
        "copyButton": {
          "iconCopy": "ph:copy",
          "iconCopied": "ph:check"
        },
        "headings": {
          "icon": "ph:link"
        },
        "h1": {
          "icon": ""
        },
        "h2": {
          "icon": ""
        },
        "h3": {
          "icon": ""
        },
        "h4": {
          "icon": ""
        },
        "h5": {
          "icon": ""
        },
        "h6": {
          "icon": ""
        }
      },
      "docus": {
        "title": "Docus",
        "titleTemplate": "%s · Docus",
        "description": "The best place to start your documentation.",
        "image": "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
        "socials": {
          "twitter": "",
          "github": "",
          "facebook": "",
          "instagram": "",
          "tiktok": "",
          "youtube": "",
          "medium": ""
        },
        "layout": "default",
        "aside": {
          "level": 0,
          "collapsed": false,
          "exclude": []
        },
        "header": {
          "title": "",
          "logo": false,
          "showLinkIcon": false,
          "exclude": [],
          "fluid": false
        },
        "main": {
          "fluid": false,
          "padded": true
        },
        "footer": {
          "credits": {
            "icon": "IconDocus",
            "text": "Powered by Docus",
            "href": "https://docus.dev"
          },
          "fluid": true
        },
        "github": {
          "baseUrl": "https://github.com",
          "dir": "",
          "branch": "",
          "repo": "",
          "owner": "",
          "edit": false
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

const serverAssets = [{"baseName":"server","dir":"/workspace/Kubernetes-Bootcamp/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('internal:nuxt:prerender', unstorage_47drivers_47memory({"driver":"memory"}));
storage.mount('internal:nuxt:prerender:island', unstorage_47drivers_47lru_45cache({"driver":"lruCache","max":1000}));
storage.mount('internal:nuxt:prerender:payload', unstorage_47drivers_47lru_45cache({"driver":"lruCache","max":1000}));
storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"/workspace/Kubernetes-Bootcamp/.data/kv"}));
storage.mount('pinceau', unstorage_47drivers_47fs({"driver":"fs","base":"/workspace/Kubernetes-Bootcamp/.nuxt/pinceau/theme","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('content:source:content', unstorage_47drivers_47fs({"name":"content:source:content","driver":"fs","base":"/workspace/Kubernetes-Bootcamp/content","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache:content', unstorage_47drivers_47fs({"driver":"fs","base":"/workspace/Kubernetes-Bootcamp/.nuxt/content-cache","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/workspace/Kubernetes-Bootcamp","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/workspace/Kubernetes-Bootcamp/server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/workspace/Kubernetes-Bootcamp/.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/workspace/Kubernetes-Bootcamp/.nuxt/cache","ignore":["**/node_modules/**","**/.git/**"]}));

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

const nitro = (async function(nitro) {
  nitro.hooks.hook("render:html", async (htmlContext, { event }) => {
    const theme = await useStorage().getItem("pinceau:index.css");
    const pinceauContent = event?.pinceauContent || { theme: void 0, runtime: void 0 };
    if (!theme?.runtime) {
      htmlContext.head.splice(2, 0, `<style id="pinceau-runtime-hydratable">${pinceauContent.runtime}</style>`);
    }
    if (!theme?.theme) {
      htmlContext.head.splice(2, 0, `<style id="pinceau-theme">${theme}</style>`);
    }
  });
});

const script = "\"use strict\";(()=>{const a=window,e=document.documentElement,m=[\"dark\",\"light\"],c=window&&window.localStorage&&window.localStorage.getItem&&window.localStorage.getItem(\"nuxt-color-mode\")||\"system\";let n=c===\"system\"?d():c;const l=e.getAttribute(\"data-color-mode-forced\");l&&(n=l),i(n),a[\"__NUXT_COLOR_MODE__\"]={preference:c,value:n,getColorScheme:d,addColorScheme:i,removeColorScheme:f};function i(o){const t=\"\"+o+\"\",s=\"theme\";e.classList?e.classList.add(t):e.className+=\" \"+t,s&&e.setAttribute(\"data-\"+s,o)}function f(o){const t=\"\"+o+\"\",s=\"theme\";e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp(t,\"g\"),\"\"),s&&e.removeAttribute(\"data-\"+s)}function r(o){return a.matchMedia(\"(prefers-color-scheme\"+o+\")\")}function d(){if(a.matchMedia&&r(\"\").media!==\"not all\"){for(const o of m)if(r(\":\"+o).matches)return o}return\"light\"}})();\n";

const _3GLyYt0Wtu = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const plugins = [
  nitro,
_3GLyYt0Wtu
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

const publicAssetBases = {"/assets/builds/meta":{"maxAge":31536000},"/assets/builds":{"maxAge":1},"/assets":{"maxAge":31536000}};

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

var version = "1.0.10";

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
      return {
        type: "element",
        tag: node.tagName,
        props: validateProps(node.tagName, node.properties),
        children: node.children.map((child) => compileToJSON(child, node)).filter(Boolean)
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
const parseMarkdown = async (md, opts = {}) => {
  if (!moduleOptions) {
    moduleOptions = await import(
      '../build/mdc-imports.mjs'
      /* @vite-ignore */
    ).catch(() => ({}));
  }
  const options = defu$1(opts, {
    remark: { plugins: moduleOptions?.remarkPlugins },
    rehype: { plugins: moduleOptions?.rehypePlugins },
    highlight: moduleOptions?.highlight
  }, defaults);
  if (options.rehype?.plugins?.highlight) {
    options.rehype.plugins.highlight.options = options.highlight || {};
  }
  const { content, data: frontmatter } = await parseFrontMatter(md);
  const processor = unified();
  processor.use(remarkParse);
  await useProcessorPlugins(processor, options.remark?.plugins);
  processor.use(remark2rehype, options.rehype?.options);
  await useProcessorPlugins(processor, options.rehype?.plugins);
  processor.use(compileHast);
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

const components = {
  "AppDocSearch": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppDocSearch.vue",
    "pascalName": "AppDocSearch",
    "kebabName": "app-doc-search",
    "chunkName": "components/app-doc-search",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppDocSearch.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/AppDocSearch.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppFooter": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppFooter.vue",
    "pascalName": "AppFooter",
    "kebabName": "app-footer",
    "chunkName": "components/app-footer",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppFooter.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/AppFooter.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppHeader": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppHeader.vue",
    "pascalName": "AppHeader",
    "kebabName": "app-header",
    "chunkName": "components/app-header",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppHeader.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/AppHeader.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppHeaderDialog": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppHeaderDialog.vue",
    "pascalName": "AppHeaderDialog",
    "kebabName": "app-header-dialog",
    "chunkName": "components/app-header-dialog",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppHeaderDialog.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/AppHeaderDialog.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppHeaderLogo": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppHeaderLogo.vue",
    "pascalName": "AppHeaderLogo",
    "kebabName": "app-header-logo",
    "chunkName": "components/app-header-logo",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppHeaderLogo.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/AppHeaderLogo.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppHeaderNavigation": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppHeaderNavigation.vue",
    "pascalName": "AppHeaderNavigation",
    "kebabName": "app-header-navigation",
    "chunkName": "components/app-header-navigation",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppHeaderNavigation.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/AppHeaderNavigation.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppLayout": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppLayout.vue",
    "pascalName": "AppLayout",
    "kebabName": "app-layout",
    "chunkName": "components/app-layout",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppLayout.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/AppLayout.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
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
  "AppLoadingBar": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppLoadingBar.vue",
    "pascalName": "AppLoadingBar",
    "kebabName": "app-loading-bar",
    "chunkName": "components/app-loading-bar",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppLoadingBar.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/AppLoadingBar.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "throttle",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/AppLoadingBar.vue",
              "range": [
                45,
                95
              ]
            }
          ],
          "schema": "number",
          "default": "200"
        },
        {
          "name": "duration",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/AppLoadingBar.vue",
              "range": [
                99,
                150
              ]
            }
          ],
          "schema": "number",
          "default": "2000"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "throttle",
          "type": "number",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/AppLoadingBar.vue",
              "range": [
                45,
                95
              ]
            }
          ],
          "schema": "number"
        },
        {
          "name": "duration",
          "type": "number",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/AppLoadingBar.vue",
              "range": [
                99,
                150
              ]
            }
          ],
          "schema": "number"
        }
      ]
    }
  },
  "AppSearch": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppSearch.vue",
    "pascalName": "AppSearch",
    "kebabName": "app-search",
    "chunkName": "components/app-search",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppSearch.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/AppSearch.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "fuse",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "any",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/AppSearch.vue",
              "range": [
                236,
                636
              ]
            }
          ],
          "schema": "any",
          "default": "{\n    fuseOptions: {\n        keys: [\n            \"title\",\n            \"description\",\n            \"keywords\",\n            \"body\"\n        ],\n        ignoreLocation: true,\n        threshold: 0,\n        includeMatches: true,\n        includeScore: true,\n    },\n    matchAllWhenSearchEmpty: true\n}"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "fuse",
          "type": "any",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/AppSearch.vue",
              "range": [
                236,
                636
              ]
            }
          ],
          "schema": "any"
        }
      ]
    }
  },
  "AppSocialIcons": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppSocialIcons.vue",
    "pascalName": "AppSocialIcons",
    "kebabName": "app-social-icons",
    "chunkName": "components/app-social-icons",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppSocialIcons.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/AppSocialIcons.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DocumentDrivenNotFound": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/DocumentDrivenNotFound.vue",
    "pascalName": "DocumentDrivenNotFound",
    "kebabName": "document-driven-not-found",
    "chunkName": "components/document-driven-not-found",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/DocumentDrivenNotFound.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/DocumentDrivenNotFound.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Ellipsis": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
    "pascalName": "Ellipsis",
    "kebabName": "ellipsis",
    "chunkName": "components/ellipsis",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "width",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                78,
                129
              ]
            }
          ],
          "schema": "string",
          "default": "\"10rem\""
        },
        {
          "name": "height",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                133,
                185
              ]
            }
          ],
          "schema": "string",
          "default": "\"10rem\""
        },
        {
          "name": "zIndex",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                189,
                238
              ]
            }
          ],
          "schema": "string",
          "default": "\"10\""
        },
        {
          "name": "top",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                242,
                287
              ]
            }
          ],
          "schema": "string",
          "default": "\"0\""
        },
        {
          "name": "left",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                291,
                340
              ]
            }
          ],
          "schema": "string",
          "default": "\"auto\""
        },
        {
          "name": "right",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                344,
                394
              ]
            }
          ],
          "schema": "string",
          "default": "\"auto\""
        },
        {
          "name": "blur",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                398,
                447
              ]
            }
          ],
          "schema": "string",
          "default": "\"50px\""
        },
        {
          "name": "colors",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string[]",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                451,
                604
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "string[]",
            "schema": [
              "string"
            ]
          },
          "default": "[\"rgba(0, 71, 225, 0.22)\", \"rgba(26, 214, 255, 0.22)\", \"rgba(0, 220, 130, 0.22)\"]"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "width",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                78,
                129
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "height",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                133,
                185
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "zIndex",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                189,
                238
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "top",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                242,
                287
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "left",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                291,
                340
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "right",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                344,
                394
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "blur",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                398,
                447
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "colors",
          "type": "string[]",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
              "range": [
                451,
                604
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
        }
      ]
    }
  },
  "Logo": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/Logo.vue",
    "pascalName": "Logo",
    "kebabName": "logo",
    "chunkName": "components/logo",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/Logo.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/Logo.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ThemeSelect": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/ThemeSelect.vue",
    "pascalName": "ThemeSelect",
    "kebabName": "theme-select",
    "chunkName": "components/theme-select",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/ThemeSelect.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/app/ThemeSelect.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DocsAside": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/DocsAside.vue",
    "pascalName": "DocsAside",
    "kebabName": "docs-aside",
    "chunkName": "components/docs-aside",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/DocsAside.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/DocsAside.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DocsAsideTree": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
    "pascalName": "DocsAsideTree",
    "kebabName": "docs-aside-tree",
    "chunkName": "components/docs-aside-tree",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "links",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "any",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
              "range": [
                92,
                160
              ]
            }
          ],
          "schema": "any",
          "default": "[]"
        },
        {
          "name": "level",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
              "range": [
                164,
                209
              ]
            }
          ],
          "schema": "number",
          "default": "0"
        },
        {
          "name": "max",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
              "range": [
                213,
                259
              ]
            }
          ],
          "schema": "number",
          "default": "null"
        },
        {
          "name": "parent",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "any",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
              "range": [
                263,
                329
              ]
            }
          ],
          "schema": "any",
          "default": "null"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "links",
          "type": "any",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
              "range": [
                92,
                160
              ]
            }
          ],
          "schema": "any"
        },
        {
          "name": "level",
          "type": "number",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
              "range": [
                164,
                209
              ]
            }
          ],
          "schema": "number"
        },
        {
          "name": "max",
          "type": "number",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
              "range": [
                213,
                259
              ]
            }
          ],
          "schema": "number"
        },
        {
          "name": "parent",
          "type": "any",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
              "range": [
                263,
                329
              ]
            }
          ],
          "schema": "any"
        }
      ]
    }
  },
  "DocsPageBottom": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/DocsPageBottom.vue",
    "pascalName": "DocsPageBottom",
    "kebabName": "docs-page-bottom",
    "chunkName": "components/docs-page-bottom",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/DocsPageBottom.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/DocsPageBottom.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DocsPageLayout": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/DocsPageLayout.vue",
    "pascalName": "DocsPageLayout",
    "kebabName": "docs-page-layout",
    "chunkName": "components/docs-page-layout",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/DocsPageLayout.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/DocsPageLayout.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
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
  "DocsPrevNext": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/DocsPrevNext.vue",
    "pascalName": "DocsPrevNext",
    "kebabName": "docs-prev-next",
    "chunkName": "components/docs-prev-next",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/DocsPrevNext.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/DocsPrevNext.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DocsToc": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/DocsToc.vue",
    "pascalName": "DocsToc",
    "kebabName": "docs-toc",
    "chunkName": "components/docs-toc",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/DocsToc.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/DocsToc.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [
        {
          "name": "move",
          "type": "any[]",
          "signature": "(event: \"move\", ...args: any[]): void",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                4472,
                4507
              ]
            }
          ],
          "schema": [
            "any"
          ]
        }
      ],
      "exposed": [
        {
          "name": "onMove",
          "type": "(...args: any[]) => any",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "event",
            "type": "(...args: any[]): any",
            "schema": [
              "any"
            ]
          }
        }
      ]
    }
  },
  "DocsTocLinks": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/DocsTocLinks.vue",
    "pascalName": "DocsTocLinks",
    "kebabName": "docs-toc-links",
    "chunkName": "components/docs-toc-links",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/DocsTocLinks.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/DocsTocLinks.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "links",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "TocLink[]",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/DocsTocLinks.vue",
              "range": [
                142,
                216
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
                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
          },
          "default": "[]"
        }
      ],
      "slots": [],
      "events": [
        {
          "name": "move",
          "type": "any[]",
          "signature": "(event: \"move\", ...args: any[]): void",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                4472,
                4507
              ]
            }
          ],
          "schema": [
            "any"
          ]
        }
      ],
      "exposed": [
        {
          "name": "links",
          "type": "TocLink[]",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/DocsTocLinks.vue",
              "range": [
                142,
                216
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
                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
        },
        {
          "name": "onMove",
          "type": "(...args: any[]) => any",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "event",
            "type": "(...args: any[]): any",
            "schema": [
              "any"
            ]
          }
        }
      ]
    }
  },
  "EditOnLink": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
    "pascalName": "EditOnLink",
    "kebabName": "edit-on-link",
    "chunkName": "components/edit-on-link",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "baseUrl",
          "global": false,
          "description": "GitHub base URL.",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                272,
                415
              ]
            }
          ],
          "schema": "string",
          "default": "useAppConfig()?.docus?.github?.baseUrl || \"https://github.com\""
        },
        {
          "name": "owner",
          "global": false,
          "description": "Repository owner.",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                462,
                577
              ]
            }
          ],
          "schema": "string",
          "default": "useAppConfig()?.docus?.github?.owner"
        },
        {
          "name": "repo",
          "global": false,
          "description": "Repository name.",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                623,
                736
              ]
            }
          ],
          "schema": "string",
          "default": "useAppConfig()?.docus?.github?.repo"
        },
        {
          "name": "branch",
          "global": false,
          "description": "The branch to use for the edit link.",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                802,
                919
              ]
            }
          ],
          "schema": "string",
          "default": "useAppConfig()?.docus?.github?.branch"
        },
        {
          "name": "dir",
          "global": false,
          "description": "A base directory to append to the source path.\n\nWon't be used if `page` is set.",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                1041,
                1152
              ]
            }
          ],
          "schema": "string",
          "default": "useAppConfig()?.docus?.github?.dir"
        },
        {
          "name": "source",
          "global": false,
          "description": "Source file path.\n\nWon't be used if `page` is set.",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                1245,
                1328
              ]
            }
          ],
          "schema": "string",
          "default": "undefined"
        },
        {
          "name": "page",
          "global": false,
          "description": "Use page from",
          "tags": [
            {
              "name": "nuxt",
              "text": "/content."
            }
          ],
          "required": false,
          "type": "any",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                1386,
                1484
              ]
            }
          ],
          "schema": "any",
          "default": "undefined"
        },
        {
          "name": "contentDir",
          "global": false,
          "description": "Content directory (to be used with `page`)",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                1556,
                1687
              ]
            }
          ],
          "schema": "string",
          "default": "useAppConfig()?.docus?.github?.dir || \"content\""
        },
        {
          "name": "edit",
          "global": false,
          "description": "Send to an edit page or not.",
          "tags": [],
          "required": false,
          "type": "boolean",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                1745,
                1859
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
          "default": "useAppConfig()?.docus?.github?.edit"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "baseUrl",
          "type": "string",
          "description": "GitHub base URL.",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                272,
                415
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "owner",
          "type": "string",
          "description": "Repository owner.",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                462,
                577
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "repo",
          "type": "string",
          "description": "Repository name.",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                623,
                736
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "branch",
          "type": "string",
          "description": "The branch to use for the edit link.",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                802,
                919
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "dir",
          "type": "string",
          "description": "A base directory to append to the source path.\n\nWon't be used if `page` is set.",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                1041,
                1152
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "source",
          "type": "string",
          "description": "Source file path.\n\nWon't be used if `page` is set.",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                1245,
                1328
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "page",
          "type": "any",
          "description": "Use page from",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                1386,
                1484
              ]
            }
          ],
          "schema": "any"
        },
        {
          "name": "contentDir",
          "type": "string",
          "description": "Content directory (to be used with `page`)",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                1556,
                1687
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "edit",
          "type": "boolean",
          "description": "Send to an edit page or not.",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                1745,
                1859
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
          "name": "url",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
              "range": [
                3996,
                3999
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "SourceLink": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/SourceLink.vue",
    "pascalName": "SourceLink",
    "kebabName": "source-link",
    "chunkName": "components/source-link",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/SourceLink.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/SourceLink.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "source",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/SourceLink.vue",
              "range": [
                41,
                92
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/SourceLink.vue",
              "range": [
                41,
                92
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
          "name": "source",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/docus/components/docs/SourceLink.vue",
              "range": [
                41,
                92
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
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseA.vue",
    "pascalName": "ProseA",
    "kebabName": "prose-a",
    "chunkName": "components/prose-a",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseA.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseA.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseA.vue",
              "range": [
                41,
                86
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseA.vue",
              "range": [
                90,
                165
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseA.vue",
              "range": [
                41,
                86
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseA.vue",
              "range": [
                90,
                165
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
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseBlockquote.vue",
    "pascalName": "ProseBlockquote",
    "kebabName": "prose-blockquote",
    "chunkName": "components/prose-blockquote",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseBlockquote.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseBlockquote.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
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
  "ProseCode": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
    "pascalName": "ProseCode",
    "kebabName": "prose-code",
    "chunkName": "components/prose-code",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
              "range": [
                141,
                186
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
          "type": "Lang",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
              "range": [
                190,
                259
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "Lang",
            "schema": []
          },
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
              "range": [
                263,
                314
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
              "range": [
                318,
                392
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
              "range": [
                141,
                186
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "language",
          "type": "Lang",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
              "range": [
                190,
                259
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "Lang",
            "schema": []
          }
        },
        {
          "name": "filename",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
              "range": [
                263,
                314
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
              "range": [
                318,
                392
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
        }
      ]
    }
  },
  "ProseCodeInline": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseCodeInline.vue",
    "pascalName": "ProseCodeInline",
    "kebabName": "prose-code-inline",
    "chunkName": "components/prose-code-inline",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseCodeInline.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseCodeInline.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
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
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseEm.vue",
    "pascalName": "ProseEm",
    "kebabName": "prose-em",
    "chunkName": "components/prose-em",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseEm.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseEm.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
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
  "ProseH1": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseH1.vue",
    "pascalName": "ProseH1",
    "kebabName": "prose-h1",
    "chunkName": "components/prose-h1",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseH1.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH1.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH1.vue",
              "range": [
                111,
                121
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH1.vue",
              "range": [
                111,
                121
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH1.vue",
              "range": [
                111,
                121
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
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseH2.vue",
    "pascalName": "ProseH2",
    "kebabName": "prose-h2",
    "chunkName": "components/prose-h2",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseH2.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH2.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH2.vue",
              "range": [
                111,
                121
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH2.vue",
              "range": [
                111,
                121
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH2.vue",
              "range": [
                111,
                121
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
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseH3.vue",
    "pascalName": "ProseH3",
    "kebabName": "prose-h3",
    "chunkName": "components/prose-h3",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseH3.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH3.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH3.vue",
              "range": [
                111,
                121
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH3.vue",
              "range": [
                111,
                121
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH3.vue",
              "range": [
                111,
                121
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
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseH4.vue",
    "pascalName": "ProseH4",
    "kebabName": "prose-h4",
    "chunkName": "components/prose-h4",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseH4.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH4.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH4.vue",
              "range": [
                111,
                121
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH4.vue",
              "range": [
                111,
                121
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH4.vue",
              "range": [
                111,
                121
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "ProseH5": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseH5.vue",
    "pascalName": "ProseH5",
    "kebabName": "prose-h5",
    "chunkName": "components/prose-h5",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseH5.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH5.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH5.vue",
              "range": [
                111,
                121
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH5.vue",
              "range": [
                111,
                121
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH5.vue",
              "range": [
                111,
                121
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
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseH6.vue",
    "pascalName": "ProseH6",
    "kebabName": "prose-h6",
    "chunkName": "components/prose-h6",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseH6.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH6.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH6.vue",
              "range": [
                111,
                121
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH6.vue",
              "range": [
                111,
                121
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseH6.vue",
              "range": [
                111,
                121
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
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseHr.vue",
    "pascalName": "ProseHr",
    "kebabName": "prose-hr",
    "chunkName": "components/prose-hr",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseHr.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseHr.vue",
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
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
    "pascalName": "ProseImg",
    "kebabName": "prose-img",
    "chunkName": "components/prose-img",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "width",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | number",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
              "range": [
                237,
                300
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
              "range": [
                304,
                368
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
          "name": "src",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
              "range": [
                141,
                185
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
              "range": [
                189,
                233
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
          "name": "width",
          "type": "string | number",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
              "range": [
                237,
                300
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
              "range": [
                304,
                368
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
          "name": "src",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
              "range": [
                141,
                185
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
              "range": [
                189,
                233
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "ProseLi": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseLi.vue",
    "pascalName": "ProseLi",
    "kebabName": "prose-li",
    "chunkName": "components/prose-li",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseLi.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseLi.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
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
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseOl.vue",
    "pascalName": "ProseOl",
    "kebabName": "prose-ol",
    "chunkName": "components/prose-ol",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseOl.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseOl.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
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
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseP.vue",
    "pascalName": "ProseP",
    "kebabName": "prose-p",
    "chunkName": "components/prose-p",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseP.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseP.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
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
  "ProseStrong": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseStrong.vue",
    "pascalName": "ProseStrong",
    "kebabName": "prose-strong",
    "chunkName": "components/prose-strong",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseStrong.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseStrong.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
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
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseTable.vue",
    "pascalName": "ProseTable",
    "kebabName": "prose-table",
    "chunkName": "components/prose-table",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseTable.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseTable.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
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
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseTbody.vue",
    "pascalName": "ProseTbody",
    "kebabName": "prose-tbody",
    "chunkName": "components/prose-tbody",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseTbody.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseTbody.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
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
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseTd.vue",
    "pascalName": "ProseTd",
    "kebabName": "prose-td",
    "chunkName": "components/prose-td",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseTd.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseTd.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
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
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseTh.vue",
    "pascalName": "ProseTh",
    "kebabName": "prose-th",
    "chunkName": "components/prose-th",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseTh.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseTh.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
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
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseThead.vue",
    "pascalName": "ProseThead",
    "kebabName": "prose-thead",
    "chunkName": "components/prose-thead",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseThead.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseThead.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
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
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseTr.vue",
    "pascalName": "ProseTr",
    "kebabName": "prose-tr",
    "chunkName": "components/prose-tr",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseTr.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseTr.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
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
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseUl.vue",
    "pascalName": "ProseUl",
    "kebabName": "prose-ul",
    "chunkName": "components/prose-ul",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseUl.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/typography/components/global/ProseUl.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
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
  "Alert": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/Alert.vue",
    "pascalName": "Alert",
    "kebabName": "alert",
    "chunkName": "components/alert",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Alert.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Alert.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "type",
          "global": false,
          "description": "",
          "tags": [
            {
              "name": "values",
              "text": "info, success, warning, danger"
            }
          ],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Alert.vue",
              "range": [
                111,
                280
              ]
            }
          ],
          "schema": "string",
          "default": "\"info\""
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
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
          "name": "type",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Alert.vue",
              "range": [
                111,
                280
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "Badge": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/Badge.vue",
    "pascalName": "Badge",
    "kebabName": "badge",
    "chunkName": "components/badge",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Badge.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Badge.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "type",
          "global": false,
          "description": "",
          "tags": [
            {
              "name": "values",
              "text": "info, success, warning, danger"
            }
          ],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Badge.vue",
              "range": [
                97,
                266
              ]
            }
          ],
          "schema": "string",
          "default": "\"info\""
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
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
          "name": "type",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Badge.vue",
              "range": [
                97,
                266
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "ButtonLink": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/ButtonLink.vue",
    "pascalName": "ButtonLink",
    "kebabName": "button-link",
    "chunkName": "components/button-link",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/ButtonLink.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/ButtonLink.vue",
    "meta": {
      "type": 1,
      "props": [],
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
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
        }
      ]
    }
  },
  "Callout": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/Callout.vue",
    "pascalName": "Callout",
    "kebabName": "callout",
    "chunkName": "components/callout",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Callout.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Callout.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "type",
          "global": false,
          "description": "",
          "tags": [
            {
              "name": "values",
              "text": "info, success, warning, danger"
            }
          ],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Callout.vue",
              "range": [
                111,
                280
              ]
            }
          ],
          "schema": "string",
          "default": "\"info\""
        },
        {
          "name": "modelValue",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "any",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Callout.vue",
              "range": [
                284,
                352
              ]
            }
          ],
          "schema": "any",
          "default": "ref(false)"
        }
      ],
      "slots": [
        {
          "name": "summary",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        },
        {
          "name": "content",
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
      "events": [
        {
          "name": "update:modelValue",
          "type": "any[]",
          "signature": "(event: \"update:modelValue\", ...args: any[]): void",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                4472,
                4507
              ]
            }
          ],
          "schema": [
            "any"
          ]
        }
      ],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { summary?(_: {}): any; content?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { summary?(_: {}): any; content?(_: {}): any; }",
            "schema": {
              "summary": {
                "name": "summary",
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
              },
              "content": {
                "name": "content",
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
          "name": "onUpdate:modelValue",
          "type": "(...args: any[]) => any",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "event",
            "type": "(...args: any[]): any",
            "schema": [
              "any"
            ]
          }
        },
        {
          "name": "type",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Callout.vue",
              "range": [
                111,
                280
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "modelValue",
          "type": "any",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Callout.vue",
              "range": [
                284,
                352
              ]
            }
          ],
          "schema": "any"
        }
      ]
    }
  },
  "CodeBlock": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue",
    "pascalName": "CodeBlock",
    "kebabName": "code-block",
    "chunkName": "components/code-block",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "label",
          "global": false,
          "description": "Label to display for the tab",
          "tags": [],
          "required": true,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue",
              "range": [
                87,
                136
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue",
              "range": [
                87,
                136
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "active",
          "global": false,
          "description": "Select which tab should be active\nTODO: seems like it's not used",
          "tags": [],
          "required": false,
          "type": "boolean",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue",
              "range": [
                228,
                279
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
          "name": "preview",
          "global": false,
          "description": "Preview block are bordered and have small padding.\nTODO: seems like it's not used",
          "tags": [],
          "required": false,
          "type": "boolean",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue",
              "range": [
                387,
                439
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
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
          "name": "label",
          "type": "string",
          "description": "Label to display for the tab",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue",
              "range": [
                87,
                136
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "active",
          "type": "boolean",
          "description": "Select which tab should be active\nTODO: seems like it's not used",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue",
              "range": [
                228,
                279
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
          "name": "preview",
          "type": "boolean",
          "description": "Preview block are bordered and have small padding.\nTODO: seems like it's not used",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue",
              "range": [
                387,
                439
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
  "CodeGroup": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/CodeGroup.vue",
    "pascalName": "CodeGroup",
    "kebabName": "code-group",
    "chunkName": "components/code-group",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/CodeGroup.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/CodeGroup.vue",
    "meta": {
      "type": null,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Container": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/Container.vue",
    "pascalName": "Container",
    "kebabName": "container",
    "chunkName": "components/container",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Container.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Container.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
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
  "CopyButton": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/CopyButton.vue",
    "pascalName": "CopyButton",
    "kebabName": "copy-button",
    "chunkName": "components/copy-button",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/CopyButton.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/CopyButton.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "content",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/CopyButton.vue",
              "range": [
                100,
                148
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
          "name": "content",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/CopyButton.vue",
              "range": [
                100,
                148
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "List": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/List.vue",
    "pascalName": "List",
    "kebabName": "list",
    "chunkName": "components/list",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/List.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/List.vue",
    "meta": {
      "type": null,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "NuxtImg": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/NuxtImg.vue",
    "pascalName": "NuxtImg",
    "kebabName": "nuxt-img",
    "chunkName": "components/nuxt-img",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/NuxtImg.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/NuxtImg.vue",
    "meta": {
      "type": null,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Props": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/Props.vue",
    "pascalName": "Props",
    "kebabName": "props",
    "chunkName": "components/props",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Props.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Props.vue",
    "meta": {
      "type": null,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Sandbox": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
    "pascalName": "Sandbox",
    "kebabName": "sandbox",
    "chunkName": "components/sandbox",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
              "range": [
                55,
                99
              ]
            }
          ],
          "schema": "string",
          "default": "\"\""
        },
        {
          "name": "repo",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
              "range": [
                103,
                148
              ]
            }
          ],
          "schema": "string",
          "default": "\"\""
        },
        {
          "name": "branch",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
              "range": [
                152,
                199
              ]
            }
          ],
          "schema": "string",
          "default": "\"\""
        },
        {
          "name": "dir",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
              "range": [
                203,
                247
              ]
            }
          ],
          "schema": "string",
          "default": "\"\""
        },
        {
          "name": "file",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
              "range": [
                251,
                303
              ]
            }
          ],
          "schema": "string",
          "default": "\"app.vue\""
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
              "range": [
                55,
                99
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "repo",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
              "range": [
                103,
                148
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "branch",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
              "range": [
                152,
                199
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "dir",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
              "range": [
                203,
                247
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "file",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
              "range": [
                251,
                303
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "TabsHeader": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue",
    "pascalName": "TabsHeader",
    "kebabName": "tabs-header",
    "chunkName": "components/tabs-header",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "tabs",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "{ label: string; }[]",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue",
              "range": [
                135,
                215
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue",
              "range": [
                135,
                215
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "{ label: string; }[]",
            "schema": [
              {
                "kind": "object",
                "type": "{ label: string; }",
                "schema": {
                  "label": {
                    "name": "label",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": true,
                    "type": "string",
                    "declarations": [
                      {
                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue",
                        "range": [
                          173,
                          186
                        ]
                      }
                    ],
                    "schema": "string"
                  }
                }
              }
            ]
          }
        },
        {
          "name": "activeTabIndex",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "number",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue",
              "range": [
                219,
                277
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue",
              "range": [
                219,
                277
              ]
            }
          ],
          "schema": "number"
        }
      ],
      "slots": [
        {
          "name": "footer",
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
      "events": [
        {
          "name": "update:activeTabIndex",
          "type": "any[]",
          "signature": "(event: \"update:activeTabIndex\", ...args: any[]): void",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                4472,
                4507
              ]
            }
          ],
          "schema": [
            "any"
          ]
        }
      ],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { footer?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { footer?(_: {}): any; }",
            "schema": {
              "footer": {
                "name": "footer",
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
          "name": "onUpdate:activeTabIndex",
          "type": "(...args: any[]) => any",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "event",
            "type": "(...args: any[]): any",
            "schema": [
              "any"
            ]
          }
        },
        {
          "name": "tabs",
          "type": "{ label: string; }[]",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue",
              "range": [
                135,
                215
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "{ label: string; }[]",
            "schema": [
              {
                "kind": "object",
                "type": "{ label: string; }",
                "schema": {
                  "label": {
                    "name": "label",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": true,
                    "type": "string",
                    "declarations": [
                      {
                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue",
                        "range": [
                          173,
                          186
                        ]
                      }
                    ],
                    "schema": "string"
                  }
                }
              }
            ]
          }
        },
        {
          "name": "activeTabIndex",
          "type": "number",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue",
              "range": [
                219,
                277
              ]
            }
          ],
          "schema": "number"
        }
      ]
    }
  },
  "Terminal": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/Terminal.vue",
    "pascalName": "Terminal",
    "kebabName": "terminal",
    "chunkName": "components/terminal",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Terminal.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Terminal.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "content",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string | string[]",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Terminal.vue",
              "range": [
                131,
                222
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Terminal.vue",
              "range": [
                131,
                222
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | string[]",
            "schema": [
              "string",
              {
                "kind": "array",
                "type": "string[]",
                "schema": [
                  "string"
                ]
              }
            ]
          }
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "content",
          "type": "string | string[]",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/Terminal.vue",
              "range": [
                131,
                222
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | string[]",
            "schema": [
              "string",
              {
                "kind": "array",
                "type": "string[]",
                "schema": [
                  "string"
                ]
              }
            ]
          }
        }
      ]
    }
  },
  "VideoPlayer": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
    "pascalName": "VideoPlayer",
    "kebabName": "video-player",
    "chunkName": "components/video-player",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
              "range": [
                143,
                187
              ]
            }
          ],
          "schema": "string",
          "default": "\"\""
        },
        {
          "name": "poster",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
              "range": [
                92,
                139
              ]
            }
          ],
          "schema": "string",
          "default": "\"\""
        },
        {
          "name": "sources",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "any[]",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
              "range": [
                191,
                263
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "any[]",
            "schema": [
              "any"
            ]
          },
          "default": "[]"
        },
        {
          "name": "autoplay",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
              "range": [
                267,
                320
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
          "name": "src",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
              "range": [
                143,
                187
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "poster",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
              "range": [
                92,
                139
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "sources",
          "type": "any[]",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
              "range": [
                191,
                263
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "any[]",
            "schema": [
              "any"
            ]
          }
        },
        {
          "name": "autoplay",
          "type": "boolean",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
              "range": [
                267,
                320
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
  "IconCodeSandBox": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/icons/IconCodeSandBox.vue",
    "pascalName": "IconCodeSandBox",
    "kebabName": "icon-code-sand-box",
    "chunkName": "components/icon-code-sand-box",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconCodeSandBox.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/icons/IconCodeSandBox.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconDocus": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/icons/IconDocus.vue",
    "pascalName": "IconDocus",
    "kebabName": "icon-docus",
    "chunkName": "components/icon-docus",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconDocus.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/icons/IconDocus.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconNuxt": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxt.vue",
    "pascalName": "IconNuxt",
    "kebabName": "icon-nuxt",
    "chunkName": "components/icon-nuxt",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxt.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/icons/IconNuxt.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconNuxtContent": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxtContent.vue",
    "pascalName": "IconNuxtContent",
    "kebabName": "icon-nuxt-content",
    "chunkName": "components/icon-nuxt-content",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxtContent.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/icons/IconNuxtContent.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconNuxtLabs": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxtLabs.vue",
    "pascalName": "IconNuxtLabs",
    "kebabName": "icon-nuxt-labs",
    "chunkName": "components/icon-nuxt-labs",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxtLabs.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/icons/IconNuxtLabs.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconNuxtStudio": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxtStudio.vue",
    "pascalName": "IconNuxtStudio",
    "kebabName": "icon-nuxt-studio",
    "chunkName": "components/icon-nuxt-studio",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxtStudio.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/icons/IconNuxtStudio.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconStackBlitz": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/icons/IconStackBlitz.vue",
    "pascalName": "IconStackBlitz",
    "kebabName": "icon-stack-blitz",
    "chunkName": "components/icon-stack-blitz",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconStackBlitz.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/icons/IconStackBlitz.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconVueTelescope": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/icons/IconVueTelescope.vue",
    "pascalName": "IconVueTelescope",
    "kebabName": "icon-vue-telescope",
    "chunkName": "components/icon-vue-telescope",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconVueTelescope.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/icons/IconVueTelescope.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "BlockHero": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
    "pascalName": "BlockHero",
    "kebabName": "block-hero",
    "chunkName": "components/block-hero",
    "shortPath": "node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "cta",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string[]",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
              "range": [
                78,
                170
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "string[]",
            "schema": [
              "string"
            ]
          },
          "default": "[]"
        },
        {
          "name": "secondary",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string[]",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
              "range": [
                174,
                272
              ]
            }
          ],
          "schema": {
            "kind": "array",
            "type": "string[]",
            "schema": [
              "string"
            ]
          },
          "default": "[]"
        },
        {
          "name": "video",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
              "range": [
                276,
                343
              ]
            }
          ],
          "schema": "string",
          "default": "\"\""
        },
        {
          "name": "snippet",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | string[]",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
              "range": [
                347,
                456
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | string[]",
            "schema": [
              "string",
              {
                "kind": "array",
                "type": "string[]",
                "schema": [
                  "string"
                ]
              }
            ]
          },
          "default": "\"\""
        }
      ],
      "slots": [
        {
          "name": "announce",
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
        },
        {
          "name": "title",
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
        },
        {
          "name": "description",
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
        },
        {
          "name": "extra",
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
        },
        {
          "name": "actions",
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
        },
        {
          "name": "support",
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
          "type": "Readonly<InternalSlots> & { announce?(_: { unwrap: string; }): any; title?(_: { unwrap: string; }): any; description?(_: { unwrap: string; }): any; extra?(_: { ...; }): any; actions?(_: { ...; }): any; support?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { announce?(_: { unwrap: string; }): any; title?(_: { unwrap: string; }): any; description?(_: { unwrap: string; }): any; extra?(_: { ...; }): any; actions?(_: { ...; }): any; support?(_: {}): any; }",
            "schema": {
              "announce": {
                "name": "announce",
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
              },
              "title": {
                "name": "title",
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
              },
              "description": {
                "name": "description",
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
              },
              "extra": {
                "name": "extra",
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
              },
              "actions": {
                "name": "actions",
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
              },
              "support": {
                "name": "support",
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
          "name": "cta",
          "type": "string[]",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
              "range": [
                78,
                170
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
          "name": "secondary",
          "type": "string[]",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
              "range": [
                174,
                272
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
          "name": "video",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
              "range": [
                276,
                343
              ]
            }
          ],
          "schema": "string"
        },
        {
          "name": "snippet",
          "type": "string | string[]",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
              "range": [
                347,
                456
              ]
            }
          ],
          "schema": {
            "kind": "enum",
            "type": "string | string[]",
            "schema": [
              "string",
              {
                "kind": "array",
                "type": "string[]",
                "schema": [
                  "string"
                ]
              }
            ]
          }
        }
      ]
    }
  },
  "Card": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/landing/Card.vue",
    "pascalName": "Card",
    "kebabName": "card",
    "chunkName": "components/card",
    "shortPath": "node_modules/@nuxt-themes/elements/components/landing/Card.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/landing/Card.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/landing/Card.vue",
              "range": [
                41,
                86
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
        },
        {
          "name": "title",
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
        },
        {
          "name": "description",
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
          "type": "Readonly<InternalSlots> & { default?(_: {}): any; title?(_: { unwrap: string; }): any; description?(_: { unwrap: string; }): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?(_: {}): any; title?(_: { unwrap: string; }): any; description?(_: { unwrap: string; }): any; }",
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
              },
              "title": {
                "name": "title",
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
              },
              "description": {
                "name": "description",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/landing/Card.vue",
              "range": [
                41,
                86
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "CardGrid": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/landing/CardGrid.vue",
    "pascalName": "CardGrid",
    "kebabName": "card-grid",
    "chunkName": "components/card-grid",
    "shortPath": "node_modules/@nuxt-themes/elements/components/landing/CardGrid.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/landing/CardGrid.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "title",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/landing/CardGrid.vue",
              "range": [
                41,
                95
              ]
            }
          ],
          "schema": "string",
          "default": "\"Features\""
        }
      ],
      "slots": [
        {
          "name": "root",
          "type": "{}",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        },
        {
          "name": "title",
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
        },
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
          "type": "Readonly<InternalSlots> & { root?(_: {}): any; title?(_: { unwrap: string; }): any; default?(_: {}): any; }",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            }
          ],
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { root?(_: {}): any; title?(_: { unwrap: string; }): any; default?(_: {}): any; }",
            "schema": {
              "root": {
                "name": "root",
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
              },
              "title": {
                "name": "title",
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
              },
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
          "name": "title",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/landing/CardGrid.vue",
              "range": [
                41,
                95
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "VoltaBoard": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/volta/VoltaBoard.vue",
    "pascalName": "VoltaBoard",
    "kebabName": "volta-board",
    "chunkName": "components/volta-board",
    "shortPath": "node_modules/@nuxt-themes/elements/components/volta/VoltaBoard.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/volta/VoltaBoard.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "token",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/volta/VoltaBoard.vue",
              "range": [
                118,
                167
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/volta/VoltaBoard.vue",
              "range": [
                118,
                167
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
          "name": "token",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/volta/VoltaBoard.vue",
              "range": [
                118,
                167
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  },
  "ComponentPlayground": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlayground.vue",
    "pascalName": "ComponentPlayground",
    "kebabName": "component-playground",
    "chunkName": "components/component-playground",
    "shortPath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlayground.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/ComponentPlayground.vue",
    "meta": {
      "type": null,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ComponentPlaygroundData": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundData.vue",
    "pascalName": "ComponentPlaygroundData",
    "kebabName": "component-playground-data",
    "chunkName": "components/component-playground-data",
    "shortPath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundData.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundData.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "modelValue",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "Record<string, any>",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundData.vue",
              "range": [
                575,
                655
              ]
            }
          ],
          "schema": "Record<string, any>",
          "default": "{}"
        },
        {
          "name": "componentData",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "Record<string, any>",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundData.vue",
              "range": [
                659,
                742
              ]
            }
          ],
          "schema": "Record<string, any>",
          "default": "{}"
        }
      ],
      "slots": [],
      "events": [
        {
          "name": "update:modelValue",
          "type": "any[]",
          "signature": "(event: \"update:modelValue\", ...args: any[]): void",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                4472,
                4507
              ]
            }
          ],
          "schema": [
            "any"
          ]
        }
      ],
      "exposed": [
        {
          "name": "onUpdate:modelValue",
          "type": "(...args: any[]) => any",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "event",
            "type": "(...args: any[]): any",
            "schema": [
              "any"
            ]
          }
        },
        {
          "name": "modelValue",
          "type": "Record<string, any>",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundData.vue",
              "range": [
                575,
                655
              ]
            }
          ],
          "schema": "Record<string, any>"
        },
        {
          "name": "componentData",
          "type": "Record<string, any>",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundData.vue",
              "range": [
                659,
                742
              ]
            }
          ],
          "schema": "Record<string, any>"
        }
      ]
    }
  },
  "ComponentPlaygroundProps": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundProps.vue",
    "pascalName": "ComponentPlaygroundProps",
    "kebabName": "component-playground-props",
    "chunkName": "components/component-playground-props",
    "shortPath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundProps.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundProps.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "modelValue",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "Record<string, any>",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundProps.vue",
              "range": [
                763,
                817
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundProps.vue",
              "range": [
                763,
                817
              ]
            }
          ],
          "schema": "Record<string, any>"
        },
        {
          "name": "componentData",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "Record<string, any>",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundProps.vue",
              "range": [
                821,
                878
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundProps.vue",
              "range": [
                821,
                878
              ]
            }
          ],
          "schema": "Record<string, any>"
        }
      ],
      "slots": [],
      "events": [
        {
          "name": "update:modelValue",
          "type": "any[]",
          "signature": "(event: \"update:modelValue\", ...args: any[]): void",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                4472,
                4507
              ]
            }
          ],
          "schema": [
            "any"
          ]
        }
      ],
      "exposed": [
        {
          "name": "onUpdate:modelValue",
          "type": "(...args: any[]) => any",
          "description": "",
          "declarations": [],
          "schema": {
            "kind": "event",
            "type": "(...args: any[]): any",
            "schema": [
              "any"
            ]
          }
        },
        {
          "name": "modelValue",
          "type": "Record<string, any>",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundProps.vue",
              "range": [
                763,
                817
              ]
            }
          ],
          "schema": "Record<string, any>"
        },
        {
          "name": "componentData",
          "type": "Record<string, any>",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundProps.vue",
              "range": [
                821,
                878
              ]
            }
          ],
          "schema": "Record<string, any>"
        }
      ]
    }
  },
  "ComponentPlaygroundSlots": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundSlots.vue",
    "pascalName": "ComponentPlaygroundSlots",
    "kebabName": "component-playground-slots",
    "chunkName": "components/component-playground-slots",
    "shortPath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundSlots.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundSlots.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "componentData",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "Record<string, any>",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundSlots.vue",
              "range": [
                184,
                241
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundSlots.vue",
              "range": [
                184,
                241
              ]
            }
          ],
          "schema": "Record<string, any>"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "componentData",
          "type": "Record<string, any>",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundSlots.vue",
              "range": [
                184,
                241
              ]
            }
          ],
          "schema": "Record<string, any>"
        }
      ]
    }
  },
  "ComponentPlaygroundTokens": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundTokens.vue",
    "pascalName": "ComponentPlaygroundTokens",
    "kebabName": "component-playground-tokens",
    "chunkName": "components/component-playground-tokens",
    "shortPath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundTokens.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundTokens.vue",
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "componentData",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "Record<string, any>",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundTokens.vue",
              "range": [
                148,
                205
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundTokens.vue",
              "range": [
                148,
                205
              ]
            }
          ],
          "schema": "Record<string, any>"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "componentData",
          "type": "Record<string, any>",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundTokens.vue",
              "range": [
                148,
                205
              ]
            }
          ],
          "schema": "Record<string, any>"
        }
      ]
    }
  },
  "PreviewLayout": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/meta/PreviewLayout.vue",
    "pascalName": "PreviewLayout",
    "kebabName": "preview-layout",
    "chunkName": "components/preview-layout",
    "shortPath": "node_modules/@nuxt-themes/elements/components/meta/PreviewLayout.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/PreviewLayout.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
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
  "TokensPlayground": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/meta/TokensPlayground.vue",
    "pascalName": "TokensPlayground",
    "kebabName": "tokens-playground",
    "chunkName": "components/tokens-playground",
    "shortPath": "node_modules/@nuxt-themes/elements/components/meta/TokensPlayground.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt-themes/elements/components/meta/TokensPlayground.vue",
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
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
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
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
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
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
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
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
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
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
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
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
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
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
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
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
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
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
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2015.core.d.ts",
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
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2015.core.d.ts",
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
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2015.core.d.ts",
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
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2018.regexp.d.ts",
                                        "range": [
                                          1204,
                                          1229
                                        ]
                                      }
                                    ],
                                    "schema": "boolean"
                                  },
                                  "__@match@8717": {
                                    "name": "__@match@8717",
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
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts",
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
                                  "__@replace@8719": {
                                    "name": "__@replace@8719",
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
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts",
                                        "range": [
                                          6110,
                                          6173
                                        ]
                                      },
                                      {
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts",
                                        "range": [
                                          6478,
                                          6576
                                        ]
                                      }
                                    ],
                                    "schema": "{ (string: string, replaceValue: string): string; (string: string, replacer: (substring: string, ...args: any[]) => string): string; }"
                                  },
                                  "__@search@8722": {
                                    "name": "__@search@8722",
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
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts",
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
                                  "__@split@8724": {
                                    "name": "__@split@8724",
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
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts",
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
                                  "__@matchAll@8726": {
                                    "name": "__@matchAll@8726",
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
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2020.symbol.wellknown.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
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
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                      "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                      "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                      "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                      "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                                "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                                "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                                "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                                "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                      "type": "LayoutKey",
                      "declarations": [
                        {
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                          "range": [
                            2319,
                            2338
                          ]
                        }
                      ],
                      "schema": {
                        "kind": "array",
                        "type": "LayoutKey",
                        "schema": []
                      }
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
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue.d.ts",
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
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
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
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
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
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
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
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
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
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
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
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
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
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
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
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
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
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2015.core.d.ts",
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
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2015.core.d.ts",
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
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2015.core.d.ts",
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
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2018.regexp.d.ts",
                                        "range": [
                                          1204,
                                          1229
                                        ]
                                      }
                                    ],
                                    "schema": "boolean"
                                  },
                                  "__@match@8717": {
                                    "name": "__@match@8717",
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
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts",
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
                                  "__@replace@8719": {
                                    "name": "__@replace@8719",
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
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts",
                                        "range": [
                                          6110,
                                          6173
                                        ]
                                      },
                                      {
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts",
                                        "range": [
                                          6478,
                                          6576
                                        ]
                                      }
                                    ],
                                    "schema": "{ (string: string, replaceValue: string): string; (string: string, replacer: (substring: string, ...args: any[]) => string): string; }"
                                  },
                                  "__@search@8722": {
                                    "name": "__@search@8722",
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
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts",
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
                                  "__@split@8724": {
                                    "name": "__@split@8724",
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
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts",
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
                                  "__@matchAll@8726": {
                                    "name": "__@matchAll@8726",
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
                                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2020.symbol.wellknown.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                          "type": "LayoutKey",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                2319,
                                2338
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "array",
                            "type": "LayoutKey",
                            "schema": []
                          }
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue.d.ts",
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
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue.d.ts",
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
                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                      "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                      "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                      "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                      "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                  "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                        "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue.d.ts",
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
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                          "type": "LayoutKey",
                          "declarations": [
                            {
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                              "range": [
                                2319,
                                2338
                              ]
                            }
                          ],
                          "schema": {
                            "kind": "array",
                            "type": "LayoutKey",
                            "schema": []
                          }
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
              "range": [
                8475,
                8502
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue.d.ts",
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
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue.d.ts",
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
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
              "range": [
                359,
                408
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
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
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2015.core.d.ts",
                    "range": [
                      4364,
                      4386
                    ]
                  }
                ],
                "schema": "string"
              },
              "__@hasInstance@757": {
                "name": "__@hasInstance@757",
                "global": false,
                "description": "Determines whether the given value inherits from this function if this function was used\nas a constructor function.\n\nA constructor function can control which objects are recognized as its instances by\n'instanceof' by overriding this method.",
                "tags": [],
                "required": true,
                "type": "(value: any) => boolean",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es5.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2015.core.d.ts",
                    "range": [
                      4364,
                      4386
                    ]
                  }
                ],
                "schema": "string"
              },
              "__@hasInstance@757": {
                "name": "__@hasInstance@757",
                "global": false,
                "description": "Determines whether the given value inherits from this function if this function was used\nas a constructor function.\n\nA constructor function can control which objects are recognized as its instances by\n'instanceof' by overriding this method.",
                "tags": [],
                "required": true,
                "type": "(value: any) => boolean",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue.d.ts",
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
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue.d.ts",
              "range": [
                470,
                548
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                "type": "LayoutKey",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      2319,
                      2338
                    ]
                  }
                ],
                "schema": {
                  "kind": "array",
                  "type": "LayoutKey",
                  "schema": []
                }
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                                          "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                "type": "LayoutKey",
                "declarations": [
                  {
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
                    "range": [
                      2319,
                      2338
                    ]
                  }
                ],
                "schema": {
                  "kind": "array",
                  "type": "LayoutKey",
                  "schema": []
                }
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
                    "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/types/index.d.ts",
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
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/Markdown.vue",
    "meta": {
      "type": null,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
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
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
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
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue",
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
  "Icon": {
    "export": "default",
    "chunkName": "components/icon",
    "global": true,
    "kebabName": "icon",
    "pascalName": "Icon",
    "prefetch": false,
    "preload": false,
    "mode": "all",
    "shortPath": "/workspace/Kubernetes-Bootcamp/node_modules/nuxt-icon/dist/runtime/Icon.vue",
    "priority": 0,
    "name": "Icon",
    "filePath": "node_modules/nuxt-icon/dist/runtime/Icon.vue",
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/nuxt-icon/dist/runtime/Icon.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/nuxt-icon/dist/runtime/Icon.vue",
              "range": [
                669,
                717
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/nuxt-icon/dist/runtime/Icon.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/nuxt-icon/dist/runtime/Icon.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/@vue/runtime-core/dist/runtime-core.d.ts",
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
          "name": "name",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/nuxt-icon/dist/runtime/Icon.vue",
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
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/nuxt-icon/dist/runtime/Icon.vue",
              "range": [
                721,
                766
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
    "shortPath": "/workspace/Kubernetes-Bootcamp/node_modules/nuxt-icon/dist/runtime/IconCSS.vue",
    "priority": 0,
    "name": "IconCSS",
    "filePath": "node_modules/nuxt-icon/dist/runtime/IconCSS.vue",
    "fullPath": "/workspace/Kubernetes-Bootcamp/node_modules/nuxt-icon/dist/runtime/IconCSS.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/nuxt-icon/dist/runtime/IconCSS.vue",
              "range": [
                387,
                435
              ]
            },
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/nuxt-icon/dist/runtime/IconCSS.vue",
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
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/nuxt-icon/dist/runtime/IconCSS.vue",
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
          "name": "name",
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/nuxt-icon/dist/runtime/IconCSS.vue",
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
          "type": "string",
          "description": "",
          "declarations": [
            {
              "file": "/workspace/Kubernetes-Bootcamp/node_modules/nuxt-icon/dist/runtime/IconCSS.vue",
              "range": [
                439,
                484
              ]
            }
          ],
          "schema": "string"
        }
      ]
    }
  }
};

const _yyWZkx = eventHandler(async () => {
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

const _oLMd8X = defineEventHandler((event) => {
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

const useShikiHighlighter = createSingleton((opts) => {
  const { theme, preload, wrapperStyle } = opts || {};
  let promise;
  const getShikiHighlighter = () => {
    if (!promise) {
      promise = getHighlighter({
        themes: [
          theme?.default || theme || "dark-plus"
        ],
        langs: [
          ...preload || [],
          "diff",
          "json",
          "js",
          "ts",
          "css",
          "shell",
          "html",
          "md",
          "yaml",
          "vue",
          "mdc"
        ]
      }).then((highlighter) => {
        const themes = Object.values(typeof theme === "string" ? { default: theme } : theme || {});
        if (themes.length) {
          return Promise.all(themes.map((theme2) => highlighter.loadTheme(theme2))).then(() => highlighter);
        }
        return highlighter;
      });
    }
    return promise;
  };
  const transformers = [
    transformerNotationDiff(),
    transformerNotationFocus(),
    transformerNotationHighlight(),
    transformerNotationErrorLevel()
  ];
  const getHighlightedAST = async (code, lang, theme2, opts2) => {
    try {
      const highlighter = await getShikiHighlighter();
      const { highlights = [] } = opts2 || {};
      const themesObject = typeof theme2 === "string" ? { default: theme2 } : theme2 || {};
      const themeNames = Object.values(themesObject);
      if (themeNames.length) {
        await Promise.all(themeNames.map((theme3) => highlighter.loadTheme(theme3)));
      }
      if (lang && !highlighter.getLoadedLanguages().includes(lang)) {
        try {
          await highlighter.loadLanguage(lang);
        } catch (error) {
          if (highlights.length) {
            console.warn("[@nuxtjs/mdc] Defaulting to no language to be able to highlight lines:", error.message);
            lang = "";
          } else
            throw error;
        }
      }
      const root = highlighter.codeToHast(code.trimEnd(), {
        lang,
        themes: themesObject,
        defaultColor: false,
        transformers: [
          ...transformers,
          {
            name: "mdc:highlight",
            line(node, line) {
              if (highlights.includes(line))
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
        styles.unshift(
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
    } catch (error) {
      console.warn("[@nuxtjs/mdc] Failed to highlight code block:", error.message);
      return {
        tree: [{ type: "text", value: code }],
        className: "",
        inlineStyle: "",
        style: ""
      };
    }
  };
  return {
    getHighlightedAST
  };
});
function createSingleton(fn) {
  let instance;
  return (...args) => {
    if (!instance) {
      instance = fn(...args);
    }
    return instance;
  };
}

const highlighter = /*#__PURE__*/Object.freeze({
  __proto__: null,
  useShikiHighlighter: useShikiHighlighter
});

const _4KC6IW = lazyEventHandler(async () => {
  const { highlight } = useRuntimeConfig().mdc;
  await loadWasm(
    (imports) => import('../onig.mjs').then((mod) => mod.default(imports)).then((exports) => ({ exports }))
  );
  const shiki = useShikiHighlighter(highlight);
  return eventHandler(async (event) => {
    const { code, lang, theme: themeString, highlights: highlightsString } = getQuery$1(event);
    const theme = JSON.parse(themeString);
    const highlights = highlightsString ? JSON.parse(highlightsString) : void 0;
    return await shiki.getHighlightedAST(code, lang, theme, { highlights });
  });
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
    const parsed = await parseMarkdown(content, {
      highlight: options.highlight,
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
        parsed = (await import('file:///workspace/Kubernetes-Bootcamp/node_modules/json5/lib/index.js').then((m) => m.default || m)).parse(content);
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
const getContentsList = async (event, prefix) => {
  const keys = await getContentsIds(event, prefix);
  const keyChunks = [...chunksFromArray(keys, 10)];
  const contents = [];
  for (const chunk of keyChunks) {
    const result = await Promise.all(chunk.map((key) => getContent(event, key)));
    contents.push(...result);
  }
  return contents;
};
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

const _rSvadi = defineEventHandler(async (event) => {
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

const _AD4g7o = defineEventHandler(async (event) => {
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

const _QdE0th = defineEventHandler(async (event) => {
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

const _lazy_AVG9K7 = () => import('../search.mjs');
const _lazy_4bzQ2c = () => import('../opensearch.xml.mjs');
const _lazy_YFgWQB = () => import('../renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/api/search', handler: _lazy_AVG9K7, lazy: true, middleware: false, method: undefined },
  { route: '/opensearch.xml', handler: _lazy_4bzQ2c, lazy: true, middleware: false, method: undefined },
  { route: '/__studio.json', handler: _yyWZkx, lazy: false, middleware: false, method: "get" },
  { route: '/api/component-meta', handler: _oLMd8X, lazy: false, middleware: false, method: "get" },
  { route: '/api/component-meta.json', handler: _oLMd8X, lazy: false, middleware: false, method: "get" },
  { route: '/api/component-meta/:component?', handler: _oLMd8X, lazy: false, middleware: false, method: "get" },
  { route: '/api/_mdc/highlight', handler: _4KC6IW, lazy: false, middleware: false, method: undefined },
  { route: '/api/_content/query/:qid/**:params', handler: _rSvadi, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query/:qid', handler: _rSvadi, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query', handler: _rSvadi, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/cache.1708190307408.json', handler: _AD4g7o, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid/**:params', handler: _QdE0th, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid', handler: _QdE0th, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation', handler: _QdE0th, lazy: false, middleware: false, method: "get" },
  { route: '/**', handler: _lazy_YFgWQB, lazy: true, middleware: false, method: undefined }
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

export { useNitroApp as a, useRuntimeConfig as b, useStorage as c, getRouteRules as g, highlighter as h, localFetch as l, serverQueryContent as s, useAppConfig as u };
//# sourceMappingURL=nitro-prerenderer.mjs.map
