const roll = require('./roll');

describe('Basic cases: ', () => {
	test('Base Case: ', () => {
		expect(roll([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).
			toBe(90);
	});
});
