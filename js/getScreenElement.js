const getScreenElement = (template) => {
  const mainContainer = document.createElement(`div`);
  mainContainer.innerHTML = template;

  return mainContainer;
};

export default getScreenElement;
