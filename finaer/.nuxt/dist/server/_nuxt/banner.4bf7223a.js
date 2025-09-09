import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import Header from "./header.8256a905.js";
const _imports_0 = "" + globalThis.__buildAssetsURL("finaer.0296ea39.jpg");
ref([
  { id: 3, name: "Casco de Seguridad con L\xE1mpara", category: "Equipos de Seguridad", stock: 20 },
  { id: 4, name: "Detector de Gases", category: "Herramientas de Medici\xF3n", stock: 15 }
]);
const _sfc_main = {
  __name: "banner",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#ecf6ff] px-4 md:px-16 lg:px-24 pb-10 pt-28" }, _attrs))}>`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(`<main class="mt-10 h-auto lg:h-[400px] overflow-hidden"><section class="flex flex-wrap text-[rgba(37,73,105,255)]"><div class="w-full flex flex-col gap-y-10 lg:flex-row items-center justify-between"><header class="w-full lg:w-[50%] flex flex-col gap-4 self-center lg:self-start mt-20"><h1 class="text-6xl text-center sm:text-start font-bold w-full lg:w-[90%]"><span class="text-[#8A88FF]"> Centro M\xE9dico Finaer </span></h1><p class="text-[#2C2F4C] text-base text-center sm:text-start">Es un centro m\xE9dico Fundado en 2016, ubicado en el barrio de Almagro y especializado en nefrolog\xEDa y di\xE1lisis, con 705 m2 distribuido en 3 plantas, equipado con los m\xE1s altos est\xE1ndares de calidad y servicio para el paciente. </p><a href="/contacto" class="text-[#8A88FF] bg-white hover:bg-[#8A88FF] hover:text-[#fff] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg shadow-md py-2 w-52 text-center sm:self-start self-center">Realiza tu consulta</a></header><div class="w-full md:w-[60%] lg:w-[35%] bg-white flex items-center justify-center rounded-full overflow-hidden"><img class="translate-x-10"${ssrRenderAttr("src", _imports_0)} alt=""></div></div></section></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layout/banner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const banner = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
export {
  _sfc_main as _,
  _imports_0 as a,
  banner as b
};
//# sourceMappingURL=banner.4bf7223a.js.map
