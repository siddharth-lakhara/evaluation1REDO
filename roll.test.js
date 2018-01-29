const roll = require('./roll');

describe('Basic cases: ', () => {
	test('Base Case: ', () => {
		expect(roll([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).
			toBe(90);
	});

	test('Test for basic strike: ', () => {
		expect(roll([10, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).
			toBe(100);
	});

	test('special strike case: strike followed by zero: ', () => {
		expect(roll([10, 0, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).
			toBe(94);
	});

	test('Test for spare: ', () => {
		expect(roll([4, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).
			toBe(94);
	});

});

describe('testing at end: ', () => {
	test('Test for spare at the end: ', () => {
		expect(roll([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 4, 6, 2])).
			toBe(93);
	});

	test('Test for strike at the end: ', () => {
		expect(roll([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 10, 6, 6])).
			toBe(103);
	});
});
