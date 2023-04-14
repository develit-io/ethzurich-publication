// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/devtools',
        '@unocss/nuxt',
        '@vueuse/nuxt',
    ],
    css: [
        '@unocss/reset/tailwind.css',
    ],
})
