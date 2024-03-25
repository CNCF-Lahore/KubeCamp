import { visit } from 'unist-util-visit';
import { toString } from 'hast-util-to-string';

const defaults = {
  theme: {
    default: "github-light",
    dark: "github-dark"
  },
  async highlighter(code, lang, theme, highlights) {
    if (process.browser && window.sessionStorage.getItem("mdc-shiki-highlighter") === "browser") {
      return import('../nitro/node-server.mjs').then(function (n) { return n.T; }).then(({ useShikiHighlighter }) => {
        return useShikiHighlighter().getHighlightedAST(code, lang, theme, { highlights });
      });
    }
    try {
      return await $fetch("/api/_mdc/highlight", {
        params: {
          code,
          lang,
          theme: JSON.stringify(theme),
          highlights: JSON.stringify(highlights)
        }
      });
    } catch (e) {
      if (process.browser && e?.response?.status === 404) {
        window.sessionStorage.setItem("mdc-shiki-highlighter", "browser");
        return this.highlighter?.(code, lang, theme, highlights);
      }
    }
    return Promise.resolve({ tree: [{ type: "text", value: code }], className: "", style: "" });
  }
};
function rehypeShiki(opts = {}) {
  const options = { ...defaults, ...opts };
  return async (tree) => {
    const tasks = [];
    const styles = [];
    visit(
      tree,
      (node) => ["pre", "code"].includes(node.tagName) && !!(node.properties?.language || node.properties?.highlights),
      (node) => {
        const _node = node;
        const task = options.highlighter(
          toString(node),
          _node.properties.language,
          options.theme,
          _node.properties.highlights ?? []
        ).then(({ tree: tree2, className, style, inlineStyle }) => {
          _node.properties.className = ((_node.properties.className || "") + " " + className).trim();
          _node.properties.style = ((_node.properties.style || "") + " " + inlineStyle).trim();
          if (_node.children[0]?.tagName === "code") {
            _node.children[0].children = tree2;
          } else {
            _node.children = tree2[0].children || tree2;
          }
          if (style)
            styles.push(style);
        });
        tasks.push(task);
      }
    );
    if (tasks.length) {
      await Promise.all(tasks);
      tree.children.push({
        type: "element",
        tagName: "style",
        children: [{ type: "text", value: cleanCSS(styles.join("")) }],
        properties: {}
      });
    }
  };
}
const cleanCSS = (css) => {
  const styles = css.split("}").filter((s) => Boolean(s.trim())).map((s) => s.trim() + "}");
  return Array.from(new Set(styles)).join("");
};

const remarkPlugins = {
};

const rehypePlugins = {
  'highlight': { instance: rehypeShiki, options: {"src":"/workspace/KubeCamp/node_modules/@nuxtjs/mdc/dist/runtime/shiki/index.mjs"} },
};

const highlight = {"theme":{"dark":"github-dark","default":"github-light"},"preload":["json","js","ts","html","css","vue","diff","shell","markdown","yaml","bash","ini"]};

export { highlight, rehypePlugins, remarkPlugins };
//# sourceMappingURL=mdc-imports.mjs.map
