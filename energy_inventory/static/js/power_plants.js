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
        .pointRadius(1.2)

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
  ;

  svg.selectAll('g').attr('class', 'graph-layer');

  // the following function is called from the queue() object below

  function map(error, queued_data) {

    // queued data is passed in from the queue() object. we'll use this
    // to draw the map and its various features.

    var map_data = queued_data[0];
    var sites = queued_data[1];

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

    // draw points for the power plants

    var site_art = feature_layer.selectAll('.site')
      .data(sites.features)
      .enter()
      .append('path')
      //filter for coal plants only
      .filter( function (d) { return ( (d.properties.primary_fu == "COAL") )})
      .attr('transform', function(d) {
        return "translate(" + projection([d.geometry.coordinates[0],d.geometry.coordinates[1]]) + ")";
      })
      .attr('d', d3.svg.symbol().type("square").size(5))
      //.attr('class', 'site')
      .style('fill', '#040d14');
      //.attr('d', path /*function(d) { return path.pointRadius/*(d.properties.PADD)(d);}*/);  //ex: for the biodiesel json file, adjust radius size based on PADD attribute
      

    var site_art = feature_layer.selectAll('.site')
      .data(sites.features)
      .enter()
      .append('path')
      //filter for NG plants only
      .filter( function (d) { return ( (d.properties.primary_fu == "NG") )})
      .attr('transform', function(d) {
        return "translate(" + projection([d.geometry.coordinates[0],d.geometry.coordinates[1]]) + ")";
      })
      .attr('d', d3.svg.symbol().type("square").size(5))
      //.attr('class', 'site')
      .style('fill', '#44aaff');
      //.attr('d', path);

    var site_art = feature_layer.selectAll('.site')
      .data(sites.features)
      .enter()
      .append('path')
      //filter for oil plants only
      .filter( function (d) { return ( (d.properties.primary_fu == "PET") )})
      .attr('transform', function(d) {
        return "translate(" + projection([d.geometry.coordinates[0],d.geometry.coordinates[1]]) + ")";
      })
      .attr('d', d3.svg.symbol().type("square").size(5))
      //.attr('class', 'site')
      .style('fill', '#ff9944');
      //.attr('d', path);


    //susie lu's legend work
    
    var triangleU = d3.svg.symbol().type('triangle-up')(),
        circle = d3.svg.symbol().type('circle')()
        square = d3.svg.symbol().type('square')()

    var symbolScale =  d3.scale.ordinal()
      .domain(["Coal", "Natural Gas", "Petroleum"])
      .range([square, square, square]);

    var symbolColorScale = ['#040d14', '#44aaff', '#ff9944'];

    var svg = d3.select("svg");

    //create a background box for the legend
    var rectangle = svg.append("rect")
      .attr("x", 10)
      .attr("y", 10)
      .attr("width", 109)
      .attr("height", 52)
      .style('fill', '#FCFCFC')
      .attr("transform", "translate(828,404)");

    svg.append("g")
      .attr("class", "legendSymbol")
      .style('font-family', 'sans-serif')
      .style('font-size', '10px')
      .style('fill', '#545454')
      .attr("transform", "translate(855,426)");

    var legendPath = d3.legend.symbol()
      .scale(symbolScale)
      .orient("vertical")
      .shapePadding(5)
      .labelOffset(1);
      //.title("Symbol Legend Title")
      //.on("cellclick", function(d){alert("clicked " + d);});

    svg.select(".legendSymbol")
      .call(legendPath);

    var swatches = d3.selectAll('.legendCells .swatch');
      swatches.style('fill', function(d, i) { return symbolColorScale[i]; });
  }

  // load multiple files asynchronously and pass them to the map()
  // function above.

  queue()
    .defer(d3.json, '/static/json/gz_2010_us_040_00_20m.json')
    .defer(d3.json, '/static/json/PowerPlants_US_2014Aug_R.geojson')
    .awaitAll(map);

})();
