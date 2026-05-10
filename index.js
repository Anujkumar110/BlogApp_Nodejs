const express = require("express");
const app = express();

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 5000

//midleware to parse json body
app.use(express.json());

//import routes from Blog API
const blogRoutes = require("./routes/blog")

//mount the blog API routes
app.use("/api/v1", blogRoutes);

//start the server
app.listen( PORT, () => {
    console.log(`Server is started on port ${PORT}`)
});

//Connect the database
const dbConnect = require("./config/database");
dbConnect();

//default route
app.get("/", (req, res) => {
    res.send("<h1>This is HOMEPAGE baby!!</h1>")
})