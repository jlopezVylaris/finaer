import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "C:/Users/JOAQUIN/OneDrive/Desktop/programing/Trabajo/finaer/finaer/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}