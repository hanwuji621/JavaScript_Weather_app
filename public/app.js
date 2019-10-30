window.addEventListener('load',()=>{
    let long;
    let lat;
    
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(position =>{
            console.log(position);
            long = position.coords.longitude;
            lat  = position.coords.latitude;

            const proxy ="https://cors-anywhere.herokuapp.com";
            const api = 'api.openweathermap.org/data/2.5/weather?lat=35&lon=139&APPID=17dd6c9ee5a497d16add578b6ad550fe';

            fetch(api)
                .then(Response =>{
                    return Response.json();   
                })
                .then(data =>{
                console.log(data);
            });
        });

    }
});
