


const express = require('express');//get something call expres and put into a variable called express

const server = express();

server.use(express.static(__dirname + '/html'));

let requestCount = 0;

server.get('/',(request,response)=>{
    console.log('got a request');
    response.send('hello from your server')
})
//on this server, i'm listening for a get request
// '/' means the route of the server

server.get('/lawn',(request,response)=>{
    console.log('got a lawn request');
    response.send('get off my lawn');
})

server.get('/data',(request,response)=>{
    console.log('got a request');
    requestCount++
    var me = {
        name: 'Torie',
        favoriteFood: 'seafood',
        timesRequested: requestCount
    }
    response.send(JSON.stringify(me));
})

server.listen(3000,()=>{
    console.log('server is listening on port 3000')
})