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

  expect(Object.prototype.hasOwnProperty.call(entry, 'destination')).toBe(true);
  expect(Object.prototype.hasOwnProperty.call(entry, 'flight')).toBe(true);
  expect(Object.prototype.hasOwnProperty.call(entry, 'time')).toBe(true);
  expect(Object.prototype.hasOwnProperty.call(entry, 'status')).toBe(true);
});
