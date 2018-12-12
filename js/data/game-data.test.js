import {assert} from 'chai';
import {scoreCount} from "../score-count";

const scoresArray1 = [{answer: true, time: 29.9}, {answer: true, time: 29.9}, {answer: true, time: 29.9},
  {answer: true, time: 29.9}, {answer: true, time: 29.9}, {answer: true, time: 29.9},
  {answer: true, time: 29.9}, {answer: true, time: 29.9}, {answer: true, time: 29.9},
  {answer: true, time: 29.9}];

const scoresArray2 = [{answer: true, time: 29.9}, {answer: true, time: 29.9}, {answer: true, time: 29.9},
  {answer: true, time: 29.9}, {answer: true, time: 29.9}, {answer: true, time: 29.9},
  {answer: false, time: 29.9}, {answer: false, time: 29.9}, {answer: true, time: 29.9},
  {answer: false, time: 29.9}];

const scoresArray3 = [{answer: true, time: 10}, {answer: true, time: 10}, {answer: true, time: 10},
  {answer: true, time: 10}, {answer: true, time: 10}, {answer: true, time: 10},
  {answer: false, time: 10}, {answer: false, time: 10}, {answer: true, time: 10},
  {answer: false, time: 10}];

const scoresArray4 = [{answer: true, time: 10}, {answer: true, time: 11}, {answer: true, time: 11},
  {answer: true, time: 11}, {answer: true, time: 11}, {answer: true, time: 11},
  {answer: true, time: 11}, {answer: true, time: 11}, {answer: true, time: 11},
  {answer: false, time: 11}];

const scoresArray5 = [{answer: true, time: 29.9}, {answer: true, time: 29.9}, {answer: true, time: 29.9},
  {answer: true, time: 29.9}, {answer: false, time: 29.9}, {answer: true, time: 29.9},
  {answer: false, time: 29.9}, {answer: false, time: 29.9}, {answer: true, time: 29.9},
  {answer: false, time: 29.9}];

const scoresArray6 = [{answer: true, time: 29.9}];

const scoresArray7 = [{answer: true}];

const scoresArray8 = [{time: 20}];

const scoresArray9 = [{answer: true, time: `10`}];

const scoresArray10 = [{answer: `true`, time: 1}];

const scoresArray11 = [{answer: true, time: 40}];

const scoresArray12 = [{answer: true, time: -40}];

const scoresArray13 = [{answer: true, time: NaN}];


describe(`#scoreCount`, () => {
  it(`should return right scores`, () => {
    assert.equal(scoreCount(scoresArray1), 650);
    assert.equal(scoreCount(scoresArray2), 350);
    assert.equal(scoreCount(scoresArray3), 1050);
    assert.equal(scoreCount(scoresArray4), 1050);
    assert.equal(scoreCount(scoresArray5), -1);
    assert.equal(scoreCount(scoresArray6), -1);
    assert.equal(scoreCount([]), -1);
  });

  it(`wrong parameter type`, () => {
    assert.throws(() => scoreCount(``), `Answers data should be array`);
    assert.throws(() => scoreCount(null), `Answers data should be array`);
    assert.throws(() => scoreCount(5678), `Answers data should be array`);
    assert.throws(() => scoreCount(true), `Answers data should be array`);
    assert.throws(() => scoreCount({}), `Answers data should be array`);
    assert.throws(() => scoreCount(undefined), `Answers data should be array`);
  });

  it(`wrong parameter property value`, () => {
    assert.throws(() => scoreCount(scoresArray7), `element of array should contain property - time`);
    assert.throws(() => scoreCount(scoresArray8), `element of array should contain property - answer`);
    assert.throws(() => scoreCount(scoresArray9), `Prop time should be number type`);
    assert.throws(() => scoreCount(scoresArray10), `Prop answer should be boolean type, but string`);
    assert.throws(() => scoreCount(scoresArray11), `Something wrong with time, out of bound exception`);
    assert.throws(() => scoreCount(scoresArray12), `Something wrong with time, out of bound exception`);
    assert.throws(() => scoreCount(scoresArray13), `Something wrong with time, NaN detected`);
  });

});
