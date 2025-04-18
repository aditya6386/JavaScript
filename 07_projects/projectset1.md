
const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    console.log(e) [//pointerEvent]
    console.log(e.target)  [//it will notify that the from whe re this event is coming]

    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id 
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
  });
});

******* project 2*******************

const form = document.querySelector('form')
form.addEventListener('submit', function(e){
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `please give a valid height ${height}`;
  }else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  // show the result
  results.innerHTML = `<span>${bmi}</span>`
      if(bmi < 18.6){
        results.innerHTML = `under weight`
      } else if(bmi >= 18.6 && bmi <= 24.9){
        results.innerHTML = `normal range`
      } else if (bmi >= 24.9){
        results.innerHTML = `over weight`
      }
}
});


****************project 3*******************
const clock = document.querySelector('#clock');
// const clock = document.getElementById('clock')
setInterval(function () {
  let date = new Date();
  clock.innerHTML= date.toLocaleTimeString()
}, 1000);
 
 ********************project 4***************
 let randomNumber = parseInt(Math.random()*100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess);
  });
}
function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number')
  }else if(guess < 0){
    alert('Please enter a number greater than 0')
  } else if(guess > 100){
    alert('Please enter a number less than 100')
  }else {
    prevGuess.push(guess)
   if(numGuess === 11){
    displayGuess(guess)
    displayMessage(`game over. random number was ${randomNumber}`)
    endGame()
  } else {
    displayGuess(guess)
    checkGuess(guess)
  }
 }
}
 function checkGuess(guess){
   if(guess === randomNumber){
     displayMessage(`you guessed it right`);
     endGame();
   }else if(guess < randomNumber){
     displayMessage(`your guessed number is low`);
   }else if(guess > randomNumber){
    displayMessage(`your guessed number is high`);
  }
 }

 function displayGuess(guess){
   userInput.value = ''  // cleanup method....all values guessed before so we're cleaning it
   guessSlot.innerHTML += `${guess},` // adding count of guesses in guesses
   numGuess++ //increasing count of guesses
   remaining.innerHTML = `${11 - numGuess}` //remaining guesses
 }

 function displayMessage(message){
   lowOrHi.innerHTML = `<h2>${message}</h2>`;
 }

 function endGame(){
   userInput.value = '';
   userInput.setAttribute('disabled', '');
   p.classList.add('button');
   p.innerHTML = `<h2 id="newGame">start new game</h2>`;
   startOver.appendChild(p);
   playGame = false;
   newGame();
 }

 function newGame(){
   const newGameButton = document.querySelector('#newGame')
   newGameButton.addEventListener('click', function(e){
   randomNumber = parseInt(Math.random()*100 + 1);
   prevGuess = [];
   numGuess = 1;
   guessSlot.innerHTML = '';
   remaining.innerHTML =`${11 - numGuess}`;
   userInput.removeAttribute('disabled', '');
   startOver.removeChild(p);

   playGame = true;
   })
 }
