<script setup>
  import {useGameStore} from './store/gameStore'
  import PlayerSelect from './components/PlayerSelect.vue';
  import Header from './components/Header.vue';
  import GameResult from './components/GameResult.vue';
  import ButtonOutline from './components/ButtonOutline.vue';
  import Rules from './components/Rules.vue';
import { provide, ref } from 'vue';
import Stats from './components/Stats.vue';

  const gameStore = useGameStore()
  const showRules = ref(false)
  const statsModal = ref(false)


  const handleShowRules = () => {
    showRules.value = !showRules.value
  }
  const handleShowStats = () => {
    statsModal.value = !statsModal.value
  }
  provide('handleShowRules',handleShowRules)
  provide('handleShowStats',handleShowStats)


</script>

<template>
 <div class="relative py-4 bg-gradient-to-b from-[#1f3756] to-[#141539] h-screen">
  <div class="max-w-[1366px] h-full mx-auto  relative">
    <Header/>
    <PlayerSelect v-if="!gameStore.playerSelection"/>
    <GameResult v-if="gameStore.playerSelection"/>
    <div
      class="w-full text-center mt-16 md:mt-0 md:text-right absolute md:right-0"
    >
      <ButtonOutline label="RULES" @click="handleShowRules()"/>
      <ButtonOutline label="STATS" @click="handleShowStats()"/>
    </div>
  </div>
  <Rules v-show="showRules"/>
  <Stats v-show="statsModal"/>
 </div>


</template>

