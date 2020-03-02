const http = require('http');
const path = require('path');
const fs = require('fs');


const server = http.createServer((req, res) => {
    /*
    console.log(req.url);
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'),
            (err, content) => {
                if (err) throw err;
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        ); 
    }
    */

    // Build file path
    let filePath = path.join(
        __dirname,
        'public',
        req.url === '/' ? 'index.html' : req.url
    );
    // Create Extension of file
    let extname = path.extname(filePath);

    // Set initial content type 
    let contentType = 'text/html';

    // check ext and set content type
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'img/png';
            break;
        case '.jpg':
            contentType = 'img/jpg';
            break;
    }

    // read file

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                // PAGE 404
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf-8');
                })
            } else {
                // some server error;
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);

            }
        } else {
            // success

            res.writeHead(200, { 'Content-Type': contentType });
                res.end(content, 'utf-8');
          
        }
    })
 
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}...`));