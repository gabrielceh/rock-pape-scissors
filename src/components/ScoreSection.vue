<script setup>
  import {useGameStore} from '../store/gameStore'

  const gameStore = useGameStore()

</script>

<template>
  <div class="flex flex-col justify-center items-center w-20 py-3 h-20 bg-slate-50 rounded-md leading-none">
    <p
      class="text-[10px] text-center font-bold tracking-widest text-[#2a46c0] py-0"
    >
      SCORE
    </p>

    <p
    class="text-[#3b4363] font-bold text-4xl text-center py-0 "
    >
      {{gameStore.score}}
    </p>
  </div>

</template>