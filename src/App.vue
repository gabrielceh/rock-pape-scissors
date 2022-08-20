<script setup>
  import {useGameStore} from './store/gameStore'

  const gameStore = useGameStore()

  const playerSelect = (item) => {
    gameStore.startGame(item)
  }



</script>

<template>
 <div>
  <h1>ROCK PAPER SCISSORS LIZARD SPOCK</h1>

  <div>
    <p>Player Option: {{gameStore.playerSelection}}</p>
    <p>House Option: {{gameStore.houseSelection}}</p>
    <p>Game Result: {{gameStore.gameResult}}</p>
    <p>Total wins: {{gameStore.totalWins}}</p>
    <p>Total draws: {{gameStore.totalDraws}}</p>
    <p>Total defeats: {{gameStore.totalDefeats}}</p>
  </div>

  <button @click="playerSelect('paper')">Paper</button>
  <button @click="playerSelect('scissors')">Scissors</button>
  <button @click="playerSelect('rock')">Rock</button>
  <button @click="playerSelect('lizard')">Lizard</button>
  <button @click="playerSelect('spock')">Spock</button>
 </div>
</template>

