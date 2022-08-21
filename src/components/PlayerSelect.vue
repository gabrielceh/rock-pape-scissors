<script setup>
  import ButtonSelect from './ButtonSelect.vue';
</script>

<template>
  <section
    class="grid grid-cols-2 justify-center gap-y-4 max-w-sm mx-auto bg-[url('src/assets/bg-pentagon.svg')] bg-no-repeat bg-center bg-[length:250px]"
  >
    <ButtonSelect
      class="col-span-2" 
      text="scissors"
    />
    <ButtonSelect
      class="" 
      text="spock"
    />
    <ButtonSelect
      class="" 
      text="paper"
    />
    <ButtonSelect 
      class=""
      text="lizard"
    />
    <ButtonSelect 
      class=""
      text="rock"
    />
  </section>
</template>