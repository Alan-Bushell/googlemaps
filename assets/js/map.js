


var locations = [
  ['Dublin', 53.3498, -6.2603, 'Dublin is the capital of Ireland and the home of scholars and poets alike. For those of you who fancy a nice quiet pint or a rowdy sing along then this is the place for you. But be warned, it does not come cheap!', 'https://en.wikipedia.org/wiki/Dublin'],
  ['Milan', 45.4642, 9.1900, 'Milan, a metropolis in Italys northern Lombardy region, is a global capital of fashion and design.', 'https://en.wikipedia.org/wiki/Milan'],
  ['Paris', 48.8566, 2.3522, 'Paris, Frances capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine.', 'https://en.wikipedia.org/wiki/Paris'],
  ['London', 51.5074, -0.1278, 'London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations.','https://en.wikipedia.org/wiki/London' ],
  ['Rome', 41.9028, 12.4964, 'Rome is the capital city and a special comune of Italy as well as the capital of the Lazio region. The city has been a major human settlement for over two millennia. With 2,860,009 residents in 1,285 km², it is also the countrys most populated comune.', 'https://en.wikipedia.org/wiki/Rome']
  ];

function initMap() {

    var myOptions = {
      center: new google.maps.LatLng(53.3498, -6.2603),
      zoom: 4,

    };
    var map = new google.maps.Map(document.getElementById("map"),
        myOptions);

         setMarkers(map,locations)

  }
  
    function setMarkers(map,locations){

      var marker, i

for (i = 0; i < locations.length; i++)
 {  

 var name = locations[i][0]
 var lat = locations[i][1]
 var long = locations[i][2]
 var details =  locations[i][3]
 var site = locations[i][4]

 latlngset = new google.maps.LatLng(lat, long);

  var marker = new google.maps.Marker({  
          map: map, title: name , position: latlngset  
        });
        map.setCenter(marker.getPosition())


        var content =  name + `</br>` + details + " " + `<a href="` + site + `"target="blank">visit here</a>`

  var infowindow = new google.maps.InfoWindow()

google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ 
        return function() {
           infowindow.setContent(content);
           infowindow.open(map,marker);
        };
    })(marker,content,infowindow)); 

  }
  }
  