"use strict";

function isomLayout (graph, dimension) {
	var interval = 0,
			max_epoch = 700,
			initial_adaption = 0.9,
			min_adation = 0,
			cooling_factor = 2.0,
			epoch = 1,
			interval = 100,
			radius = 5,
			min_radius = 1,
			adaption = initial_adaption,
			locations = randomLayout(graph, dimension);
			
	while (epoch < max_epoch) {
		adjust(graph, dimension);
		calcAdaption(graph, dimension);
		if (epoch % interval == 0) {
			radius -= 1
		}
		epoch += 1;
	}
	
	function adjust (graph, dimension) {
		var rloc = new Vector(Math.random() * dimension.x, Math.random() * dimension.y),
				winner = getWinner(graph, rloc),
				dfs = new DepthFirstSearch(graph, node);
	  graph.each_node(function (node) {
			var nloc = locations[node],
					distance = dfs.dist[node];
					if (distance < radius) {
						dx = Math.pow(2, -1 * distance) * adaption * (nloc.x.sub(rloc.x));
						dy = Math.pow(2, -1 * distance) * adaption * (nloc.y.sub(rloc.y));
						delta = new Vector(dx, dy);
						locations[node] = locations[node].sub(delta);
					}
		});
	}
	
	function getWinner (graph, random_location)
		return graph.nodes.reduce(function(prevNode, curNode, index, array){
			if (locations[curNode].dist(random_location) < locations[prevNode].dist(random_location)) {
				return curNode;
			}
		  else {
				return prevNode;
			}  
		});
	)
	
	function calcAdaption (graph, dimension) {
		adaption = Math.max(min_adaption, initial_adaption * Math.exp(-1 * cooling_factor * epoch/max_epoch));
	}

	
			
}