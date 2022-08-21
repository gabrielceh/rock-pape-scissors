<script setup>
import {useGameStore} from '../store/gameStore'

import LayoutButtonsResult from './LayoutButtonsResult.vue';

  const gameStore = useGameStore()

</script>

<template>
  <div>
    <LayoutButtonsResult/>

    <div 
      class="mt-32"
    >
      <p
        class="text-center text-6xl font-bold"
      >
        {{
          gameStore.gameResult === 'win' 
            ? 'YOU WIN' 
            : gameStore.gameResult === 'defeat' 
              ? 'YOU LOSE' 
              : 'DRAW'
        }}
      </p>
    </div>
  </div>
</template>