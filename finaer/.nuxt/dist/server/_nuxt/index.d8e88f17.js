import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import Header from "./header.8256a905.js";
import "./banner.4bf7223a.js";
import Footer from "./footer.9e60505b.js";
import "./content.ca84c443.js";
import { useSSRContext } from "vue";
import "./_plugin-vue_export-helper.a1a6add7.js";
const _imports_0 = "" + globalThis.__buildAssetsURL("hemodialisis.aa8dcb12.jpg");
const index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="bg-[#ecf6ff] px-4 md:px-16 lg:px-24 pb-10 pt-28">`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(`<main class="mt-10 h-auto overflow-hidden"><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><h1 class="text-5xl text-center sm:text-start font-bold w-full lg:w-[90%]"><span class="text-[#6568E6]">Hemodi\xE1lisis</span></h1><p class="mt-5 mb-5"> SE REALIZARON MAS DE 105.600 tratamientos de Hemodi\xE1lisis Cronica. Atendiendo a m\xE1s de 40.000 pacientes en consultorios externos de nefrolog\xEDa, urolog\xEDa, cardiolog\xEDa, nutrici\xF3n y Diabetolog\xEDa. </p><p class="mt-5 mb-5"><strong>Bioseguridad:</strong>Aplicamos protocolos realizados en investigaciones cient\xEDficas y trabajos docentes con el objetivo de contribuir a la prevenci\xF3n de riesgos o infecciones derivadas de la exposici\xF3n a agentes potencialmente infecciosos o de riesgo biol\xF3gico, qu\xEDmico y/o f\xEDsicos. Contamos con equipos de \xFAltima generaci\xF3n. Todos los equipos utilizados poseen tecnolog\xEDa digital y microprocesadores computarizados con pantalla t\xE1ctil, ultrafiltraci\xF3n controlada y los \xFAltimos avances tecnol\xF3gicos. A lo largo de estos a\xF1os hemos realizado mas de 105.600 tratamientos de hemodi\xE1lisis cronica, acompa\xF1ando a pacientes y familiares en este proceso. </p><p class="mt-5 mb-5"><strong>Psicolog\xEDa:</strong> Apoyo psicol\xF3gico con el fin de mejorar la calidad de vida del paciente, conforme atraviesa las distintas etapas del tratamiento. Di\xE1lisis peritoneal: En centro M\xE9dico Finaer contamos con la opci\xF3n de realizar di\xE1lisis peritoneal, con controles mensuales en consultorios externos y an\xE1lisis cl\xEDnicos. A lo largo de estos a\xF1os hemos acompa\xF1ado a m\xE1s de 100 pacientes en el tratamiento de di\xE1lisis peritoneal y a sus familiares. </p></div><div><img id="hemo" class="rounded-lg"${ssrRenderAttr("src", _imports_0)}></div></div></main></div>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hemodialisis/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index.d8e88f17.js.map
