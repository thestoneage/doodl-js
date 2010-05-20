function complete(size) {
    var nodes = [],
        edges = [];
    for (var i = 1; i <= size; i += 1) {
        nodes.push(i);
        for (var j = 1; j <= size; j += 1) {
            if (i !== j) {
                edges.push([i, j]);
            }
        }
    }
    return new Graph(nodes, edges);
}

function completeBipartite(size) {
    var ns = [],
        edges = [],
        i;
   for (i = 1; i <= size; i++) {
       ns.push(i);
       for (var j = 1; j <= size; j += 1) {
           if ((i % 2) + (j % 2) == 1) {
               edges.push([i, j]);
           }
       }
  }
    return new Graph(ns, edges);
}


