function render(g, layout, id, dim) {
    var graph = g,
        paper = Raphael(id, dim.x, dim.y),
        locations = layout(graph, dim),
        edgeShapes = [];
    graph.each_node(function (node) {renderNode(node)});
    graph.each_edge(function (edge) {renderEdge(edge)});

     function renderNode(node) {
        var loc = locations[node],
        nodeShape = paper.circle(loc.x, loc.y, 15);
        nodeShape.attr({"stroke-width": 3, "fill": "white"});
        nodeShape.graphNode = node;
        nodeShape.mousedown(mouseDown);
    }


    function renderEdge(edge) {
        var ox = locations[edge[0]].x.toString() + " ",
            oy = locations[edge[0]].y.toString() + " ",
            tx = locations[edge[1]].x.toString() + " ",
            ty = locations[edge[1]].y.toString() + " ";
            var edgeShape = paper.path("M " + ox + oy + "L " + tx + ty);
            edgeShape.attr({"stroke-width": 3});
            edgeShape.toBack();
            edgeShapes.push(edgeShape);
    }

    function mouseDown(event) {
        this.attr("stroke", "red");
        this.mouseOffsetX = event.offsetX - this.attrs.cx;
        this.mouseOffsetY = event.offsetY - this.attrs.cy;
        this.mousemove(mouseMove);
        this.mouseup(mouseUp);
   }

    function mouseUp(event) {
        this.unmousemove(mouseMove);
        this.attr("stroke", "black");
    }

    function mouseMove(event) {
        var x = event.offsetX - this.mouseOffsetX,
            y = event.offsetY - this.mouseOffsetY;
        locations[this.graphNode] = new Vector(x, y);
        this.attr({cx: x, cy: y});
        edgeShapes.forEach(function (shape) {
            shape.remove();
        });
        edgeShapes = [];
        graph.each_edge(function (edge) {renderEdge(edge)});
    }
}
