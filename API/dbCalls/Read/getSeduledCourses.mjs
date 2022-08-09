export function getSeduledCourses(req,db) {
    const academicYear = req.query.academicYear;
    const semester = req.query.semester;
    const department = req.query.department;

    console.log([academicYear,semester,department])


        return new Promise((resolve, reject)=>{
            try{
              let quaryStrig = ""
              let values = [];
              if(req.query.department =='0'){
                  quaryStrig =  "CALL get_genaral_schedules(?,?);";
                  values = [academicYear,semester]
              }else{
                quaryStrig = "CALL get_schedules(?,?,?);";
                values = [academicYear,semester,department]
              }
                 
            db.query(
                quaryStrig,
                values,
                (err, results)=>{
                  if(err){
                    reject(err)
                  }else{
                    //console.log(results)
                    resolve(results)
                  }
                }    
            );
            }catch(e){
                throw e;
            }
    });

    }