// This is no module, therefore we have to define the imports explicitly (?)
require({
    paths: {
        'd3': 'lib/d3/d3',
        'client': 'modules/clientEnv'
    }
}, ['common', 'd3', 'client'], function(common, d3, client){
    console.log("Stats-Script active");

    // Make use of the clientConfiguration module
    if(client.getLoadTime() != null) {
        console.log("Time of page load was " + client.getLoadTime() + " ms");
        console.log("User agent is " + client.getUserAgent().browserName + " on " + client.getUserAgent().os);
    }

    // Make use of jQuery
    console.log("Current headline is " + $("h1").text());

    // Draw the chart
    chart.drawChart();
});

var chart = {};

/**
 * Draw a simple chart with D3.
 *
 * I took this from https://gist.github.com/benjchristensen/2579599
 */
chart.drawChart = function() {
    // define dimensions of graph
    var m = [80, 80, 80, 80]; // margins
    var w = 1000 - m[1] - m[3]; // width
    var h = 400 - m[0] - m[2]; // height

    // create a simple data array that we'll plot with a line (this array represents only the Y values, X will just be the index location)
    var data = [3, 6, 2, 7, 5, 2, 0, 3, 8, 9, 2, 5, 9, 3, 6, 3, 6, 2, 7, 5, 2, 1, 3, 8, 9, 2, 5, 9, 2, 7];

    // X scale will fit all values from data[] within pixels 0-w
    var x = d3.scale.linear().domain([0, data.length]).range([0, w]);
    // Y scale will fit values from 0-10 within pixels h-0 (Note the inverted domain for the y-scale: bigger is up!)
    var y = d3.scale.linear().domain([0, 10]).range([h, 0]);
    // automatically determining max range can work something like this
    // var y = d3.scale.linear().domain([0, d3.max(data)]).range([h, 0]);

    // create a line function that can convert data[] into x and y points
    var line = d3.svg.line()
        // assign the X function to plot our line as we wish
        .x(function(d,i) {
            // return the X coordinate where we want to plot this datapoint
            return x(i);
        })
        .y(function(d) {
            // return the Y coordinate where we want to plot this datapoint
            return y(d);
        })

    // Add an SVG element with the desired dimensions and margin.
    var graph = d3.select("#graph").append("svg:svg")
        .attr("width", w + m[1] + m[3])
        .attr("height", h + m[0] + m[2])
        .append("svg:g")
        .attr("transform", "translate(" + m[3] + "," + m[0] + ")");

    // create yAxis
    var xAxis = d3.svg.axis().scale(x).tickSize(-h).tickSubdivide(true);
    // Add the x-axis.
    graph.append("svg:g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + h + ")")
        .call(xAxis);


    // create left yAxis
    var yAxisLeft = d3.svg.axis().scale(y).ticks(4).orient("left");
    // Add the y-axis to the left
    graph.append("svg:g")
        .attr("class", "y axis")
        .attr("transform", "translate(-25,0)")
        .call(yAxisLeft);

    // Add the line by appending an svg:path element with the data line we created above
    // do this AFTER the axes above so that the line is above the tick-lines
    graph.append("svg:path").attr("d", line(data));

    console.log("Finished drawing of chart");
};
