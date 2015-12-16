(function() {

  var

    // set basic dimensions for the map

      width = 900
    , height = 450
    , padding = {top: 10, right: 10, bottom: 50, left: 50}

    // create projection and path objects with which to draw geo objects

    , projection = d3.geo.albersUsa()
        .scale(1000)
        .translate([width / 2, height / 2])
    , path = d3.geo.path()
        .projection(projection)
        .pointRadius(2)

    // create some basic <svg> elements. <g>'s are like 'layers' and
    // are helpful for keeping things organized

    , svg_root = d3.select('#map_wrap')
      .append('svg')
      .attr({
        'xmlns': 'http://www.w3.org/2000/svg',
        'xmlns:xmlns:xlink': 'http://www.w3.org/1999/xlink',
        'version': '1.1',
        'width': width + padding.left + padding.right,
        'height': height + padding.top + padding.bottom,
        'id': 'map_001' })
    , svg = svg_root.append('g')
        .attr('transform', 'translate(' + padding.left + ',' + padding.top + ')')
    , ocean_layer = svg.append('g').attr('id', 'ocean_layer')
    , grid_layer = svg.append('g').attr('id', 'grid_layer')
    , land_layer = svg.append('g').attr('id', 'land_layer')
    , feature_layer = svg.append('g').attr('id', 'feature_layer')
    , feature_layer2 = svg.append('g').attr('id', 'feature_layer2')
  ;

  svg.selectAll('g').attr('class', 'graph-layer');

  // the following function is called from the queue() object below

  function map(error, queued_data) {

    // queued data is passed in from the queue() object. we'll use this
    // to draw the map and its various features.

    var map_data = queued_data[0];
    var ng_pipes = queued_data[1];

    // On the ocean_layer <g> draw the sphere of the earth and color
    // it blue

    ocean_layer.append('path')
      .datum({type: 'Sphere'})
      .attr('id', 'sphere')
      .attr('d', path)
      .attr('class', 'boundary')
      .style('fill', '#C2C2C2');

    // draw the US on the land_layer <g>.

    var map_art = land_layer.selectAll('.map-boundary')
      .data(map_data.features)
      .enter()
      .append('path')
      .attr('class', 'map-boundary boundary')
      .attr('d', path)
      .style('fill', '#FCFCFC');

    // draw points 

    // these should be intrastate, aka do not cross state boundaries
    var ng_pipes_art = feature_layer.selectAll('path') 
      .data(ng_pipes.features)
      .enter()
      .append('path')
      .style('stroke', '#ff8e93')
      //.style("stroke-dasharray", ("2, 1"))
      .style("stroke-width", '0.5')
      .attr('fill','none')
      .attr('d', path);

    // Interstate pipelines, as defined by array
    var ng_pipes_art = feature_layer2.selectAll('path') 
      .data(ng_pipes.features.filter(function(d) { 
        var interstateArray = ["Columbia Gas Trans Co", "Transcontinental Gas PL", "Northern Natural Gas Co", 
                               "Texas Eastern Trans Co", "ANR Pipeline Co", "ANR Storage Co", "Tennessee Gas Pipeline",
                               "Dominion Transmission Co", "Gulf South Pipeline Co", "El Paso Natural Gas Co", 
                               "CenterPoint Energy GasTrans Co", "Northwest Pipeline", "Natural Gas PL Co of Am",
                               "Colorado Interstate Gas Co", "Texas Gas Transmission Co", "Southern Natural Gas Co",
                               "Algonquin Gas Trans Co", "Questar Pipeline Co", "Trunkline Gas Co", "Great Lakes Gas Trans Co",
                               "Panhandle Eastern PL Co", "Southern Star Central Gas PL Co", "Wyoming Interstate PL Co",
                               "Northern Border PL Co", "Transwestern Gas Co", "Columbia Gulf Pipeline", 
                               "National Fuel Gas Supply Co", "Florida Gas Trans Co", "Alliance Pipeline System",
                               "Kern River Gas Trans Co", "Williston Basin Interstate PL Co", "Black Marlin Pipeline Co",
                               "USG Pipeline Co", "Mississippi River Trans Corp", "Chandeleur Pipeline Co", 
                               "Cheyenne Plains Pipeline Co", "Crossroads Pipeline Co", "Cove Point Pipeline",
                               "East Tennessee Gas Co", "Eastern Shore Nat Gas Co", "Enbridge Pipelines (AlaTenn)",
                               "Enbridge Pipelines (Midla)", "Enbridge Pipelines (UTOS)", "Equitrans Inc",
                               "Granite State Gas Trans Co", "Guardian Pipeline Co", "Gulfstream Pipeline Co",
                               "Heartland Pipeline Co", "Horizon Pipeline Co", "Iroquois Gas Trans Co", "Kelso-Beaver Pipeline",
                               "KM Interstate Gas Co", "KO Transmission Co", "Maritimes & Northeast PL US", /*"Michcon Gas Co",*/
                               "Midwestern Gas Trans Co", "Millennium Pipeline Co", "MIGC Pipeline System", "Mojave Pipeline Co",
                               "Nautilus Pipeline System", "North Baja Pipeline Co", "Oklahoma Texas Gas Co", 
                               "Ozark Gas Transmission, LLC", "Portland Natural Gas PL", "Overthrust Pipeline Co", 
                               "Rockies Express Pipeline", "Sabine LLC", "Sea Robin Pipeline", "Southeast Supply Header Pipeline Co",
                               "Questar Southern Trails Line", "Southern Union Gas Services (TX)", "St Lawrence Gas Co",
                               "Stingray Pipeline", "Trailblazer Pipeline Co", "TransColorado Gas Trans Co", "Tuscarora Pipeline Co",
                               "Vector Pipeline Co", "Vermont Gas System", "Viking Gas Transmission Co", "Gas Transmission - Northwest",
                               "Ruby Pipeline LLC", "Bison Pipeline", // 2011 additions!
                               "MGTC Pipeline System", "Grasslands Pipeline", "Centra Minnesota Pipeline Co", "South Carolina PL Corp",
                               "South Georgia Gas Pipeline Co"
                              ];
        for (var i = 0; i < interstateArray.length; i++) {
          if (d.properties.OperatorNa == interstateArray[i]) {
            return true;
          }
        }
        return false;
      }))
      .enter()
      .append('path')
      .style('stroke', '#3d99e5') 
      .style("stroke-width", '0.7')
      .attr('fill','none')
      .attr('d', path);

    //susie lu's legend work

    var symbolScale =  d3.scale.ordinal()
      .domain(["Interstate Pipelines", "Intrastate Pipelines"]);

    var svg = d3.select("svg");

    //create a background box for the legend
    var rectangle = svg.append("rect")
      .attr("x", 10)
      .attr("y", 10)
      .attr("width", 129)
      .attr("height", 44)
      .style('fill', '#FCFCFC')
      .attr("transform", "translate(808,412)");

    var line1 = svg.append("rect")
      .attr("width", 12)
      .attr("height", 2)
      .style('fill', '#3d99e5')
      .attr("transform", "translate(830,436)");

    var line2 = svg.append("rect")
      .attr("width", 12)
      .attr("height", 2)
      .style('fill', '#ff8e93')
      .attr("transform", "translate(830,451)");

    svg.append("g")
      .attr("class", "legendSymbol")
      .style('font-family', 'sans-serif')
      .style('font-size', '10px')
      .style('fill', '#545454')
      .attr("transform", "translate(835,435)");

    var legendPath = d3.legend.symbol()
      .scale(symbolScale)
      .orient("vertical")
      .shapePadding(15)
      .labelOffset(13);
      //.title("Symbol Legend Title")
      //.on("cellclick", function(d){alert("clicked " + d);});

    svg.select(".legendSymbol")
      .call(legendPath);

  }

  // load multiple files asynchronously and pass them to the map()
  // function above.

  queue()
    .defer(d3.json, '/static/json/gz_2010_us_040_00_20m.json')
    .defer(d3.json, '/static/json/NaturalGas_InterIntrastate_Pipelines_US.geojson')
    .awaitAll(map);

})();
