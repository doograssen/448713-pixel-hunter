export const RULES = {
  rightAnswerRating: 100,
  fastAnswerRating: 50,
  fastAnswerBorder: 10,
  slowAnswerBorder: 20,
  slowAnswerRating: -50,
  timeBottomBorder: 0,
  timeTopBorder: 30,
  liveRating: 50,
  liveAmount: 3,
  answerAmount: 10,
};

export const INITIAL_STATE = Object.freeze({
  level: 0,
  lives: 3,
  time: 0
});

export let CURRENT_STATE = {
  level: 0,
  lives: 3,
  time: 0,
};
