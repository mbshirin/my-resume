export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: { enabled: true },

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
});
