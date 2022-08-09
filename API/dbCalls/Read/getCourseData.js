const db = require('../database.js')

 function getCourseData (req) {
    const courseCode = req.query.courseCode;
    console.log(courseCode)
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
                        console.log("results from getCourse Data: ", results);
                        resolve(results)
                    }
                  
                }
            );
        });  
        
    } catch (error) {
        throw error;
    }
}



module.exports = getCourseData