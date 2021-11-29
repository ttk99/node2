const http = require('http')
const port = 3000
const host = 'localhost'
const message = 'hello YSE'

const app = http.createServer(function(req,res){
     res.writeHead(200, {'contentType': 'text/html'})
    // res.write('<h1>Home Page</h1>')
    // res.write(message)
     res.end()

    console.log(`Method: ${request.method}`);
    console.log(`Response: ${message}`);
 }) 

 app.listen(port,host)
 console.log('Server listen: http://${host}:${port}');
