"use strict";

function render(ctx, graph, locations) {
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
        ctx.save();
        ctx.beginPath();
        ctx.arc(loc.x, loc.y, 16, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fill();
        if (loc.hit && loc.hit == true) {
            ctx.strokeStyle = "rgb(255, 0, 0)";
        }
        ctx.stroke();
        ctx.restore();
    });
}

function draw(id, graph, layoutFunction) {
    var canvas = document.getElementById(id),
        dim = new Vector(canvas.width, canvas.height),
        ctx = canvas.getContext("2d"),
        hit,
        locations = layoutFunction(graph, dim);
        render(ctx, graph, locations);
        canvas.addEventListener('mousedown', mouseDown);
        canvas.addEventListener('mouseup', mouseUp);

    function mouseDown (e) {
        var result = false;
        for (var i in locations) {
            if (locations[i].x < e.offsetX + 16 && locations[i].x > e.offsetX - 16 && locations[i].y < e.offsetY + 16 && locations[i].y > e.offsetY - 16){
                hit = locations[i];
                hit.hit = true;
                hit.dx = hit.x - e.offsetX;
                hit.dy = hit.y - e.offsetY;
                canvas.addEventListener('mousemove', mouseMove);
             }
          }
          console.log("Hit");
          render(ctx, graph, locations);
    }

    function mouseUp(e) {
        for (var i in locations) {
            locations[i].hit = false;
        }
        canvas.removeEventListener('mousemove', mouseMove);
        render(ctx, graph, locations);
     }

    function mouseMove (e) {
        hit.x = e.offsetX + hit.dx;
        hit.y = e.offsetY + hit.dy;
        render(ctx, graph, locations);
     }
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
