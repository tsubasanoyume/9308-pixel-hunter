import getScreenElement from './getScreenElement';
import changeScreen from './renderScreen';
import statsElement from './stats';
import {templateFooterString as footer} from './footer';
import templateHeader from './header';
import {defaultState as data} from './data';
import {levels as levels} from './data';
import {stats as stats} from './data';

const answerCont = `
      ${levels[`3`].answers.map((answer) =>
      `<div class="game__option">
        <img src="${answer}" alt="Option 1" width="304" height="455">
      </div>`).join(``)}`;

const statsLvl = Array.from(stats.values(), (status) => `<li class="stats__result stats__result--${status}"></li>`).join(``);

const templateGameThreeString = `
  ${templateHeader(data)}
  <div class="game">
    <p class="game__task">${levels[`3`].question}</p>
    <form class="game__content  game__content--triple">
      ${answerCont}
    </form>
    <div class="stats">
      <ul class="stats">
        ${statsLvl}
      </ul>
    </div>
  </div>
  ${footer}`;

const gameThreeElement = getScreenElement(templateGameThreeString);

const gameContainer = gameThreeElement.querySelector(`.game__content`);

gameContainer.onclick = (e) => {
  if (e.target.classList.contains(`game__option`)) {
    changeScreen(statsElement);
  }
};

export default gameThreeElement;
