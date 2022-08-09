import express, {json} from 'express';
import cores from 'cors'
import { createConnection } from 'mysql';
import { getCourseData } from './dbCalls/Read/getCourseData.mjs';
import { getSeduledCourses} from './dbCalls/Read/getSeduledCourses.mjs'
import { insertcoursedata } from './dbCalls/insert/insertcoursedata.mjs';
import { insertsyllabusoutline } from './dbCalls/insert/insertsyllabusoutline.mjs';
import { insertprerequisites } from './dbCalls/insert/insertprerequisites.mjs';
import { insertAllowedDepartments } from './dbCalls/insert/insertAllowedDepartments.mjs';
import { insertEvaluationDetails } from './dbCalls/insert/insertEvaluationDetails.mjs';
import { insertTextReference } from './dbCalls/insert/insertTextReference.mjs';
import { getPermisionLevel } from './dbCalls/Read/getPermisionLevel.mjs';
import { getPrerequisites } from './dbCalls/Read/getPrerequisites.mjs';
import { getAllowedDepartments } from './dbCalls/Read/getAllowedDepartments.mjs';
import { getTextReference } from './dbCalls/Read/getTextReference.mjs';
import {getEvaluationDetails} from './dbCalls/Read/getEvaluationDetails.mjs'
import {getSysllubus} from './dbCalls/Read/getSysllubus.mjs'
import { updateApproval } from './dbCalls/update/updateApproval.mjs';
//import { json } from 'body-parser';

import cookieParser from 'cookie-parser'
import sessions from  'express-session'

const insertPermissionLevel = 2;
const approvingPermisionLevel = 4;
const app = express();
//app.use(express.urlencoded({extended: true}));
//app.use(express.json());
//app.use(cores);

app.use(cores());
app.use(json())

const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}));

// parsing the incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


//username and password
//const myusername = 'user1'
//const mypassword = 'mypassword'

// a variable to save a session
var session;

//serving public file
//app.use(express.static(__dirname));


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


app.post('/login',async (req,res) => {
    const permision = await getPermisionLevel(req.body.usermail , req.body.userpw, db);
    console.log(permision[0])
    if(permision[0][0] !=undefined){
        session=req.session;
        session.userid=req.body.username;
        session.permisionLevel = permision[0][0].permision_level;
        console.log(req.session)
        res.send(`Valied user`);
    }
    else{
        res.send('Invalid username or password');
    }
})

app.get('/user', async (req, res)=>{

  const results = await getPermisionLevel(req.body.usermail , req.body.userpw, db);
  console.log("fdgdfghd", results)
  res.send(results);
  //res.sendStatus(200);
})

app.get('/courses', async (req, res)=>{
  res.send(" list of all courses -> under developing");
  res.sendStatus(200);
})

app.get('/courseData', async (req, res)=>{
  let results = {
    "code": "courseData ROUTE NOT FIRE",
    "errno": 6010,
  };
  try {
    let courseData = results;
    let prerequisites = [];
    let textReference = [];
    let allowedDepartments = [];
    let evaluationDetails = [];
    let sysllabus = [];

    let  result_01 = await getCourseData(req, db);

    let result_02 = await getTextReference(req, db);
    let result_03 = await getAllowedDepartments(req, db);
    let result_04 = await getEvaluationDetails(req, db);
    let result_05 = await getSysllubus(req, db);
    let result_06 = await getPrerequisites(req, db);
    if(result_01[0][0] !=undefined){
      console.log("\n\ngetCourseData ===>", result_01[0][0])
      courseData = result_01[0][0];

      if(result_06[0] != undefined){
        for(let i =0; i<result_06[0].length; i++){
          //console.log("\n\nPrerequisites ===>", result_06[0][i]);
          prerequisites.push(result_06[0][i].prerequisite)
        }
      }

      if(result_02[0] != undefined){
        for(let i =0; i<result_02[0].length; i++){
          //console.log("\n\ngetTextReference ===> ", result_02[0][i].text_referance);
          textReference.push(result_02[0][i].text_referance)
        }
      }

      if(result_03[0] != undefined){
        for(let i =0; i<result_03[0].length; i++){
          console.log("\n\n getAllowedDepartments ===> ", result_03[0][i].department);
          allowedDepartments.push(result_03[0][i].department)
        }
      }

      if(result_04[0] != undefined){
        for(let i =0; i<result_04[0].length; i++){
          console.log("\n\n evaluationDetails ===> ", result_04[0][i]);
          evaluationDetails.push(result_04[0][i])
        }
      }

      if(result_05[0] != undefined){
        for(let i =0; i<result_05[0].length; i++){
          console.log("\n\n sysllabus ===> ", result_05[0][i]);
          sysllabus.push(result_05[0][i])
        }
      }

      results = {...courseData, sysllabus, prerequisites, textReference, allowedDepartments, evaluationDetails}


    }else{
      results = {
        "code": "courseData SUCH COURSE NOT EXIST",
        "errno": 6030,
      };
    }
    res.send(results);
  } catch (error) {
    res.send(results)
  }

})

app.get('/seduledCourse', async (req, res)=>{
  console.log("seduledCourse   fired", req.query.academicYear);
  try{

    const results = await getSeduledCourses(req, db);
    console.log("dsfgsdfg =====>", results)
    res.send(results);
  }catch(e){
    res.send({error: true})
  }
})

app.post('/insertcoursedata', async (req, res)=>{
  let results;
  const permision = await getPermisionLevel(req.body.usermail , req.body.userpw, db);
    if(permision[0][0] !=undefined){
      if(permision[0][0].permision_level>=insertPermissionLevel && permision[0][0].department ==req.body.department){
        
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
    if(permision[0][0].permision_level>=insertPermissionLevel && permision[0][0].department ==req.body.department){
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

    const permision = await getPermisionLevel(req.body.usermail , req.body.userpw, db);

    if(permision[0][0] !=undefined){
      if(permision[0][0].permision_level>=insertPermissionLevel && permision[0][0].department ==req.body.department){
      
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
      }else{
        results = {
          "code": "insertprerequisites NO ACCESS",
          "errno": 9999,}
          res.send(results)
      }
    }else{
      results = {
        "code": "insertprerequisites NO ACCESS",
        "errno": 9999,
      };
      console.log("you have no permision");
      res.send(results) 
    }

}) 
    
app.post('/insertprerequisites', async (req, res)=>{

      const permision = await getPermisionLevel(req.body.usermail , req.body.userpw, db);
      let results = {
        "code": "insertprerequisites ROUTE NOT FIRE",
        "errno": 5030
      };
      if(permision[0][0] !=undefined){
        if(permision[0][0].permision_level>=insertPermissionLevel && permision[0][0].department ==req.body.department){
        
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
    if(permision[0][0].permision_level>=insertPermissionLevel && permision[0][0].department ==req.body.department){
      
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
    if(permision[0][0].permision_level>=insertPermissionLevel && permision[0][0].department ==req.body.department){
      
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

app.post('/insertTextReference', async (req, res)=>{
  let results = {
    "code": "insertTextReference ROUTE NOT FIRED",
    "errno": 5050
  };
  const permision = await getPermisionLevel(req.body.usermail , req.body.userpw, db);
  if(permision[0][0] !=undefined){
    if(permision[0][0].permision_level>=insertPermissionLevel && permision[0][0].department ==req.body.department){
      
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

app.post('/updateApproval', async (req, res)=>{
  let results = {
    "code": "updateApproval ROUTE NOT FIRED",
    "errno": 7010
  };
  const permision = await getPermisionLevel(req.body.usermail , req.body.userpw, db);
  if(permision[0][0] !=undefined){
    if(permision[0][0].permision_level>=approvingPermisionLevel && permision[0][0].department ==req.body.department){
      const results = await updateApproval(req, db)
      res.send(results) 

    }else{
      results = {
        "code": "updateApproval NO ACCESS",
        "errno": 9999,
      };
      res.send(results)
      }

  }
  else{
    results = {
      "code": "updateApproval NO ACCESS",
      "errno": 9999,
    };
    console.log("you have no permision");
    res.send(results) 
  }

})



app.listen(3000 , ()=> console.log("Listening on port 3000...."))