var app = express();

//routes
app.get("/",function(req,res){
    //res.render("index.html");
    res.send('hello world');
}
)
/*
window.addEventListener('load',()=>{
    let long;
    let lat;

    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(position =>{
            console.log(position);
            long = position.coords.longitude;
            lat  = position.coords.latitude;
        });
    }
    else
    {
        h1.textContent = "hey this is not working because reasons";
    }
})
*/
