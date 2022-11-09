// Write your test here
const { firstWordRepet } = require('./challenge02');

describe('HashTable Challenge-02', () => {
    test('firstWordRepet function test-03', () => {
      let str = 'These challenges are really good.';
      let word = firstWordRepet(str);
      expect(word).toEqual('No repetition');
    });
  test('firstWordRepet function test-01', () => {
    let str = 'These challenges are really good good challenges.';
    let word = firstWordRepet(str);
    expect(word).toEqual('good');
  });

});