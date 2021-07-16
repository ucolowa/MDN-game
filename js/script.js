let randomNumber = Math.floor(Math.random() * 100) + 1;

let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');

let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess() {
	let userGuess = Number(guessField.value);
	if (guessCount === 1) {
		guesses.textContent = 'Previous guesses: ';
	}
	guesses.textContent += userGuess + ' '; // зачем пустая строка? Ответ: пробел

	if (userGuess === randomNumber) {
		lastResult.textContent = 'Congratulations!!!! You got it right!';
    	lastResult.style.backgroundColor = 'green';
    	lowOrHi.textContent = '';
    	setGameOver(); // что такое set
	} else if (guessCount === 10) {
		lastResult.textContent = '!!!GAME OVER!!!';
    	setGameOver();
	} else {
		lastResult.textContent = 'Wrong!';
    	lastResult.style.backgroundColor = 'red';
    	if(userGuess < randomNumber) {
      		lowOrHi.textContent = 'Last guess was too low!';
      	} else if (userGuess > randomNumber) {
      		lowOrHi.textContent = 'Last guess was too high!';
      	}
	}

	guessCount++;
	guessField.value = '';
	guessField.focus();
}
guessSubmit.addEventListener('click', checkGuess); // где прослушиватель, а где обработчик событий?

function setGameOver() {
	guessField.disabled = true;
	guessSubmit.disabled = true;
	resetButton = document.createElement('button');
	resetButton.textContent = 'Star new game';
	document.body.appendChild(resetButton);
	resetButton.addEventListener('click', resetGame);
}

function resetGame() {
	guessCount = 1;

	var resetParas = document.querySelectorAll('.resultParas p');
	for (var i = 0 ; i < resetParas.length ; i++) {
		resetParas[i].textContent = '';
	}

	resetButton.parentNode.removeChild(resetButton);

	guessField.disabled = false;
	guessSubmit.disabled = false;
	guessField.value = '';
	guessField.focus();

	lastResult.style.backgroundColor = 'white';

	randomNumber = Math.floor(Math.random() * 100) + 1;
}