// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
}

let synth = window.speechSynthesis;
let voices = [];
let word = document.querySelector('textarea');
let talk = document.querySelector('button');
let face = document.querySelector('img');
//const pitch = document.querySelector('#pitch');
//const rate = document.querySelector('#rate');

voices = synth.getVoices();

for(let i=0; i < voices.length; i++) {
  const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += ' — DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    document.getElementById("voice-select").appendChild(option);
}


talk.addEventListener('click', (event) => {
  let utterThis = new SpeechSynthesisUtterance(word.value);
  const selectedOption = document.getElementById("voice-select").selectedOptions[0].getAttribute('data-name');
  for (let i = 0; i < voices.length ; i++) {
    if (voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  //utterThis.pitch = pitch.value;
  //utterThis.rate = rate.value;
  face.src = "assets/images/smiling-open.png";

  synth.speak(utterThis);

  utterThis.addEventListener('end', (event) => {
    face.src = "assets/images/smiling.png";
  });
  //face.src = "assets/images/no-image.png";
  
  //face.src = "assets/images/smiling-open.png";
});


  
