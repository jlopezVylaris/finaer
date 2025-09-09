import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import Header from './header.8256a905.mjs';
import Footer from './footer.9e60505b.mjs';
import { useSSRContext } from 'vue';
import './_plugin-vue_export-helper.a1a6add7.mjs';

const _imports_0 = "" + globalThis.__buildAssetsURL("urologia.706e96a0.jpg");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="bg-[#ecf6ff] px-4 md:px-16 lg:px-24 pb-10 pt-28">`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(`<main class="mt-10 h-auto overflow-hidden"><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><h1 class="text-5xl text-center sm:text-start font-bold w-full lg:w-[90%]"><span class="text-[#6568E6]">Urolog\xEDa </span></h1><h3 class="text-2xl text-center sm:text-start w-full lg:w-[90%]"><span class="text-[#000]">Consulta urol\xF3gica para adultos</span></h3><p class="mt-5 mb-5"> En Centro M\xE9dico Finaer se brinda atenci\xF3n m\xE9dica especializada en enfermedades y trastornos relacionados con los \xF3rganos reproductivos masculinos y las v\xEDas urinarias. Tenemos por objetivo que los pacientes reciban una evaluaci\xF3n exhaustiva y un tratamiento personalizado basado en sus necesidades individuales. Contamos con tecnolog\xEDa avanzada, y equipos de im\xE1genes, para ayudar a nuestros m\xE9dicos a hacer un diagn\xF3stico preciso y brindar un tratamiento efectivo. Adem\xE1s, contamos con un equipo de alto expertise y excelencia m\xE9dica para realizar procedimientos quir\xFArgicos y tratar afecciones graves con \xE9xito, ayudando a restaurar la funci\xF3n y la calidad de vida a largo plazo. </p></div><div><img class="w-full aspect-video rounded-lg"${ssrRenderAttr("src", _imports_0)}></div></div></main></div>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/uriologia/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.df639a38.mjs.map
