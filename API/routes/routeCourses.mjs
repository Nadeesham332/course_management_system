import { getCourseData } from "../dbCalls/Read/getCourseData.mjs";
import { getAllowedDepartments } from "../dbCalls/Read/getAllowedDepartments.mjs";
import { getEvaluationDetails } from "../dbCalls/Read/getEvaluationDetails.mjs";
import { getPrerequisites } from "../dbCalls/Read/getPrerequisites.mjs";
import { getSysllubus } from "../dbCalls/Read/getSysllubus.mjs";


 const routeCourses = async (req, res, db) => {
   
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
       //console.log("\n\ngetTextReference ===>", result_02[0]);
   
       let result_03 = await getAllowedDepartments(req, db);
       //console.log("\n\ngetAllowedDepartments ===>", result_03[0]);
   
       let result_04 = await getEvaluationDetails(req, db);
       //console.log("\n\ngetEvaluationDetails ===>", result_04[0]);
   
       let result_05 = await getSysllubus(req, db);
       //console.log("\n\ngetSysllubus ===>", result_05[0]);
   
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
   
     
   }

   module.exports = {routeCourses}