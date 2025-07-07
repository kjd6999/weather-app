const button = document.getElementById("search-button");
const input = document.getElementById("city-input")
const cityName = document.getElementById("city-name")
const cityTime = document.getElementById("city-time")
const cityTemp = document.getElementById("city-temp")


async function getData(cityName) {
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=c7d1fd51e0cd4455bce124009250407&q=${cityName}=yes`)
    return await promise.json()
}


button.addEventListener("click", async () => {
    const value = input.value;
    const resultm = await getData(value)
    console.log(resultm);
    cityName.innerText = `${resultm.location.name}, ${resultm.location.region} - ${resultm.location.country}`
    cityTime.innerText = resultm.location.localtime;
    cityTemp.innerText = resultm.current.temp_c
        
 })
