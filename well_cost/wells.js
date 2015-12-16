//js code by Eamonn Maguire, Oxford

var well_cost = [
{"id": 1, "year": 2013, "type": "Shale", "geo": "US", "status": "Unofficial", "cost": 6.404571879},
{"id": 2, "year": 2015, "type": "Conventional", "geo": "US", "status": "Unofficial", "cost": 1.477978126},
{"id": 3, "year": 2013, "type": "Conventional", "geo": "Regional", "status": "Unofficial", "cost": 0.48558021},
{"id": 4, "year": 2013, "type": "Shale", "geo": "Regional", "status": "Unofficial", "cost": 6.306040004},
{"id": 5, "year": 2013, "type": "Shale", "geo": "Regional", "status": "Unofficial", "cost": 5.714848754},
{"id": 6, "year": 2013, "type": "Shale", "geo": "Regional", "status": "Unofficial", "cost": 6.404571879},
{"id": 7, "year": 2012, "type": "Conventional", "geo": "Regional", "status": "Unofficial", "cost": 0.2},
{"id": 8, "year": 2012, "type": "Shale", "geo": "Regional", "status": "Unofficial", "cost": 7.5},
{"id": 9, "year": 2010, "type": "Shale", "geo": "Regional", "status": "Official", "cost": 6.798122941},
{"id": 10, "year": 2011, "type": "Shale", "geo": "US", "status": "Unofficial", "cost": 8.934675865},
{"id": 11, "year": 2012, "type": "Shale", "geo": "Regional", "status": "Unofficial", "cost": 9.420256076},
{"id": 12, "year": 2013, "type": "Shale", "geo": "US", "status": "Official", "cost": 7.769283361},
{"id": 13, "year": 2014, "type": "Shale", "geo": "US", "status": "Unofficial", "cost": 6.992355025},
{"id": 14, "year": 2009, "type": "Shale", "geo": "US", "status": "Unofficial", "cost": 5.784127932},
{"id": 15, "year": 2011, "type": "Shale", "geo": "Regional", "status": "Unofficial", "cost": 7.308234956},
{"id": 16, "year": 2011, "type": "Shale", "geo": "Regional", "status": "Unofficial", "cost": 5.598756465},
{"id": 17, "year": 2011, "type": "Shale", "geo": "Regional", "status": "Unofficial", "cost": 9.670579349},
{"id": 18, "year": 2012, "type": "Shale", "geo": "US", "status": "Unofficial", "cost": 6.0},
{"id": 19, "year": 2012, "type": "Conventional", "geo": "US", "status": "Unofficial", "cost": 1.0},
{"id": 20, "year": 2012, "type": "Shale", "geo": "Regional", "status": "Unofficial", "cost": 4.7},
{"id": 21, "year": 2012, "type": "Shale", "geo": "Regional", "status": "Unofficial", "cost": 7.4},
{"id": 22, "year": 2010, "type": "Shale", "geo": "Regional", "status": "Official", "cost": 5.729846479},
{"id": 23, "year": 2011, "type": "Shale", "geo": "Regional", "status": "Official", "cost": 6.798122941},
{"id": 24, "year": 2012, "type": "Shale", "geo": "Regional", "status": "Official", "cost": 6.021194605},
{"id": 25, "year": 2013, "type": "Shale", "geo": "Regional", "status": "Official", "cost": 6.798122941},
{"id": 26, "year": 2014, "type": "Shale", "geo": "Regional", "status": "Official", "cost": 5.924078563},
{"id": 27, "year": 2007, "type": "Shale", "geo": "Regional", "status": "Official", "cost": 2.816365218},
{"id": 28, "year": 2008, "type": "Shale", "geo": "Regional", "status": "Official", "cost": 2.91348126},
{"id": 29, "year": 2009, "type": "Shale", "geo": "Regional", "status": "Official", "cost": 2.816365218},
{"id": 30, "year": 2010, "type": "Shale", "geo": "Regional", "status": "Official", "cost": 2.719249176},
{"id": 31, "year": 2011, "type": "Shale", "geo": "Regional", "status": "Official", "cost": 2.719249176},
{"id": 32, "year": 2012, "type": "Shale", "geo": "Regional", "status": "Official", "cost": 2.42790105},
{"id": 33, "year": 2013, "type": "Shale", "geo": "Regional", "status": "Official", "cost": 2.330785008},
{"id": 34, "year": 2014, "type": "Shale", "geo": "Regional", "status": "Official", "cost": 2.525017092},
{"id": 35, "year": 1999, "type": "National_Average", "geo": "US", "status": "Official", "cost": 1.04207513},
{"id": 36, "year": 2000, "type": "National_Average", "geo": "US", "status": "Official", "cost": 0.904365181},
{"id": 37, "year": 2001, "type": "National_Average", "geo": "US", "status": "Official", "cost": 1.063771405},
{"id": 38, "year": 2002, "type": "National_Average", "geo": "US", "status": "Official", "cost": 1.184681457},
{"id": 39, "year": 2003, "type": "National_Average", "geo": "US", "status": "Official", "cost": 1.311582995},
{"id": 40, "year": 2004, "type": "National_Average", "geo": "US", "status": "Official", "cost": 1.926241657},
{"id": 41, "year": 2005, "type": "National_Average", "geo": "US", "status": "Official", "cost": 1.835653385},
{"id": 42, "year": 2006, "type": "National_Average", "geo": "US", "status": "Official", "cost": 2.229543095},
{"id": 43, "year": 2007, "type": "National_Average", "geo": "US", "status": "Official", "cost": 4.21741098},
{"id": 44, "year": 2008, "type": "Offshore", "geo": "Regional", "status": "Official", "cost": 12.26673261},
{"id": 45, "year": 2009, "type": "Offshore", "geo": "Regional", "status": "Official", "cost": 19.08666977},
{"id": 46, "year": 2010, "type": "Offshore", "geo": "Regional", "status": "Official", "cost": 12.11852049},
{"id": 47, "year": 2011, "type": "Offshore", "geo": "Regional", "status": "Unofficial", "cost": 13.60021813},
{"id": 48, "year": 2012, "type": "Offshore", "geo": "Regional", "status": "Unofficial", "cost": 12.29415122},
{"id": 49, "year": 2013, "type": "Offshore", "geo": "Regional", "status": "Unofficial", "cost": 12.74513667},
{"id": 50, "year": 2008, "type": "Offshore", "geo": "Regional", "status": "Official", "cost": 1.477978126},
{"id": 51, "year": 2009, "type": "Offshore", "geo": "Regional", "status": "Official", "cost": 0.48558021},
{"id": 52, "year": 2010, "type": "Offshore", "geo": "US", "status": "Unofficial", "cost": 22.46838702},
{"id": 53, "year": 2011, "type": "Offshore", "geo": "US", "status": "Unofficial", "cost": 45.12018945},
{"id": 54, "year": 2012, "type": "Offshore", "geo": "US", "status": "Unofficial", "cost": 38.47390842},
{"id": 55, "year": 2013, "type": "Offshore", "geo": "US", "status": "Unofficial", "cost": 34.16425972},
{"id": 56, "year": 2014, "type": "Offshore", "geo": "US", "status": "Unofficial", "cost": 31.69106725},
{"id": 57, "year": 2004, "type": "Offshore", "geo": "US", "status": "Official", "cost": 16.09214248},
{"id": 58, "year": 2006, "type": "Offshore", "geo": "US", "status": "Official", "cost": 36.97219496},
{"id": 59, "year": 2007, "type": "Offshore", "geo": "US", "status": "Official", "cost": 46.02912812},
{"id": 60, "year": 2008, "type": "Offshore", "geo": "US", "status": "Official", "cost": 58.87044588},
{"id": 61, "year": 2009, "type": "Offshore", "geo": "US", "status": "Official", "cost": 78.07621676},
{"id": 62, "year": 2010, "type": "Offshore", "geo": "US", "status": "Official", "cost": 19.33838657},
{"id": 63, "year": 2014, "type": "Shale", "geo": "US", "status": "Unofficial", "cost": 5.535614395},
{"id": 64, "year": 2012, "type": "Conventional", "geo": "US", "status": "Unofficial", "cost": 1.0},
{"id": 65, "year": 2013, "type": "Shale", "geo": "US", "status": "Unofficial", "cost": 2.955956252},
{"id": 66, "year": 2013, "type": "Shale", "geo": "US", "status": "Unofficial", "cost": 9.853187506},
{"id": 67, "year": 2013, "type": "Shale", "geo": "US", "status": "Official", "cost": 8.17814563},
{"id": 68, "year": 2013, "type": "Shale", "geo": "US", "status": "Official", "cost": 5.813380629},
{"id": 69, "year": 2013, "type": "Conventional", "geo": "US", "status": "Official", "cost": 0.985318751},
{"id": 70, "year": 2013, "type": "Conventional", "geo": "US", "status": "Official", "cost": 2.955956252},
{"id": 71, "year": 2010, "type": "Shale", "geo": "US", "status": "Official", "cost": 5.025284101},
{"id": 72, "year": 2011, "type": "Shale", "geo": "US", "status": "Official", "cost": 6.555933918},
{"id": 73, "year": 2012, "type": "Shale", "geo": "US", "status": "Official", "cost": 6.945438206},
{"id": 74, "year": 2010, "type": "Conventional", "geo": "US", "status": "Official", "cost": 1.903187241},
{"id": 75, "year": 2011, "type": "Conventional", "geo": "US", "status": "Official", "cost": 1.775436265},
{"id": 76, "year": 2012, "type": "Conventional", "geo": "US", "status": "Official", "cost": 1.57478481},
{"id": 77, "year": 2008, "type": "National_Average", "geo": "US", "status": "Official", "cost": 5.393594764},
{"id": 78, "year": 2009, "type": "National_Average", "geo": "US", "status": "Official", "cost": 4.612783962},
{"id": 79, "year": 2010, "type": "National_Average", "geo": "US", "status": "Official", "cost": 2.486080459},
{"id": 80, "year": 2011, "type": "National_Average", "geo": "US", "status": "Official", "cost": 2.876704441},
{"id": 81, "year": 2012, "type": "National_Average", "geo": "US", "status": "Official", "cost": 3.185980828},
{"id": 82, "year": 2013, "type": "National_Average", "geo": "US", "status": "Official", "cost": 3.231234696},
{"id": 83, "year": 2014, "type": "National_Average", "geo": "US", "status": "Official", "cost": 3.378024606}
];


showScatterPlot(well_cost);

function showScatterPlot(data) {
    // space around items. 
    var margins = {
        "left": 50,
        "right": 30,
        "top": 10,
        "bottom": 300
    };
    
    var width = 750;
    var height = 800;
    
    var colors = d3.scale.category10()
                .domain(["Shale", "Conventional", "Offshore", "National_Average"])
                .range(["#4F34FB", "#FF2654", "#00B300", "#686868"]);

    // we add the SVG component to the scatter-load div

    // this sets the scale that we're using for the X axis. 
    // the domain define the min and max variables to show. In this case, its year
     var x = d3.scale.linear()
        .domain(d3.extent(data, function (d) {
            return d.year;
        }))
    // the range maps the domain to values from 0 to the width minus the left and right margins 
        .range([0, width - margins.left - 4*(margins.right)]);

    // this does the same as for the y axis but with min max cost
    var y = d3.scale.log()
        .domain(d3.extent(data, function (d) {
            return d.cost;
        }))
        .range([height - margins.top - margins.bottom, 0]);

    var tip = d3.tip()
        .attr('class', 'd3-tip')
        .offset([-10, 0])
        .html(function(d) {
            return "Well Type: <span style='color:"+ colors(d.type) + ";'>" + d.type + 
                    "</span><br> Cost: $" + d.cost.toString().substring(0,5) + " MM USD";
        });

    var svg = d3.select("#scatter-load").append("svg").attr("width", width).attr("height", height).append("g")
        .attr("transform", "translate(" + margins.left + "," + margins.top + ")");


    //Define the transition that will highlight the selected series and make everything else more transparent
    var highlight_transition = function highlight_transition(d) {
  
       // d3.selectAll("[data-name="+d+"]").style('opacity','0.5')
         //   .transition();
        //};

        d3.selectAll("[data-name]:not([data-name="+d+"])")

            .style("visibility", "hidden")
            .transition();

        };

    // Call the tooltip
    svg.call(tip);
    
    // we add the axes SVG component. At this point, this is just a placeholder. The actual axis will be added in a bit
    svg.append("g").attr("class", "x axis").attr("transform", "translate(0," + y.range()[0] + ")");
    svg.append("g").attr("class", "y axis");

    // X axis label
    svg.append("text")
        .attr("fill", "#414241")
        .attr("text-anchor", "end")
        .attr("x", ((width / 2)- 55))
        .attr("y", height - 275)
        .text("Year")
        .style("font-weight", "bold");

    // this is the actual definition of our x and y axes. The orientation refers to where the labels appear - for the x axis, below or above the line, and for the y axis, left or right of the line. Tick padding refers to how much space between the tick and the label. There are other parameters too - see https://github.com/mbostock/d3/wiki/SVG-Axes for more information
    var xAxis = d3.svg.axis().scale(x).orient("bottom").tickPadding(4).tickFormat(d3.format(".0f"));
    var yAxis = d3.svg.axis().scale(y).orient("left").tickPadding(4).tickFormat(d3.format(".1f"));

    // this is where we select the axis we created a few lines earlier. See how we select the axis item. in our svg we appended a g element with a x/y and axis class. To pull that back up, we do this svg select, then 'call' the appropriate axis object for rendering.    
    svg.selectAll("g.y.axis").call(yAxis);
    svg.selectAll("g.x.axis").call(xAxis);

    // now, we can get down to the data part. We are telling D3 that all nodes (g elements with class node) will have data attached to them. The 'key' we use (to let D3 know the uniqueness of items) is id
    var costs = svg.selectAll("g.path")
        .data(data)
        .enter()
        .append("path")
        .attr("class", function(d,i) { return "id " + d.id; })
        .attr('d', d3.svg.symbol()
            .size(40)
            .type(function(d) { 
                if (d.type === "National_Average")
                    return "circle";
                else if (d.geo === "US")
                    return "square";
                else 
                    return "triangle-up";
            }))
        .attr('transform', function (d) {
            return "translate(" + x(d.year) + "," + y(d.cost) + ")";
        })
        .style("fill", function (d) {
            if (d.status === "Official")
                return colors(d.type);
            else 
                return "white";
        })
        .style("stroke", function (d) {
            return colors(d.type);
        })
        .style("opacity", 1)
        .style("stroke-width", 1.6)
        .attr("data-name", function(d) { return d.type; })
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide);


    // Create legend

    var legend = svg.selectAll(".legend")
        .data(colors.domain().slice().reverse())
        .enter().append("g")
        .attr("class", "legend")
        .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

     legend.append("rect")
         .attr("x", width - 78)
         .attr("width", 16)
         .attr("height", 16)
         .style("fill", colors)
         .on('click', highlight_transition);

    legend.append("text")
         .attr("x", width - 90)
         .attr("y", 9)
         .attr("dy", ".35em")
         .style("text-anchor", "end")
         .text(function(d) { return d; });

  
}