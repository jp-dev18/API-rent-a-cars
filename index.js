require("./instrument.js");
require("dotenv").config();

const email = require("@sendgrid/mail");
const express = require("express");
const cors = require("cors");
const { Prisma } = require("@prisma/client");

email.setApiKey(process.env.SENDGRID_API_KEY);
const { PrismaClient } = require("./generated/prisma");
const { RENTCONFIRMATION_TAMPLATE } = require("./utils/constants");

const prisma = new PrismaClient();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

let cars = [];

app.get("/cars", (req, res) => {
  //   ira retornar uma lista de carros com status 200

  res.status(200).json(cars);
});

app.get("/send-email", async (req, res) => {
  const emailContent = {
    to: "jpedromaciel25@gmail.com",
    from: "jpedromaciel25@gmail.com",
    subject: "Sending an email using SendGrid",
    html: RENTCONFIRMATION_TAMPLATE,
  };
  try {
    await email.send(emailContent);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error sending email" });
  }
});

app.post("/cars", (req, res) => {
  console.log(req.body);
  const car = {
    name: req.body.name,
    category: req.body.category,
    seats: req.body.seats,
    price: req.body.price,
    transmission: req.body.transmission,
    fuel: req.body.fuel,
    image: req.body.image,
    available: req.body.available,
  };

  //   ira adicionar um carro com status 201
  cars.push(car);
  res.status(201).json(car);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
