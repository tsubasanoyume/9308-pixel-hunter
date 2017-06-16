const setLives = (isSetLive) => {
  const live = isSetLive ? `full` : `empty`;

  return `<img src="img/heart__${live}.svg" class="game__heart" alt="Life" width="32" height="32">`;
};

const templateHeader = (data) => {
  const gameState = data ? `
    <h1 class="game__timer"> ${data.time} </h1>
    <div class="game__lives">
    
    ${new Array(3 - data.lives).fill(setLives()).join(``)}
    ${new Array(data.lives).fill(setLives(true)).join(``)}
    
    </div>` : ``;

  return `<header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
    ${gameState}
  </header>`;
};

export default templateHeader;
