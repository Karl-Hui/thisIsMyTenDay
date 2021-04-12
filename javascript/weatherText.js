const temperatureDegree = document.querySelector(".trmperature-degree");
const temperatureUnit = document.querySelector(".temperature-unit");
const weatherImg = document.querySelector(".weather-img-source");

function tem(callback) {
  $.ajax({
    url:
      "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread",
    type: "GET",
  })
    .done(function (data) {
      console.log("Name is:", data);
      const result = data.temperature.data.map((a) => a.value);
      temperatureDegree.textContent = result[22];
      const unit = data.temperature.data.map((a) => a.unit);
      temperatureUnit.textContent = unit[2];
      weatherImg.src = `https://www.hko.gov.hk/images/HKOWxIconOutline/pic${data.icon[0]}.png`;
      const iconNumber = data.icon[0];
      console.log("Text", iconNumber);
      callback(iconNumber);

      $(".bouncing-loader").hide();
    })
    .fail(function (data) {
      temperatureDegree.textContent = "Weather Loading Failed";
      $(".bouncing-loader").hide();
    })
    .always(function (data) {
      console.log("This function runs no matter success or fail.");
    });
}

const goodWeather = [
  "All progress takes place outside the comfort zone.",
  "Do something today that your future self will THANK YOU FOR!",
  `“I don't believe you have to be better than everybody else. I believe you have to be better than you ever thought you could be.” – Ken Venturi`,
  `“Today I will do what others won't, so tomorrow I can accomplish what others can't.” – Jerry Rice`,
  `“We are what we repeatedly do. Excellence, therefore, is not an act but a habit.” – Aristotle`,
  `“Never let the fear of striking out get in your way.” – Babe Ruth`,
  `“The greater danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it.” – Michelangelo`,
  `“A year from now you will wish you had started today.” – Karen Lamb`,
  `“Of course it’s hard. It’s supposed to be hard. If it were easy, everybody would do it. Hard is what makes it great.” – A  League of Their Own.`,
];

const badWeather = [
  `
    “Tension is who you think you should be. Relaxation is who you are.” –Chinese Proverb`,
  `“Your mind will answer most questions if you learn to relax and wait for the answer.” –William Burroughs`,
  `“Sometimes the most important thing in a whole day is the rest we take between two deep breaths.” –Etty Hillesum`,
  `“How beautiful it is to do nothing, and then to rest afterward.” –Spanish Proverb`,
  `“Sometimes the most productive thing you can do is relax.” –Mark Black`,
];

function ranText(n) {
  const randomText = document.querySelector(
    ".weather-random-text-random-text-now"
  );
  console.log("iconNumber Weather", n);
  const badWeatherNumber = [53, 54, 62, 63, 64, 65];
  if (badWeatherNumber.includes(n)) {
    console.log("Bad Weather");
    const n = Math.floor(Math.random() * badWeather.length);
    randomText.textContent = badWeather[n];
  } else {
    console.log("GOOD WEATHER");
    const num = Math.floor(Math.random() * goodWeather.length);
    randomText.textContent = goodWeather[num];
  }
}

tem(ranText);
