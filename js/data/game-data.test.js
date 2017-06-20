import assert from 'assert';
import {defaultState, setLives, setPoints} from '../data';

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
});
