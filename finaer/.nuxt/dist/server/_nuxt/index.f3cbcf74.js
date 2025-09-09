import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./line.3913a7de.js";
import "./header.8256a905.js";
import { _ as _sfc_main$1 } from "./banner.4bf7223a.js";
import Footer from "./footer.9e60505b.js";
import "./content.ca84c443.js";
import { useSSRContext } from "vue";
import "./_plugin-vue_export-helper.a1a6add7.js";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<main class=""><section class="flex flex-col items-center justify-center py-20 gap-10 bg-[#ecf6ff]"><div class="max-w-[90%] lg:max-w-[70%] text-center flex flex-col items-center justify-center"><h1 class="text-3xl md:text-5xl text-[rgba(37,73,105,255)]"> Conoce m\xE1s sobre nosotros... </h1><div class="mt-8 max-w-[85%] lg:max-w-[60%]"><p> Desde m\xE9dicos especialistas hasta enfermeras, terapeutas y administradores, cada miembro de nuestro equipo desempe\xF1a un papel fundamental en la entrega de servicios de salud de alta calidad. </p></div><article class="mt-2"><div class="px-7 flex flex-wrap justify-center items-center text-center gap-8 gap-y-16 mt-12"><article class="p-3 flex flex-col items-center border-x-2 border-black border-opacity-20 w-64"><div><h3 class="text-4xl font-medium"> 324+ <span class="text-sm uppercase tracking-wider block font-normal mt-2"> Tratamientos de dialisis </span></h3></div></article><article class="p-3 flex flex-col items-center border-x-2 border-black border-opacity-20 w-64"><div><h3 class="text-4xl font-medium"> 8+ <span class="text-sm uppercase tracking-wider block font-normal mt-2"> A\xF1os de Experiencia </span></h3></div></article><article class="p-3 flex flex-col items-center border-x-2 border-black border-opacity-20 w-64"><div><h3 class="text-4xl font-medium"> 400+ <span class="text-sm uppercase tracking-wider block font-normal mt-2"> Consultas en tratamientos </span></h3></div></article></div></article><article class="mt-16"><a href="#" class="px-6 py-2 text-lg border bg-[#6568E6] text-white rounded-full"> Contactanos </a></article></div><article class="bg-white shadow-lg w-[90%] h-auto md:h-[250px] flex flex-col items-center justify-center p-4"><div class="w-44"><img${ssrRenderAttr("src", _imports_0)} alt="" class="w-full"></div><p class="text-center mt-5"> En Finaer, ofrecemos una amplia gama de servicios m\xE9dicos especializados, incluyendo consulta m\xE9dica general, atenci\xF3n pedi\xE1trica, ginecolog\xEDa, dermatolog\xEDa, odontolog\xEDa, psicolog\xEDa, y m\xE1s. Nuestro objetivo es proporcionar atenci\xF3n integral y personalizada para satisfacer las necesidades de salud de toda la familia.</p></article></section><section class="bg-img mb-20 flex flex-col gap-4 items-center justify-center text-white h-auto py-8 md:h-[380px]"></section></main>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/especialidades/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index.f3cbcf74.js.map
