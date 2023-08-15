<script setup lang="ts">
  import Github from "~/components/svgs/Github.vue";
  import LinkedIn from "~/components/svgs/LinkedIn.vue";
  import Mail from "~/components/svgs/Mail.vue";
</script>

<template>
  <footer
    class="flex justify-center lg:justify-end flex-col gap-y-3 md:gap-y-6 w-full max-w-sm md:max-w-md lg:max-w-xl mx-auto lg:mr-0"
  >
    <div class="flex justify-evenly h-20">
      <Mail />
      <LinkedIn />
      <Github />
    </div>
    <p
      class="text-xs lg:text-sm text-center font-medium flex-col flex lg:flex-row mx-auto"
    >
      <span>© 2023 Ignacio Arévalo. </span>
      <span> All rights reserved. </span>
    </p>
  </footer>
</template>
