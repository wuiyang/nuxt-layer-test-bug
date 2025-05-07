export default defineNuxtConfig({
  modules: ['@nuxt/test-utils/module'],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',

  future: {
    compatibilityVersion: 4,
  },
});
