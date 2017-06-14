import getScreenElement from './getScreenElement';
import gameOneElement from './game-1';
import changeScreen from './renderScreen';
import {templateFooterString as footer} from './footer';
import templateHeader from './header';

const templateRulesString = `
  ${templateHeader()}
  <div class="rules">
    <h1 class="rules__title">Правила</h1>
    <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>
  ${footer}`;

const rulesElement = getScreenElement(templateRulesString);

const inputName = rulesElement.querySelector(`.rules__input`);
const submitBtn = rulesElement.querySelector(`.rules__button`);

inputName.oninput = () => {
  if (inputName.value !== ``) {
    submitBtn.disabled = false;
    submitBtn.onclick = (e) => {
      e.preventDefault();
      changeScreen(gameOneElement);
    };
  }
};

export default rulesElement;
