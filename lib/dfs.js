"use strict";

function DepthFirstSearch(graph, startNode) {
    var that = this;
    this.dcolor = {};
    this.prev  = {};
    this.dist  = {};
    this.list = [];
    this.dtime = 0;
    graph.each_node( function (node) {
        that.dcolor[node] = "white";
        that.prev[node]  =  node;
        that.dist[node] = Infinity;
    });
    this.dfs(graph, startNode);
}

DepthFirstSearch.prototype.dfs = function (graph, node) {
    var that = this;
    this.dcolor[node] = "grey";
    this.list.push(node);
    this.dist[node] = this.dtime;
    this.dtime += 1;
    graph.each_adjacent_edge(node, function (adj_edge) {
        var adj_node = adj_edge[1];
        switch (that.dcolor[adj_node]) {
            case "white":
            //Tree Edge
                that.prev[adj_node] = node;
                that.dfs(graph, adj_node);
                break;
            case "grey":
            //Back Edge
                break;
            case "black":
            //Forward Edge
                break;
        }
        that.dcolor[node] = "black";
  });
};

