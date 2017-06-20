export const defaultState = Object.freeze({
  lives: 3,
  level: 1,
  points: 0,
  time: 30
});

export const levels = Object.freeze({
  'state-1': {
    question: `Угадайте для каждого изображения фото или рисунок?`,
    answers: [
      `http://i.imgur.com/1KegWPz.jpg`,
      `https://k42.kn3.net/CF42609C8.jpg`
    ]
  },
  'state-2': {
    question: `Угадай, фото или рисунок?`,
    answers: [
      `https://k32.kn3.net/5C7060EC5.jpg`
    ]
  },
  'state-3': {
    question: `Найдите рисунок среди изображений`,
    answers: [
      `http://i.imgur.com/1KegWPz.jpg`,
      `https://i.imgur.com/DiHM5Zb.jpg`,
      `http://i.imgur.com/DKR1HtB.jpg`
    ]
  }
});

export const status = new Set([`unknown`, `wrong`, `correct`, `slow`, `fast`]);

export const stats = new Map([
  [1, `unknown`],
  [2, `unknown`],
  [3, `unknown`],
  [4, `unknown`],
  [5, `unknown`],
  [6, `unknown`],
  [7, `unknown`],
  [8, `unknown`],
  [9, `unknown`],
  [10, `unknown`]
]);

export const setLives = (game, lives) => {
  if (lives < 0) {
    throw new RangeError(`Can't set negative lives`);
  }
  const newGame = Object.assign({}, game);
  newGame.lives = lives;
  return newGame;
};

export const setTime = (state) => {
  if (state.time === 0) {
    setLives(state, state.lives - 1);
  }

  const newState = Object.assign({}, state);
  newState.time--;
  return newState;
};

export const setPoints = (state, points) => {
  const newState = Object.assign({}, state);
  newState.points += points;
  return newState;
};

export const getLevelData = (level) => {
  return levels[`state-${level}`];
};

export const setLevel = (state) => {
  if (!getLevelData(state.level + 1)) {
    throw new RangeError(`Level doesn't exist`);
  }

  const newState = Object.assign({}, state);
  newState.level = state.level + 1;
  return newState;
};

export const setStatus = (state, result) => {
  stats.set(state.level, result);
};

export const onAnswer = (state, result) => {
  if (result === `wrong`) {
    setLives(state, state.lives - 1);
    setStatus(state, result);
  }

  if (result === `correct`) {
    setStatus(state, result);
    setPoints(state, 100);
    if (state.time < 10) {
      setStatus(state, `fast`);
      setPoints(state, 50);
    } else if (state.time > 20) {
      setStatus(state, `slow`);
      setPoints(state, -50);
    }
  }
};
