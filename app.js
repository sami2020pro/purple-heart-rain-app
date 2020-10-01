const server = require('server');
const { get, post } = server.router;

// Launch server
server({ port: 3000 }, [
    get('/', ctx => './public')
]);

console.log("The server was running on 127.0.0.1:3000 😎");
