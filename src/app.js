// app.js
const express = require("express")
const mongoose = require("mongoose")
const itemRoutes = require("./routes/itemRoutes")
const dbConfig = require("./config/db")
const app = express()

// Middleware to parse JSON
app.use(express.json())

// Connect to MongoDB
mongoose
  .connect(dbConfig.mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB...", err))

// Use routes
app.use("/api", itemRoutes)

module.exports = app
