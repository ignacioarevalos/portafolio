<script setup lang="ts">
  import Navbar from "~/components/Layout/Navbar.vue";
  import Footer from "~/components/Layout/Footer.vue";
  import { TransitionRoot, TransitionChild } from "@headlessui/vue";
  import { ref } from "@vue/runtime-core";

  const show = ref<boolean>(true);
  const redireccion = (e: string) => {
    setTimeout(() => {
      document.location.href = e;
    }, 1000);
    show.value = false;
  };
</script>

<template>
  <TransitionRoot appear :show="show" class="overflow-hidden">
    <TransitionChild
      enter="transition-opacity ease-in-out  duration-[1300ms]"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave="transition-opacity ease-out  duration-[1300ms]"
      leave-from="opacity-100"
      leave-to="opacity-0"
    >
      <div class="bg-yellow-100 flex h-screen w-screen relative">
        <!-- Diseño -->
        <div
          class="self-center w-screen absolute -skew-y-[20deg] sm:-skew-y-[22deg] md:-skew-y-[24deg] lg:-skew-y-[22deg] xl:-skew-y-[20deg] z-0"
        >
          <TransitionChild
            enter="transition linear duration-[1800ms]"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-[1300ms]"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <div class="h-12 bg-orange-700" />
          </TransitionChild>
          <TransitionChild
            enter="transition linear duration-[1800ms] delay-150"
            enter-from="-translate-x-full"
            enter-to="translate-x-0 "
            leave="transition ease-in-out duration-[1300ms]"
            leave-from="translate-x-0 "
            leave-to="-translate-x-full"
          >
            <div class="h-12 bg-zinc-950" />
          </TransitionChild>
          <TransitionChild
            enter="transition linear duration-[1800ms] delay-300"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-[1300ms]"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <div class="h-12 bg-blue-800" />
          </TransitionChild>
        </div>

        <div
          class="h-full max-w-7xl w-full py-9 lg:py-4 px-3 grid content-between z-10 mx-auto"
        >
          <TransitionChild
            enter="transition-translate ease-out duration-[1700ms] delay-700"
            enter-from="-translate-x-[200%]"
            enter-to="translate-x-[0%]"
            leave="transition ease-in-out duration-700"
            leave-from="translate-x-[0%]"
            leave-to="-translate-x-[200%]"
          >
            <Navbar @redirigir="redireccion" />
          </TransitionChild>
          <TransitionChild
            enter="transition ease-in-out duration-1000 delay-1000"
            enter-from="translate-y-full opacity-0"
            enter-to="translate-y-0 opacity-100"
            leave="transition ease-in-out duration-700"
            leave-from="translate-y-0 opacity-100"
            leave-to="translate-y-full opacity-0"
          >
            <slot />
          </TransitionChild>
          <TransitionChild
            enter="transition ease-in-out duration-[1700ms] delay-700"
            enter-from="translate-x-[200%]"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-700"
            leave-from="translate-x-0"
            leave-to="translate-x-[200%]"
          >
            <Footer />
          </TransitionChild>
        </div>
      </div>
    </TransitionChild>
  </TransitionRoot>
</template>
