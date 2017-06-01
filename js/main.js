const screens = document.querySelectorAll(`template`);
const main = document.querySelector(`main.central`);
const screensArr = [];
const RIGHT = 39;
const LEFT = 37;

screens.forEach((el, i, arr) => {
  switch (arr[i].id) {
    case `greeting`:
      screensArr[0] = arr[i];
      break;
    case `rules`:
      screensArr[1] = arr[i];
      break;
    case `game-1`:
      screensArr[2] = arr[i];
      break;
    case `game-2`:
      screensArr[3] = arr[i];
      break;
    case `game-3`:
      screensArr[4] = arr[i];
      break;
    case `stats`:
      screensArr[5] = arr[i];
      break;
  }
});

const changeScreen = (currentScreen) => {
  if (screensArr[currentScreen].innerHTML) {
    main.innerHTML = ``;
    main.innerHTML = screensArr[currentScreen].innerHTML;
  }

};

let currentScreen = 0;

changeScreen(currentScreen);

document.onkeydown = (evt) => {
  if ((evt.altKey) && (evt.keyCode === RIGHT)) {
    evt.preventDefault();
    if (currentScreen >= 0 && currentScreen < screensArr.length - 1) {
      changeScreen(++currentScreen);
    }
  } else if ((evt.altKey) && (evt.keyCode === LEFT)) {
    evt.preventDefault();
    if (currentScreen > 0 && currentScreen < screensArr.length) {
      changeScreen(--currentScreen);
    }
  }
};
