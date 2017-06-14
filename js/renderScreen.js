const main = document.querySelector(`div#main`);

const changeScreen = (screen) => {
  main.innerHTML = ``;
  main.appendChild(screen);
};

export default changeScreen;
