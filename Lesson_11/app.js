document.querySelector('.container').innerHTML = "<div id='location'></div><div id='country'></div><div id='temperature'></div><img id='icon'>";

let dom = {
    loc : document.getElementById('location'),
    img : document.getElementById('icon'),
    submit : document.getElementById('submit'),
    country: document.getElementById('country'),
    temperature: document.getElementById('temperature'),
    city: document.getElementById('city')
};

dom.submit.addEventListener('click', () => {
    if(dom.city.value === '') {
        clearWeather('Please enter a city');
        return false;
    };

    getWeather();
});

let weather = new Weather();

function getWeather() {
    weather.getWeather()
        .then(results => {
            dom.loc.textContent = results.location.name; 
            dom.country.textContent = results.location.country; 
            dom.temperature.textContent = results.current.temp_c + ' C';
            dom.img.setAttribute('src', results.current.condition.icon);
        })
        .catch(err => console.log(err));
};

function clearWeather(msg) {
    dom.img.setAttribute('src', '');
    dom.loc.textContent = ''; 
    dom.country.textContent = ''; 
    dom.temperature.textContent = '';
    dom.loc.textContent = msg;
};
