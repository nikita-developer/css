// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  typescript: {
    typeCheck: true,
  },

  buildDir: 'css',

  app: {
    baseURL: "/css",
  },

  modules: ["@pinia/nuxt", "@nuxt/icon"],
});