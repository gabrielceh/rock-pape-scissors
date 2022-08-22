import { defineStore } from 'pinia';
import { ref } from 'vue';
import genRandom from '../helpers/genRandom';
import JSConfetti from 'js-confetti';

export const useGameStore = defineStore('gameStore', () => {
  const playerSelection = ref('');
  const houseSelection = ref('');
  const gameResult = ref('');
  const totalWins = ref(localStorage.getItem('totalWins') || 0);
  const totalDefeats = ref(localStorage.getItem('totalDefeats') || 0);
  const totalDraws = ref(localStorage.getItem('totalDraws') || 0);
  const score = ref(localStorage.getItem('score') || 0);

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

    setTimeout(() => {
      houseSelection.value = options[random];
      gameResult.value = conditionWin[playerOpt][houseSelection.value];

      if (gameResult.value === 'win') {
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti({
          emojis: ['✨'],
          emojiSize: 50,
          confettiNumber: 40,
        });
        totalWins.value++;
        score.value++;
        localStorage.setItem('totalWins', totalWins.value);
        localStorage.setItem('score', score.value);
      }

      if (gameResult.value === 'draw') {
        totalDraws.value++;
        localStorage.setItem('totalDraws', totalDraws.value);
      }

      if (gameResult.value === 'defeat') {
        totalDefeats.value++;
        score.value--;
        localStorage.setItem('totalDefeats', totalDefeats.value);
        localStorage.setItem('score', score.value);
      }
    }, 1000);
  }

  function resetGame() {
    playerSelection.value = '';
    houseSelection.value = '';
    gameResult.value = '';
  }

  return {
    startGame,
    resetGame,
    playerSelection,
    houseSelection,
    gameResult,
    totalWins,
    totalDraws,
    totalDefeats,
    score,
  };
});
