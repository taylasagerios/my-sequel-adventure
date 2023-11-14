const character = document.getElementById('character');
const monster = document.getElementById('monster');
let characterHP = parseInt(character.getAttribute('data-hp'));
const characterHit = document.getElementById('character-hp')
const characterAttack = character.getAttribute('data-attack');
let monsterHP = parseInt(monster.getAttribute('data-hp'));
const monsterHit = document.getElementById('monster-hp');
const monsterAttack = monster.getAttribute('data-attack');
const monsterAction = document.getElementById('monster-action');
let characterChoice, monsterChoice;
const modalTitle = document.getElementById('modal-label');
const modalBody = document.getElementById('modal-body');
const endModal = new bootstrap.Modal(document.getElementById('modal'), {
  keyboard: false
});
const characterActions = document.querySelectorAll('.character-action');
const playAgain = document.getElementById('play-again');
const exit = document.getElementById('exit');

function updateHealth() {
  characterHit.innerHTML = `HP: ${characterHP}`;
  monsterHit.innerHTML = `HP: ${monsterHP}`;
  return;
}

function characterAction(choice) {
  console.log(choice);
  console.log(monsterChoice);
  switch(choice){
    case 'attack':
      if(monsterChoice === 'attack'){
        monsterHP -= characterAttack;
        checkState(monsterHP, characterHP);
        characterHP -= monsterAttack;
        checkState(monsterHP, characterHP);
      }
      else {
        monsterHP -= characterAttack;
        checkState(monsterHP, characterHP);
      }
      break;
    case 'parry':
      if(monsterChoice === 'attack') {
        characterHP -= Math.floor(monsterAttack * .25);
        checkState(monsterHP, characterHP);
      }
      break;
    // case 'potion':
    //   break;
  }
  updateHealth();
  chooseMonsterAction();
};

function checkState(monHP, charHP) {
  if(monHP < 1) {
    victory();
  }
  if(charHP < 1) {
    loss();
  }
}

async function victory() {
  modalTitle.innerHTML = `Victory`;
  modalBody.innerHTML = 'You Win!';
  gainExp();
  endModal.toggle();
}

function loss() {
  modalTitle.innerHTML = 'Loss...';
  modalBody.innerHTML = 'Wanna try again?';
  endModal.toggle();
}

function chooseMonsterAction() {
  let monsterChoices = ['attack','roar']
  monsterChoice = monsterChoices[Math.floor(Math.random() * monsterChoices.length)];
  monsterAction.innerHTML = `The monster is going to <mark>${monsterChoice}</mark>`;
};

async function gainExp() {
  let charXP = parseInt(character.getAttribute('data-experience'));
  charXP += parseInt(monster.getAttribute('data-experience'));
  
  let updatedChar = {};
  if(charXP >= 100) {
    charXP -= 100;
    updatedChar.hitpoints = parseInt(character.getAttribute('data-hp')) + (Math.floor(Math.random()*5)) + 1;
    updatedChar.attack = parseInt(character.getAttribute('data-attack')) + (Math.floor(Math.random()*3)) + 1;
    updatedChar.level = parseInt(character.getAttribute('data-level')) + 1;
  }
  updatedChar.experience = charXP; 
  updatedChar.gold = parseInt(character.getAttribute('data-gold')) + parseInt(monster.getAttribute('data-gold'));
  await fetch(`/api/character/${character.getAttribute('data-id')}`, {
      method: 'PUT',
      body: JSON.stringify(updatedChar),
      headers: { 'Content-Type': 'application/json' }
  });
}

characterActions.forEach(btn => {
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    let button = event.target;
    characterChoice = button.getAttribute('data-action');
    characterAction(characterChoice);
  })
});

playAgain.addEventListener('click', (event) => {
  event.preventDefault();
  document.location.replace('/battle');
});

exit.addEventListener('click', (event) => {
  event.preventDefault();
  document.location.replace('/monsters');
});

chooseMonsterAction();