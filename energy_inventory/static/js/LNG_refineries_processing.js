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
  ;

  svg.selectAll('g').attr('class', 'graph-layer');

  // the following function is called from the queue() object below

  function map(error, queued_data) {

    // queued data is passed in from the queue() object. we'll use this
    // to draw the map and its various features.

    var map_data = queued_data[0];
    var lng = queued_data[1];
    var petroleum = queued_data[2];
    var nat_gas = queued_data[3];


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

    var lng_art = feature_layer.selectAll('path') //was .site previous to the addition of symbol, plus 'class,'site' line below
      .data(lng.features)
      .enter()
      .append('path')
      .attr('transform', function(d) {
        return "translate(" + projection([d.geometry.coordinates[0],d.geometry.coordinates[1]]) + ")";
      })
      .attr('d', d3.svg.symbol().type("triangle-up").size(44))
      //.attr('class', 'site')
      .attr('data-legend', "LNG Import/Export Terminal")
      .style('fill', d3.rgb(19, 19, 70).brighter());
      //.attr('d', path);
      

    var petroleum_art = feature_layer.selectAll('path')
      .data(petroleum.features)
      .enter()
      .append('path')
      .attr('transform', function(d) {
        return "translate(" + projection([d.geometry.coordinates[0],d.geometry.coordinates[1]]) + ")";
      })
      .attr('d', d3.svg.symbol().type("diamond").size(40))
      //.attr('class', 'site')
      .attr('data-legend', "Petroleum Refinery")
      .style('fill', '#919191');
      //.attr('d', path);

    var ng_art = feature_layer.selectAll('.site')
      .data(nat_gas.features)
      .enter()
      .append('path')
      .attr('class', 'site')
      .attr('data-legend',"Natural Gas Processing Plant")
      .style('fill', '#00b4ff')
      .attr('d', path);

    legend = svg.append('g')
      .attr('class','legend')
      .attr('transform','translate(740,418)')
      .attr("data-style-padding",10)
      .style('font-size','10px')
      .style('fill', '#FCFCFC')
      .style('font-family', 'sans-serif')
      //.style('stroke', '#919191')
      .call(d3.legend)
  }

  // load multiple files asynchronously and pass them to the map()
  // function above.

  queue()
    .defer(d3.json, '/static/json/gz_2010_us_040_00_20m.json')
    .defer(d3.json, '/static/json/LNG_ImpExp_Terminals_US_2013.geojson')
    .defer(d3.json, '/static/json/Petroleum_Refineries_US_2015.geojson')
    .defer(d3.json, '/static/json/NaturalGas_ProcessingPlants_US_2014.geojson')
    .awaitAll(map);

})();
