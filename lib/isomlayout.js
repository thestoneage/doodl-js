"use strict";

function isomLayout (graph, dimension, callback) {
	var max_epoch = 500	,
			initial_adaption = 0.8,
			min_adaption = 0.001,
			cooling_factor = 0.4,
			epoch = 1,
			interval = 166,
			radius = 3,
			min_radius = 1,
			adaption = initial_adaption,
			locations = circleLayout(graph, dimension);

	while (epoch < max_epoch) {
		adjust(graph, dimension);
		calcAdaption(graph, dimension);
		if (epoch % interval == 0 && radius >= 0) {
			radius -= 1
		}
		epoch += 1;
		if (callback && callback(locations));
	}
	return locations;

	function adjust (graph, dimension) {
		var rloc = new Vector(Math.random() * dimension.x, Math.random() * dimension.y),
				winner = getWinner(graph, rloc),
				dijk = new Dijkstra(graph, winner); //use dijkstra here!
	  graph.each_node(function (node) {
			var nloc = locations[node],
					distance = dijk.dist[node];
					if (distance < radius) {
						dx = Math.pow(2, -1 * distance) * adaption * (nloc.x - rloc.x);
						dy = Math.pow(2, -1 * distance) * adaption * (nloc.y - rloc.y);
						delta = new Vector(dx, dy);
						locations[node] = locations[node].sub(delta);
					}
		});
	}

	function getWinner (graph, random_location) {
		var winner = graph.nodes.reduce(function(prevNode, curNode, index, array) {
			if (locations[curNode].dist(random_location) < locations[prevNode].dist(random_location)) {
				return curNode;
			}
		  else {
				return prevNode;
			}  
		});
		return winner;
	}

	function calcAdaption (graph, dimension) {
		adaption = Math.max(min_adaption, initial_adaption * Math.exp(-1 * cooling_factor * (epoch / max_epoch)));
	}

}
