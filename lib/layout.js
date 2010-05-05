function CircleLayout(graph) {
    this.layout = function (graph, dimension) {
        var locations = {};
        var center = new Vector(dimension.x/2, dimension.y/2);
        var radius = Math.min(center.x, center.y) * 0.75;
        var main = 2 * Math.PI / graph.num_nodes();
        var index = 0;
        graph.each_node(function(node) {
            var x = center.x + radius * Math.sin(index * main);
            var y = center.y + radius * Math.cos(index * main);
            locations[node] = new Vector(x, y);
            index++;
        });
        return locations;
    }

}

function RandomLayout() {
    this.layout = function (graph, dimension) {
        var locations = {};
        graph.each_node(function(node) {
            locations[node] = new Vector(Math.random() * dimension.x, Math.random() * dimension.y);
        });
        return locations;
    }
}

function Vector(a, b) {
    this.x = a;
    this.y = b;
    
    this.dist = function(other) {
        Math.sqrt(Math.pow((this.x - other.x), 2) + Math.pow((this.y - other.y), 2));
    }

    this.add =  function(other){
        return new Vector(this.x + other.x, this.y + other.y);
    }

    this.sub = function(other) {
        return new Vector(this.x - other.x, this.y - other.y);
    }

    this.mul = function(scalar) {
        return new Vector(scalar * this.x, scalar * this.y);
    }

    this.div = function(scalar) {
        return new Vector(this.x / scalar, this.y / scalar);
    }
    
    this.length = function(scalar) {
        Math.sqrt(Math.pow(this.x, 2), Math.pow(this.y, 2));
    }

    this.normalize = function() {
        return ehis.div(this.length());
    }
}
