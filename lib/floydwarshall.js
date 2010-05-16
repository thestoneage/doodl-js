function FloydWarshall(graph_parameter) {
    var graph = graph_parameter,
    dist = {};
    graph.each_node(function (n) {
        dist[n] = {};
        graph.each_node(function (m) {
            dist[n][m] = (m === n ? 0 : Infinity);
        });
    });
    graph.each_edge(function (edge) {
        dist[edge[0]][edge[1]] = 1;
    });
    graph.each_node(function  (k) {
        graph.each_node(function  (j) {
            graph.each_node(function  (i) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            })
        });
    });
    this.dist = dist;
}

FloydWarshall.prototype.diameter = function () {
    var diam = 0;
    for (i in this.dist) {
        for (j in this.dist[i]) {
            if (this.dist[i][j] < Infinity && diam < this.dist[i][j]) {
                diam = this.dist[i][j];
            }
        }
    }
    return diam;
};

