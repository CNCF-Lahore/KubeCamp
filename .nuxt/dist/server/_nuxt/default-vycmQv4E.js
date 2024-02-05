import __nuxt_component_0 from "./DocsPageLayout-5V5BjRpw.js";
import { withCtx, renderSlot, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "./DocsAside-_ddsIzkf.js";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "defu";
import "klona";
import "devalue";
import "ohash";
import "destr";
import "cookie-es";
import "nanoid";
import "scule";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "@vueuse/integrations/useFuse";
import "@vueuse/integrations/useFocusTrap";
import "./Alert-Pkf5L94Z.js";
import "./MDCSlot-TohJ07IH.js";
import "./ssrSlot-FBEH5dLd.js";
import "./ProseCodeInline-_9TsM2A3.js";
import "./DocsPageBottom-sAFi8riu.js";
import "./EditOnLink-Q8_rFxbT.js";
import "./ProseA-8NL1jmi6.js";
import "./DocsPrevNext-vqOObO5K.js";
import "./DocsToc-wLMr91uf.js";
import "./DocsTocLinks-DY9ztBL7.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_DocsPageLayout = __nuxt_component_0;
  _push(ssrRenderComponent(_component_DocsPageLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default-vycmQv4E.js.map
