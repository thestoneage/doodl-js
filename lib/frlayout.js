"use strict";
function frLayout (graph, dimension) {
  var iteration = 0,
      max_iterations = 500,
      max_dimension = Math.max(dimension.x, dimension.y),
      temperature = max_dimension / 10,
      min_temperature = 1 / max_dimension,
      force_constant = Math.sqrt(dimension.x * dimension.y / graph.num_nodes()),
      locations = randomLayout(graph, dimension),
      disp = {};
  graph.each_node (function (node) {
      disp[node] = new Vector(0, 0);
      });
  while (iteration < max_iterations && temperature > min_temperature) {
    step(graph, dimension);
  }
  return locations;

  function step (graph, dimension){
    iteration += 1;
    repulsive(graph, dimension);
    attractive(graph, dimension);
    positions(graph, dimension);
    cool();
  }


  function repulsive (graph, dimension) {
    graph.each_node(function (outer_node) {
      graph.each_node(function (inner_node) {
        var delta,
        force,
        distance;
        if (inner_node !== outer_node) {
          delta = locations[outer_node].sub(locations[inner_node]);
          distance = Math.max(delta.length(), 0.0001);
          force = Math.pow(force_constant, 2) / distance;
          disp[outer_node] = disp[outer_node].add(delta * force / distance);
        }
      });
    });
  }

  function attractive(graph, dimension) {
    graph.each_edge( function (edge) {
      var delta,
      distance,
      force;
      if (edge[0] !== edge[1]) {
        delta = locations[edge[0]].sub(locations[edge[1]]);
        distance = Math.max(delta.length(), 0.0001);
        force = Math.pow(distance, 2) / force_constant;
        disp[edge[0]] = disp[edge[0]].sub(delta * force / distance);
        disp[edge[1]] = disp[edge[1]].add(delta * force / distance);
      }
    });
  }

  function positions (graph, dimension) {
    graph.each_node( function (node) {
        var distance,
        dx,
        dy;
        distance = Math.min(disp[node].length(), 0.0001);
        dx = disp[node].x / distance * Math.min(temperature, Math.abs(disp[node].x));
        dy = disp[node].y / distance * Math.min(temperature, Math.abs(disp[node].y));
        bounce(dimension, new Vector(dx, dy));
        });
  }

  function bounce (dimension, loc) {
    loc.x = Math.min(Math.max(0, loc.x), dimension.x);
    loc.y = Math.min(Math.max(0, loc.y), dimension.y);
  }

  function cool () {
    temperature *= 1 - iteration / max_iterations;
  }
}

/*globals RandomLayout
*/
/*members attractive, each_node, force_constant, iteration, layout, 
    length, locations, max, max_dimension, max_iteration, max_iterations, 
    num_nodes, positions, repulsive, setup, sqrt, step, sub, temperature, x, 
    y
*/
/*jslint white: true, onevar: true, undef: true, nomen: true, 
    eqeqeq: true, plusplus: true, bitwise: true, regexp: true, 
    newcap: true, immed: true, strict: true, maxlen: 98
*/
