export function getCourseData(req,db) {
    const courseCode = req.query.courseCode;
    try {
        return new Promise((resolve, reject)=>{
            const quaryStrig = "CALL get_course_data(?);";
            db.query(
                quaryStrig,
                courseCode,
                (err, results)=>{
                    if(err){
                        reject(err)
                    }
                    else{
                        //console.log("results from getCourse Data: ", results);
                        resolve(results)
                    }
                  
                }
            );
        });  
        
    } catch (error) {
        throw error;
    }

        
    
}
