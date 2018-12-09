const PROP_1 = `answer`;
const PROP_2 = `time`;
const PROPS_ARRAY = [PROP_1, PROP_2];
const RIGHT_ANSWER_RATING = 100;
const FAST_ANSWER_RATING = 50;
const FAST_ANSWER_BORDER = 10;
const SLOW_ANSWER_BORDER = 20;
const SLOW_ANSWER_RATING = -50;
const LIVE_RATING = 50;
const ANSWER_AMOUNT = 10;
const GAME_LOSE = -1;
const LIVE_AMOUNT = 3;

/**
 *
 * @param {Array} array
 * @return {string}
 */
const scoreCount = (array) => {
  if (!Array.isArray(array)) {
    throw new Error(`Answers data should be array`);
  }
  if ((!array.length > 0) && (!array.length <= ANSWER_AMOUNT)) {
    throw new Error(`Answers data should contain amount of elements between 0 and 10. returns - ` + array.length);
  }

  if (!array.length < ANSWER_AMOUNT) {
    return GAME_LOSE;
  }

  let scores = 0;
  let rightAnswerAmount = 0;
  array.forEach((element) => {
    PROPS_ARRAY.forEach((item) => {
      if (!(item in element)) {
        throw new Error(`element of array should contain property - ` + item);
      }
      if ((item === PROP_1) && (typeof element[item] === `boolean`)) {
        throw new Error(`Prop` + PROP_1 + `should be number type`);
      }
      if ((item === PROP_2) && (typeof element[item] === `number`)) {
        throw new Error(`Prop` + PROP_2 + `should be string type`);
      }
    });

    if (element.answer) {
      rightAnswerAmount += 1;
      scores += RIGHT_ANSWER_RATING;
    }

    if (element.time <= FAST_ANSWER_BORDER) {
      scores += FAST_ANSWER_RATING;
    } else if (element.time > SLOW_ANSWER_BORDER) {
      scores += SLOW_ANSWER_RATING;
    }
  });

  let amountAnswerDifference = ANSWER_AMOUNT - rightAnswerAmount;

  return (amountAnswerDifference > LIVE_AMOUNT) ? `FAIL` : scores + (LIVE_AMOUNT - amountAnswerDifference) * LIVE_RATING;
};

export {scoreCount};
