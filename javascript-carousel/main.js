const img = document.querySelector('img');
let currentIndex = 0;
let intervalID = 0;

const arrObj = [
  {
    imgSrc: 'images/001.png',
    dotID: 'c1',
  },
  {
    imgSrc: 'images/004.png',
    dotID: 'c2',
  },
  {
    imgSrc: 'images/007.png',
    dotID: 'c3',
  },
  {
    imgSrc: 'images/025.png',
    dotID: 'c4',
  },
  {
    imgSrc: 'images/039.png',
    dotID: 'c5',
  },
];

// *************** auto play ***********************************
function autoPlay(getUpdatedValue) {
  intervalID = setInterval(() => {
    // update the currentIndex
    // NOTE: the initial image and filled circle has been set already, so skip to the next index
    currentIndex = currentIndex + 1 <= arrObj.length - 1 ? currentIndex + 1 : 0;
    getUpdatedValue(currentIndex);
    // show the image and filled circle
    showImgAndFilledCircle();
    // change filled circle to open circle
    showOpenCircles();
  }, 3000);
}

// ************* Get updated async current index  **********************
function getUpdatedValue(updatedValue) {
  return updatedValue;
}
autoPlay(getUpdatedValue);

// ************ Clicking the previous or the next arrow button *****************
const nextButton = document.querySelector('.forward');
const previousButton = document.querySelector('.backward');

nextButton.addEventListener('click', nextImg);
previousButton.addEventListener('click', previousImg);

function nextImg() {
  clearInterval(intervalID);
  currentIndex = currentIndex + 1 <= arrObj.length - 1 ? currentIndex + 1 : 0;
  showImgAndFilledCircle();
  showOpenCircles();
  autoPlay(getUpdatedValue);
}

function previousImg() {
  clearInterval(intervalID);
  currentIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : arrObj.length - 1;
  showImgAndFilledCircle();

  const openCircle =
    arrObj[currentIndex + 1] &&
    document.querySelector(`#${arrObj[currentIndex + 1].dotID}`);
  openCircle && openCircle.setAttribute('class', 'circle');

  currentIndex === 4 &&
    document
      .querySelector(`#${arrObj[0].dotID}`)
      .setAttribute('class', 'circle');

  autoPlay(getUpdatedValue);
}

function showImgAndFilledCircle() {
  // show the image and filled circle
  const { imgSrc, dotID } = arrObj[currentIndex];
  img.setAttribute('src', imgSrc);
  const filledCircle = document.querySelector(`#${dotID}`);
  filledCircle.setAttribute('class', 'circle filled-circle');
}

function showOpenCircles() {
  // change filled circle to open circle
  const openCircle =
    arrObj[currentIndex - 1] &&
    document.querySelector(`#${arrObj[currentIndex - 1].dotID}`);
  openCircle && openCircle.setAttribute('class', 'circle');

  currentIndex === 0 &&
    document
      .querySelector(`#${arrObj[arrObj.length - 1].dotID}`)
      .setAttribute('class', 'circle');
}

// ************ Clicking the dots *****************
const dotsDiv = document.querySelector('.dots');
dotsDiv.addEventListener('click', showImg);

function showImg(event) {
  if (event.target.tagName !== 'SPAN') {
    return;
  }
  clearInterval(intervalID);
  const currentCircleID = event.target.id;
  currentIndex = arrObj.findIndex((obj) => obj.dotID === currentCircleID);
  const allSpanCircles = document.querySelectorAll('li > span');
  allSpanCircles.forEach((circle) => circle.classList.remove('filled-circle'));
  showImgAndFilledCircle();
  autoPlay(getUpdatedValue);
}
