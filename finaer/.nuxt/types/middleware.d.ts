import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/JOAQUIN/OneDrive/Desktop/programing/Trabajo/finaer/finaer/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}