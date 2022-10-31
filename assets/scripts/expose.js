// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
}

let musicType = document.getElementById("horn-select");
let music = document.querySelector('audio');
let picture = document.querySelector('img');
let speaker = document.getElementById("volume");
let control = document.getElementById("volume-controls");
let pic2 = control.querySelector('img');
//let pic2 = document.querySelectorAll('img:last');

musicType.addEventListener('change', (event) => {
  if(musicType.value=="air-horn") {
    music.src="assets/audio/air-horn.mp3";
    picture.src="assets/images/air-horn.svg";
  }
  if(musicType.value=="car-horn") {
    music.src="assets/audio/car-horn.mp3";
    picture.src="assets/images/car-horn.svg";
  }
  if(musicType.value=="party-horn") {
    music.src="assets/audio/party-horn.mp3";
    picture.src="assets/images/party-horn.svg";
  }
});



speaker.addEventListener('change', (event) => {
  music.volume= speaker.value / 100;
  if(speaker.value==0) {
    pic2.src="assets/icons/volume-level-0.svg";
  }
  if(1 <= speaker.value && speaker.value < 33) {
    pic2.src="assets/icons/volume-level-1.svg";
  }
  if(33 <= speaker.value && speaker.value < 67) {
    pic2.src="assets/icons/volume-level-2.svg";
  }
  if(67 <= speaker.value && speaker.value <= 100) {
    pic2.src="assets/icons/volume-level-3.svg";
  }
});



const button = document.querySelector('button');
const jsConfetti = new JSConfetti();

button.addEventListener('click', (event) => {
  music.play();
  if(musicType.value=="party-horn") {
    jsConfetti.addConfetti();
  }
});


