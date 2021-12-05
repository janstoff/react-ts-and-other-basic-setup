import {tripleNumber} from '../utils/triple-number';

describe('tripleNumber()', () => {
  it('returns input value times 3, if the input value is a number', () => {
    expect(tripleNumber(3)).toBe(9);
  });

  it('returns input value times 3, if the input value is number as a string', () => {
    expect(tripleNumber('3')).toBe(9);
  });

  it('returns undefined, if the input value is a random text string', () => {
    expect(tripleNumber('three')).toBe(undefined);
  });

  it('returns undefined, if the input value is nullish', () => {
    expect(tripleNumber(undefined)).toBe(undefined);
    expect(tripleNumber(null)).toBe(undefined);
  });
});
