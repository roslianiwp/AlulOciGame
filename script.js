// DISPLAY KAMBING
let sheep = document.getElementById("mySheep")
let sheepStyle = sheep.style
var pos = 450
sheepStyle.left = pos + "px"
sheepStyle.position = "relative"
sheepStyle.top = "120px"
var audiobg = new Audio('./assets/title.mp3');

let time = 0
let fieldLeft = 0
let fieldRight = 900
let speed = 100

// GAME
window.addEventListener('load', init);

// Available Levels

// To change level

let score = 0;
let isPlaying;
let maxScore;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const highScoreElt = document.querySelector('#high-score');
const easyBtn = document.querySelector('#easy');
const mediumBtn = document.querySelector('#medium');
const hardBtn = document.querySelector('#hard');
const getStart = document.getElementById("start")

const words = [
    'angular',
    'magic',
    'brew',
    'while',
    'throw',
    'css',
    'break',
    'swing',
    'echo',
    'let',
    'wall',
    'laughter',
    'hash',
    'spinner',
    'beer',
    'ninja',
    'javascript',
    'master',
    'program',
    'coding',
    'hero',
    'learning',
    'work',
    'case',
    'react',
    'dragon',
    'rush',
    'api',
    'init',
    'motion',
    'google',
    'float',
    'damn',
    'block',
    'ranking',
    'nice',
    'machine',
    'perfect',
    'deploy',
    'terminal',
    'array',
    'vue',
    'node',
    'html',
    'front',
    'grid',
    'stack',
    'mac',
    'console',
    'ajax',
    'heroku',
    'loop',
    'sql',
    'php',
    'data',
    'npm',
    'server',
    'bash'
];

// Initialize Game
function init(){
    // Show number of sec in UI
    // seconds.innerHTML = currentLevel;
    // Load word from array
    showWord(words);
    // Start matching on word input
    wordInput.addEventListener('input', startMatch);
    // getStart.addEventListener('click', startMove);
    wordInput.addEventListener('keydown', function (e) {
        if (e.which === 13) {
          startMove();
        }
    });;

    // Call countdown every second
    
    // Check game status
    setInterval(checkStatus, 50);
    maxScore = localStorage.getItem('highScore');
    highScoreElt.innerHTML = maxScore;
}

function startMove(){
    var images = document.getElementById("gameover")
    images.style.display = "none";
    sheep.style.display = "flex";
    currentWord.style.display = "flex"
    let count = setInterval(countdown, 1000);
    let timer = setInterval(function () {
            if (sheepStyle.left.replace("px", "") == fieldLeft ) {
              images.src="assets/gameover.png"
              audiobg.pause()
              sheep.style.display = "none";
              images.style.display = "inline";
              images.style.marginTop = "0px"
              images.style.opacity = "80%"
              message.innerHTML = 'Game Over!🙅🏽'
              audio.currentTime = 0;
              clearInterval(count);
              clearInterval(timer);
              // img.alt = alt;
            } 
            else if (pos >= fieldRight){
              images.src="assets/win.jpg"
              audiobg.pause()
              sheep.style.display = "none";
              images.style.display = "inline";
              images.style.marginTop = "0px"
                images.style.opacity = "80%"
              message.innerHTML = 'Wes menang!🙅🏽'
              clearInterval(count);
              clearInterval(timer);
            }
            else {
              pos --;
              sheepStyle.left = pos + "px";
            }
          }, 20);
    
}


//Start match
function startMatch(){
  audiobg.play()
  
    wordInput.value = wordInput.value.toLowerCase();
    if(matchWords()){
        isPlaying = true;
        showWord(words);
        wordInput.value = '';
        score++;
    }

    // If score is -1 display zero
    if(score === -1){
        scoreDisplay.innerHTML = 0;
    }else{
        scoreDisplay.innerHTML = time;
        highScoreElt.innerHTML = time;
        
        if(time <= maxScore){
            localStorage.setItem('highScore',time);
        }
    }
    maxScore = localStorage.getItem('highScore');
    scoreDisplay.innerHTML = time;
    highScoreElt.innerHTML = maxScore;
}

var audio = new Audio('./assets/kambing.mp3');
var audio1 = new Audio('./assets/kambing1.wav');
var audio2 = new Audio('./assets/kambing2.wav');
var audio3 = new Audio('./assets/kambing3.wav');
var audio4 = new Audio('./assets/kambing4.wav');
var audio5 = new Audio('./assets/kambing5.wav');
var audio_list = [audio, audio1, audio2, audio3, audio4, audio5];
function randAudio(aud){
  // Generate random array index
  const randIndex = Math.floor(Math.random() * audio_list.length);
  // Output random word
  return audio_list[randIndex];
}


// Match currentWord to wordInput
function matchWords(){
    
  if(wordInput.value === currentWord.innerHTML){
          var leftNumbers = sheepStyle.left.replace("px","");
          var left = parseInt(leftNumbers)
          if (left == fieldRight) {sheepStyle.left = fieldRight }
          else {pos += speed
            randAudio().play();}
  

      message.innerHTML = 'Sek salah!';
      return true;
  }else{
      message.innerHTML = 'Wes bener!';
      return false;
  }
}

// Pick and show random word
function showWord(word){
    // Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    // Output random word
    currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown(){
    time++;
    timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus(){
    if(!isPlaying && time === 0){
        ;
        score = -1;
    }
}

// easyBtn.addEventListener('click', setlevel);
// mediumBtn.addEventListener('click', setlevel);
// hardBtn.addEventListener('click', setlevel);
