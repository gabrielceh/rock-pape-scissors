<script setup>
  import {useGameStore} from './store/gameStore'
  import PlayerSelect from './components/PlayerSelect.vue';
  import Header from './components/Header.vue';
import GameResult from './components/GameResult.vue';

  const gameStore = useGameStore()

  const playerSelect = (item) => {
    gameStore.startGame(item)
  }



</script>

<template>
 <div class="overflow-hidden py-8 bg-gradient-to-b from-[#1f3756] to-[#141539] h-screen">
  <div class="max-w-[1366px] mx-auto">
    <Header/>
    <PlayerSelect v-if="!gameStore.playerSelection"/>
    <GameResult v-if="gameStore.playerSelection"/>
  </div>
  
 </div>
</template>

