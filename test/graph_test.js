K3GraphTestCase = TestCase ("With a K3 Graph");

K3GraphTestCase.prototype.setUp = function () {
  this.graph = new Graph ([1, 2, 3], [[1,2],[2,3],[3,1]]);
};

K3GraphTestCase.prototype.testNumNodes = function () {
  assertEquals("#num_nodes", 3, this.graph.num_nodes());
};

K3GraphTestCase.prototype.testNumEdges = function () {
	assertEquals("#num_edges", 3, this.graph.num_edges());
};

K3GraphTestCase.prototype.testEachNode = function () {
	var a = [];
  this.graph.each_node( function(node) {
    a.push(node);
  });
  assertEquals("#each_node iterator", [1, 2, 3], a);
};

K3GraphTestCase.prototype.testEachEdge = function () {
	var a = [];
  this.graph.each_edge( function(edge) {
    a.push(edge);
  });
  assertEquals("#each_edge iterator", [[1, 2], [2, 3],[3, 1]], a);
};

K3GraphTestCase.prototype.testOutDegree= function () {
  assertEquals("#out_degree(1)", 1, this.graph.out_degree(1));
  assertEquals("#out_degree(2)", 1, this.graph.out_degree(2));
  assertEquals("#out_degree(3)", 1, this.graph.out_degree(3));
};

K3GraphTestCase.prototype.testInDegree= function () {
  assertEquals("#in_degree(1)", 1, this.graph.in_degree(1));
  assertEquals("#in_degree(2)", 1, this.graph.in_degree(2));
  assertEquals("#in_degree(3)", 1, this.graph.in_degree(3));
};

K3GraphTestCase.prototype.testEachAdjacentEdge = function () {
  that = this;
 	function helper (node) {
    var a = [];
    that.graph.each_adjacent_edge(node, function(edge) {
     a.push(edge);
    });
    return a
  }
  assertEquals("#each_adjacent_edge(1) iterator", [[1, 2]], helper(1));
  assertEquals("#each_adjacent_edge(2) iterator", [[2, 3]], helper(2));
  assertEquals("#each_adjacent_edge(3) iterator", [[3, 1]], helper(3));
};



EmptyGraphTestCase = TestCase ("With an Empty Graph");

EmptyGraphTestCase.prototype.setUp = function () {
  this.graph = new Graph([],[]);
};

EmptyGraphTestCase.prototype.testNumNodes = function () {
  assertEquals("#num_nodes", 0, this.graph.num_nodes());
};

EmptyGraphTestCase.prototype.testNumEdges = function () {
  assertEquals("#num_edges", 0, this.graph.num_edges());
};

EmptyGraphTestCase.prototype.testEachNode = function () {
	var a = [];
  this.graph.each_node( function(node) {
  	a.push(node);
  });
  assertEquals("#each_node iterator", [], a);
};


