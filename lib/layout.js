"use strict";

function circleLayout(graph, dimension) {
    var locations = {},
        center = dimension.div(2),
        radius = Math.min(center.x, center.y) * 0.75,
        main = 2 * Math.PI / graph.num_nodes(),
        index = 0;
    graph.each_node(function (node) {
        var x = center.x + radius * Math.sin(index * main),
            y = center.y + radius * Math.cos(index * main);
        locations[node] = new Vector(x, y);
        index += 1;
    });
    return locations;
}

function randomLayout(graph, dimension) {
    var locations = {};
    graph.each_node(function (node) {
        locations[node] = new Vector(Math.random() * dimension.x, Math.random() * dimension.y);
    });
    return locations;
}

/*members PI, add, cos, dist, div, each_node, length, min, mul, 
    normalize, num_nodes, pow, random, sin, sqrt, sub, x, y
*/
/*jslint white: true, onevar: true, undef: true, nomen: true, 
    eqeqeq: true, plusplus: true, bitwise: true, regexp: true, 
    newcap: true, immed: true, strict: true, maxlen: 99
*/
