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

describe('Multiple wins: ', () => {
	test('Test for multiple spare: ', () =>
		expect(roll([3, 6, 4, 6, 4, 6, 4, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).
			toBe(104));

	test('Test for multiple spare and strike at end: ', () =>
		expect(roll([3, 6, 4, 6, 4, 6, 4, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 10,6,6])).
			toBe(117));

	test('Test for spare and multiple strikes: ', () =>
		expect(roll([4, 6, 10, 10, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).
			toBe(125));

	test('Test for multiple spares & strikes: ', () =>
		expect(roll([4, 6, 10, 10, 3, 6, 4, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).
			toBe(129));
});

test('Zero: ', () => {
	expect(roll([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 0, 6, 3, 6, 3, 6, 3, 6, 3, 6])).
		toBe(87);
});
