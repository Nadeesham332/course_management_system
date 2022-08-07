const mysql = require("mysql2")

require("dotenv").config()

const pool = mysql.createPool({
   host:'localhost',
   user:'admin',
   password:'admin',
   database:'cms_db'
   // timezone: 'utc'
});



module.exports = pool.promise();