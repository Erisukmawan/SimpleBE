const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/html');
    // res.end('Hai Dunia');
    if (req.url ==="/") {
        res.writeHead(200,{
            'Content-Type':'text/plain'
        })
        res.end("Halo Dunia");
    } else if (req.url === "/contact") {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        })
        let contact = JSON.stringify([
            {
                name : "Eri Sukmawan",
                email : "erisukmawan03@gmail.com",
                phone : "08987528332"
            },
            {
                name : "Eka Sukmawan",
                email : "erisukmawan03@gmail.com",
                phone : "08987528332"
            },
        ])
        res.end(contact);
    } else if (req.url === "/about") {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        res.end("<h1>Ini Halaman About dengan type content HTML</h1>");
    }else if (req.url === "/product") {
        fs.readFile("./public/index.html", (err, data) =>{
            if(err){
                res.writeHead(404);
                res.end("Halaman Tidak Ditemukan")
            }else{
                res.writeHead(200);
                res.end(data)
            }
        })
        // res.end("<h1>Ini Halaman About dengan type content HTML</h1>");
    }else{
        res.writeHead(404, {
            'Content-Type': 'text/plain'
        })
        res.end("Halaman Tidak Tersedia");
    }
});

server.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}/`);
});