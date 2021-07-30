const key = 'FO9emzOsFqYjcgyNooQhAtsIAfHYhxQ1';

//weather info
const weatherinfo = async (ki) => {
    const baseadd = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const querypara = `${ki}?apikey=${key}`;

    const resp = await fetch(baseadd + querypara);

    const data = await resp.json();
    return data[0];
};



//city info
const callcity = async (city) => {

    const baseadd = 'http://dataservice.accuweather.com/locations/v1/cities/search';

    const querypara = `?apikey=${key}&q=${city}`;

    const resp = await fetch(baseadd + querypara);
    const data = await resp.json();
    return data[0];
};

/*callcity('daltonganj')
    .then(data => {
        return weatherinfo(data.Key);
    }).then(data => {
        console.log(data);
    }).catch(error => console.log(error));*/
