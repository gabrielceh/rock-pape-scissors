<script setup>
import {useGameStore} from '../store/gameStore'

import LayoutButtonsResult from './LayoutButtonsResult.vue';
import MessageResult from './MessageResult.vue';

  const gameStore = useGameStore()

</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-3 justify-between items-center mx-auto px-6 md:w-[70%] w-full ">
    <LayoutButtonsResult
      v-if="gameStore.playerSelection"
      :textButton="gameStore.playerSelection"
      layout="YOU PICKED"
      class="order-1"
      :class="gameStore.gameResult === 'win' && 'winner'"
    />


    <LayoutButtonsResult
      v-if="gameStore.houseSelection"
      :textButton="gameStore.houseSelection"
      layout="THE HOUSE PICKED"
      class="order-2 md:order-3"
      :class="gameStore.gameResult === 'defeat' && 'winner'"
    />
    <span 
      v-if="!gameStore.houseSelection"
      class="mx-auto order-2 md:order-3 w-[5.9rem] h-[5.9rem] md:w-[10rem] md:h-[10rem] rounded-full bg-[#1117353c]"
    ></span>
    
    <MessageResult class="col-span-2 md:col-span-1 order-3 md:order-2"/>

  </div>
</template>

<style>
  
  
  .winner{
    animation-name: moves;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  @keyframes moves{
    0%{
      transform: translateY(0%);
    }
    25%{
      transform: translateY(-10%);

    }
    50%{
      transform: translateY(0%);

    }
    75%{
      transform: translateY(-10%);

    }
    100%{
      transform: translateY(0%);

    }
  }
</style>