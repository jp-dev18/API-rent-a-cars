const express = require('express')
const cors = require('cors');

const app = express()
const port = 3001

app.use(cors());
app.use(express.json());

let cars = []


app.get('/cars', (req, res) => {
    //   ira retornar uma lista de carros com status 200

    res.status(200).json(cars)
})

app.post('/cars', (req, res) => {
    console.log(req.body)
    const car = {
        name: req.body.name,
        category: req.body.category,
        seats: req.body.seats,
        price: req.body.price,
        transmission: req.body.transmission,
        fuel: req.body.fuel,
        image: req.body.image,
        available: req.body.available,
    }

    //   ira adicionar um carro com status 201
    cars.push(car)
    res.status(201).json(car)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
