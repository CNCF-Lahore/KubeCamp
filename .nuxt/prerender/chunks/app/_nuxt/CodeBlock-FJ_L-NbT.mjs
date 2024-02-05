import { useSSRContext, defineComponent, mergeProps } from 'file:///workspace/Kubernetes-Bootcamp/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderSlot } from 'file:///workspace/Kubernetes-Bootcamp/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/ofetch/dist/node.mjs';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/hookable/dist/index.mjs';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/unctx/dist/index.mjs';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/h3/dist/index.mjs';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/unhead/dist/index.mjs';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/ufo/dist/index.mjs';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/defu/dist/defu.mjs';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/klona/dist/index.mjs';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/ohash/dist/index.mjs';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/destr/dist/index.mjs';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/cookie-es/dist/index.mjs';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/nanoid/index.js';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/scule/dist/index.mjs';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/@iconify/vue/dist/offline.mjs';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/@vueuse/integrations/useFuse.mjs';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/@vueuse/integrations/useFocusTrap.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/unstorage/dist/index.mjs';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/unstorage/drivers/fs.mjs';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/unstorage/drivers/memory.mjs';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/pathe/dist/index.mjs';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/shikiji/dist/index.mjs';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/shikiji-transformers/dist/index.mjs';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/unified/index.js';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/mdast-util-to-string/index.js';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/micromark/index.js';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/unist-util-stringify-position/index.js';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/micromark-util-character/index.js';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/micromark-util-chunked/index.js';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/micromark-util-resolve-all/index.js';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/micromark-util-sanitize-uri/index.js';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/slugify/slugify.js';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/remark-parse/index.js';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/remark-rehype/index.js';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/remark-mdc/dist/index.mjs';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/hast-util-to-string/index.js';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/github-slugger/index.js';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/detab/index.js';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/remark-emoji/index.js';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/remark-gfm/index.js';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/rehype-external-links/index.js';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/rehype-sort-attributes/index.js';
import 'file:///workspace/Kubernetes-Bootcamp/node_modules/rehype-raw/index.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CodeBlock",
  __ssrInlineRender: true,
  props: {
    /**
     * Label to display for the tab
     */
    label: {
      type: String,
      required: true
    },
    /**
     * Select which tab should be active
     * TODO: seems like it's not used 
     */
    active: {
      type: Boolean,
      default: false
    },
    /**
     * Preview block are bordered and have small padding.
     * TODO: seems like it's not used
     */
    preview: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["code-block", {
          active: __props.active,
          "rounded-lg p-4": __props.preview
        }]
      }, _attrs))} data-v-22d00392>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CodeBlock = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-22d00392"]]);

export { CodeBlock as default };
//# sourceMappingURL=CodeBlock-FJ_L-NbT.mjs.map
