"use strict";

function kkLayout (g, d) {
    var graph = g,
        dimension = d,
        K = 1.0,
        EPSILON = 0.1,
        LENGTH_FACTOR = 0.9,
        MAX_ITERATIONS = 2000,
        DISCONNECTED_MULTIPLIER = 0.5,
        L0 = Math.min(d.x, d.y),
        fw = new FloydWarshall(graph),
        diameter = fw.diameter(),
        distances = fw.dist,
        L = L0 / diameter * LENGTH_FACTOR,
        unstable = true,
        iteration = 0,
        locations = randomLayout(graph, dimension),
        dm = {};
    eachPair(function (i, j) {
        var d = Math.min(diameter * DISCONNECTED_MULTIPLIER, Math.min(distances[i][j], distances[j][i]));
        dm[[j, i]] = d;
        dm[[i, j]] = d;
    });
    while (unstable && iteration < MAX_ITERATIONS) {
        iteration += 1;
        step(graph, dimension);
    }
    return locations;

    function step(graph) {
        var energy = calculateEnergy(),
            oldLocations = {},
            pm = graph.nodes.reduce(function (curr, prev, i, a) {
                return (calculateDeltaM(curr) > calculateDeltaM(prev) ? curr : prev)});
        for (i in locations) {
            oldLocations[i] = locations[i];
        }
        for (var i = 0; i < 100; i += 1) {
            locations[pm] = locations[pm].add(calculateDeltaXY(pm));
            if (calculateDeltaM(pm) < EPSILON) {
                break;
            }
        }
        adjustForGravity();
        if (calculateDeltaM(pm) < EPSILON) {
            energy = calculateEnergy();
            eachPair(function (i, j) {
                var xenergy = calculateEnergyIfExchanged(i, j),
                    temp;
                if (energy > xenergy) {
                    temp = locations[i];
                    locations[i] = locations[j];
                    locations[j] = temp;
                }
            });
        }
        var delta = 0;
        for (l in locations) {
            delta += locations[l].sub(oldLocations[l]).len();
       }
       if (delta < graph.num_nodes()) {
            unstable = false;
       }
    }

    function calculateEnergy() {
        var energy = 0;
        eachPair(function (i, j) {
            var dist = dm[[i, j]],
                l_ij = L * dist,
                k_ij = K / dist,
                delta = locations[i].sub(locations[j]),
                d = delta.len();
                energy += k_ij / 2 * (delta.x * delta.x + delta.y * delta.y + l_ij * l_ij - 2 * l_ij * d);
           });
           return energy;
    }

    function calculateDeltaM(m) {
        var dEdm = new Vector(0, 0);
        graph.each_node(function (i) {
            var dist, l_mi, k_mi, delta, d, common;
            if (i !== m) {
                dist = dm[[m, i]];
                l_mi = L * dist;
                k_mi = K / (dist * dist);
                delta = locations[m].sub(locations[i]);
                d = delta.len();
                common = k_mi * (1 - l_mi / d);
                dEdm = dEdm.add(delta.mul(common));
            }
        });
        return dEdm.len();
    }

    function calculateDeltaXY(m) {
        var dE_dxm = 0,
            dE_dym = 0,
            d2E_d2xm = 0,
            d2E_dxmdym = 0,
            d2E_dymdxm = 0,
            d2E_d2ym = 0,
            denomi, delta_x, delta_y;

            graph.each_node(function (i) {
                var l_mi, k_mi, d, dist, ddd;
                if (i !== m) {
                    dist = dm[[m ,i]];
                    l_mi = L * dist;
                    k_mi = K / (dist * dist);
                    d = locations[m].sub(locations[i]);
                    dist = d.len();
                    ddd = dist * dist * dist;
                    dE_dxm += k_mi * (1 - l_mi / dist) * d.x;
                    dE_dym += k_mi * (1 - l_mi / dist) * d.y;
                    d2E_d2xm += k_mi * (1 - l_mi * d.y * d.y / ddd);
                    d2E_dxmdym += k_mi * l_mi * d.x * d.y / ddd;
                    d2E_d2ym += k_mi * (1 - l_mi * d.x * d.x / ddd);
                }
            });
        denomi = d2E_d2xm * d2E_d2ym - d2E_dxmdym * d2E_dymdxm
        delta_x = (d2E_dxmdym * dE_dym - d2E_d2ym * dE_dxm) / denomi;
        delta_y = (d2E_dymdxm * dE_dxm - d2E_d2xm * dE_dym) / denomi;
        return new Vector(delta_x, delta_y);
    }

    function calculateEnergyIfExchanged(p, q) {
       var energy = 0;
       eachPair(function (i, j) {
            var dist = dm[[i, j]],
                ii = i,
                jj = j,
                l_ij = L * dist,
                k_ij = K / (dist * dist),
                delta, d;
            if (i === p)
                ii = q;
            if (j === q)
                jj = p;
            delta = locations[ii].sub(locations[jj]);
            d = Math.sqrt(delta.x * delta.x + delta.y * delta.y);
            energy += k_ij / 2 * (delta.x * delta.x + delta.y * delta.y + l_ij * l_ij - 2 * l_ij * d);
       });
       return energy;
    }

    function adjustForGravity() {
        var gcenter = new Vector(0, 0),
            center = dimension.div(2);
        graph.each_node(function (node) {
            gcenter = gcenter.add(locations[node]);
        });
        gcenter = gcenter.div(graph.num_nodes());
        graph.each_node(function (node) {
            var offset = center.sub(gcenter);
            locations[node] = locations[node].add(offset);
        });
    }

    function eachPair (action) {
        for (var i = 0; i < graph.nodes.length; i += 1) {
            for (var j = i; j < graph.nodes.length; j += 1) {
                action(graph.nodes[i], graph.nodes[j]);
            }
        }
    }
}

