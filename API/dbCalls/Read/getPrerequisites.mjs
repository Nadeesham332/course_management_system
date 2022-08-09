

export function getPrerequisites(req,db) {
    const courseCode = req.query.courseCode;
    try {
        return new Promise((resolve, reject)=>{
            const quaryStrig = "CALL get_prerequisites(?);";
            db.query(
                quaryStrig,
                courseCode,
                (err, results)=>{
                    if(err){
                        reject(err)
                    }
                    else{
                        //console.log("results from getPrerequisites Data: ", results);
                        resolve(results)
                    }
                  
                }
            );
        });  
        
    } catch (error) {
        throw error;
    }

        
    
}

