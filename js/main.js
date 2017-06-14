import introMainElement from './intro';
import greetingElement from './greeting';
import changeScreen from './renderScreen';

changeScreen(introMainElement);

document.onclick = (e) => {
  if (e.target.parentNode.classList.contains(`back`)) {
    changeScreen(greetingElement);
  }
};
