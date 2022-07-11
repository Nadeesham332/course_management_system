import express from 'express';
import { createConnection } from 'mysql';
import {courseFilter } from './dbCalls/courseFilter.mjs';
import { getCourseData } from './dbCalls/getCourseData.mjs';
const app = express();

var db = createConnection({
  host:'localhost',
  user:'admin',
  password:'admin',
  database:'cms_db',
  timezone: 'utc'
  });

  db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

app.get('/courses', async (req, res)=>{

  const results = await courseFilter(req, db);
  res.send(results);
})

app.get('/courseData', async (req, res)=>{

  const results = await getCourseData(req, db);
  res.send(results);
})

/*
app.post('/signup', async (req, res)=>{
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const contactNo = req.body.contactNo;
  const birthday = req.body.birthday;
  const disrict_id = req.body.district;
  const address = req.body.address;
  const gender_name = req.body.gender;
  const password = req.body.password;
  let hashedpw = "null"
  try{
      hashedpw = await hash(password, 10);
      console.log("encripted password" , hashedpw)
  }catch{
      res.send({status:"password encription failed", error:"true"})
  }
  var gender = "1";
  if(gender_name ==="Female" || gender_name ==="female"){
      gender = "2";
  }
  const today = todayDate();
  const quary2 = "CALL insert_users(?,?,?,?,?,?,?,?,?,?,?,?)"
  var values = values = [email,contactNo, hashedpw,"1", firstName, lastName, gender , "not added", disrict_id , address, birthday , today ]
  console.log(values)

  db.query(
      quary2,
      values,
      (err, results)=>{
          if(err){
              console.log("Error occured", err)
              res.send({isSucsess:false})
          }else{
              console.log("Values inserted")
              res.send({isSucsess:true})
          }
      }
  );

});
*/

app.listen(3000 , ()=> console.log("Listening on port 3000...."))