
var
  // set basic dimensions for the map
    width = 900
  , height = 450
  , padding = {top: 10, right: 50, bottom: 20, left: 10}

  // create projection and path objects with which to draw geo objects
  , projection = d3.geo.albersUsa()
      .scale(1000)
      .translate([width / 2 - 50, height / 2])
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

var draw_ocean = function draw_ocean() {
  // On the ocean_layer <g> draw the sphere of the earth and color
  // it blue
  return ocean_layer.append('path')
    .datum({type: 'Sphere'})
    .attr('id', 'sphere')
    .attr('d', path)
    .attr('class', 'boundary')
    .style('fill', '#C2C2C2');
};

var draw_map = function draw_map(map_data) {
  // draw the US on the land_layer <g>.
  return land_layer.selectAll('.map-boundary')
    .data(map_data.features)
    .enter()
    .append('path')
    .attr('class', 'map-boundary boundary')
    .attr('d', path)
    .style('fill', '#FCFCFC');
};

var draw_pipelines = function draw_pipelines(pipes, color, width, classname) {
  feature_layer.selectAll('.'+classname)
    .data(pipes.features)
    .enter()
    .append('path')
    .style('stroke', color)
    .style('stroke-width', width)
    .attr('fill','none')
    .attr('class', classname)
    .attr('d', path);
};

var draw_legend = function draw_legend(legend_data) {

  var lleft = 670
    , ltop = 310
    , li = 0
  ;

  svg_root.append('rect')
    .attr('width', 200)
    .attr('height', legend_data.height * 20 + 10)
    .style('fill', '#fcfcfc')
    .attr('transform', 'translate('+lleft+','+ltop+')');

  for (var i=0; i < legend_data.groups.length; ++i) {
    if (legend_data.groups[i].hasOwnProperty('head')) {
      var lines = legend_data.groups[i].head.split('\n');
      for (var k = 0; k < lines.length; ++k) {
        svg_root.append('text')
          .text(lines[k])
          .style('font-family', 'sans-serif')
          .style('font-size', '15px')
          .style('fill', '#545454')
          .attr("transform", "translate("+(lleft+10)+","+(ltop+20+li*20)+")");
        li++;
      }
    }

    for (var j=0; j < legend_data.groups[i].items.length; ++j) {
      svg_root.append('rect')
        .attr('width', 15)
        .attr('height', 15)
        .style('fill', legend_data.groups[i].items[j].color)
        .attr('transform', "translate("+(lleft+10)+","+(ltop+20+li*20-13)+")");
      svg_root.append('text')
        .text(legend_data.groups[i].items[j].name)
        .style('font-family', 'sans-serif')
        .style('font-size', '15px')
        .style('fill', '#545454')
        .attr("transform", "translate("+(lleft+30)+","+(ltop+20+li*20)+")");
      li++;
    }
  }
};