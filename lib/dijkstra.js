"use strict";

function Dijkstra(graph, startNode) {
	var u,
			that = this;
	this.init(graph, startNode);
	while (this.queue.length > 0) {
		this.queue.sort(function (a, b) { 
			if (that.dist[a] < that.dist[b]) {
				return -1;
			}
			else {
				return 1;
			}
		});
		u = this.queue.shift();
		if (this.dist[u] === Infinity) {
			break;
		}
		graph.each_adjacent_edge(u, function (e) {
			var v = e[1];
			if (that.dist[u] + 1 < that.dist[v]) {
				that.dist[v] = that.dist[u] + 1;
				that.prev[v] = u;
			}
		}); 
	}
}

Dijkstra.prototype.init = function(graph, startNode) {
	this.prev = {};
	this.dist = {};
	that = this;
	graph.each_node(function (node) {
		that.prev[node] = undefined;
		that.dist[node] = Infinity;
	});
	this.dist[startNode] = 0;
	this.queue = graph.nodes.filter(function () { return true	});
};

