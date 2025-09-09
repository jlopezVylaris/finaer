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
      _push(`<main class=""><section class="flex flex-col items-center justify-center py-20 gap-10 bg-[#ecf6ff]"><div class="max-w-[90%] lg:max-w-[70%] text-center flex flex-col items-center justify-center"><h1 class="text-3xl md:text-5xl text-[rgba(37,73,105,255)]"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, est. Lorem ipsum dolor sit amet. </h1><div class="mt-8 max-w-[85%] lg:max-w-[60%]"><p> Whether part of a voluntary certification process or within a regulatory framework, we combine your various certification needs for maximum efficiency, addressing the conformity and quality challenges you face. </p><p> Our teams of experts, exclusively dedicated to the medical devices industry in Europe, Asia and North America, and our proven methodology make GMED an international reference body. </p></div><article class="mt-2"><div class="px-7 flex flex-wrap justify-center items-center text-center gap-8 gap-y-16 mt-12"><article class="p-3 flex flex-col items-center border-x-2 border-black border-opacity-20 w-64"><div><h3 class="text-4xl font-medium"> 324+ <span class="text-sm uppercase tracking-wider block font-normal mt-2"> Personal Especializado </span></h3></div></article><article class="p-3 flex flex-col items-center border-x-2 border-black border-opacity-20 w-64"><div><h3 class="text-4xl font-medium"> 20+ <span class="text-sm uppercase tracking-wider block font-normal mt-2"> A\xF1os de Experiencia </span></h3></div></article><article class="p-3 flex flex-col items-center border-x-2 border-black border-opacity-20 w-64"><div><h3 class="text-4xl font-medium"> 32+ <span class="text-sm uppercase tracking-wider block font-normal mt-2"> Lorem, ipsum dolor. </span></h3></div></article></div></article><article class="mt-16"><a href="#" class="px-6 py-2 text-lg border bg-[#6568E6] text-white rounded-full"> Lorem, ipsum dolor. </a></article></div><article class="bg-white shadow-lg w-[90%] h-auto md:h-[250px] flex flex-col items-center justify-center p-4"><div class="w-44"><img${ssrRenderAttr("src", _imports_0)} alt="" class="w-full"></div><p class="text-center mt-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repudiandae odit ad? Similique in, nisi facere laborum facilis voluptas rerum magni consectetur quas quia distinctio porro repellendus a cupiditate natus nesciunt veniam atque recusandae aperiam cumque. Dolor maxime nisi perferendis. </p><p class="mt-4"> - Lorem, ipsum.. </p></article></section><section class="bg-img mb-20 flex flex-col gap-4 items-center justify-center text-white h-auto py-8 md:h-[380px]"><div class="w-[90%] md:w-[50%]"><header><p class="text-xl"> Lorem ipsum dolor sit amet. </p><h1 class="text-3xl"> Lorem ipsum dolor sit amet consectetur adipisicing. </h1></header><div class="mt-5 text-lg"><p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti doloremque molestias amet explicabo libero magnam tempore, minima sapiente aperiam aliquam repellat ut, esse dolore cupiditate sunt odit porro. Ullam, asperiores? </p></div><article class="mt-10"><a href="#" class="px-6 py-2 text-lg bg-[#6568E6] text-white rounded-full"> Lorem, ipsum dolor. </a></article></div></section></main>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/turnos/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index.7b724d73.js.map
