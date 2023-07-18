const displayMesssage = document.querySelector('.countdown-display');
let time = 4;
const intervalID = setInterval(updateDisplayMessage, 1000);

function updateDisplayMessage() {
  time--;
  if (time > 0) {
    displayMesssage.textContent = time;
  }
  if (time === 0) {
    displayMesssage.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
  }
}
