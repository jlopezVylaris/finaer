import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import Header from './header.8256a905.mjs';
import Footer from './footer.9e60505b.mjs';
import { useSSRContext } from 'vue';
import './_plugin-vue_export-helper.a1a6add7.mjs';

const _imports_0 = "" + globalThis.__buildAssetsURL("diagnostico.a082a5ba.jpg");
const _imports_1 = "" + globalThis.__buildAssetsURL("diagnosticoima.466d87e0.jpg");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="bg-[#ecf6ff] px-4 md:px-16 lg:px-24 pb-10 pt-28">`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(`<main class="mt-10 h-auto overflow-hidden"><h1 class="text-5xl mb-5 text-center font-bold w-full lg:w-[100%]"><span class="text-[#6568E6]">Diagnostico por im\xE1genes </span></h1><p class="text-center pl-5 pr-5 mb-8"> Contamos con un centro m\xE9dico de f\xE1cil acceso, con modernas y c\xF3modas instalaciones, y equipamiento de \xFAltima generaci\xF3n, lo que permite la realizaci\xF3n de los siguientes ex\xE1menes, en un s\xF3lo lugar: </p><div class="grid grid-cols-1 sm:grid-cols-2 gap-4 m-8"><div><ul class="text-start list-inside list-image-[url(../../assets/images/check_2.png)]"><li>Ecograf\xEDa aorta abdominal</li><li>Ecograf\xEDa completa de abdomen</li><li>Ecograf\xEDa de vejiga o pr\xF3stata</li><li>Ecograf\xEDa mamaria uni o bilateral</li><li>Ecograf\xEDa tiroidea</li><li>Ecograf\xEDa renal bilateral</li><li>Ecograf\xEDa de par\xF3tida</li><li>Ecograf\xEDa toco ginecol\xF3gica</li><li>Ecograf\xEDa de partes blandas</li><li>Ecograf\xEDa de pene</li><li>Ecograf\xEDa transvaginal</li><li>Ecograf\xEDa transrectal</li></ul></div><div><img class="w-full aspect-video rounded-lg"${ssrRenderAttr("src", _imports_0)}></div></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-4 m-8"><div><img class="w-full aspect-video rounded-lg"${ssrRenderAttr("src", _imports_1)}></div><div><ul class="text-start list-inside list-image-[url(../../assets/images/check_2.png)]"><li>Eco Doppler ginecol\xF3gico</li><li>Eco Doppler peneano</li><li>Eco Doppler testicular</li><li>Eco Doppler renal</li><li>Eco Doppler de tiroides</li><li>Eco Doppler aorta y sus ramas</li><li>Eco Doppler para control de fistulas arteriovenosa</li><li> Eco Doppler de miembros superiores e inferiores arterial y venenoso </li><li>Eco Doppler vasos de cuello</li></ul></div></div></main></div>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/diagnostico/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.91cd68d5.mjs.map
