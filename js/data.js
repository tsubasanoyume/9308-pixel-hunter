export const defaultState = Object.freeze({
  lives: 1,
  time: 0,
  level: `1`
});

export const levels = Object.freeze({
  '1': {
    question: `Угадайте для каждого изображения фото или рисунок?`,
    answers: [
      `http://i.imgur.com/1KegWPz.jpg`,
      `https://k42.kn3.net/CF42609C8.jpg`
    ]
  },
  '2': {
    question: `Угадай, фото или рисунок?`,
    answers: [
      `https://k32.kn3.net/5C7060EC5.jpg`
    ]
  },
  '3': {
    question: `Найдите рисунок среди изображений`,
    answers: [
      `http://i.imgur.com/1KegWPz.jpg`,
      `https://i.imgur.com/DiHM5Zb.jpg`,
      `http://i.imgur.com/DKR1HtB.jpg`
    ]
  }
});

export const status = new Set([`unknown`, `wrong`, `correct`, `slow`, `fast`, `heart`]);

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
