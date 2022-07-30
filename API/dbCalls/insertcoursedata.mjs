export function insertcoursedata(req,db) {
    try {
        

        return new Promise((resolve, reject) =>{
                const sqlquery = "CALL course_data(?);";
                const values = "EE6060";
                console.log("quary runing point 1");
                //const sqlquery  = "CALL insert_course_data(?,?,?,?,?,?);"
                //const values = [req.body.courseCode, req.body.parentcourse, req.body.title,req.body.core_elective,req.body.credits,req.body.learningOutcome];
                db.query(sqlquery, values, (err, results)=>{
                    console.log("quary runing point 2");
                    if(err){
                        console.log("quary runing point 3");
                        console.log(err);
                        reject(err);
                    }
                    resolve(results);
                })
            });

       


          
        
    } catch (error) {
        throw error;
    }

        
    
}

/*
db.query(
                quaryStrig,
                values,
                (err, results)=>{
                    results = {error:false, recived: true}
                    if(err){
                        reject(err)
                    }
                    else{
                        resolve(results)
                    }
                  
}            );


*/