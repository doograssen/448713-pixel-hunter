import {assert} from 'chai';
import {CURRENT_STATE} from "../ini-data.js";
import {changeTime} from "../change-time.js";

const SAMPLE_GAME = {
  level: 2,
  lives: 3,
  time: 2,
};

describe(`#changeTime`, () => {
  it(`should update time information`, () => {
    assert.equal(changeTime(CURRENT_STATE, 0).time, 0);
    assert.equal(changeTime(CURRENT_STATE, 1).time, 1);
    assert.equal(changeTime(CURRENT_STATE, 2.2).time, 2.2);
    assert.equal(changeTime(CURRENT_STATE, 30).time, 30);
  });

  it(`should not allow set negative values`, () => {
    assert.throws(() => changeTime(CURRENT_STATE, -1).time, /Time should be of type number and not be negative value/);
  });

  it(`should not allow set non number value`, () => {
    assert.throws(() => changeTime(CURRENT_STATE, ``).time, /Time should be of type number and not be negative value/);
    assert.throws(() => changeTime(CURRENT_STATE, []).time, /Time should be of type number and not be negative value/);
    assert.throws(() => changeTime(CURRENT_STATE, {}).time, /Time should be of type number and not be negative value/);
    assert.throws(() => changeTime(CURRENT_STATE, undefined).time, /Time should be of type number and not be negative value/);
  });

  it(`should not allow NaN values`, () => {
    assert.throws(() => changeTime(CURRENT_STATE, NaN).time, /Time shouldn't be NaN value/);
  });

  it(`should not allow set same value`, () => {
    assert.throws(() => changeTime(SAMPLE_GAME, 2).level, /Time should changes on another value/);
  });

  it(`Time shouldn't be more than time limit`, () => {
    assert.throws(() => changeTime(CURRENT_STATE, 30.1).time, /Time shouldn't be more than time limit/);
  });

});
