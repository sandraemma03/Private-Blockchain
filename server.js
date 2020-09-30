'use strict';

const Hapi=require('hapi');
const Blockchain = require('./simpleChain');

let blockchain = new Blockchain();

// Create a server with a host and port
const server=Hapi.server({
    host:'localhost',
    port:8000
});

// Add the route
server.route({
    method:'GET',
    path:'/hello',
    handler:function(request,h) {

        return'hello world';
    }
});

// server.route({
//     method: 'GET',
//     path: '/block/{height}',
//     handler: function(request, reply) {

//         const blockHeight = blockchain.getBlock(request.params.height)

//         return reply.send(blockHeight)
//         return 'Hello, ' + encodeURIComponent(request.params.height) + '!';
//     }
// });



// server.route({
//     method: 'POST',
//     path: '/block',
//     handler: (request, response) => {
//         response(request.payload);
//         if (request.body.body === '' || request.body.body === undefined) {
//             response.status(400).json({
//               "status": 400,
//               message: "Fill the body parameter"
//             })
//      }

//   blockchain.addBlock(new Block(req.body.body))
//   const height = blockchain.getBlockHeight()
//   const responses = blockchain.getBlock(height)

//   response.send(responses)
//     }
// });


// Start the server
async function start() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();