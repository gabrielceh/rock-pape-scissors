<script setup>
import { inject } from 'vue';
import {useGameStore} from '../store/gameStore'
import StatItem from './StatItem.vue';

  const gameStore = useGameStore()

  const handleShowStats =  inject('handleShowStats')

</script>

<template>
<div
  class="z-10 absolute top-0 bottom-0 left-0 right-0 h-full sm:flex sm:justify-center sm:items-center sm:bg-[#00000080]"
>
  <div 
    class=" h-full sm:w-1/2 sm:max-w-sm sm:h-auto p-5 flex flex-col justify-evenly items-center bg-slate-50 sm:grid sm:grid-cols-2 sm:gap-2 sm:rounded-md"
  >
    <h3
      class="text-[#141539] text-4xl font-bold sm:order-1"
    >STATS</h3>
    <div
      class="mx-auto w-full sm:col-span-2 sm:order-3"
    >
      <StatItem label="TOTAL WINS" :value="gameStore.totalWins"/>
      <StatItem label="TOTAL DRAWS" :value="gameStore.totalDraws"/>
      <StatItem label="TOTAL DEFEATS" :value="gameStore.totalDefeats"/>
    </div>

    <button 
      class=" sm:order-2 justify-self-end"
      @click="handleShowStats()">
      <img
        src="../assets/icon-close.svg" 
        alt="close" 
      >
    </button>
  </div>
</div>

</template>