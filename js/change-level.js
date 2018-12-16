import {RULES} from "./ini-data";

export const changeLevel = (game, level) => {
  if ((typeof level !== `number`) || (level < 0)) {
    throw new Error(`Level should be of type number and not be negative value`);
  } else if (level > RULES.answerAmount) {
    throw new Error(`Level shouldn't be more than level amount`);
  } else if (isNaN(level)) {
    throw new Error(`Level shouldn't be NaN value`);
  } else if ((level | 0) !== level) {
    throw new Error(`Level should be integer value`);
  } else if ((game.level !== 0) && (game.level === level)) {
    throw new Error(`Level should changes on another value`);
  }
  const copyGame = Object.assign({}, game, {
    level
  });
  return copyGame;
};
