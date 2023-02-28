let map; 

function initMap() {
    const pinMap = { lat: 51.706038856459536, lng: 17.42899641534045 };
    const pinMap2 = { lat: 50.247269431155885, lng: 19.335283255855085 };
    const pinMap3 = { lat: 52.730163853400924, lng: 15.23385239825708 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 7,
      center: pinMap,
      disableDefaultUI: true,
      styles: 
      [
          {
              "featureType": "administrative",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "color": "#444444"
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "all",
              "stylers": [
                  {
                      "color": "#f2f2f2"
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "visibility": "on"
                  },
                  {
                      "hue": "#ff0000"
                  }
              ]
          },
          {
              "featureType": "landscape.man_made",
              "elementType": "geometry",
              "stylers": [
                  {
                      "lightness": "100"
                  }
              ]
          },
          {
              "featureType": "landscape.man_made",
              "elementType": "labels",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "landscape.natural",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "lightness": "100"
                  }
              ]
          },
          {
              "featureType": "landscape.natural",
              "elementType": "labels",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "landscape.natural.landcover",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "landscape.natural.terrain",
              "elementType": "geometry",
              "stylers": [
                  {
                      "lightness": "100"
                  }
              ]
          },
          {
              "featureType": "landscape.natural.terrain",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "visibility": "off"
                  },
                  {
                      "lightness": "23"
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "all",
              "stylers": [
                  {
                      "saturation": -100
                  },
                  {
                      "lightness": 45
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "simplified"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#ffd900"
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "transit",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "all",
              "stylers": [
                  {
                      "color": "#ffd900"
                  },
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "visibility": "on"
                  },
                  {
                      "color": "#cccccc"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "labels",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          }
    ]
    
  
    });
    const contentString =
        '<div id="mapContent">' +
            'Rail-Cars Sp. z o.o.' + '<br>' +
            'Oddział Krotoszyn' + '<br>' +
            'ul. Benicka 39' + '<br>' +
            '63-700 Krotoszyn' +
        '</div>';
  
    const infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 300,
    });

    const contentString2 =
        '<div id="mapContent">' +
            'Rail-Cars Sp. z o.o.' + '<br>' +
            'Zakład Jaworzno' + '<br>' +
            'ul. Bukowska 91' + '<br>' +
            '43-602 Jaworzno' +
        '</div>';
  
    const infowindow2 = new google.maps.InfoWindow({
      content: contentString2,
      maxWidth: 300,
    });

    const contentString3 =
        '<div id="mapContent">' +
            'Rail-Cars Sp. z o.o.' + '<br>' +
            'Ul. Sikorskiego 111/315' + '<br>' +
            '66-400 Gorzów Wielkopolski' + 
        '</div>';
  
    const infowindow3 = new google.maps.InfoWindow({
      content: contentString3,
      maxWidth: 300,
    });
  

    const icon = {
        path: "M31.446,2A28.161,28.161,0,0,0,4.005,30.779c0,15.058,22.536,36.5,25.108,38.9a3.4,3.4,0,0,0,4.665,0c2.573-2.4,25.108-23.839,25.108-38.9A28.161,28.161,0,0,0,31.446,2Zm0,17.151a10.29,10.29,0,1,1-10.29,10.29A10.29,10.29,0,0,1,31.446,19.151Z",
        fillColor: '#193441',
        strokeWeight: 0,
        fillOpacity: 1, 
        width: '40px',
        anchor: new google.maps.Point(28, 60),
    };
  
    const marker = new google.maps.Marker({
      position: pinMap,
      map,
      icon: icon,
      title: "Krotoszyn",
    });

    const marker2 = new google.maps.Marker({
        position: pinMap2,
        map,
        icon: icon,
        title: "Jaworzno",
      });

    const marker3 = new google.maps.Marker({
        position: pinMap3,
        map,
        icon: icon,
        title: "Gorzów",
    });
  
    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });

    marker2.addListener("click", () => {
        infowindow2.open({
          anchor: marker2,
          map,
          shouldFocus: false,
        });
    });

    marker3.addListener("click", () => {
        infowindow3.open({
          anchor: marker3,
          map,
          shouldFocus: false,
        });
    });

      
}


  