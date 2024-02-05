import { _ as _export_sfc, o as __nuxt_component_0$5 } from '../server.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref } from 'file:///workspace/Kubernetes-Bootcamp/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'file:///workspace/Kubernetes-Bootcamp/node_modules/vue/server-renderer/index.mjs';
import { s as ssrRenderSlot } from './ssrSlot-FBEH5dLd.mjs';
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
import './MDCSlot-TohJ07IH.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Callout",
  __ssrInlineRender: true,
  props: {
    /**
     * @values info, success, warning, danger
     */
    type: {
      type: String,
      default: "info",
      validator(value) {
        return ["info", "success", "warning", "danger", "primary"].includes(value);
      }
    },
    modelValue: {
      required: false,
      default: () => ref(false)
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const isOpen = ref(props.modelValue);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$5;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["callout", [__props.type]]
      }, _attrs))} data-v-e294706d><span class="preview" data-v-e294706d><span class="summary" data-v-e294706d>`);
      ssrRenderSlot(_ctx.$slots, "summary", {}, null, _push, _parent);
      _push(`</span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons-outline:chevron-right",
        class: ["icon", [unref(isOpen) && "rotate"]]
      }, null, _parent));
      _push(`</span><div style="${ssrRenderStyle(unref(isOpen) ? null : { display: "none" })}" class="content" data-v-e294706d>`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/globals/Callout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Callout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e294706d"]]);

export { Callout as default };
//# sourceMappingURL=Callout-B7MgL3L7.mjs.map
