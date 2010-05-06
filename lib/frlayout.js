function FRLayout(){
    this.setup = function(graph, dim) {
        this.iteration = 0;
        this.max_iterations = 500;
        this.max_dimension = Math.max(dim.x, dim.y);
        this.temperature = this.max_dimension/10;
        this.force_constant = Math.sqrt(dim.x * dim.y / graph.num_nodes());
        var random = new RandomLayout();
        this.locations = random.layout(graph, dim);
    };
    this.layout = function(graph, dim) {
        this.setup();
        while (this.iteration < this.max_iteration && this.temperature > 1/this.max_dimension) {
            this.step(graph, dim);
        }
    };
    this.step = function(graph, dim) {
        this.iteration += 1;
        this.repulsive(graph, dim);
        this.attractive(graph, dim);
        this.positions(graph, dim);
    };
    this.repulsive = function (graph, dim) {
        graph.each_node(function (outer_node) {
            graph.each_node(function (inner_node) {
                if (outer_node != inner_node) {
                    var inner_loc = this.locations[inner_node];
                    var outer_loc = this.locations[outer_node];
                    var delta = Math.max(outer_loc.sub(inner_loc).length(), 0.0001);

                }
            });
        });
    };
}
