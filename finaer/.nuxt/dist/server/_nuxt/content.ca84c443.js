import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.a1a6add7.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "grid place-content-center py-16" }, _attrs))}><div class="flex flex-col gap-3 justify-center items-center text-center"><h1 class="text-xl md:text-2xl lg:text-4xl font-light"> NADA POR AC\xC1 </h1><p> Parece que no encontramos lo que buscabas. Quiz\xE1s una nueva b\xFAsqueda te sirva. </p><form id="" class="mt-4 w-[80%] lg:w-96" method="get" action=""><input type="text" class="w-full border-2 border-black px-4 rounded-md py-2" name="" placeholder="Buscar" value=""></form></div><div class="flex flex-col gap-3 justify-center items-center text-center mt-32"><h1 class="text-xl md:text-2xl lg:text-4xl font-light"> OBRAS SOCIALES Y PREPAGAS </h1><div class="flex items-center flex-wrap justify-center w-full"><div class="swiper-slide" style="${ssrRenderStyle({ "width": "143.6px", "margin-right": "24px" })}"><img src="https://centromedicofinaer.com.ar/wp-content/uploads/2019/12/logo-oma.jpg" alt=""></div><div class="swiper-slide" style="${ssrRenderStyle({ "width": "143.6px", "margin-right": "24px" })}"><img src="https://centromedicofinaer.com.ar/wp-content/uploads/2019/12/logo-osmita.png" alt=""></div><div class="swiper-slide" style="${ssrRenderStyle({ "width": "143.6px", "margin-right": "24px" })}"><img src="https://centromedicofinaer.com.ar/wp-content/uploads/2019/12/logo-poder-judicial.png" alt=""></div><div class="swiper-slide" style="${ssrRenderStyle({ "width": "143.6px", "margin-right": "24px" })}"><img src="https://centromedicofinaer.com.ar/wp-content/uploads/2019/12/logo-premedic.png" alt=""></div><div class="swiper-slide" style="${ssrRenderStyle({ "width": "143.6px", "margin-right": "24px" })}"><img src="https://centromedicofinaer.com.ar/wp-content/uploads/2019/12/logo-small-dark.png" alt=""></div><div class="swiper-slide" style="${ssrRenderStyle({ "width": "143.6px", "margin-right": "24px" })}"><img src="https://centromedicofinaer.com.ar/wp-content/uploads/2019/12/logo-unionpersonal.png" alt=""></div><div class="swiper-slide" style="${ssrRenderStyle({ "width": "143.6px", "margin-right": "24px" })}"><img src="https://centromedicofinaer.com.ar/wp-content/uploads/2019/12/logo-visitar-opticadelsur.jpg" alt=""></div></div></div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layout/content.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const content = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  content as default
};
//# sourceMappingURL=content.ca84c443.js.map
