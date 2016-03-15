/**
 * Created by fran on 10/03/16.
 */


/**
 * Multiline graph module.
 * @module economics/multiline-graph
 * @memberof Graph
 */

import Scale = d3.time.Scale;
import Linear = d3.scale.Linear;
import {MultilineGraphDatum, MultilineGraphData1, MultilineGraphData, RawData} from "./multiline-graph-data";


/**
 * Returns margin object so as to feed graph creation.
 * @function
 * @param {number} width - a width (maybe window.innerWidth) to generate graph on.
 * @return {object} An object with top, bottom, left and right properties.
 * @memberof Graph
 */
function margin_generator(width:number) {
    // {top: 20, right: 80, bottom: 30, left: 50}
    // {top: 32, right: 21.333333333333332, bottom: 32, left: 48}
    return {top: width/48, right: width/12, bottom: width/32, left: width/19.2};
}


/**
 * Parses data as received by Quandl API and returns data formatted so as to fit multiline chart.
 * @function
 * @param {array} data - API observable stream.
 * @return {array} An array of objects with keys date, r, r1, g.
 * @memberof Graph
 */
export function parse_data(data:RawData) : MultilineGraphData {
    return data.map(function(cv:any){
        var date = cv[0]; // date
        var r = cv[1]; // return to capital
        var r1 = cv[2]; // return to capital (after tax)
        var g = cv[3]; // growth rate
        return {
            date: date,
            r: r,
            r1: r1,
            g: g
        };
    });
}


/**
 * Creates d3 canvas on element.
 * @function
 * @param {object} element - element where directive is attached to.
 * @param {number} width - graph width as in attribute on the directive.
 * @param {number} height - graph height as in attribute on the directive.
 * @returns {object} graph - element with svg appended with width and height as specified, chart class and margins.
 * @memberof Graph
 */
export function create_canvas(element, width:number){
    var el:any    = element.nativeElement;
    var graph:any = d3.select(el);
    var margin = margin_generator(width);

    return graph
        .append('svg')
        .attr('class', 'chart')
        .attr("width", width)
        .attr("height", width/2)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
}

/**
 * Renders the multiline chart in the graph created.
 * @function
 * @param {object} graph - d3 graph already initialized.
 * @param {object} data - parsed data to be fed into graph.
 * @param {number} width - graph width.
 * @memberof Graph
 */
export function renderMultiline(graph, data:MultilineGraphData, width) {

    if (!data) return;

    var margin = margin_generator(width);
    console.log(margin);

    var _width  = parseInt(width) - margin.left - margin.right,
        _height = parseInt(width)/2 - margin.top - margin.bottom;

    // array of dates in all series
    var dates = data.map(function(d) {
        return d3.time.format("%Y-%m-%d").parse(d.date);
    });

    var x = d3.time.scale()
        .domain(d3.extent(dates)) // extent returns min and max of dates array
        .range([0, _width]);

    var y = d3.scale.linear()
        .domain([0, d3.max(data, function(d:MultilineGraphDatum){ return d3.max([d.r, d.r1, d.g]) ; })])
        .range([_height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient('bottom')
        .ticks(10)
        .tickFormat(d3.time.format('%Y'));

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient('left');

    var color = d3.scale.category10()
        .domain( d3.keys(data[0]).filter(function(key) { return key !== "date"; }) );

    var inputs = color.domain().map(function(name):MultilineGraphData1 {
        return <MultilineGraphData1> {
            series_name: <string>name,
            series_coords: data.map(function(d) {
                return [x(<Date>d3.time.format("%Y-%m-%d").parse(d.date)), <number>y(+d[name])];
            })
        };
    });

    var input = graph.selectAll(".input")
        .data(inputs)
        .enter().append("g")
        .attr("class", "input");

    var line = d3.svg.line()
        .interpolate("basis")
        .x(function(d) { return d[0]; })
        .y(function(d) { return d[1]; });

    input.append("path")
        .attr("class", "line")
        .attr("d", function(d:MultilineGraphData1) { return line(d.series_coords); })
        .style("stroke", function(d:MultilineGraphData1) { return color(d.series_name); });

    graph.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + _height + ")")
        .call(xAxis);

    graph.append('g')
        .attr('class', 'y axis')
        .call(yAxis);
}