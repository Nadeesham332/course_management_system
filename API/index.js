import express from 'express';
import { createConnection } from 'mysql';
import {courseFilter } from './dbCalls/courseFilter.mjs';
import { getCourseData } from './dbCalls/getCourseData.mjs';
const app = express();

const config = {
  host:'localhost',
  user:'admin',
  password:'admin',
  database:'cms_db'
}

var db = createConnection(config);

  db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

app.get('/courses', async (req, res)=>{

  //const results = await courseFilter(req, db);
  res.send("under developing");
})

app.get('/courseData', async (req, res)=>{

  const results = await getCourseData(req, db);
  res.send(results);
})

app.listen(3000 , ()=> console.log("Listening on port 3000...."))