<script setup lang="ts">
  const emit = defineEmits<{
    redirigir: [value: string];
  }>();
  const redireccion = (value: string): void => {
    emit("redirigir", value);
  };
</script>
<template>
  <div class="flex justify-between">
    <a
      href="/"
      aria-label="Inicio"
      class="hover:-translate-y-1 hover:scale-110 hover:cursor-pointer transition ease-in-out delay-75 lg:flex items-center p-3 md:p-4 ml-10 hidden"
      @click.prevent="redireccion('/')"
    >
      <img
        class="lg:flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14"
        src="~assets/svgs/Logo.svg"
        alt="Logo"
      />
    </a>

    <section
      class="flex max-w-sm md:max-w-md lg:max-w-xl justify-evenly items-center rounded-xl lg:bg-inherit bg-white p-3 md:p-4 font-bold sm:text-xl md:text-2xl lg:text-4xl w-full mx-auto lg:mr-0"
    >
      <a
        href="/sobre-mi"
        aria-label="Sobre mí,"
        class="text-orange-700 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer transition ease-in-out delay-75"
        @click.prevent="redireccion('sobre-mi')"
      >
        Sobre mí
      </a>
      <a
        href="/portafolio"
        aria-label="Portafolio,"
        @click.prevent="redireccion('portafolio')"
        class="hover:-translate-y-1 hover:scale-110 hover:cursor-pointer transition ease-in-out delay-75"
      >
        Portafolio
      </a>
      <a
        href="/blogs"
        aria-label="Blogs."
        @click.prevent="redireccion('blogs')"
        class="text-blue-700 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer transition ease-in-out delay-75"
      >
        Blogs
      </a>
    </section>
  </div>
</template>
