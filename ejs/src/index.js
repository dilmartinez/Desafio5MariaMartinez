//Imports
const express = require("express")
const app = express()
const path = require("path")
const routes = require("./router/router")
const mainRoute = require("./router/mainRouter")


//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "/public")))
app.use("/", mainRoute)
app.use("/api/productos", routes)

//Engine
app.set("views", path.join(__dirname, "../public/views"))
app.set("view engine", "ejs")

//Puerto Server
app.listen(8080, (error) => {
    error ? console.log(error) : console.log("server escuchando");
})