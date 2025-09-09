import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import Header from "./header.8256a905.js";
import "./banner.4bf7223a.js";
import Footer from "./footer.9e60505b.js";
import "./content.ca84c443.js";
import { useSSRContext } from "vue";
import "./_plugin-vue_export-helper.a1a6add7.js";
const _imports_0 = "" + globalThis.__buildAssetsURL("cardiolog\xEDa.8b012dee.png");
const index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="bg-[#ecf6ff] px-4 md:px-16 lg:px-24 pb-10 pt-28">`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(`<main class="mt-10 h-auto overflow-hidden"><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><h1 class="text-5xl text-center sm:text-start font-bold w-full lg:w-[90%]"><span class="text-[#8A88FF]">Cardiolog\xEDa </span></h1><p class="mt-5 mb-5"> Nuestro objetivo es evitar la aparici\xF3n de enfermedades cardiovasculares. Mediante la evaluaci\xF3n de cada paciente en forma c\xE1lida y personalizada realizamos el adecuado control de los factores de riesgo y en aquellos que ya han sufrido eventos cardiovasculares indicamos medidas para impedir su progresi\xF3n. Podes sacar turno con nosotros a trav\xE9s de nuestra pagina web o a trav\xE9s de nuestros tel\xE9fonos de contacto. </p><ul class="text-start list-inside list-image-[url(../../assets/images/check_2.png)]"><li>CONSULTA DE CARDIOLOG\xCDA</li><li>ECODOPPLER CARDIACO</li></ul></div><div><img id="cardio" class="rounded-lg"${ssrRenderAttr("src", _imports_0)}></div></div></main></div>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cardiologia/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index.41dbd5ed.js.map
