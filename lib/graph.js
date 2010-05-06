"use strict";

function Graph(nodes, edges) {
    this.nodes = nodes;
    this.edges = edges;

    this.num_nodes = function () {
        return this.nodes.length;
    };

    this.num_edges = function () {
        return this.edges.length;
    };

    this.each_node = function (action) {
        for (var i = 0; i < this.nodes.length; i += 1) {
            action(this.nodes[i]);
        }
    };

    this.each_edge = function (action) {
        for (var i = 0; i < this.edges.length; i += 1) {
            action(this.edges[i]);
        }
    };

    this.out_degree = function (node) {
        var degree = 0;
        this.each_edge(function (edge) {
            if (edge[0] === node) {
                degree += 1;
            }
        });
        return degree;
    };

    this.in_degree = function (node) {
        var degree = 0;
        this.each_edge(function (edge) {
            if (edge[1] === node) {
                degree += 1;
            }
        });
        return degree;
    };

    this.each_adjacent_edge = function (node, action) {
        this.each_edge(function (edge) {
            if (edge[0] === node) {
                action(edge);
            }
        });
    };

}

/*members each_adjacent_edge, each_edge, each_node, edges, in_degree, 
    length, nodes, num_edges, num_nodes, out_degree
*/
/*jslint white: true, onevar: true, undef: true, nomen: true, 
    eqeqeq: true, plusplus: true, bitwise: true, regexp: true, 
    newcap: true, immed: true, strict: true, maxlen: 72
*/
