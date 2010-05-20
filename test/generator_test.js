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

L1 = TestCase("L1");

L1.prototype.testLinear = function () {
    assertEquals(new Graph([1],[]), linear(1));
};

L2 = TestCase("L2");

L2.prototype.testLinear = function () {
    assertEquals(new Graph([1, 2], [[1, 2]]), linear(2));
};

L3 = TestCase("L3");

L3.prototype.testLinear = function () {
    assertEquals(new Graph([1, 2, 3],[[1, 2], [2, 3]]), linear(3));
};

R3 = TestCase("R3");

R3.prototype.testRing = function () {
    assertEquals(new Graph([1, 2, 3], [[1, 2], [2, 3], [3, 1]]), ring(3));
};

S4 = TestCase("S4");
S4.prototype.testStar = function () {
    assertEquals(new Graph([1, 2, 3, 4],[[1, 2], [1, 3], [1, 4]]), star(4));
};

W4 = TestCase("W4");

W4.prototype.testWheel = function () {
    var original = new Graph([1, 2, 3, 4],[[1, 2], [2, 3], [1, 3], [3, 4], [1, 4]]);
    assertEquals(original, wheel(4));
};

R10 = TestCase("R10");
R10.prototype.testRand = function () {
    graph = random(10, 10);
    assertEquals(10, graph.nodes.length);
    assertEquals(10, graph.edges.length);
};
