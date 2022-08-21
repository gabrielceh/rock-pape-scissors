<script setup>
import { computed } from '@vue/reactivity';

  const {text,isWinner} = defineProps([
    'text','isWinner'
  ])

  const borderColor = computed(() => {
    if(text === 'scissors') return 'border-amber-400 shadow-[0px_4px_0px_0px_rgb(245,158,11)]'
    if(text === 'paper') return 'border-blue-500 shadow-[0px_4px_0px_0px_rgb(36,98,235)]'
    if(text === 'rock') return 'border-red-500 shadow-[0px_4px_0px_0px_rgb(221,39,38)]'
    if(text === 'lizard') return 'border-purple-600 shadow-[0px_4px_0px_0px_rgb(126,35,207)]'
    if(text === 'spock') return 'border-cyan-400 shadow-[0px_4px_0px_0px_rgb(6,182,212)]'
  })

  const classWin = computed(()=>{
    if(isWinner) return 'win'
  })

</script>

<template>

  <div
    class=" z-10 justify-self-center flex justify-center items-center w-32 h-32 rounded-full border-[18px] md:w-48 md:h-48"
    :class="borderColor, classWin"

  >
    <span 
      class="z-10 flex items-center text-center w-[5.9rem] h-[5.9rem] md:w-[10rem] md:h-[10rem] rounded-full up bg-gray-50"
      
    >
      <img 
        v-if="text==='scissors'" 
        src="../assets/icon-scissors.svg" 
        alt="lizard image" 
        class="w-11 md:w-20 mx-auto z-10"
      >
      <img 
        v-if="text==='paper'" 
        src="../assets/icon-paper.svg" 
        alt="paper image" 
        class="w-11 md:w-20 mx-auto z-10"
      >
      <img 
        v-if="text==='rock'" 
        src="../assets/icon-rock.svg" 
        alt="rock image" 
        class="w-11 md:w-20 mx-auto z-10"
      >
      <img 
        v-if="text==='lizard'" 
        src="../assets/icon-lizard.svg" 
        alt="lizard image" 
        class="w-12 md:w-20 mx-auto z-10"
      >
      <img 
        v-if="text==='spock'" 
        src="../assets/icon-spock.svg" 
        alt="spock image" 
        class="w-11 md:w-20 mx-auto z-10"
      >
    </span>
  
</div>
</template>

<style>
  .up{
    box-shadow: inset 0 6px 0 0 rgba(0, 0, 0, 0.1);
  }
  
  .win{
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