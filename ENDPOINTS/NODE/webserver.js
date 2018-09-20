

const express = require( 'express');//'express' is a module

const server = express();

const cars = {
    'toyota':{
        'camry':{'wheels':4, 'engine':2.4, 'price':36000},
        'corolla':{'wheels':4, 'engine':1.4, 'price':24000}
    },
    'ford':{
        'taurus':{'wheels':4, 'engine':1.8, 'price':30000},
        'explorer':{'wheels':4, 'engine':2.5, 'price':35000}
    }
};

server.get('/dataendpoint.php',(request,response)=>{
    let wantedCars = cars[request.query.make] || cars;
    if(request.query.engineSize){
        let filterdCars = {};
        const checkSize = parseFloat(request.query.engineSize);
        for(let key in wantedCars){
            if(wantedCars[key].engine>checkSize){
                filterdCars[key]=wantedCars[key];
            }
        }
        wantedCars = filterdCars;
    }
    const json_cars = JSON.stringify(wantedCars);
    response.send(json_cars);
})

server.use( express.static(__dirname + '/documentroot') );//when someone asks for file, go to this file. It's called static because the files in this folder do not change
//you don't want to put your file to an public accessible place
server.listen(3000,function(){
    console.log('server is listening on port 3000');
})