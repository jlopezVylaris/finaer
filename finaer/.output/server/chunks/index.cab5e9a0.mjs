import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './_plugin-vue_export-helper.a1a6add7.mjs';

const _imports_0 = "" + globalThis.__buildAssetsURL("accordyunion1.cf97c2dc.jpg");
const _imports_1 = "" + globalThis.__buildAssetsURL("OSMITA1.8142a7d5.jpg");
const _imports_2 = "" + globalThis.__buildAssetsURL("premedic.dc6b9e65.png");
const _imports_3 = "" + globalThis.__buildAssetsURL("pueyrredon1.40c93a00.jpeg");
const _imports_4 = "" + globalThis.__buildAssetsURL("issys1.1f547b23.jpeg");
const _imports_5 = "" + globalThis.__buildAssetsURL("mgn1.21bd1c8a.jpeg");
const _imports_6 = "" + globalThis.__buildAssetsURL("elevar1.12759885.jpg");
const _imports_7 = "" + globalThis.__buildAssetsURL("visitar1.543f6033.jpeg");
const _imports_8 = "" + globalThis.__buildAssetsURL("ospetelco1.ac06cbe1.jpg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><section class="bg-white dark:bg-gray-900"><div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4"><h1 class="text-6xl text-[#8A88FF] text-center font-bold mb-5"> Trabajamos con las siguientes<br> obras sociales </h1><div class="grid grid-cols-1 gap-8 mt-12 text-gray-500 sm:gap-12 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 dark:text-gray-400"><div class="flex justify-center items-center"><img${ssrRenderAttr("src", _imports_0)} alt="ACCORD Y UNION Logo" class="h-15 hover:text-gray-900 dark:hover:text-white flex justify-center items-center"></div><div class="flex justify-center items-center"><img${ssrRenderAttr("src", _imports_1)} alt="OSMITA Logo" class="h-15 hover:text-gray-900 dark:hover:text-white flex justify-center items-center"></div><div class="flex justify-center items-center"><img${ssrRenderAttr("src", _imports_2)} alt="PREMEDIC Logo" class="h-15 hover:text-gray-900 dark:hover:text-white flex justify-center items-center"></div><div class="flex justify-center items-center"><img${ssrRenderAttr("src", _imports_3)} alt="PUEYRREDON Logo" class="h-15 hover:text-gray-900 dark:hover:text-white"></div><div class="flex justify-center items-center"><img${ssrRenderAttr("src", _imports_4)} alt="ISSYS Logo" class="h-15 hover:text-gray-900 dark:hover:text-white"></div></div><div class="grid grid-cols-1 gap-8 mt-12 text-gray-500 sm:gap-12 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 dark:text-gray-400"><div class="flex justify-center items-center"><img${ssrRenderAttr("src", _imports_5)} alt="MGN Logo" class="h-13 hover:text-gray-900 dark:hover:text-white"></div><div class="flex justify-center items-center"><img${ssrRenderAttr("src", _imports_6)} alt="ELEVAR Logo" class="h-13 hover:text-gray-900 dark:hover:text-white"></div><div class="class=" flex justify-center items-center><img${ssrRenderAttr("src", _imports_7)} alt="VISITAR Logo" class="h-13 hover:text-gray-900 dark:hover:text-white"></div><div class="flex justify-center items-center"><img${ssrRenderAttr("src", _imports_8)} alt="OSPETELCO Logo" class="h-13 hover:text-gray-900 dark:hover:text-white"></div></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/obras/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Obras = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Obras as default };
//# sourceMappingURL=index.cab5e9a0.mjs.map
