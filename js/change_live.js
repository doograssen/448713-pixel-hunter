import {RULES} from "./ini-data";

export const changeLive = (game, lives) => {
  if ((typeof lives !== `number`) || (lives < 0)) {
    throw new Error(`Lives should be of type number and not be negative value`);
  } else if (lives > RULES.liveAmount) {
    throw new Error(`Lives shouldn't be more than lives limit`);
  } else if (isNaN(lives)) {
    throw new Error(`Lives shouldn't be NaN value`);
  } else if ((lives | 0) !== lives) {
    throw new Error(`Lives should be integer value`);
  } else if ((game.lives !== 3) && (game.lives === lives)) {
    throw new Error(`Lives should changes on another value`);
  }
  const copyGame = Object.assign({}, game, {
    lives
  });
  return copyGame;
};
