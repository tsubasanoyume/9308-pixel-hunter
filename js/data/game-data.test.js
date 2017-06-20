import assert from 'assert';
import {defaultState, setLives, setTime, setLevel} from '../data';

describe(`PixelHunter Game`, () => {
  describe(`Change Lives`, () => {
    it(`should update lives`, () => {
      assert(1, setLives(defaultState, 1).lives);
      assert(3, defaultState.lives);
    });

    it(`shouldn't allow set negative lives`, () => {
      const setNegativesLives = () => {
        setLives(defaultState, -1);
      };

      assert.throws(setNegativesLives);
    });

    it(`should have three lives on start`, () => {
      assert.equal(defaultState.lives, 3);
    });
  });

  describe(`Change Time`, () => {
    it(`should change time`, () => {
      assert(29, setTime(defaultState).time);
    });

    it(`should have 30 seconds on start of level`, () => {
      assert.equal(defaultState.time, 30);
    });
  });

  describe(`Change Level`, () => {
    it(`should change level`, () => {
      assert(2, setLevel(defaultState).level);
    });

    it(`shouldn't allow set level doesn't exist`, () => {
      const setDoesntExistLevel = () => {
        setLevel(defaultState.level + 15);
      };

      assert.throws(setDoesntExistLevel);
    });

    it(`should have 1 level on start game`, () => {
      assert.equal(defaultState.level, 1);
    });
  });
});
