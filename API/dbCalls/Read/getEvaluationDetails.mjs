//get_evaluation_details

export function getEvaluationDetails(req,db) {
    const courseCode = req.query.courseCode;
    try {
        return new Promise((resolve, reject)=>{
            const quaryStrig = "CALL get_evaluation_details(?);";
            db.query(
                quaryStrig,
                courseCode,
                (err, results)=>{
                    if(err){
                        reject(err)
                    }
                    else{
                        //console.log("results from getEvaluationDetails Data: ", results);
                        resolve(results)
                    }
                  
                }
            );
        });  
        
    } catch (error) {
        throw error;
    }

        
    
}

