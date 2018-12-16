import {assert} from 'chai';
import {CURRENT_STATE} from "../ini-data.js";
import {changeLive} from "../change_live.js";

const SAMPLE_GAME = {
  level: 2,
  lives: 2,
  time: 0,
};

describe(`#changeLive`, () => {
  it(`should update lives information`, () => {
    assert.equal(changeLive(CURRENT_STATE, 0).lives, 0);
    assert.equal(changeLive(CURRENT_STATE, 1).lives, 1);
    assert.equal(changeLive(CURRENT_STATE, 3).lives, 3);
  });

  it(`should not allow set negative values`, () => {
    assert.throws(() => changeLive(CURRENT_STATE, -1).lives, /Lives should be of type number and not be negative value/);
  });

  it(`should not allow set non number value`, () => {
    assert.throws(() => changeLive(CURRENT_STATE, ``).lives, /Lives should be of type number and not be negative value/);
    assert.throws(() => changeLive(CURRENT_STATE, []).lives, /Lives should be of type number and not be negative value/);
    assert.throws(() => changeLive(CURRENT_STATE, {}).lives, /Lives should be of type number and not be negative value/);
    assert.throws(() => changeLive(CURRENT_STATE, undefined).lives, /Lives should be of type number and not be negative value/);
  });

  it(`should not allow NaN values`, () => {
    assert.throws(() => changeLive(CURRENT_STATE, NaN).lives, /Lives shouldn't be NaN value/);
  });

  it(`should not allow float value`, () => {
    assert.throws(() => changeLive(CURRENT_STATE, 2.2).lives, /Lives should be integer value/);
  });

  it(`should not allow set same value`, () => {
    assert.throws(() => changeLive(SAMPLE_GAME, 2).level, /Lives should changes on another value/);
  });

  it(`lives shouldn't be more than lives amount`, () => {
    assert.throws(() => changeLive(CURRENT_STATE, 4).lives, /Lives shouldn't be more than lives limit/);
  });

});
