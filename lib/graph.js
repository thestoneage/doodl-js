"use strict";

function Graph(nodes, edges) {
    if (nodes !== undefined) {
        this.nodes = nodes;
    }
    if (edges !== undefined) {
        this.edges = edges;
    }
}

Graph.prototype = {
    nodes : [],
    edges : [],

    num_nodes : function () {
        return this.nodes.length;
    },

    num_edges : function () {
        return this.edges.length;
    },

    each_node : function (action) {
        this.nodes.forEach(action);
    },

    each_edge : function (action) {
        this.edges.forEach(action);
    },

    out_degree : function (node) {
        var degree = 0;
        this.each_edge(function (edge) {
            if (edge[0] === node) {
                degree += 1;
            }
        });
        return degree;
    },

    in_degree : function (node) {
        var degree = 0;
        this.each_edge(function (edge) {
            if (edge[1] === node) {
                degree += 1;
            }
        });
        return degree;
    },

    each_adjacent_edge : function (node, action) {
        this.each_edge(function (edge) {
            if (edge[0] === node) {
                action(edge);
            }
        });
    }

};

function UndirectedGraph(nodes, edges) {
    if (nodes !== undefined) {
        this.nodes = nodes;
    }
    if (edges !== undefined) {
        this.edges = edges;
    }
}

UndirectedGraph.prototype = new Graph();

UndirectedGraph.prototype.in_degree = function (node) {
  var degree = 0;
  this.each_edge(function (edge) {
      if (edge[0] === node || edge[1] === node) {
          degree += 1;
      }
  });
  return degree;
}

UndirectedGraph.prototype.out_degree  = UndirectedGraph.prototype.in_degree;

UndirectedGraph.prototype.each_adjacent_edge = function (node, action) {
    this.each_edge(function (edge) {
        if (edge[0] === node || edge[1] === node) {
            action(edge);
        }
    });
};



/*members each_adjacent_edge, each_edge, each_node, edges, forEach, 
    in_degree, length, nodes, num_edges, num_nodes, out_degree
*/
/*jslint white: true, onevar: true, undef: true, nomen: true, 
    eqeqeq: true, plusplus: true, bitwise: true, regexp: true, 
    newcap: true, immed: true, strict: true, maxlen: 72
*/
