//we will fetch dats when we needed
const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer=document.querySelector(".user-info-container");

//initially variable need!!

let oldTab= userTab;
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
oldTab.classList.add("current-tab");
getfromSessionStorage();

function switchTab(newTab)
{
    if(newTab != oldTab)
    {
        oldTab.classList.remove("current-tab");
        oldTab=newTab;
        oldTab.classList.add("current-tab");

        if(!searchForm.classList.contains("active"))
        {
            //kya search form wala container invisible ,if yes then make it visible.
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else
        {
            //pahle se he search weather wale tab par hain
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            //ab mein your weather tab me a gya hu ,toh weather bhi diaplay karna parega,so lets check local storage first
            //for coordinates,if we have saved them there
            getfromSessionStorage();
        }
    }
}

userTab.addEventListener("click",()=>
{
    //pass clicked tab as a input parameter
    switchTab(userTab);
});

searchTab.addEventListener("click",()=>
{
    //pass clicked tab as a input parameter
    switchTab(searchTab);
});

function getfromSessionStorage()
{
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates)
    {
        //agar local coordinates nhi mila
        grantAccessContainer.classList.add("active");
    }
    else
    {
        const coordinates= JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }
}

async function fetchUserWeatherInfo(coordinates)
{
    const {lat,lon} = coordinates;
    //make grant container invisible
    grantAccessContainer.classList.remove("active");
    //make loader visible
    loadingScreen.classList.add("active");

    //API call
    try
    {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        const data=await response.json();

        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err)
    {
        loadingScreen.classList.remove("active");
        //Home work
    }
}

function renderWeatherInfo(weatherInfo)
{
    //firstly we have to fetch the elements
    console.log("render aka data " , weatherInfo);
    const cityName=document.querySelector("[data-cityName]");
    const countryIcon=document.querySelector("[data-countryIcon]");
    const desc=document.querySelector("[data-weatherDesc]");
    const weatherIcon=document.querySelector("[data-weatherIcon]");
    const temp=document.querySelector("[data-temp]");
    const windspeed=document.querySelector("[data-windspeed]");
    const humidity=document.querySelector("[data-humidity]");
    const cloudiness=document.querySelector("[data-Cloudiness]");

    //  
    cityName.innerText = weatherInfo?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = `${weatherInfo?.main?.temp} °C`;
    windspeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
    humidity.innerText = `${weatherInfo?.main?.humidity} %`;
    cloudiness.innerText = `${weatherInfo?.clouds?.all} %`;
}

function getLocation()
{
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(showposition);
    }
    else{
        console.log("No geoloc support");
    }
}
function showposition(position)
{
    const userCoordinates = 
    {
        lat : position.coords.latitude,
        lon : position.coords.longitude,
    }
    // console.log(lat);

    sessionStorage.setItem("user-coordinates",JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);
}


const grantAccessButton = document.querySelector("[data-grantAccess]");

grantAccessButton.addEventListener("click",getLocation);

const searchInput = document.querySelector("[data-searchInput]");
const imageButton = document.querySelector('.magnifying-btn');

searchForm.addEventListener("click",(e)=>
{
    //console.log("hahaahah");
    e.preventDefault();
    let cityName = searchInput.value;
    //console.log("hahaahah" , cityName);
    if(cityName === "")
    {
        return;
    }
    else{
        fetchSearchWeatherInfo(cityName);
    }
})

async function fetchSearchWeatherInfo(city)
{
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");
    
    try
    {
        console.log(city);
        console.log(API_KEY);
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data= await response.json();
        userInfoContainer.classList.add("active");
        loadingScreen.classList.remove("active");
        console.log("fetch function ke ander  ",data);
        renderWeatherInfo(data);
    }
    catch(err)
    {
        //Hw    
    }
}