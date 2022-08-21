import { defineStore } from 'pinia';
import { ref } from 'vue';
import genRandom from '../helpers/genRandom';

export const useGameStore = defineStore('gameStore', () => {
  const playerSelection = ref('');
  const houseSelection = ref('');
  const gameResult = ref('');
  const totalWins = ref(0);
  const totalDefeats = ref(0);
  const totalDraws = ref(0);
  const score = ref(0);

  const options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

  const conditionWin = {
    rock: { paper: 'defeat', rock: 'draw', scissors: 'win', lizard: 'win', spock: 'defeat' },
    lizard: { paper: 'win', rock: 'defeat', scissors: 'defeat', lizard: 'draw', spock: 'win' },
    spock: { paper: 'defeat', rock: 'win', scissors: 'win', lizard: 'defeat', spock: 'draw' },
    scissors: { paper: 'win', rock: 'defeat', scissors: 'draw', lizard: 'win', spock: 'defeat' },
    paper: { paper: 'draw', rock: 'win', scissors: 'defeat', lizard: 'defeat', spock: 'win' },
  };

  function startGame(playerOpt) {
    let random = genRandom(0, 5);
    playerSelection.value = playerOpt;
    houseSelection.value = options[random];

    gameResult.value = conditionWin[playerOpt][houseSelection.value];

    if (gameResult.value === 'win') {
      totalWins.value++;
      score.value++;
    }

    if (gameResult.value === 'draw') totalDraws.value++;

    if (gameResult.value === 'defeat') {
      totalDefeats.value++;
      score.value--;
    }
  }

  return {
    startGame,
    playerSelection,
    houseSelection,
    gameResult,
    totalWins,
    totalDraws,
    totalDefeats,
    score,
  };
});
