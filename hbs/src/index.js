//Imports
const express = require("express")
const app = express()
const path = require("path")
const routes = require("./routes/router")
const mainRoute = require("./routes/mainRouter")
const { engine } = require("express-handlebars")


//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "/public")))
app.use("/", mainRoute)
app.use("/api/productos", routes)

//Engine
app.engine(".hbs", engine({
    extname: ".hbs",
    defaultLayout: "main.hbs",
    layoutsDir: path.join(__dirname, "../public/views/layouts"),
    partialsDir: path.join(__dirname, "../public/views/partials")
}))
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "../public/views"))

//Puerto Server
app.listen(8080, (error) => {
    error ? console.log(error) : console.log("server escuchando");
})