class Weather {
    constructor () {
        this.apiKey = 'd031c7971c1340d1ba270157200104';
        this.city = city;
    }

    async getWeather() {
        let url = `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city.value}`;

        let response = await fetch(url);

        if(response.status === 400) {
            clearWeather('Can\'t find this city');
        };

        let results = await response.json();
        
        return results;
    };
};
