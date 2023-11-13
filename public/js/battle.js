const player = document.getElementById('player');
const monster = document.getElementById('monster');
const playerHP = player.getAttribute('data-hp');
const playerAttack = player.getAttribute('data-attack');
const monsterHP = monster.getAttribute('data-hp');
const monsterAttack = monster.getAttribute('data-attack')
const monsterAction = document.getElementById('monster-action');
let playerChoice, monsterChoice;

console.log(`player:`, player);
console.log(`monster:`, monster);
console.log('monsterAction', monsterAction);

function playerAction(choice) {
  switch(choice){
    case 'attack':
      if(monsterChoice === 'attack'){
        playerHP -= monsterAttack;
        monsterHP -= playerAttack;
      }
      else {
        monsterHP -= playerAttack;
      }
      break;
    case 'parry':
      if(monsterChoice === 'attack') {
        playerHP -= monsterAttack * .5;
      }
      break;
    case 'potion':
      break;
  }
};

function chooseMonsterAction() {
  let monsterChoices = ['attack','roar']
  monsterChoice = Math.floor(Math.random() * monsterChoices.length);
  monsterAction.innerHTML = `The monster is going to <mark>${monsterChoices[monsterChoice]}</mark>`;
};

chooseMonsterAction();

const playerActions = document.querySelectorAll('.player-action');
console.log(playerActions);
console.log(monsterAction);
playerActions.forEach(btn => {
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    let button = event.target;
    playerChoice = button.getAttribute('data-choice');
    playerAction(playerChoice);
  })
});
