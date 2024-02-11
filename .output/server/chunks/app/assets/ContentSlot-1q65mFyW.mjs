import { _ as __nuxt_component_0 } from './MDCSlot-TohJ07IH.mjs';
import { defineComponent, h, useSSRContext } from 'vue';

const _sfc_main = defineComponent({
  props: {
    /**
     * A slot name or function
     */
    use: {
      type: Function,
      default: void 0
    },
    /**
     * Tags to unwrap separated by spaces
     * Example: 'ul li'
     */
    unwrap: {
      type: [Boolean, String],
      default: false
    }
  },
  render(props) {
    return h(__nuxt_component_0, props);
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ContentSlot-1q65mFyW.mjs.map
