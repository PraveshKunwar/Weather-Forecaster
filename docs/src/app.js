//Ask permission for users location
function changeValue() {
  const val = document.getElementById("search-bar").value;
  if (val) {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=d83b37c5a2c843aea8120446201609&q=${val}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.location == undefined) {
          document.getElementById("para-results").innerHTML =
            "❌ Couldn't Find Location ❌";
        }
        document.getElementById(
          "para-results"
        ).innerHTML = `Location: ${data.location.name}<br /> Country: ${data.location.country}`;
        document.getElementById(
          "para-results2"
        ).innerHTML = `<h2>Weather Results</h2> </br>
        Current Weather: ${data.current.condition.text};<br>
        Feels Like: ${data.current.feelslike_c}C° / ${data.current.feelslike_f}F
        `;
        document.getElementById("img-icon").src = data.current.condition.icon;
        document.getElementById("para-results3").innerHTML = `<h2>Wind</h2><br>
        Wind Direction: ${data.current.wind_degree}<br>
        Wind Speed: ${data.current.wind_kph}KPH / ${data.current.wind_kph}MPH
        `;
        console.log(data);
      });
  }
}

document.getElementById("icon-search").onclick = changeValue;
//get coordinates next time
//fetch data
