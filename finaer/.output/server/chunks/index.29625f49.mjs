import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import Header from './header.8256a905.mjs';
import Footer from './footer.9e60505b.mjs';
import { useSSRContext } from 'vue';
import './_plugin-vue_export-helper.a1a6add7.mjs';

const _imports_0 = "" + globalThis.__buildAssetsURL("nutric.3bb73fdf.jpg");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="bg-[#ecf6ff] px-4 md:px-16 lg:px-24 pb-10 pt-28">`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(`<main class="mt-10 h-auto overflow-hidden"><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><h1 class="text-5xl text-center sm:text-start font-bold w-full lg:w-[90%]"><span class="text-[#6568E6]">Nutrici\xF3n</span></h1><h3 class="text-2xl text-center sm:text-start w-full lg:w-[90%]"><span class="text-[#000]">Consulta a nutricionista</span></h3><p class="mt-5 mb-5"> En Centro M\xE9dico Finaer, Nuestros expertos en nutrici\xF3n se comprometen a dise\xF1ar planes alimenticios adaptados a tus necesidades individuales, teniendo en cuenta tus preferencias, objetivos de salud, condiciones m\xE9dicas y estilo de vida. Ofrecemos una amplia gama de servicios de nutrici\xF3n, incluyendo: Evaluaci\xF3n nutricional integral: Analizamos tu ingesta diet\xE9tica, h\xE1bitos alimentarios, historial m\xE9dico y estilo de vida para identificar \xE1reas de mejora y establecer objetivos realistas. Planificaci\xF3n de dietas: Desarrollamos planes alimenticios equilibrados y personalizados que se ajusten a tus necesidades nutricionales y preferencias individuales. Educaci\xF3n nutricional: Proporcionamos informaci\xF3n y recursos educativos para ayudarte a tomar decisiones informadas sobre alimentaci\xF3n saludable, etiquetado de alimentos, control de porciones y m\xE1s. Asesoramiento nutricional: Ofrecemos orientaci\xF3n y apoyo continuo para ayudarte a superar desaf\xEDos, mantener la motivaci\xF3n y adoptar h\xE1bitos alimentarios saludables a largo plazo. Seguimiento y monitoreo: Realizamos seguimientos peri\xF3dicos para evaluar tu progreso, ajustar los planes seg\xFAn sea necesario y brindarte el apoyo necesario para alcanzar tus metas Contamos con 3 nutricionistas que abarcan distintos temas como: </p><ul class="text-start list-inside list-image-[url(../../assets/images/check_2.png)]"><li>Diabetes</li><li>Vegetarianismo</li><li>Hipertensi\xF3n </li><li>Obesidad y sobrepeso </li><li>Especialidad en patolog\xEDas digestivas y renales</li><li>Cambio de h\xE1bitos alimentarios </li><li>Estilo de vida saludable y deporte</li></ul></div><div><img id="nutri" class="w-full aspect-video rounded-lg"${ssrRenderAttr("src", _imports_0)}></div></div></main></div>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/nutricion/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.29625f49.mjs.map
