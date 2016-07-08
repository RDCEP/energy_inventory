(function() {

  // the following function is called from the queue() object below
  function map(error, queued_data) {

    var map_data = queued_data[0];
    var ng_pipes_intra = queued_data[1];
    var ng_pipes_inter = {features: ng_pipes_intra.features.filter(function(d) {
      var interstateArray = [
        "Columbia Gas Trans Co", "Transcontinental Gas PL",
        "Northern Natural Gas Co", "Texas Eastern Trans Co", "ANR Pipeline Co",
        "ANR Storage Co", "Tennessee Gas Pipeline", "Dominion Transmission Co",
        "Gulf South Pipeline Co", "El Paso Natural Gas Co",
        "CenterPoint Energy GasTrans Co", "Northwest Pipeline",
        "Natural Gas PL Co of Am", "Colorado Interstate Gas Co",
        "Texas Gas Transmission Co", "Southern Natural Gas Co",
        "Algonquin Gas Trans Co", "Questar Pipeline Co", "Trunkline Gas Co",
        "Great Lakes Gas Trans Co", "Panhandle Eastern PL Co",
        "Southern Star Central Gas PL Co", "Wyoming Interstate PL Co",
        "Northern Border PL Co", "Transwestern Gas Co",
        "Columbia Gulf Pipeline", "National Fuel Gas Supply Co",
        "Florida Gas Trans Co", "Alliance Pipeline System",
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
      return interstateArray.indexOf(d.properties.OperatorNa) >= 0;
    })};

    console.log(ng_pipes_inter);

    draw_ocean();

    draw_map(map_data);

    draw_pipelines(ng_pipes_intra, '#ff8e93', 1, 'intra');
    
    draw_pipelines(ng_pipes_inter, '#3d99e5', 1, 'inter');

    legend_data = {
      height: 4,
      groups: [{
        head: 'Natural gas\ntransmission pipelines',
        items: [{
          name: 'Interstate', color: '#3d99e5'
        }, {
          name: 'Intrastate', color: '#ff8e93'
        }]
      }]
    };

    draw_legend(legend_data);

  }

  // load multiple files asynchronously and pass them to the map()
  // function above.
  queue()
    .defer(d3.json, '/static/json/gz_2010_us_040_00_20m.json')
    .defer(d3.json, '/static/json/NaturalGas_InterIntrastate_Pipelines_US.geojson')
    .awaitAll(map);

})();
