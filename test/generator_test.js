K1 = TestCase("K1");

K1.prototype.testComplete = function () {
    assertEquals(new Graph([1],[]), complete(1));
};

K2 = TestCase("K2");

K2.prototype.testComplete = function () {
    assertEquals(new Graph([1, 2], [[1, 2], [2, 1]]), complete(2));
};

K3 = TestCase("K3");

K3.prototype.testComplete = function () {
    assertEquals(new Graph([1, 2, 3], [[1, 2], [1, 3], [2, 1], [2, 3], [3, 1], [3,2]]), complete(3));
};

CB2 = TestCase("CB2");

CB2.prototype.testCompleteBipartite = function () {
    var original = new Graph([1, 2], [[1, 2], [2, 1]]);
    assertEquals(original, completeBipartite(2));
};

CB3 = TestCase("CD3");

CB3.prototype.testCompleteBipartite = function () {
    var original = new Graph([1, 2, 3], [[1, 2], [2, 1], [2, 3], [3, 2]]);
    assertEquals(original, completeBipartite(3));
};

CB4 = TestCase("CD4");

CB4.prototype.testCompleteBipartite = function () {
    var original = new Graph([1, 2, 3, 4], [[1, 2], [1, 4], [2, 1], [2, 3], [3, 2], [3, 4], [4, 1], [4, 3]]);
    assertEquals(original, completeBipartite(4));
};

