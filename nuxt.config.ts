// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    baseURL: "/css",
  },
  ssr: false,
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  typescript: {
    typeCheck: true,
  },

  css: ["@/assets/scss/main.scss"],

  modules: ["@pinia/nuxt", "@nuxt/icon"],
});
