<script setup>

import ButtonResult from './ButtonResult.vue';

const {textButton, isWinner, layout} = defineProps([
  'textButton','isWinner', 'layout'
])


</script>

<template>
      <div class="relative">
        <ButtonResult :text="textButton" :isWinner="isWinner"/>
        <p  
          class="w-full absolute bottom-[-40%] md:top-[-40%] text-center font-bold my-4"
        >
          {{layout}}
        </p>
      </div>

</template>