const getinfo = document.querySelector('form');
const box = document.querySelector('.card');
const update = document.querySelector('.update');
const day=document.querySelector('img.day');
const icons=document.querySelector('.icons img');

const givedata = (data) => {

    //const cityinfo = data.cityinfo;
    //const infoweather = data.infoweather;
    const {cityinfo,infoweather}=data;

    update.innerHTML = `<h4 class="my-3">${cityinfo.EnglishName}</h4>
                        <div class="my-3">${infoweather.WeatherText}</div>
                        <div class="display-4 my-4">
                           <span>${infoweather.Temperature.Metric.Value}</span>
                           <span>&deg;c</span>
                        </div>`;

    /*let daysrc=null;
    if(infoweather.IsDayTime){
        daysrc='img/day.svg';
    }else{
        daysrc='img/night.svg';
    }*/
    const daysrc=infoweather.IsDayTime?'img/day.svg':'img/night.svg';
    day.setAttribute('src',daysrc);
    
    const iconnew=`img/icons/${infoweather.WeatherIcon}.svg`;
    icons.setAttribute('src',iconnew);

    if(box.classList.contains('d-none'))
    {
        box.classList.remove('d-none');
    }
};


const newcity = async (city) => {
    const cityinfo = await callcity(city);
    const infoweather = await weatherinfo(cityinfo.Key);

    return { cityinfo, infoweather };
};


getinfo.addEventListener('click', event => {
    event.preventDefault();

    const city = getinfo.city.value.trim();
    getinfo.reset();

    newcity(city)
        .then(data => {
            givedata(data);
        })
        .catch(error => {
            console.log(error);
        });

    //local storage
    localStorage.setItem('city',city); 
});

if(localStorage.getItem('city'))
{
    newcity(localStorage.getItem('city'))
    .then(data=>{givedata(data);})
    .catch(error=>{console.log(error)});
}