

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