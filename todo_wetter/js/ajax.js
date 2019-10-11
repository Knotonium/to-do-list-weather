const apiKey = 'INSERT YOUR OWN API KEY'; 
const cityID = 'INSERT CITY ID'; 
const wetter = () => {
        fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + apiKey)
            .then(function(resp) { return resp.json() }) 
            .then(function(data) {
                wetterAnzeigen(data);
            })
            .catch(function() {
            });
    }
const wetterAnzeigen = (vonAPIerhalteneDaten) => {
    const celcius = Math.round(parseFloat(vonAPIerhalteneDaten.main.temp) - 273.15); 
    const description = vonAPIerhalteneDaten.weather[0].description;

    document.getElementById('wetterBeschreibung').innerHTML = description;
    document.getElementById('wetterTemperatur').innerHTML = celcius + '&deg;';
    document.getElementById('wetterOrt').innerHTML = vonAPIerhalteneDaten.name;
}
window.onload = function() {
    wetter();
}
