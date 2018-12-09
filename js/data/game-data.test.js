import {assert} from 'chai';
import {scoreCount} from "../score-count";

const scoresArray = [{answer: true, time: 29.9}, {answer: true, time: 29.9}, {answer: true, time: 29.9},
  {answer: true, time: 29.9}, {answer: true, time: 29.9}, {answer: true, time: 29.9},
  {answer: true, time: 29.9}, {answer: true, time: 29.9}, {answer: true, time: 29.9},
  {answer: true, time: 29.9}];


describe(`Score count validate`, () => {
  describe(`#scoreCount`, () => {
    it(`should return scores`, () => {
      assert(scoreCount(scoresArray));
    });

    it(`corner cases`, () => {
      assert(!scoreCount(``));
      assert(!scoreCount(null));
      assert(!scoreCount(undefined));
    });
  });
});
