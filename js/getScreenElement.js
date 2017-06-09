const getScreenElement = (template) => {
  const mainContainer = document.createElement(`div`);
  mainContainer.innerHTML = template;

  if (mainContainer.querySelector(`.footer`)) {
    const footer = mainContainer.querySelector(`.footer`);
    mainContainer.removeChild(footer);
  }
  return mainContainer;
};

export default getScreenElement;
