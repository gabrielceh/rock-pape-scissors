<script setup>
  import ButtonSelect from './ButtonSelect.vue';
</script>

<template>
  <section
    class="grid grid-cols-2 justify-center gap-y-4 max-w-sm mx-auto bg-pentagon"
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

<style>
  .bg-pentagon{
    background: url('../assets/bg-pentagon.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 250px;
  }
</style>