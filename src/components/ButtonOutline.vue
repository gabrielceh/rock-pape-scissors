<script setup>
  const {label} = defineProps([
    'label'
  ])
</script>

<template>
  <button
    class="border-[1px] border-[#606e85] rounded-lg mx-2 px-10 py-2 transition-colors duration-300 hover:bg-[#606e85] hover:text-[#141539]"
  >{{label}}</button>

</template>