import { _ as _export_sfc, r as useAppConfig, a as __nuxt_component_0$4, o as __nuxt_component_0$5 } from '../server.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, withCtx, renderSlot, openBlock, createBlock, createCommentVNode } from 'file:///workspace/Kubernetes-Bootcamp/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'file:///workspace/Kubernetes-Bootcamp/node_modules/vue/server-renderer/index.mjs';
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
  __name: "ProseH1",
  __ssrInlineRender: true,
  props: {
    id: {}
  },
  setup(__props) {
    const { prose } = useAppConfig();
    const hasIcon = computed(() => {
      var _a, _b;
      return ((_a = prose == null ? void 0 : prose.h1) == null ? void 0 : _a.icon) && ((_b = prose == null ? void 0 : prose.headings) == null ? void 0 : _b.icon);
    });
    const icon = computed(() => {
      var _a, _b;
      return ((_a = prose == null ? void 0 : prose.h1) == null ? void 0 : _a.icon) || ((_b = prose == null ? void 0 : prose.headings) == null ? void 0 : _b.icon);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$4;
      const _component_Icon = __nuxt_component_0$5;
      _push(`<h1${ssrRenderAttrs(mergeProps({ id: _ctx.id }, _attrs))} data-v-2001208a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        href: `#${_ctx.id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            if (hasIcon.value) {
              _push2(ssrRenderComponent(_component_Icon, { name: icon.value }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true),
              hasIcon.value ? (openBlock(), createBlock(_component_Icon, {
                key: 0,
                name: icon.value
              }, null, 8, ["name"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</h1>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/typography/components/global/ProseH1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProseH1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2001208a"]]);

export { ProseH1 as default };
//# sourceMappingURL=ProseH1-ZNTecktc.mjs.map
