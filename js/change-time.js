import {RULES} from "./ini-data";

export const changeTime = (game, time) => {
  if ((typeof time !== `number`) || (time < 0)) {
    throw new Error(`Time should be of type number and not be negative value`);
  } else if (time > RULES.timeTopBorder) {
    throw new Error(`Time shouldn't be more than time limit`);
  } else if (isNaN(time)) {
    throw new Error(`Time shouldn't be NaN value`);
  } else if ((game.time !== 0) && (game.time === time)) {
    throw new Error(`Time should changes on another value`);
  }
  const copyGame = Object.assign({}, game, {
    time
  });
  return copyGame;
};
