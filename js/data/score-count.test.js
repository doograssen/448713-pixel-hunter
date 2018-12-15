import {assert} from 'chai';
import {scoreCount} from "../score-count";

const sampleScores1 = Array(10).fill({answer: true, time: 29.9}, 0, 10);

const sampleScores2 = Array(10).fill({answer: true, time: 29.9}, 0, 7).fill({answer: false, time: 29.9}, 7, 10);

const sampleScores3 = Array(10).fill({answer: true, time: 10}, 0, 7).fill({answer: false, time: 10}, 7, 10);

const sampleScores4 = Array(10).fill({answer: false, time: 10}, 0, 1).fill({answer: true, time: 11}, 1, 10);

const sampleScores5 = Array(10).fill({answer: true, time: 29.9}, 0, 6).fill({answer: false, time: 29.9}, 6, 10);

const sampleScores6 = [{answer: true, time: 29.9}];

const sampleScores7 = [{answer: true}];

const sampleScores8 = [{time: 20}];

const sampleScores9 = [{answer: true, time: `10`}];

const sampleScores10 = [{answer: `true`, time: 1}];

const sampleScores11 = [{answer: true, time: 40}];

const sampleScores12 = [{answer: true, time: -40}];

const sampleScores13 = [{answer: true, time: NaN}];

const sampleScores14 = Array(11).fill({answer: true, time: 29.9}, 0);

describe(`#scoreCount`, () => {
  it(`should return right scores`, () => {
    assert.equal(scoreCount(sampleScores1), 650);
    assert.equal(scoreCount(sampleScores2), 350);
    assert.equal(scoreCount(sampleScores3), 1050);
    assert.equal(scoreCount(sampleScores4), 1000);
    assert.equal(scoreCount(sampleScores5), -1);
    assert.equal(scoreCount(sampleScores6), -1);
    assert.equal(scoreCount([]), -1);
  });

  it(`cast on wrong type in parameter`, () => {
    assert.throws(() => scoreCount(``), `Answers data should be array`);
    assert.throws(() => scoreCount(null), `Answers data should be array`);
    assert.throws(() => scoreCount(5678), `Answers data should be array`);
    assert.throws(() => scoreCount(true), `Answers data should be array`);
    assert.throws(() => scoreCount({}), `Answers data should be array`);
    assert.throws(() => scoreCount(undefined), `Answers data should be array`);
  });

  it(`wrong parameter property value`, () => {
    assert.throws(() => scoreCount(sampleScores7), `element of array should contain property - time`);
    assert.throws(() => scoreCount(sampleScores8), `element of array should contain property - answer`);
    assert.throws(() => scoreCount(sampleScores9), `Prop time should be number type`);
    assert.throws(() => scoreCount(sampleScores10), `Prop answer should be boolean type, but string`);
    assert.throws(() => scoreCount(sampleScores11), `Something wrong with time, out of bound exception`);
    assert.throws(() => scoreCount(sampleScores12), `Something wrong with time, out of bound exception`);
    assert.throws(() => scoreCount(sampleScores13), `Something wrong with time, NaN detected`);
  });

  it(`Answers data should contain amount of elements no more than 10`, () => {
    assert.throws(() => scoreCount(sampleScores14), `Answers data should contain amount of elements no more than 10`);
  });
});
