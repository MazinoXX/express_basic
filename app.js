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

// Con esto se inicializa la app

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
