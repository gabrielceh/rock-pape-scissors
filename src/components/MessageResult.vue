<script setup>
import {useGameStore} from '../store/gameStore'

  const gameStore = useGameStore()

</script>

<template>
    <div 
      class="mx-auto mt-20 md:mt-0"
    >
    <div
      v-if="gameStore.gameResult"
    >
      <p class="text-center text-6xl md:text-4xl font-bold">
        {{
          gameStore.gameResult === 'win' 
            ? 'YOU WIN' 
            : gameStore.gameResult === 'defeat' 
              ? 'YOU LOSE' 
              : 'DRAW'
        }}
      </p>

      <button
        @click="gameStore.resetGame()"
        class="bg-gray-50 text-[#3b4363] font-bold tracking-widest w-full mt-8 px-5 py-2 rounded-md"
      >PLAY AGAIN</button>
    </div>
    </div>

</template>