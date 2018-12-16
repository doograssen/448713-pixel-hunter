import {assert} from 'chai';
import {changeLevel} from "../change-level";
import {INITIAL_STATE} from "../ini-data.js";

const SAMPLE_GAME = {
  level: 2,
  lives: 3,
  time: 0,
};

describe(`#changeLevel`, () => {
  it(`should update level information`, () => {
    assert.equal(changeLevel(INITIAL_STATE, 0).level, 0);
    assert.equal(changeLevel(INITIAL_STATE, 1).level, 1);
    assert.equal(changeLevel(INITIAL_STATE, 2).level, 2);
    assert.equal(changeLevel(INITIAL_STATE, 10).level, 10);
  });

  it(`should not allow set negative values`, () => {
    assert.throws(() => changeLevel(INITIAL_STATE, -1).level, /Level should be of type number and not be negative value/);
  });

  it(`should not allow float value`, () => {
    assert.throws(() => changeLevel(INITIAL_STATE, 2.2).level, /Level should be integer value/);
  });

  it(`should not allow set same value`, () => {
    assert.throws(() => changeLevel(SAMPLE_GAME, 2).level, /Level should changes on another value/);
  });

  it(`should not allow set non number value`, () => {
    assert.throws(() => changeLevel(INITIAL_STATE, ``).level, /Level should be of type number and not be negative value/);
    assert.throws(() => changeLevel(INITIAL_STATE, []).level, /Level should be of type number and not be negative value/);
    assert.throws(() => changeLevel(INITIAL_STATE, {}).level, /Level should be of type number and not be negative value/);
    assert.throws(() => changeLevel(INITIAL_STATE, undefined).level, /Level should be of type number and not be negative value/);
  });

  it(`should not allow NaN values`, () => {
    assert.throws(() => changeLevel(INITIAL_STATE, NaN).level, /Level shouldn't be NaN value/);
  });

  it(`Level shouldn't be more than level amount`, () => {
    assert.throws(() => changeLevel(INITIAL_STATE, 11).level, /Level shouldn't be more than level amount/);
  });

});
