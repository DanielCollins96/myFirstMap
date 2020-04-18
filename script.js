window.addEventListener('load', (event) => {

let fullMap = document.querySelector('#map');

fullMap.addEventListener('click', (event => {
    console.log(event);
}))

var geojson = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-77.032, 38.913]
      },
      properties: {
        title: 'Mapbox',
        description: 'Washington, D.C.',
        icon: 'harbor'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-122.414, 37.776]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }]
  };
console.log(map);
console.log('hey');
  geojson.features.forEach(function(marker) {

    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker';
  
    // make a marker for each feature and add to the map
    new mapboxgl.Popup(el)
      .setLngLat(marker.geometry.coordinates)
      .setText(
        'Construction on the Washington Monument began in 1848.'
        )
      .addTo(map);
  })

});
