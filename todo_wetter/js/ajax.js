const apiKey = '18643a355eb343c4610926805cbc9cdd'; // mein apiKey von https://openweathermap.org/
const cityID = '2928809'; // Essen in NRW
const wetter = () => {
        fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + apiKey)
            .then(function(resp) { return resp.json() }) // Die Initial Response ist technisch gesehen ein Stream von Inhalten, also rufen wir zur Transformation die Verwendung von .then auf, um die json Response zurückzugeben.
            .then(function(data) {
                wetterAnzeigen(data);
            })
            .catch(function() {
                // error abfangen
            });
    }
    // alle englischen Bezeichner müssen so, wegen den Daten der API
const wetterAnzeigen = (vonAPIerhalteneDaten) => {
    const celcius = Math.round(parseFloat(vonAPIerhalteneDaten.main.temp) - 273.15); // Der absolute Nullpunkt bezeichnet den unteren Grenzwert für die Temperatur. Dieser definiert den Ursprung der absoluten Temperaturskala und wird als 0 Kelvin festgelegt, das entspricht −273,15 Grad Celsius.
    const description = vonAPIerhalteneDaten.weather[0].description;

    document.getElementById('wetterBeschreibung').innerHTML = description;
    document.getElementById('wetterTemperatur').innerHTML = celcius + '&deg;';
    document.getElementById('wetterOrt').innerHTML = vonAPIerhalteneDaten.name;
}
window.onload = function() {
    wetter();
}