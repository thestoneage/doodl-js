function draw() {
    var graph = new Graph([1, 2, 3, 4, 5], [[1, 2], [2, 3], [3, 1], [1, 3]]);
    var canvas = document.getElementById("canvas");
    var dim = new Vector(canvas.width, canvas.height);
    var layout = new RandomLayout();
    // var layout = new CircleLayout();
    layout.layout(graph, dim);

    var ctx = canvas.getContext("2d");
    var locations = layout.layout(graph, dim);
    render(ctx, graph, locations);
}

function render(ctx, graph, locations) {
    ctx.lineWidth = 3;
    graph.each_edge(function (edge) {
        var source = edge[0];
        var target = edge[1];
        var ls = locations[source];
        var lt = locations[target];
        ctx.beginPath();
        ctx.moveTo(ls.x, ls.y);
        ctx.lineTo(lt.x, lt.y);
        ctx.closePath();
        ctx.stroke();
    });
    graph.each_node(function (node) {
        var loc = locations[node];
        ctx.beginPath();
        ctx.arc(loc.x, loc.y, 15, 0, Math.PI*2, false);
        ctx.closePath();
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fill();
        ctx.stroke();
    });

}
