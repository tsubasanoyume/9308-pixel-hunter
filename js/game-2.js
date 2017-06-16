import getScreenElement from './getScreenElement';
import changeScreen from './renderScreen';
import gameThreeElement from './game-3';
import {templateFooterString as footer} from './footer';
import templateHeader from './header';
import {defaultState as data} from './data';
import {levels as levels} from './data';
import {stats as stats} from './data';

const answerCont = `
      ${levels[`2`].answers.map((answer) =>
  `<div class="game__option">
        <img src="${answer}" alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
        </div>`).join(``)}`;

const statsLvl = Array.from(stats.values(), (status) => `<li class="stats__result stats__result--${status}"></li>`).join(``);

const templateGameTwoString = `
  ${templateHeader(data)}
  <div class="game">
    <p class="game__task">${levels[`2`].question}</p>
    <form class="game__content  game__content--wide">
      ${answerCont}
    </form>
    <div class="stats">
      <ul class="stats">
        ${statsLvl}
      </ul>
    </div>
  </div>
  ${footer}`;

const gameTwoElement = getScreenElement(templateGameTwoString);

const gameContainer = gameTwoElement.querySelector(`.game__content`);

gameContainer.onclick = (e) => {
  if (e.target.name === `question1`) {
    changeScreen(gameThreeElement);
  }
};

export default gameTwoElement;
