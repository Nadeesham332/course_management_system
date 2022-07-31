import express from 'express';
import { createConnection } from 'mysql';
import {courseFilter } from './dbCalls/courseFilter.mjs';
import { getCourseData } from './dbCalls/Read/getCourseData.mjs';
import { seduledCourses} from './dbCalls/Read/getSeduledCourses.mjs'
import { insertcourse } from './dbCalls/insertcourse.mjs';
import { insertcoursedata } from './dbCalls/insert/insertcoursedata.mjs';
import { insertsyllabusoutline } from './dbCalls/insert/insertsyllabusoutline.mjs';
import { insertprerequisites } from './dbCalls/insert/insertprerequisites.mjs';
import { insertAllowedDepartments } from './dbCalls/insert/insertAllowedDepartments.mjs';
import { insertEvaluationDetails } from './dbCalls/insert/insertEvaluationDetails.mjs';
import { insertTextReference } from './dbCalls/insert/insertTextReference.mjs';
import { getPermisionLevel } from './dbCalls/Read/getPermisionLevel.mjs';


const insertPermissionLevel = 2;


const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json())

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
  let results;
  const permision = await getPermisionLevel(req.body.usermail , req.body.userpw, db);
    if(permision[0][0] !=undefined){
      if(permision[0][0].permision_level>=insertPermissionLevel){
        
        try {
          results = await insertcoursedata(req, db);
          console.log("response sent = >", results);
          res.send(results)
        } catch (error) {
          res.send(error)
        }

    
      }else{
        results = {
          "code": "insertcoursedata NO ACCESS",
          "errno": 9999,
        };
        res.send(results)
        }
  
    }
    else{
      results = {
        "code": "insertcoursedata NO ACCESS",
        "errno": 9999,
      };
      console.log("you have no permision");
      res.send(results) 
    }


})

app.post('/insertEvaluationDetails', async (req, res)=>{
  let results = {
    "code": "insertEvaluationDetails ROUTE NOT FIRE",
    "errno": 5010,
  };
  const permision = await getPermisionLevel(req.body.usermail , req.body.userpw, db);
  if(permision[0][0] !=undefined){
    if(permision[0][0].permision_level>=insertPermissionLevel){
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
  
    }else{
      results = {
        "code": "insertEvaluationDetails NO ACCESS",
        "errno": 9999,
      };
      res.send(results)
      }

  }
  else{
    results = {
      "code": "insertEvaluationDetails NO ACCESS",
      "errno": 9999,
    };
    console.log("you have no permision");
    res.send(results) 
  }
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

      const permision = await getPermisionLevel(req.body.usermail , req.body.userpw, db);
      let results = {
        "code": "insertprerequisites ROUTE NOT FIRE",
        "errno": 5030
      };
      if(permision[0][0] !=undefined){
        if(permision[0][0].permision_level>=insertPermissionLevel){
        
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
      }else{
        results = {
          "code": "insertprerequisites NO ACCESS",
          "errno": 9999,
        };
        res.send(results)
        }
    }
    else{
      results = {
        "code": "insertprerequisites NO ACCESS",
        "errno": 9999,
      };
      console.log("you have no permision");
      res.send(results) 
    }
})
      
      //syllabusOutline

app.post('/insertsyllabusoutline', async (req, res)=>{

  let results = {
    "code": "insertsyllabusoutline ROUTE NOT FIRE",
    "errno": 5040
  };

  const permision = await getPermisionLevel(req.body.usermail , req.body.userpw, db);
  if(permision[0][0] !=undefined){
    if(permision[0][0].permision_level>=insertPermissionLevel){
      
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

    }else{
      results = {
        "code": "insertsyllabusoutline NO ACCESS",
        "errno": 9999,
      };
      res.send(results)
      }
  }
  else{
    results = {
      "code": "insertsyllabusoutline NO ACCESS",
      "errno": 9999,
    };
    console.log("you have no permision");
    res.send(results) 
  }
})

              //insertTextReference

app.post('/insertTextReference', async (req, res)=>{
  let results = {
    "code": "insertTextReference ROUTE NOT FIRED",
    "errno": 5050
  };
  const permision = await getPermisionLevel(req.body.usermail , req.body.userpw, db);
  if(permision[0][0] !=undefined){
    if(permision[0][0].permision_level>=insertPermissionLevel){
      
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

    }else{
      results = {
        "code": "insertTextReference NO ACCESS",
        "errno": 9999,
      };
      res.send(results)
      }

  }
  else{
    results = {
      "code": "insertTextReference NO ACCESS",
      "errno": 9999,
    };
    console.log("you have no permision");
    res.send(results) 
  }

  })
app.listen(3000 , ()=> console.log("Listening on port 3000...."))