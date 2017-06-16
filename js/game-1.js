import getScreenElement from './getScreenElement';
import changeScreen from './renderScreen';
import gameTwoElement from './game-2';
import {templateFooterString as footer} from './footer';
import templateHeader from './header';
import {defaultState as data} from './data';
import {levels as levels} from './data';
import {stats as stats} from './data';

const answerCont = `
      ${levels[data.level].answers.map((answer, i) =>
        `<div class="game__option">
        <img src="${answer}" alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input name="question${i}" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question${i}" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
        </div>`).join(``)}`;

const statsLvl = Array.from(stats.values(), (status) => `<li class="stats__result stats__result--${status}"></li>`).join(``);

const templateGameOneString = `
  ${templateHeader(data)}
  <div class="game">
    <p class="game__task">${levels[data.level].question}</p>
    <form class="game__content">
      ${answerCont}
    </form>
    <div class="stats">
      <ul class="stats">
        ${statsLvl}
      </ul>
    </div>
  </div>
  ${footer}`;

const gameOneElement = getScreenElement(templateGameOneString);

const gameContainer = gameOneElement.querySelector(`.game__content`);

gameContainer.onclick = () => {
  const checkedAnswers = document.querySelectorAll(`input[type=radio]:checked`);
  if (checkedAnswers.length === 2) {
    changeScreen(gameTwoElement);
  }
};

export default gameOneElement;
