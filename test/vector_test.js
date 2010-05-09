VectorTestCase = TestCase("Simple");

VectorTestCase.prototype.testEquality = function () {
	assertEquals(new VectorTestCase(1, 1), new VectorTestCase(1, 1));
	assertNotEquals(new VectorTestCase(1, 1), new VectorTestCase(1, 2));
}

VectorTestCase.prototype.testAdd = function() {
	assertEquals((new VectorTestCase(1, 2)).add(new VectorTestCase(1, 3)), new VectorTestCase(2, 5));
	assertEquals((new VectorTestCase(1, 1)).add(new VectorTestCase(0, 0)), new VectorTestCase(1, 1));
};

VectorTestCase.prototype.testSub = function() {
	assertEquals((new VectorTestCase(2, 5)).sub(new VectorTestCase(1, 3)), new VectorTestCase(1, 2));
	assertEquals((new VectorTestCase(1, 1)).sub(new VectorTestCase(0, 0)), new VectorTestCase(1, 1));
	assertEquals((new VectorTestCase(0, 0)).sub(new VectorTestCase(1, 1)), new VectorTestCase(-1, -1));
};

VectorTestCase.prototype.testMul = function() {
	assertEquals(new VectorTestCase(3, 2).mul(2), new VectorTestCase(6, 4));
};

VectorTestCase.prototype.testDiv = function() {
	assertEquals(new VectorTestCase(2, 4).div(2), new VectorTestCase(1, 2));
};

VectorTestCase.prototype.testLen = function() {
	assertEquals(new VectorTestCase(1, 0).len(), 1);
	assertEquals(new VectorTestCase(0, 1).len(), 1);
	assertEquals(new VectorTestCase(2, 1).len(), Math.sqrt(5));
};

VectorTestCase.prototype.testNormalize = function() {
	assertEquals(new VectorTestCase(1, 0).normalize(), new VectorTestCase(1, 0));
	assertEquals(new VectorTestCase(3, 0).normalize(), new VectorTestCase(1, 0));
};


