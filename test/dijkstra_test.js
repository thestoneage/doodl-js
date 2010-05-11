DijkG1TestCase = TestCase ("Graph [1, 2], [[1,2]]");

DijkG1TestCase.prototype.setUp = function () {
  this.graph = new Graph([1, 2],[[1, 2]]);
};

DijkG1TestCase.prototype.testDijkstraDist = function () {
  var dijk = new Dijkstra(this.graph, 1);
	assertEquals("Dist", {1: 0, 2: 1}, dijk.dist);
};

DijkG2TestCase = TestCase ("Graph [1, 2, 3], [[1,2], [2, 3]]");

DijkG2TestCase.prototype.setUp = function () {
  this.graph = new Graph([1, 2, 3],[[1, 2], [2, 3]]);
};

DijkG2TestCase.prototype.testDijkstraDist = function () {
  var dijk = new Dijkstra(this.graph, 1);
	assertEquals("Dist", {1: 0, 2: 1, 3: 2}, dijk.dist);
};

DijkG3TestCase = TestCase ("Graph [1, 2, 3, 4], [[1,2], [2, 3]]");

DijkG3TestCase.prototype.setUp = function () {
  this.graph = new Graph([1, 2, 3, 4],[[1, 2], [2, 3], [3, 4]]);
};

DijkG3TestCase.prototype.testDijkstraDist = function () {
  var dijk = new Dijkstra(this.graph, 1);
	assertEquals("Dist", {1: 0, 2: 1, 3: 2, 4: 3}, dijk.dist);
};
