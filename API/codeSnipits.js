

  try{
    const results1 = await insertcoursedata(req, db);
    console.log("response sent1", results1)
    
    for(let i =0; i<req.body.syllabusOutline.length; i++){
      try {
        results2 = await insertsyllabusoutline(req.body.courseCode, req.body.syllabusOutline[i].topic, req.body.syllabusOutline[i].discription,req.body.syllabusOutline[i].l_h,req.body.syllabusOutline[i].t_h,req.body.syllabusOutline[i].l_f_h,req.body.syllabusOutline[i].a_h, db);
        console.log("runing round: ==> " , i);
        console.log("response sent2 - " , results2)
      } catch (err) {
        error = true;
        break;
      }
       
    }
    
    for(let i =0; i<req.body.prerequisites.length; i++){
      try {
        results3 = await insertprerequisites(req.body.courseCode, req.body.prerequisites[i], db);
        console.log("runing round: ==> " , i);
        console.log("response sent 3 - " , results3)
      } catch (err) {
        error = true;
        break;
      }
    }
    

    console.log("sylabus out line ==> ", req.body.syllabusOutline.length)

    res.send(results1);
  }catch(e){
    error = true;
    console.log("eeeee ==>",e)
    res.send({error: true})
  }




  /////////////////////////////////////////////////////////////////////////


  app.post('/insertEvaluationDetails', async (req, res)=>{
  
    const permision = await getPermisionLevel(req.body.usermail , req.body.userpw, db);
    if(permision[0][0] !=undefined){
      if(permision[0][0].permision_level>=4){
        


        
    
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


    /////////////////////////////////////////////////////////////////////////////////////

    console.log("runing -01")

    let results = {
      "code": "courseData ROUTE NOT FIRE",
      "errno": 6010,
    };
  
    try {
      results = await getCourseData(req, db);
      console.log("runing -02")
  
      if(results[0][0] !=undefined){
        console.log("runing -03")
        results = results[0][0];
        let prerequties = [];
        let [firstCall, secondCall, thirdCall] = await Promise.all([
          getPrerequisites(req, db),
          getTextReference(req, db),
          getAllowedDepartments(req, db)
        ])
        /*
        let result_01 = await getPrerequisites(req, db);
        console.log("runing -05")
        let result_02 = await getTextReference(req, db);
        console.log("runing -06")
        let result_03 = await getAllowedDepartments(req, db);
        let result_04 = await getEvaluationDetails(req, db);
        let result_05 = await getSysllubus(req, db);
        
        let allowedDepartments = [];
        let sysllubus =[];
        let evaluationDetails =[];
        let getTextReference = [];  */
  
        console.log("runing -04")
  
        if(result_01[0] != undefined){
  
          console.log("runing -05")
          for(let i =0; i<result_01[0].length; i++){
            console.log("runing -06")
            console.log("result_01 ====>", result_01[0][i].prerequisite);
            prerequties.push(result_01[0][i].prerequisite);
  
          }
          //result_01 = result_01[0];
          console.log("result_02 ====>", result_02);
        }
        
        console.log("runing -07")
        console.log("prerequties ====>");
        results = {...results + prerequties}
      }else{
        console.log("runing -07")
        results = {
          "code": "courseData No such course",
          "errno": 6020,
        };
      }
  
      console.log( "output from route", results)
      res.send(results);
    } catch (error) {
      res.send(results)