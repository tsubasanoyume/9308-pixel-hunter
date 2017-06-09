import introMainElement from './intro';
import greetingElement from './greeting';
import rulesElement from './rules';
import gameOneElement from './game-1';
import gameTwoElement from './game-2';
import gameThreeElement from './game-3';
import statsElement from './stats';
import changeScreen from './renderScreen';

changeScreen(introMainElement);

document.onclick = (event) => {
  if (event.target.parentNode.classList.contains(`back`)) {
    changeScreen(greetingElement);
  }
};

const star = document.querySelector(`.intro__asterisk`);

star.onclick = (e) => {
  e.preventDefault();
  changeScreen(greetingElement);

  const rightArrow = document.querySelector(`.greeting__continue`);

  rightArrow.onclick = (ev) => {
    ev.preventDefault();
    changeScreen(rulesElement);

    const inputName = document.querySelector(`.rules__input`);
    const submitBtn = document.querySelector(`.rules__button`);

    inputName.oninput = () => {
      if (inputName.value !== ``) {
        submitBtn.disabled = false;
        submitBtn.onclick = (evt) => {
          evt.preventDefault();
          changeScreen(gameOneElement);

          const gameCont = document.querySelector(`.game__content`);

          gameCont.onclick = () => {
            const checkedAnswers = document.querySelectorAll(`input[type=radio]:checked`);
            if (checkedAnswers.length === 2) {
              changeScreen(gameTwoElement);
              const gameCont1 = document.querySelector(`.game__content`);

              gameCont1.onclick = (event) => {
                if (event.target.name === `question1`) {
                  changeScreen(gameThreeElement);

                  const gameCont2 = document.querySelector(`.game__content`);

                  gameCont2.onclick = (evnt) => {
                    if (evnt.target.classList.contains(`game__option`)) {
                      changeScreen(statsElement);
                    }
                  };
                }
              };
            }
          };
        };
      }
    };
  };
};


