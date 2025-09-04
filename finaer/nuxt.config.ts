// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    css: [
        '@fortawesome/fontawesome-free/css/all.css'
    ],
    app: {
        head: {
            title: 'FINAER',
            link: [
              { rel: 'icon', type: 'image/x-icon', href: 'https://i.ibb.co/BsM63Wb/ico.png' },
            ]
          },
    }
})
