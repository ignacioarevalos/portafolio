<script setup lang="ts">
  import type { NuxtError } from "#app";

  const props = defineProps({
    error: Object as () => NuxtError,
  });
</script>

<template>
  <div>
    <section class="font-bold p-10 flex flex-col text-center gap-y-10">
      <h1 class="text-4xl mt-4" v-if="error">Error {{ error.statusCode }}</h1>
      <p class="text-2xl">
        ¡Oops! Parece que has llegado a la Tierra de los Enlaces Perdidos. Estoy
        en una intensa búsqueda del camino correcto. Mientras tanto, si
        encuentras alguna pista divertida, ¡Compártela! Estoy abierto a
        sugerencias, mapas del tesoro o incluso chistes malos. ¡Gracias por tu
        paciencia y buen sentido del humor! 🌍🗺️😄
      </p>

      <a class="text-lg" href="/">Volver al inicio</a>
    </section>
    <img
      class="lg:flex h-96 w-96 absolute -bottom-12 inset-x-0 mx-auto"
      src="~assets/imagenes/404.png"
      alt="Logo"
    />
  </div>
</template>
