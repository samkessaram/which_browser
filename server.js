const WhichBrowser = require('which-browser');
const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
    const result = new WhichBrowser(request.headers)
    let domain = request.domain

    let resultObj = {
      result: result.toString() + " | " + domain
    }
    
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(resultObj))

});

server.listen(port, (err) => {
    if (err) {
        return console.log('Something is broken ¯\\_(ツ)_/¯', err)
    }
    console.log(`Server is listening on port ${port} ✌(-‿-)✌`)
})