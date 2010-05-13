FW1TestCase = TestCase ("FW Graph [1, 2], [[1,2]]");

FW1TestCase.prototype.setUp = function () {
  this.graph = new Graph([1, 2],[[1, 2]]);
};

FW1TestCase.prototype.testFloydWarshall = function () {
  var floyd = new FloydWarshall(this.graph);
	assertEquals("Dist", {1: {1:0, 2: 1}, 2:{1: Infinity, 2:0}}, floyd.dist);
};

FW2TestCase = TestCase ("FW Graph [1, 2, 3], [[1,2], [2, 3]]");

FW2TestCase.prototype.setUp = function () {
  this.graph = new Graph([1, 2, 3],[[1, 2], [2, 3]]);
};

FW2TestCase.prototype.testFloydWarshall = function () {
  var floyd = new FloydWarshall(this.graph);
	assertEquals("Dist", {1: {1:0, 2:1, 3:2}, 2: {1:Infinity, 2:0, 3:1}, 3: {1:Infinity, 2:Infinity, 3:0}}, floyd.dist);
};

FW3TestCase = TestCase ("FW Graph [1, 2, 3, 4], [[1,2], [2, 3]]");

FW3TestCase.prototype.setUp = function () {
  this.graph = new Graph([1, 2, 3, 4],[[1, 2], [2, 3], [3, 4]]);
};

FW3TestCase.prototype.testFloydWarshall = function () {
  var floyd = new FloydWarshall(this.graph);
	assertEquals("Dist", {1: {1: 0, 2: 1, 3: 2, 4: 3}, 2: {1:Infinity, 2: 0, 3: 1, 4:2}, 3: {1:Infinity, 2:Infinity, 3:0, 4:1}, 4: {1:Infinity, 2:Infinity, 3:Infinity, 4:0}}, floyd.dist);
};

