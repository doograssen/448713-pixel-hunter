import {assert} from 'chai';
import {changeLevel, INITIAL_STATE} from "../change-level";

describe(`#changeLevel`, () => {
  it(`should update level information`, () => {
    assert.equal(changeLevel(INITIAL_STATE, 1).level, 1);
    assert.equal(changeLevel(INITIAL_STATE, 2).level, 2);
    assert.equal(changeLevel(INITIAL_STATE, 10).level, 10);
  });

  it(`should not allow set negative values`, () => {
    assert.throws(() => changeLevel(INITIAL_STATE, -1).level, /Level should be of type number and not be negative value/);
  });

  it(`should not allow set non number value`, () => {
    assert.throws(() => changeLevel(INITIAL_STATE, []).level, /Level should be of type number and not be negative value/);
    assert.throws(() => changeLevel(INITIAL_STATE, {}).level, /Level should be of type number and not be negative value/);
    assert.throws(() => changeLevel(INITIAL_STATE, undefined).level, /Level should be of type number and not be negative value/);
  });

  it(`should not allow NaN values`, () => {
    assert.throws(() => changeLevel(INITIAL_STATE, NaN).level, /Level shouldn't be NaN value/);
  });

});
