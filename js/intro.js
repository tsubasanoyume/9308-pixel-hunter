import getScreenElement from './getScreenElement';
import changeScreen from './renderScreen';
import greetingElement from './greeting';

const templateIntroString = `<div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
  </div>`;

const introMainElement = getScreenElement(templateIntroString);

const star = introMainElement.querySelector(`.intro__asterisk`);

star.onclick = (e) => {
  e.preventDefault();
  changeScreen(greetingElement);
};

export default introMainElement;
