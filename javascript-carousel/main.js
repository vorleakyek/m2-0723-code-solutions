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
function autoPlay(callback) {
  intervalID = setInterval(() => {
    // update the currentIndex
    // NOTE: the initial image and filled circle has been set already, so skip to the next index
    currentIndex = currentIndex + 1 <= arrObj.length - 1 ? currentIndex + 1 : 0;
    callback(currentIndex);

    // show the image and filled circle
    img.setAttribute('src', arrObj[currentIndex].imgSrc);
    const filledCircle = document.querySelector(
      `#${arrObj[currentIndex].dotID}`
    );
    filledCircle.setAttribute('class', 'circle filled-circle');
    console.log('autoplay currentIndex', currentIndex);

    // change filled circle to open circle
    const openCircle =
      arrObj[currentIndex - 1] &&
      document.querySelector(`#${arrObj[currentIndex - 1].dotID}`);
    openCircle && openCircle.setAttribute('class', 'circle');

    currentIndex === 0 &&
      document
        .querySelector(`#${arrObj[arrObj.length - 1].dotID}`)
        .setAttribute('class', 'circle');
  }, 3000);
}

// ************* Get updated async current index  **********************
function getUpdatedValue(updatedValue) {
  console.log('updated value', updatedValue);
  return currentIndex;
}

autoPlay(getUpdatedValue);

// ************ Clicking the previous or the next arrow button *****************
const nextButton = document.querySelector('.forward');
const previousButton = document.querySelector('.backward');

nextButton.addEventListener('click', function () {
  nextImg();
});
previousButton.addEventListener('click', function () {
  previousImg();
});

function nextImg() {
  clearInterval(intervalID);

  console.log('next button currentIndex', currentIndex);
  currentIndex = currentIndex + 1 <= arrObj.length - 1 ? currentIndex + 1 : 0;

  img.setAttribute('src', arrObj[currentIndex].imgSrc);

  const filledCircle = document.querySelector(`#${arrObj[currentIndex].dotID}`);
  filledCircle.setAttribute('class', 'circle filled-circle');

  const openCircle =
    arrObj[currentIndex - 1] &&
    document.querySelector(`#${arrObj[currentIndex - 1].dotID}`);
  openCircle && openCircle.setAttribute('class', 'circle');

  currentIndex === 0 &&
    document
      .querySelector(`#${arrObj[arrObj.length - 1].dotID}`)
      .setAttribute('class', 'circle');

  autoPlay(getUpdatedValue);
}

function previousImg() {
  clearInterval(intervalID);
  console.log('previous button currentIndex', currentIndex);

  currentIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : arrObj.length - 1;
  img.setAttribute('src', arrObj[currentIndex].imgSrc);

  const filledCircle = document.querySelector(`#${arrObj[currentIndex].dotID}`);
  filledCircle.setAttribute('class', 'circle filled-circle');

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

  img.setAttribute('src', arrObj[currentIndex].imgSrc);

  const allSpanCircles = document.querySelectorAll('li > span');
  allSpanCircles.forEach((circle) => circle.classList.remove('filled-circle'));
  console.log(event.target, allSpanCircles);

  const filledCircle = document.querySelector(`#${arrObj[currentIndex].dotID}`);
  filledCircle.setAttribute('class', 'circle filled-circle');

  autoPlay(getUpdatedValue);
}
