export function seduledCourses(req,db) {
    const academicYear = req.query.academicYear;
    const semester = req.query.semester;
    const department = req.query.department;


        return new Promise((resolve, reject)=>{
            try{
                const quaryStrig = "CALL schedules(?,?,?);";
            db.query(
                quaryStrig,
                [academicYear,semester,department],
                (err, results)=>{
                  if(err){
                    reject(err)
                  }else{
                    resolve(results)
                  }
                }    
            );
            }catch(e){
                throw e;
            }
            
            
            
    });

    }