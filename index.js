const express = require('express')
const path = require('path')

const app = express()

const port = 4444

app.get('/', function (req, res) {
    const htmlFile = (path.join(__dirname, 'views/index.html'))
    console.log(htmlFile)
    res.sendFile()
})

app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/script.js'))
})

app.get('/mycolors', (req, res) => {
    res.json(
        [
            {
                "code": "#F0F8FF",
                "name": "Alice Blue"
            },
            {
                "code": "#F0FFF0",
                "name": "Honeydew"
            }
        ]
    )
})

app.get('/colors', (req, res) => {
    res.send(path.join(__dirname, 'data/colors.json'))
})

app.post('/colors', (req, res) => {

    /*
    Linux, Apple -- /
    Windows -- \
    */
})

app.listen(port)