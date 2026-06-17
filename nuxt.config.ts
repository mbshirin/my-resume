export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  app: {
    head: {
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    },
  },

  css: [
    "~/assets/styles/main.css",
    "vuetify/styles",
    "@mdi/font/css/materialdesignicons.css",
  ],

  build: {
    transpile: ["vuetify"],
  },

  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },

  modules: ["@nuxtjs/tailwindcss"],
});