import { unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./line.3913a7de.js";
import "./header.8256a905.js";
import { _ as _sfc_main$1 } from "./banner.4bf7223a.js";
import Footer from "./footer.9e60505b.js";
import "./content.ca84c443.js";
import Obras from "./index.cab5e9a0.js";
import "./_plugin-vue_export-helper.a1a6add7.js";
const index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<main class=""><section class="flex flex-col items-center justify-center py-20 gap-10 bg-[#ecf6ff]"><div class="max-w-[90%] lg:max-w-[70%] text-center flex flex-col items-center justify-center"><h1 class="text-6xl text-[#8A88FF] font-bold"> Conoce m\xE1s sobre nosotros... </h1><div class="mt-8 max-w-[85%] lg:max-w-[60%]"><p> Desde m\xE9dicos especialistas hasta enfermeras, terapeutas y administradores, cada miembro de nuestro equipo desempe\xF1a un papel fundamental en la entrega de servicios de salud de alta calidad. </p></div><article class="mt-2"><div class="px-7 flex flex-wrap justify-center items-center text-center gap-8 gap-y-16 mt-12"><article class="p-3 flex flex-col items-center border-x-2 border-black border-opacity-20 w-64"><div><h3 class="text-4xl font-medium"> 105.600+ <span class="text-sm uppercase tracking-wider block font-normal mt-2"> Tratamientos de dialisis realizados </span></h3></div></article><article class="p-3 flex flex-col items-center border-x-2 border-black border-opacity-20 w-64"><div><h3 class="text-4xl font-medium"> 8+ <span class="text-sm uppercase tracking-wider block font-normal mt-2"> A\xF1os de Experiencia </span></h3></div></article><article class="p-3 flex flex-col items-center border-x-2 border-black border-opacity-20 w-64"><div><h3 class="text-4xl font-medium"> 19.500+ <span class="text-sm uppercase tracking-wider block font-normal mt-2"> Consultas en tratamientos. </span></h3></div></article></div></article><article class="mt-16"><a href="/nosotros/" class="px-9 py-3 text-[#8A88FF] bg-white hover:bg-[#8A88FF] hover:text-[#fff] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg shadow-md py-2 w-52 text-center sm:self-start self-center">Conoce m\xE1s...</a></article></div><article class="bg-white shadow-lg w-[90%] h-auto md:h-[250px] flex flex-col items-center justify-center p-4"><div class="w-44"><img${ssrRenderAttr("src", _imports_0)} alt="" class="w-full"></div><p class="text-center mt-5"> En Finaer, ofrecemos una amplia gama de servicios m\xE9dicos especializados, incluyendo consulta m\xE9dica general, atenci\xF3n urologica, nefrolog\xEDca, cardiolog\xEDca, diabetologica,nutricionista y diagnostico de imagenes. Asi tambien como la hemodialisis. Nuestro objetivo es proporcionar atenci\xF3n integral y personalizada para satisfacer las necesidades de salud de toda la familia. </p></article></section><section class="bg-img mb-20 flex flex-col gap-4 items-center justify-center text-white h-auto py-8 md:h-[380px]"><div class="w-[90%] md:w-[50%]"><header></header></div></section></main>`);
      _push(ssrRenderComponent(unref(Obras), null, null, _parent));
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index.f4a4feb9.js.map
