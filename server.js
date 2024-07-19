//creation d'un serveur
const http=require('http')
const hostname='127.0.0.1'
const port=3000
const server=http.createServer((req, res) => {
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');   
    res.end('Hello World\n');
});  
server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
//task3

const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File created and saved!');
});
//read date
fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
