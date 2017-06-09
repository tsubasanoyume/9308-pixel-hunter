const getScreenElement = (template) => {
  const mainContainer = document.createElement(`main`);
  mainContainer.setAttribute(`class`, `central`);
  mainContainer.innerHTML = template;
  return mainContainer;
};

export default getScreenElement;
