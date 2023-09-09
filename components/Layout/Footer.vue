<script setup lang="ts"></script>

<template>
  <footer
    class="flex justify-center lg:justify-end flex-col gap-y-0 sm:gap-y-6 w-full max-w-sm md:max-w-md lg:max-w-xl mx-auto lg:mr-0"
  >
    <div class="flex justify-evenly items-center h-16">
      <a
        href="/"
        aria-label="Inicio"
        class="hover:-translate-y-1 hover:scale-110 hover:cursor-pointer transition ease-in-out delay-75"
      >
        <img
          class="lg:hidden h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14"
          src="~assets/svgs/IA.svg"
          alt="Logo"
        />
      </a>
      <a
        href="mailto:ignacio.arevalo.santiago@gmail.com"
        target="_blank"
        aria-label="Email me"
        class="hover:-translate-y-1 hover:scale-110 hover:cursor-pointer transition ease-in-out delay-75"
      >
        <img
          class="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14"
          src="~assets/svgs/Mail.svg"
          alt="Contactame vía email"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/ignacio-ar%C3%A9valo-santiago/"
        target="_blank"
        aria-label="LinkedIn profile"
        class="hover:-translate-y-1 hover:scale-110 hover:cursor-pointer transition ease-in-out delay-75"
      >
        <img
          class="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14"
          src="~assets/svgs/LinkedIn.svg"
          alt="Visita mi perfil de LinkedIn"
        />
      </a>
      <a
        href="https://github.com/ignacioarevalos"
        target="_blank"
        aria-label="Github profile"
        class="hover:-translate-y-1 hover:scale-110 hover:cursor-pointer transition ease-in-out delay-75"
      >
        <img
          class="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14"
          src="~assets/svgs/GitHub.svg"
          alt="Visita mi perfil de LinkedIn"
        />
      </a>
    </div>
    <p
      class="text-xs lg:text-sm text-center font-medium flex-col flex lg:pl-20 lg:flex-row mx-auto"
    >
      <span>© 2023 Ignacio Arévalo. </span>
      <span> All rights reserved. </span>
    </p>
  </footer>
</template>
