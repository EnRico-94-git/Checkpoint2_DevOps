const http = require('http');
const PORT = 3000
const server = http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type' : 'text/html'});
    response.write('<h1 style="text-align: center;">Implantacao efeituada com sucesso</h1>');
    response.end();
})


server.listen(3000,()=>{
    console.log('Server em run na porta 3000')
})