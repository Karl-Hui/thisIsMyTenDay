
const temDescript = document.querySelector('.temperature-discription');


fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw')
  .then(function(response) {
    return response.json();
  })
  .then(function(myjson) {
    console.log("WTEATHER API: ",myjson);
    let result = myjson.forecastDesc;
    temDescript.textContent = result;
   
  });

  

 