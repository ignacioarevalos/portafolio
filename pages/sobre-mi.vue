<script setup lang="ts">
  useSeoMeta({
    title: "Portafolio Web Ignacio Arévalo",
    ogTitle: "Portafolio Web Ignacio Arévalo",
    description:
      "Hola! Soy Ignacio Arévalo, desarrollador Full Stack con 3 años de experiencia.",
    ogDescription:
      "Hola! Soy Ignacio Arévalo, desarrollador Full Stack con 3 años de experiencia.",
    ogImage: "https://example.com/image.png",
  });
  useHead({
    title: "Sobre mí",
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
      class="flex flex-col font-semibold h-fit text-xl sm:text-2xl md:text-3xl text-black lg:text-5xl"
    >
      <span>Hola! </span>
      <span>Esta página pronto estará lista</span>
    </div>
  </section>
</template>
