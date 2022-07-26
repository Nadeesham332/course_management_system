export function getCourseData(req,db) {
    const courseCode = req.query.courseCode;

    if(courseCode !="null"){
        return new Promise((resolve, reject)=>{
            const quaryStrig = "CALL course_data(?);";
            db.query(
                quaryStrig,
                courseCode,
                (err, results)=>{
                  resolve(results)
                }
            );
    });
    
    }else{
        return new Promise((resolve, reject)=>{
            resolve("Error occured... No such url...")
        }
        );
    }
    
}

