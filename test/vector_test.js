VectorTestCase = TestCase("Vector");

VectorTestCase.prototype.testEquality = function () {
	assertEquals(new Vector(1, 1), new Vector(1, 1));
	assertNotEquals(new Vector(1, 1), new Vector(1, 2));
}

VectorTestCase.prototype.testAdd = function() {
	assertEquals((new Vector(1, 2)).add(new Vector(1, 3)), new Vector(2, 5));
	assertEquals((new Vector(1, 1)).add(new Vector(0, 0)), new Vector(1, 1));
};

VectorTestCase.prototype.testSub = function() {
	assertEquals((new Vector(2, 5)).sub(new Vector(1, 3)), new Vector(1, 2));
	assertEquals((new Vector(1, 1)).sub(new Vector(0, 0)), new Vector(1, 1));
	assertEquals((new Vector(0, 0)).sub(new Vector(1, 1)), new Vector(-1, -1));
};

VectorTestCase.prototype.testMul = function() {
	assertEquals(new Vector(3, 2).mul(2), new Vector(6, 4));
};

VectorTestCase.prototype.testDiv = function() {
	assertEquals(new Vector(2, 4).div(2), new Vector(1, 2));
};

VectorTestCase.prototype.testLen = function() {
	assertEquals(new Vector(1, 0).len(), 1);
	assertEquals(new Vector(0, 1).len(), 1);
	assertEquals(new Vector(2, 1).len(), Math.sqrt(5));
};

VectorTestCase.prototype.testNormalize = function() {
	assertEquals(new Vector(1, 0).normalize(), new Vector(1, 0));
	assertEquals(new Vector(3, 0).normalize(), new Vector(1, 0));
};


