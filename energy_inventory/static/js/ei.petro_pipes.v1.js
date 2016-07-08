(function() {

  // the following function is called from the queue() object below
  function map(error, queued_data) {

    // queued data is passed in from the queue() object. we'll use this
    // to draw the map and its various features.
    var map_data = queued_data[0];
    var pet_pipes = queued_data[1];
    var crude_pipes = queued_data[2];

    draw_ocean();

    draw_map(map_data);

    draw_pipelines(pet_pipes, '#ffad69', 1, 'petro');
    
    draw_pipelines(crude_pipes, '#301c0c', 1, 'crude');

    legend_data = {
      height: 3,
      groups: [{
        head: 'Petroleum pipelines',
        items: [{
          name: 'Crude oil', color: '#301c0c'
        }, {
          name: 'Refined products', color: '#ffad69'
        }]
      }]
    };

    draw_legend(legend_data);

  }

  // load multiple files asynchronously and pass them to the map()
  // function above.
  queue()
    .defer(d3.json, '/static/json/gz_2010_us_040_00_20m.json')
    .defer(d3.json, '/static/json/PetroleumProduct_Pipelines_US_Nov2014.geojson')
    .defer(d3.json, '/static/json/CrudeOil_Pipelines_US_Nov2014.geojson')
    .awaitAll(map);

})();
