const main = document.querySelector(`body`);

const changeScreen = (screen) => {
  main.innerHTML = ``;
  main.appendChild(screen);
};

export default changeScreen;
