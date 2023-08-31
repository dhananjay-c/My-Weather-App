const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a19bba9b41msh5fd4a481f406860p1f73b9jsncf0f20cae894',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
console.log("New York");
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)

        t.innerHTML = response.temp;
        tm.innerHTML = response.temp;
        minTemp.innerHTML = response.min_temp;
        maxTemp.innerHTML = response.max_temp;




        humidity.innerHTML = response.humidity;
        hum.innerHTML = response.humidity;

        cloudePCT.innerHTML = response.cloud_pct;
        feelsLike.innerHTML = response.feels_like;




        windSpeed.innerHTML = response.wind_speed;
        wSpeed.innerHTML = response.wind_speed;
        windDegree.innerHTML = response.wind_degrees;


    })
    .catch(err => console.error(err));



let searchCity = "New York";


function formatString(str) {
    return str
        .replace(/(\B)[^ ]*/g, match => (match.toLowerCase()))
        .replace(/^[^ ]/g, match => (match.toUpperCase()));
}

function search() {


    let textBox = document.getElementById("src");
    searchCity = textBox.value;



    // alert(searchCity);
    console.log(searchCity);
    let city = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${searchCity}`
    fetch(city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)

            t.innerHTML = response.temp;
            tm.innerHTML = response.temp;
            minTemp.innerHTML = response.min_temp;
            maxTemp.innerHTML = response.max_temp;




            humidity.innerHTML = response.humidity;
            hum.innerHTML = response.humidity;

            cloudePCT.innerHTML = response.cloud_pct;
            feelsLike.innerHTML = response.feels_like;




            windSpeed.innerHTML = response.wind_speed;
            wSpeed.innerHTML = response.wind_speed;
            windDegree.innerHTML = response.wind_degrees;


        })
        .catch(err => console.error(err));



    searchCity = formatString(searchCity)
    document.getElementById("city").innerHTML = searchCity;

}









const keyBoard = document.querySelector('.search')

keyBoard.addEventListener('keyup', e => {
    // console.log(e)
    if (e.keyCode === 13) {
        search()
    }
})





