Graph1TestCase = TestCase ("Graph [1, 2], [[1,2]]");

Graph1TestCase.prototype.setUp = function () {
  this.graph = new Graph([1, 2],[[1, 2]]);
};

Graph1TestCase.prototype.testDfsList = function () {
    var dfs_object = new DepthFirstSearch(this.graph, 1);
    assertEquals("List", [1, 2], dfs_object.list);
};

Graph1TestCase.prototype.testDfsDist = function() {
    var dfs_object = new DepthFirstSearch(this.graph, 1);
    assertEquals("Dist", 0, dfs_object.dist[1]);
    assertEquals("Dist", 1, dfs_object.dist[2]);
};


Graph2TestCase = TestCase ("Graph [1, 2, 3, 4], [[1, 2], [1, 3], [2, 3], [2, 4], [4, 1]]");

Graph2TestCase.prototype.setUp = function () {
    this.graph = new Graph([1, 2, 3, 4],[[1, 2], [1, 3], [2, 4], [3, 4] [4, 1]]);
};

Graph2TestCase.prototype.testDfsList = function () {
    var dfs_object = new DepthFirstSearch(this.graph, 1);
    assertEquals("List", [1, 2, 4, 3], dfs_object.list);
};

Graph2TestCase.prototype.testDfsDist = function () {
    var dfs_object = new DepthFirstSearch(this.graph, 1);
    assertEquals("Dist 1 to 1", 0, dfs_object.dist[1]);
    assertEquals("Dist 1 to 2", 1, dfs_object.dist[2]);
    assertEquals("Dist 1 to 3", 3, dfs_object.dist[3]);
    assertEquals("Dist 1 to 3", 3, dfs_object.dist[3]);
};

