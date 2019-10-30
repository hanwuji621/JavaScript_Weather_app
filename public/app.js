window.addEventListener('load',()=>{
    let long;
    let lat;
    
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(position =>{
            console.log(position);
            long = position.coords.longitude;
            lat  = position.coords.latitude;

            //const proxy ="https://cors-anywhere.herokuapp.com";
            const api = 'https://api.darksky.net/forecast/413348a644267a7ec177319ea973a021/${lat},${long}';

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
