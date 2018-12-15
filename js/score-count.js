import {RULES} from "../js/ini-data.js";

const PROP_1 = `answer`;
const PROP_2 = `time`;
const PROPS_ARRAY = [PROP_1, PROP_2];

const GAME_LOSE = -1;

/**
 *
 * @param {Array} array
 * @return {number}
 */
const scoreCount = (array) => {
  if (!Array.isArray(array)) {
    throw new Error(`Answers data should be array`);
  }
  if (array.length > RULES.answerAmount) {
    throw new Error(`Answers data should contain amount of elements no more than 10`);
  }
  if (!array.length) {
    return GAME_LOSE;
  }

  let scores = 0;
  let rightAnswerAmount = 0;
  array.forEach((element) => {
    PROPS_ARRAY.forEach((item) => {
      if (!(item in element)) {
        throw new Error(`element of array should contain property - ${item}`);
      }
      if ((item === PROP_1) && !(typeof element[item] === `boolean`)) {
        throw new Error(`Prop ${PROP_1} should be boolean type, but ${typeof element[item]}`);
      }
      if (item === PROP_2) {
        if (!(typeof element[item] === `number`)) {
          throw new Error(`Prop ${PROP_2} should be number type`);
        }
        if (isNaN(element[item])) {
          throw new Error(`Something wrong with ${PROP_2}, NaN detected`);
        }
        if ((element[item] < RULES.timeBottomBorder) || (element[item] > RULES.timeTopBorder)) {
          throw new Error(`Something wrong with ${PROP_2}, out of bound exception`);
        }
      }
    });

    if (element.answer) {
      rightAnswerAmount += 1;
      scores += RULES.rightAnswerRating;

      if (element.time <= RULES.fastAnswerBorder) {
        scores += RULES.fastAnswerRating;
      } else if (element.time > RULES.slowAnswerBorder) {
        scores += RULES.slowAnswerRating;
      }
    }
  });
  // console.log(scores);

  const amountAnswerDifference = RULES.answerAmount - rightAnswerAmount;

  return (amountAnswerDifference > RULES.liveAmount) ? GAME_LOSE : scores + (RULES.liveAmount - amountAnswerDifference) * RULES.liveRating;
};

export {scoreCount};
