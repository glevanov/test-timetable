import formatNumber from '../../src/js/formatNumber';

test('formats numbers correctly', () => {
  expect(formatNumber(0)).toBe('00');
  expect(formatNumber(1)).toBe('01');
  expect(formatNumber(7)).toBe('07');
  expect(formatNumber(9)).toBe('09');
  expect(formatNumber(10)).toBe('10');
  expect(formatNumber(13)).toBe('13');
  expect(formatNumber(20)).toBe('20');
  expect(formatNumber(24)).toBe('24');
});
