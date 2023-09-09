// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  // devtools: { enabled: true },
  modules: [
    // ...
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "nuxt-headlessui",
  ],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.ts",
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: "first",
    viewer: true,
  },
  headlessui: {
    prefix: "Headless",
  },
});
