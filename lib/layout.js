"use strict";

function Vector(a, b) {
    this.x = a;
    this.y = b;
    
    this.dist = function (other) {
        Math.sqrt(Math.pow((this.x - other.x), 2) + Math.pow((this.y - other.y), 2));
    };

    this.add =  function (other) {
        return new Vector(this.x + other.x, this.y + other.y);
    };

    this.sub = function (other) {
        return new Vector(this.x - other.x, this.y - other.y);
    };

    this.mul = function (scalar) {
        return new Vector(scalar * this.x, scalar * this.y);
    };

    this.div = function (scalar) {
        return new Vector(this.x / scalar, this.y / scalar);
    };
    
    this.length = function (scalar) {
        Math.sqrt(Math.pow(this.x, 2), Math.pow(this.y, 2));
    };

    this.normalize = function () {
        return this.div(this.length());
    };
}

function CircleLayout(graph) {
    this.layout = function (graph, dimension) {
        var locations = {},
            center = new Vector(dimension.x / 2, dimension.y / 2),
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
    };

}

function RandomLayout() {
    this.layout = function (graph, dimension) {
        var locations = {};
        graph.each_node(function (node) {
            locations[node] = new Vector(Math.random() * dimension.x, Math.random() * dimension.y);
        });
        return locations;
    };
}

/*members PI, add, cos, dist, div, each_node, layout, length, min, mul, 
    normalize, num_nodes, pow, random, sin, sqrt, sub, x, y
*/
/*jslint white: true, onevar: true, undef: true, nomen: true, 
    eqeqeq: true, plusplus: true, bitwise: true, regexp: true, 
    newcap: true, immed: true, strict: true, maxlen: 99
*/
