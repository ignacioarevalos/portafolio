<script setup lang="ts">
  useSeoMeta({
    title: "Portafolio Web Ignacio Arévalo",
    ogTitle: "Portafolio Web Ignacio Arévalo",
    description: "Portafolio personal de Ignacio Arévalo, Full Stack Developer",
    ogDescription:
      "Portafolio personal de Ignacio Arévalo, Full Stack Developer",
  });
  useHead({
    title: "Full Stack Dev",
    htmlAttrs: {
      lang: "es",
    },
  });
</script>
<template>
  <section
    class="bg-white px-4 w-fit flex rounded-xl justify-center items-center py-3 md:p-5 lg:p-6 mx-auto lg:ml-0"
  >
    <div
      class="font-semibold h-fit text-xl sm:text-2xl md:text-3xl text-black lg:text-5xl lg:leading-"
    >
      <span aria-label="Hola!">Hola!</span>
      <div class="flex items-baseline">
        <span class="mr-2" aria-label="Mi nombre es">Mi nombre es</span>
        <h1 class="font-bold text-blue-700" aria-label="Ignacio Arévalo">
          Ignacio Arévalo
        </h1>
      </div>
      <div class="flex items-baseline">
        <span class="mr-2" aria-label="y soy">y soy</span>
        <h2
          class="font-bold text-orange-700"
          aria-label="Desarrollador Full-Stack"
        >
          Desarrollador Full-Stack
        </h2>
      </div>
    </div>
  </section>
</template>
