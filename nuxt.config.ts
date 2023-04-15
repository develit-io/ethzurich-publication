// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/devtools',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    'nuxt-headlessui',
    '@pinia/nuxt',
  ],
  css: [
    '@unocss/reset/tailwind.css',
  ],
  headlessui: {
    prefix: 'Headless',
  },
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
})
