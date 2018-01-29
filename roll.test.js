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

});
