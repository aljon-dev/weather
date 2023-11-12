

const container = document.querySelector('.container');
const search = document.querySelector('.button')
const weather = document.querySelector('.weather');


search.addEventListener('click', () =>  {
    const APIKey ='18504aa4cf0daa199227389cb51e19f7';
    
    const city = document.querySelector('.search').value;
    if (city === ''){
        return; 
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then(response => response.json())
    .then(json => {
        if(json.cod === '404'){
            document.querySelector('.description').innerHTML = "Not Found ";
            document.querySelector('.icon').innerHTML ="not found";
            document.querySelector('.Temperature').innerHTML = "0";
            document.querySelector('.Wind').innerHTML="0";
            return;
        } else {
             const icon = document.querySelector('.icon');
             const Temperature = document.querySelector('.Temperature');
             const description = document.querySelector('.description')
             const Wind = document.querySelector('.Wind');

                switch(json.weather[0].main){
                    case 'Clear':
                        icon.innerHTML=`<iconify-icon icon="arcticons:skyscanner"></iconify-icon>`;
                        break;

                    case 'Rain': 
                    icon.innerHTML=`<iconify-icon icon="carbon:rain"></iconify-icon>`;
                        break;

                    case 'Snow': 
                        icon.innerHTML=`<iconify-icon   icon="ion:snow"></iconify-icon>`;
                        break;

                    case 'Clouds': 
                        icon.innerHTML=`<iconify-icon icon="material-symbols:cloud"></iconify-icon>`;
                        break;

                    case 'Haze': 
                     icon.innerHTML=`<iconify-icon icon="tabler:haze"></iconify-icon>`;
                        
                        break;

                }
                
               

                Temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
                Wind.innerHTML =`${parseInt(json.wind.speed)} Km/h`;
                description.innerHTML = `${json.weather[0].description}`;



            }
    });
        
});







