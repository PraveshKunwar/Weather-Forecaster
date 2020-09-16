//Ask permission for users location
function getLocationCord(position) {
  const lat = position.latitude;
  const long = position.longitude;
}

function locationError(error) {
  var code = error.code;
  var message = error.message;
}

navigator.geolocation.getCurrentPosition(getLocationCord, locationError); //get coordinates next time
//fetch data
fetch(
  `http://api.weatherapi.com/v1/current.json?key=d83b37c5a2c843aea8120446201609&q=Wixom`
)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });
