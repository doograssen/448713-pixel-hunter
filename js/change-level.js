export const INITIAL_STATE = Object.freeze({
  level: 0,
  lives: 3,
  time: 0
});

// const LEVEL_AMOUNT = 10;

export const changeLevel = (game, level) => {
  if ((typeof level !== `number`) || (level < 0)) {
    throw new Error(`Level should be of type number and not be negative value`);
  } else if (isNaN(level)) {
    throw new Error(`Level shouldn't be NaN value`);
  }
  const copyGame = Object.assign({}, game, {
    level
  });
  return copyGame;
};
