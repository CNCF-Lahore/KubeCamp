import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "table-wrapper" }, _attrs))} data-v-78f198db><table data-v-78f198db>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/typography/components/global/ProseTable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-78f198db"]]);
export {
  __nuxt_component_0 as default
};
//# sourceMappingURL=ProseTable-HvE-EnRO.js.map