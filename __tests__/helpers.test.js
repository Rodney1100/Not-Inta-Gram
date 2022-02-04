const {format_date, format_plural, format_url} = require('../utils/helpers');

test('format_url() returns a simplified url string', () => {
  const url1 = format_url('http://readysetgo.com/page/1');
  const url2 = format_url('https://www.notcoolstuff.com/abcdefg/');
  const url3 = format_url('https://www.cameras-R-us.com?q=hello');

  expect(url1).toBe('readysetgo.com');
  expect(url2).toBe('notcoolstuff.com');
  expect(url3).toBe('cameras-R-us.com');
});

test('format_plural() returns a pluralized word', () => {
  const word1 = format_plural('animal', 1);
  const word2 = format_plural('frog', 2);

  expect(word1).toBe('animal');
  expect(word2).toBe('frogs');
});

test('format_date() returns a date string', () => {
  const date = new Date('2020-10-15 12:20:03');

  expect(format_date(date)).toBe('10/15/2020');
});