<script setup>
import { computed } from '@vue/reactivity';
import {useGameStore} from '../store/gameStore'


  const gameStore = useGameStore()

  const {text} = defineProps([
    'text'
  ])

  const borderColor = computed(() => {
    if(text === 'scissors') return 'translate-y-[-10px] border-amber-400 shadow-[0px_4px_0px_0px_rgb(245,158,11)]'
    if(text === 'paper') return 'translate-x-2.5 translate-y-[-10px] border-blue-500 shadow-[0px_4px_0px_0px_rgb(36,98,235)]'
    if(text === 'rock') return 'translate-y-2.5 translate-x-[-10px] border-red-500 shadow-[0px_4px_0px_0px_rgb(221,39,38)]'
    if(text === 'lizard') return 'translate-y-2.5 translate-x-2.5 border-purple-600 shadow-[0px_4px_0px_0px_rgb(126,35,207)]'
    if(text === 'spock') return 'translate-x-[-10px] translate-y-[-10px] border-cyan-400 shadow-[0px_4px_0px_0px_rgb(6,182,212)]'
  })

</script>

<template>
  <div
    class="justify-self-center flex justify-center items-center w-24 h-24 rounded-full border-[13px]"
    :class="borderColor"
      @click="gameStore.startGame(text)"
  >
    <button 
      class="text-center w-[4.5rem] h-[4.5rem] rounded-full up bg-gray-50"
      
    >
      <img 
        v-if="text==='scissors'" 
        src="../assets/icon-scissors.svg" 
        alt="lizard image" 
        class="w-8 mx-auto"
      >
      <img 
        v-if="text==='paper'" 
        src="../assets/icon-paper.svg" 
        alt="paper image" 
        class="w-8 mx-auto"
      >
      <img 
        v-if="text==='rock'" 
        src="../assets/icon-rock.svg" 
        alt="rock image" 
        class="w-8 mx-auto"
      >
      <img 
        v-if="text==='lizard'" 
        src="../assets/icon-lizard.svg" 
        alt="lizard image" 
        class="w-10 mx-auto"
      >
      <img 
        v-if="text==='spock'" 
        src="../assets/icon-spock.svg" 
        alt="spock image" 
        class="w-8 mx-auto"
      >
    </button>
  </div>
</template>

<style>
  .up{
    box-shadow: inset 0 3px 0 0 rgba(0, 0, 0, 0.1);
  }
  .down{
    box-shadow:  0px 3px 0 0 rgba(0, 0, 0, 0.2);
  }
</style>