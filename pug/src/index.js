const express = require("express")
const app = expres()
const path = require("path")
const routes = require("./routes/router")
const mainRoute = require("./routes/mainRouter")

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "/public")))
app.use("/", mainRoute)
app.use("/api/productos", routes)

//engine
app.set("views", path.join(__dirname, "../public/views"))
app.set("view engine", "pug")

//servidor
app.listen(8080, (error) => {
    error ? console.log(error) : console.log("server ok");
})