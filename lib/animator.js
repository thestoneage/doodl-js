"use strict";

function render(graph, locations) {
    var ctx = document.getElementById('canvas').getContext('2d');
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.lineWidth = 3;
    graph.each_edge(function (edge) {
        var source = edge[0],
            target = edge[1],
            ls = locations[source],
            lt = locations[target];
        ctx.beginPath();
        ctx.moveTo(ls.x, ls.y);
        ctx.lineTo(lt.x, lt.y);
        ctx.closePath();
        ctx.stroke();
    });
    graph.each_node(function (node) {
        var loc = locations[node];
        ctx.beginPath();
        ctx.arc(loc.x, loc.y, 15, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fill();
        ctx.stroke();
    });

}

function draw(id, graph, layoutFunction) {
    canvas = document.getElementById(id);
        var dim = new Vector(canvas.width, canvas.height);
        this.locations = [],
        layoutFunction(graph, dim, callback);
        setInterval(drawLoc, 75);
}

function drawLoc () {
    if (this.locations.length > 1) {
        this.loc = this.locations.shift();
    }
    render(graph, this.loc);
}

function callback(l) {
    function clone(obj){
        var clone = {};
        clone.prototype = obj.prototype;
        for (property in obj) clone[property] = obj[property];
            return clone;
        }
    this.locations.push(clone(l));
}

/*globals Graph, randomLayout, Vector
*/
/*members PI, arc, beginPath, closePath, create, each_edge, each_node, 
    edges, fill, fillStyle, getContext, getElementById, height, lineTo, 
    lineWidth, moveTo, nodes, stroke, value, width, x, y
*/
/*jslint white: true, browser: true, onevar: true, undef: true, 
    nomen: true, eqeqeq: true, plusplus: true, bitwise: true, 
    regexp: true, newcap: true, immed: true, strict: true, 
    maxlen: 77
*/
