'use strict';



let secretNumber = Math.trunc(Math.random() * 20) + 1;
let Score = 20;
let Highscore = 0;       

// React to click



  /*Logic*/
  document.querySelector('.Check').addEventListener
  ('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

   if (Score > Highscore) {
      Highscore = Score;
      document.querySelector('.Highscore').textContent = Highscore;
    }

  } else if (guess > secretNumber) {
    if (Score > 1) {
      document.querySelector('.message').textContent = '⬆  Too high!';
      Score--;
      document.querySelector('.Score').textContent = Score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.Score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#F44336';
      document.querySelector('.number').style.width = '30rem';
    }
  } else if (guess < secretNumber) {
    if (Score > 1) {
      document.querySelector('.message').textContent = '⬇  Too low!';
      Score--;
      document.querySelector('.Score').textContent = Score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.Score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#F44336';
      document.querySelector('.number').style.width = '30rem';
    }
  }
});
//reset
document.querySelector('.Again').addEventListener('click', function () {
    Score = 20; // 2nd
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.Score').textContent = Score;
    document.querySelector('.number').textContent = '?';
  
    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('.guess').value = '';
    // Styles
    document.querySelector('body').style.backgroundColor = '#222222';
    document.querySelector('.number').style.width = '15rem';
  });