import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import Header from "./header.8256a905.js";
import "./banner.4bf7223a.js";
import Footer from "./footer.9e60505b.js";
import "./content.ca84c443.js";
import { useSSRContext } from "vue";
import "./_plugin-vue_export-helper.a1a6add7.js";
const _imports_0 = "" + globalThis.__buildAssetsURL("nefrologia.d13b2d55.jpg");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="bg-[#ecf6ff] px-4 md:px-16 lg:px-24 pb-10 pt-28">`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(`<main class="mt-10 mb-10 h-auto overflow-hidden"><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><h1 class="text-5xl text-center sm:text-start font-bold w-full lg:w-[90%]"><span class="text-[#6568E6]">Nefrolog\xEDa</span></h1><p class="mt-5 mb-5"> Nefrolog\xEDa para adultos: diagn\xF3stico, tratamiento y supervisi\xF3n del manejo de trastornos renales y de las v\xEDas urinarias. El consultorio externo de Nefrolog\xEDa Cl\xEDnica de Centro m\xE9dico FINAER se dedica en especial a la atenci\xF3n del da\xF1o renal causado por la hipertensi\xF3n arterial, la diabetes mellitus y las enfermedades cardiovasculares, as\xED como por otras causas (poliquistosis renal, glomerulonefritis, hipotrofias renales cong\xE9nitas). Atendiendo a lo largo de estos a\xF1os a mas de 19.500 pacientes en consultorios externos. </p><ul class="text-start list-inside list-image-[url(../../assets/images/check_2.png)]"><li>SERVICIOS</li><li>TRATAMIENTOS</li><li>CUIDADOS</li><li>ACOMPA\xD1AMIENTO</li></ul></div><div><img class="w-full aspect-video rounded-lg"${ssrRenderAttr("src", _imports_0)}></div></div></main></div>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/nefrologia/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index.1d4ec0c2.js.map
