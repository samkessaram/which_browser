const WhichBrowser = require('which-browser');
const http = require('http');
const port = 3000;

const server = http.createServer((request, response) => {
    const result = new WhichBrowser(request.headers)
    let resultString = result.toString()
    let domain = request.domain
    response.end(resultString + ' | ' + domain)
});

server.listen(port, (err) => {
    if (err) {
        return console.log('Something is broken ¯\\_(ツ)_/¯', err)
    }
    console.log(`Server is listening on port ${port} ✌(-‿-)✌`)
})