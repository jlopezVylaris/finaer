import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import Header from './header.8256a905.mjs';
import Footer from './footer.9e60505b.mjs';
import { useSSRContext } from 'vue';
import './_plugin-vue_export-helper.a1a6add7.mjs';

const _imports_0 = "" + globalThis.__buildAssetsURL("diabetologia.0b04e6b7.jpg");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="bg-[#ecf6ff] px-4 md:px-16 lg:px-24 pb-10 pt-28">`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(`<main class="mt-10 h-auto overflow-hidden"><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><h1 class="text-5xl text-center sm:text-start font-bold w-full lg:w-[90%]"><span class="text-[#6568E6]">Diabetolog\xEDa</span></h1><h3 class="text-2xl sm:text-start w-full lg:w-[90%]"><span class="text-[#000]">Consulta diabetologica</span></h3><p class="mt-5 mb-5"> En Centro m\xE9dico Finaer Focalizamos la atenci\xF3n en un \xE1mbito de contenci\xF3n, donde el paciente encuentre no s\xF3lo el adecuado control que necesita, sino la informaci\xF3n y la educaci\xF3n que son indispensables para tener una buena calidad de vida. </p><p class="mt-5 mb-5"> La Federaci\xF3n internacional de diabetes establece que esta patolog\xEDa es una de las mayores emergencias sanitarias mundiales del siglo XXI. Existen actualmente 537 millones de personas, en el mundo, con diagnostico de diabetes. En argentina, la cuarta encuesta nacional de factores de riesgo estableci\xF3 una prevalencia en adultos de un 12.7%. </p></div><div><img class="w-full aspect-video rounded-lg"${ssrRenderAttr("src", _imports_0)}></div></div></main></div>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/diabetologia/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.a6a6dad9.mjs.map
