function Graph(nodes, edges) {
	this.nodes = nodes;
	this.edges = edges;

	this.num_nodes = function() {
		return this.nodes.length;
	}

	this.num_edges = function() {
		return this.edges.length;
	}

	this.each_node = function(action){
		for (i=0; i < this.nodes.length; i++){
			action(this.nodes[i]);
		}
	}

	this.each_edge = function(action){
		for (i=0; i < this.edges.length; i++){
			action(this.edges[i]);
		}
	}

	this.out_degree = function(node) {
		var degree = 0;
		this.each_edge(function (edge) {
			if (edge[0] == node) {
				degree += 1;
			}
		});
		return degree;
	}

	this.in_degree = function(node) {
		var degree = 0;
		this.each_edge(function (edge) {
			if (edge[1] == node) {
				degree += 1;
			}
		});
		return degree;
	}

	this.each_adjacent_edge = function(node, action) {
		this.each_edge(function (edge){
			if (edge[0] == node) {
				action(edge);
			}
		});
	}

}
