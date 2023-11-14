var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');


const hairColorEl = document.getElementById('hair-color');
const faceColorEl = document.getElementById('face-color');
const shirtColorEl = document.getElementById('shirt-color');
const charName = document.getElementById('char-name').value;

let hairColor = hairColorEl.value;
let faceColor = faceColorEl.value;
let shirtColor = shirtColorEl.value;

Coloris.setInstance('.instance1', {
  themeMode: 'dark',
  onChange: (color, input) => {
    hairColor = color;
    loadCharacter();
  }
});

Coloris.setInstance('.instance2', {
  themeMode: 'dark',
  onChange: (color, input) => {
    faceColor = color;
    loadCharacter();
  }
});

Coloris.setInstance('.instance3', {
  themeMode: 'dark',
  onChange: (color, input) => {
    shirtColor = color;
    loadCharacter();
  }
});

loadCharacter();

const createBtn = document.getElementById('create-char');
createBtn.addEventListener('click', async (event) => {
  event.preventDefault();
  let btn = event.target;
  if(charName && hairColor && faceColor && shirtColor){
    const response = await fetch('/api/character', {
      method: 'POST',
      body: {
        name: charName,
        hair_color: hairColor,
        face_color: faceColor,
        shirt_color: shirtColor,
        user_id: btn.getAttribute('data-id')
      },
      headers: { 'Content-Type': 'application/json'}
    });
    if(response.ok){
      document.location.replace('/characters');
    }
    else{
      alert('there was an error');
    }
  }
  else{
    alert('Please fill out all the fields');
  }
})

function loadCharacter() {
  ctx.strokeStyle = 'black';
  ctx.beginPath();
  ctx.lineWidth = 7;
  ctx.moveTo(120, 50);
  ctx.lineTo(120, 275); //spine
  ctx.lineTo(165, 450); //right leg
  ctx.moveTo(75, 450);
  ctx.lineTo(120, 275); //left leg
  ctx.closePath();
  ctx.stroke();
  
  //right arm
  ctx.beginPath();
  ctx.moveTo(120, 120);
  ctx.lineTo(180, 250); 
  ctx.closePath();
  ctx.stroke();
  
  //hilt
  ctx.beginPath();
  ctx.moveTo(170, 255);
  ctx.strokeStyle = 'brown';
  ctx.lineTo(180, 220);
  ctx.moveTo(160, 215);
  ctx.lineTo(200, 230);
  ctx.closePath();
  ctx.stroke();

  //blade
  ctx.beginPath();
  ctx.strokeStyle = 'silver';
  ctx.moveTo(180, 220);
  ctx.lineTo(210, 100);
  ctx.closePath();
  ctx.stroke();
  
  //left arm
  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.moveTo(60, 250);
  ctx.lineTo(120, 120); 
  ctx.stroke();
  
  //back hair
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(107, 12);
  ctx.lineTo(125, 8);
  ctx.lineTo(140, 12);
  ctx.lineTo(165, 40);
  ctx.lineTo(165, 120);
  ctx.lineTo(120, 65);
  ctx.lineTo(80, 120);
  ctx.lineTo(80, 80);
  ctx.closePath();
  ctx.fillStyle = hairColor;
  ctx.fill();
  ctx.stroke();

  // headshape
  ctx.beginPath();
  ctx.arc(115, 60, 40, 0 , 2 * Math.PI);
  ctx.fillStyle = faceColor;
  ctx.fill();
  ctx.stroke();

  //bangs
  ctx.beginPath();
  ctx.moveTo(65, 80);
  ctx.lineTo(75, 25)
  ctx.lineTo(90, 10);
  ctx.lineTo(115, 15);
  ctx.lineTo(145, 10);
  ctx.lineTo(150, 25);
  ctx.lineTo(160, 85);
  ctx.lineTo(130, 30);
  ctx.lineTo(115, 25);
  ctx.lineTo(100, 30);
  ctx.fillStyle = hairColor;
  ctx.fill();
  ctx.closePath();
  ctx.stroke();

  //shirt color
  ctx.beginPath();
  ctx.moveTo(96, 170);
  ctx.strokeStyle = shirtColor;
  ctx.lineWidth = 12;
  ctx.lineTo(120, 120);
  ctx.lineTo(144, 170);
  ctx.moveTo(120, 108);
  ctx.lineTo(120, 280);
  ctx.closePath();
  ctx.stroke();
}
    