<script setup lang="ts">
  import Navbar from "~/components/Layout/Navbar.vue";
  import Footer from "~/components/Layout/Footer.vue";
  import { TransitionRoot, TransitionChild } from "@headlessui/vue";
</script>
<template>
  <TransitionRoot appear :show="true" class="overflow-hidden">
    <TransitionChild
      enter="transition-opacity ease-out duration-1000"
      enter-from="opacity-0"
      enter-to="opacity-100"
    >
      <div class="bg-yellow-100 flex h-screen w-screen relative">
        <!-- Diseño -->
        <div
          class="self-center w-screen absolute -skew-y-[20deg] sm:-skew-y-[22deg] md:-skew-y-[24deg] lg:-skew-y-[22deg] xl:-skew-y-[20deg] z-0"
        >
          <TransitionChild
            enter="transition ease-linear duration-500"
            enter-from="-translate-x-full  "
            enter-to="translate-x-0  "
          >
            <div class="h-12 bg-orange-700" />
          </TransitionChild>
          <TransitionChild
            enter="transition ease-linear duration-500 delay-150"
            enter-from="-translate-x-full translate-y-full"
            enter-to="translate-x-0 translate-y-0 "
          >
            <div class="h-12 bg-blue-800" />
          </TransitionChild>
          <TransitionChild
            enter="transition ease-linear duration-500 delay-300"
            enter-from="-translate-x-full  translate-y-full "
            enter-to="translate-x-0  translate-y-0 "
          >
            <div class="h-12 bg-zinc-950" />
          </TransitionChild>
        </div>

        <div
          class="h-full max-w-7xl w-full pt-6 pb-2 lg:pb-4 px-3 grid content-between z-10"
        >
          <TransitionChild
            enter="transition ease-in-out duration-700 delay-700"
            enter-from="-translate-x-full "
            enter-to="translate-x-0 "
          >
            <Navbar />
          </TransitionChild>
          <TransitionChild
            enter="transition ease-in-out duration-700 delay-1000"
            enter-from="translate-y-full opacity-0"
            enter-to="translate-y-0 opacity-100"
          >
            <slot />
          </TransitionChild>
          <TransitionChild
            enter="transition ease-in-out duration-700 delay-700"
            enter-from="translate-x-full"
            enter-to="translate-x-0 "
          >
            <Footer />
          </TransitionChild>
        </div>
      </div>
    </TransitionChild>
  </TransitionRoot>
</template>
