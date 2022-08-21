<script setup>
import {useGameStore} from '../store/gameStore'

import ButtonResult from './ButtonResult.vue';

  const gameStore = useGameStore()

</script>

<template>
  <div>
    <div
      class="flex justify-between mx-auto px-6 md:w-[70%] items-center w-full "
    >
      <div class="relative">
        <ButtonResult :text="gameStore.playerSelection" :isWinner="gameStore.gameResult === 'win'"/>
        <p  
          class="w-full absolute bottom-[-40%] md:top-[-40%] text-center font-bold my-4"
        >
          YOU PICKED
        </p>
      </div>
      <div class="relative">
        <ButtonResult :text="gameStore.houseSelection" :isWinner="gameStore.gameResult === 'defeat'"/>
        <p  
          class="w-full absolute bottom-[-40%] md:top-[-40%] text-center font-bold my-4"
        >
          THE HOUSE PICKED
        </p>
      </div>
    
    </div>
  </div>
</template>