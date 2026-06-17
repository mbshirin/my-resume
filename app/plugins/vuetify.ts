import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: "dark",
      themes: {
        dark: {
          dark: true,
          colors: {
            primary: "#a855f7",
            secondary: "#c084fc",
            background: "#000000",
            surface: "#141414",
            "surface-light": "#191919",
            "on-background": "#ffffff",
            "on-surface": "#ffffff",
          },
        },
      },
    },
    defaults: {
      VBtn: {
        rounded: "xl",
      },
      VCard: {
        rounded: "xl",
        elevation: 0,
      },
      VChip: {
        rounded: "lg",
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
