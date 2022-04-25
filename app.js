// Usando objeto express
const express = require("express")
// App de Express
const app = express()
// Puerto en el que vamos a ver nuestra app
const port = 3000

// path inicial, respondera a la url localhost:3000
app.get('/', (req,res) => {
    res.send('Hello world!')
})

// Respondiendo texto
// localhost:3000/launchx

app.get('/launchx', (req,res) => {
    res.send('Bienvenidos a launchx')
})

// Regresando un objeto
// localhost:3000/explorerInNode

app.get('/explorerInNode', (req,res) => {
    const explorer = {name: "Explorer", msg: "Hello"}
    res.send(explorer)
})

// Con esto se inicializa la app

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
