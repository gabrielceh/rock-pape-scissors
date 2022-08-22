<script setup>
  const {label,value} = defineProps([
    'label','value'
  ])

</script> 

<template>
  <p
    class="text-[#1f3756] text-xl my-4 flex justify-around items-center"
  >
    <span class=" block w-1/2">
      {{label}}
    </span> 
    <span class=" block w-1/2 font-bold text-right">
      {{value}}
    </span>
  </p>
</template>