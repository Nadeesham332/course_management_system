import express from 'express';
import { createConnection } from 'mysql';
import {courseFilter } from './dbCalls/courseFilter.mjs';
import { getCourseData } from './dbCalls/getCourseData.mjs';
import { seduledCourses} from './dbCalls/seduledCourses.mjs'
import { insertcourse } from './dbCalls/insertcourse.mjs';
import { insertcoursedata } from './dbCalls/insertcoursedata.mjs';
import { insertsyllabusoutline } from './dbCalls/insertsyllabusoutline.mjs';
import { insertprerequisites } from './dbCalls/insertprerequisites.mjs';
import { insertAllowedDepartments } from './dbCalls/insertAllowedDepartments.mjs';
import { insertEvaluationDetails } from './dbCalls/insertEvaluationDetails.mjs';
import { insertTextReference } from './dbCalls/insertTextReference.mjs';

//import{bodyParser}  from 'body-parser';


const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json())

//app.use(bodyParser.urlencoded({ extended: false }))


const config = {
  host:'localhost',
  user:'admin',
  password:'admin',
  database:'cms_db',
  timezone: 'utc'
}

var db = createConnection(config);

  db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

app.get('/courses', async (req, res)=>{

  //const results = await courseFilter(req, db);
  res.send(" list of all courses -> under developing");
})

app.get('/courseData', async (req, res)=>{

  try {
    const results = await getCourseData(req, db);
    res.send(results);
  } catch (error) {
    res.send({error:true})
  }
})

app.get('/seduledCourse', async (req, res)=>{
  try{
    const results = await seduledCourses(req, db);
    res.send(results);
  }catch(e){
    res.send({error: true})
  }
})

app.post('/insertcoursedata', async (req, res)=>{
  
try {
  const results = await insertcoursedata(req, db);
  console.log("response sent = >", results);
  res.send(results)
} catch (error) {
  res.send(error)
}
})

app.post('/insertEvaluationDetails', async (req, res)=>{
  let results = {
    "code": "insertEvaluationDetails ROUTE NOT FIRE",
    "errno": 5010,
};

  for(let i =0; i<req.body.assignment.length; i++){
    try {
      results = await insertEvaluationDetails(req.body.courseCode,req.body.assignment[i].asignmnetMethod,req.body.assignment[i].pracentage,db);
    } catch (err) {
      results = results = {
        "code": "insertEvaluationDetails ROUTE THROW ERROR",
        "errno": 5011,
    };
      break;
    }
     
  }
  console.log("insertEvaluationDetails route fired....")
  res.send(results) 
  })

  //insertAllowedDepartments
  app.post('/insertAllowedDepartments', async (req, res)=>{
    let results = {
      "code": "insertAllowedDepartments ROUTE NOT FIRE",
      "errno": 5020
    };

    for(let i =0; i<req.body.allowedDepartments.length; i++){
      try {
        results = await insertAllowedDepartments(req.body.courseCode,req.body.allowedDepartments[i],db);
      } catch (err) {
        results = results = {
          "code": "insertAllowedDepartments THROW ERROR",
          "errno": 5021
        };
        break;
      }
    }
    console.log("insertAllowedDepartments route fired...")
    res.send(results) 
    }) 
    
    app.post('/insertprerequisites', async (req, res)=>{
      let results = {
        "code": "insertprerequisites ROUTE NOT FIRE",
        "errno": 5030
      };
    
      for(let i =0; i<req.body.prerequisites.length; i++){
        try {
          results = await insertprerequisites(req.body.courseCode,req.body.prerequisites[i],db);
        } catch (err) {
          results = {
            "code": "insertprerequisites ROUTE THROW ERROR",
            "errno": 5031
          };
          break;
        }
         
      }
      res.send(results) 
      })
      
      //syllabusOutline

      app.post('/insertsyllabusoutline', async (req, res)=>{
        let results = {
          "code": "insertsyllabusoutline ROUTE NOT FIRE",
          "errno": 5040
        };

        for(let i =0; i<req.body.syllabusOutline.length; i++){
          try {
            results = await insertsyllabusoutline(req.body.courseCode,req.body.syllabusOutline[i].topic,req.body.syllabusOutline[i].discription,req.body.syllabusOutline[i].l_h,req.body.syllabusOutline[i].t_h,req.body.syllabusOutline[i].l_f_h,req.body.syllabusOutline[i].a_h,db);
          } catch (err) {
            results = {
              "code": "insertsyllabusoutline ROUTE THROW ERROR",
              "errno": 5041
            };
            break;
          }
           
        }
        res.send(results) 
        })

              //syllabusOutline

      app.post('/insertTextReference', async (req, res)=>{
        let results = {
          "code": "insertTextReference ROUTE NOT FIRED",
          "errno": 5050
        };
 
        for(let i =0; i<req.body.refferance.length; i++){
          try {
            results = await insertTextReference(req.body.courseCode,req.body.refferance[i],db);
          } catch (err) {
            results = {
              "code": "insertTextReference ROUTE THROW ERROR",
              "errno": 5051
            };
            break;
          }
           
        }
        res.send(results) 
        })
app.listen(3000 , ()=> console.log("Listening on port 3000...."))