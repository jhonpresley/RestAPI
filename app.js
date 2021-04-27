const express = require("express");
const app = express();
const segundaRota = require('./routes/segundaRota.js');

const http = require('http')
const host = '127.0.0.1'
const port = '1357'
const url = `http://${host}:${port}`


//METODO MIDDLEWARE
app.use(express.json());
app.use('/segundaRota',segundaRota )

app.get("/", (req, resp) => {
    resp.sendFile('index.html', {root: __dirname});
});


app.listen(port, host, () => {
  console.log(`Server is running at ... ${url} `)
})
