import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { a as _imports_0 } from './banner.4bf7223a.mjs';
import Header from './header.8256a905.mjs';
import Footer from './footer.9e60505b.mjs';
import { useSSRContext } from 'vue';
import './_plugin-vue_export-helper.a1a6add7.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="bg-[#ecf6ff] px-4 md:px-16 lg:px-24 pb-10 pt-28">`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(`<main class="mt-10 h-auto overflow-hidden"><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><h1 class="text-5xl text-center sm:text-start font-bold w-full lg:w-[90%]"><span class="text-[#6568E6]">Sobre nosotros</span></h1><p class="mt-5 mb-5 text-justify"> La enfermedad renal constituye un creciente problema de salud en todo el mundo y est\xE1 asociada a efectos adversos, a un mayor riesgo de mortalidad y de morbilidad cardiovascular. Asimismo, los ri\xF1ones tienen un papel importante en la diabetes, en la obesidad y la hipertensi\xF3n arterial. Por ello, nuestro centro m\xE9dico brinda una atenci\xF3n nefrol\xF3gica integral, en un mismo espacio especialmente dise\xF1ado, el paciente y sus familiares encuentran una respuesta a todas sus necesidades: estudios, consultas con nefr\xF3logos, cardi\xF3logos, ur\xF3logos, nutricionistas, psic\xF3logos y tratamientos personalizados. Contamos con tecnolog\xEDa de \xFAltima generaci\xF3n en diagn\xF3stico, tratamientos especiales y un equipo m\xE9dico conformado por profesionales altamente capacitados unido por un mismo ideal: brindar medicina de excelencia basada en la cordialidad en la relaci\xF3n m\xE9dico-paciente, la innovaci\xF3n tecnol\xF3gica, el progreso cient\xEDfico y la calidez en la atenci\xF3n que brinda todo el personal. </p></div><div><p><img id="finaer" class="w-full aspect-video rounded-lg"${ssrRenderAttr("src", _imports_0)}></p></div></div><article class="mt-2"><div class="px-7 flex flex-wrap justify-center items-center text-center gap-8 gap-y-16 mt-12"><article class="p-3 flex flex-col items-center border-x-2 border-black border-opacity-20 w-64"><div><h3 class="text-4xl font-medium"> 105.600+ <span class="text-sm uppercase tracking-wider block font-normal mt-2"> Tratamientos de dialisis realizados </span></h3></div></article><article class="p-3 flex flex-col items-center border-x-2 border-black border-opacity-20 w-64"><div><h3 class="text-4xl font-medium"> 8+ <span class="text-sm uppercase tracking-wider block font-normal mt-2"> A\xF1os de Experiencia </span></h3></div></article><article class="p-3 flex flex-col items-center border-x-2 border-black border-opacity-20 w-64"><div><h3 class="text-4xl font-medium"> 19.500+ <span class="text-sm uppercase tracking-wider block font-normal mt-2"> Consultas en tratamientos. </span></h3></div></article></div></article></main></div>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/nosotros/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.bc99c0b0.mjs.map
