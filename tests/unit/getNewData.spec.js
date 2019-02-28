import getNewData from '../../src/js/getNewData';

test('returns an array', () => {
  expect(Array.isArray(getNewData(1))).toBe(true);
});

test('returns array of expected length', () => {
  expect(getNewData(1).length).toBe(1);
  expect(getNewData(38).length).toBe(38);
  expect(getNewData(100).length).toBe(100);
});

test('array items have expected fields', () => {
  const entry = getNewData(1)[0];

  expect(entry.hasOwnProperty('destination')).toBe(true);
  expect(entry.hasOwnProperty('flight')).toBe(true);
  expect(entry.hasOwnProperty('time')).toBe(true);
  expect(entry.hasOwnProperty('status')).toBe(true);
});
