export function insertcourse(req,db) {
    try {
        return new Promise((resolve, reject)=>{

            const insert = new Promise((resolve, reject) =>{
                const sqlquery = "CALL course_data(?);";
                const values = "EE6060";
                //const sqlquery  = "CALL insert_course(?,?,?,?,?,?);"
               // const values = [req.body.courseCode, req.body.parentcourse, req.body.title,req.body.core_elective,req.body.credits,req.body.learningOutcome];
                db.query(sqlquery, values, (err, results)=>{
                    if(err){
                        reject(err);
                    }
                    resolve(results);
                })
            });

            const i  = insert();
            console.log(req.body.courseCode);
            console.log("iiii", i);

            resolve( "work correctly upto now - developing")
            
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
                  
                }
            );


*/