<script setup>
import ScoreSection from './ScoreSection.vue';

</script>

<template>
  <header 
    class="flex justify-between items-center mx-auto mb-20 p-4 md:px-4 md:py-2 w-[90%] md:w-[70%] md:max-w-[1366px] border-[3px] border-[#606e85] rounded-lg"
  >
    <section>
      <img
        class="w-14 md:w-20"
        src="../assets/logo-bonus.svg" 
        alt="logo"
      >
    </section>
    <section>
      <ScoreSection/>
    </section>
  </header>
</template>