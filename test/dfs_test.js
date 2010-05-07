Graph1TestCase = TestCase ("Graph [1, 2], [[1,2]]");

Graph1TestCase.prototype.setUp = function () {
  this.graph = new Graph([1, 2],[[1, 2]]);
};

Graph1TestCase.prototype.testDfs = function () {
  var dfs_object = new DepthFirstSearch(this.graph, 1);
	assertEquals("List", [1, 2], dfs_object.list);
};


Graph2TestCase = TestCase ("Graph [1, 2, 3, 4], [[1, 2], [1, 3], [2, 3], [2, 4], [4, 1]]");

Graph2TestCase.prototype.setUp = function () {
  this.graph = new Graph([1, 2, 3, 4],[[1, 2], [1, 3], [2, 4], [3, 4] [4, 1]]);
};

Graph2TestCase.prototype.testDfs = function () {
  var dfs_object = new DepthFirstSearch(this.graph, 1);
	assertEquals("List", [1, 2, 4, 3], dfs_object.list);
};
