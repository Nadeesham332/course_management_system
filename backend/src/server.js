const express = require("express")
const app = express()

require("dotenv").config()
// const mysql = require("mysql")

// require("dotenv").config()
// const DB_HOST = process.env.DB_HOST
// const DB_USER = process.env.DB_USER
// const DB_PASSWORD = process.env.DB_PASSWORD
// const DB_DATABASE = process.env.DB_DATABASE

// const db = mysql.createPool({
//    connectionLimit: 100,
//    host: DB_HOST,
//    user: DB_USER,
//    password: DB_PASSWORD,
//    database: DB_DATABASE,
// })

// Middleware
app.use(express.json()); // parse json bodies in the request object

// Redirect requests to endpoint starting with /posts to postRoutes.js
app.use("/posts", require("./routes/postRoutes"));

// db.getConnection( (err, connection)=> {
//     if (err) throw (err)
//     console.log ("DB connected successful: " + connection.threadId)
//  })

// Global Error Handler. IMPORTANT function params MUST start with err
app.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);
  
    res.status(500).json({
      message: "Something went rely wrong",
    });
  });

const port = process.env.PORT
app.listen(port, 
()=> console.log(`Server Started on port ${port}...`))