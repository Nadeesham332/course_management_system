export function getTextReference(req,db) {
    const courseCode = req.query.courseCode;
    try {
        return new Promise((resolve, reject)=>{
            const quaryStrig = "CALL get_text_reference(?);";
            db.query(
                quaryStrig,
                courseCode,
                (err, results)=>{
                    if(err){
                        reject(err)
                    }
                    else{
                        //console.log("results from getAllowedDepartments Data: ", results);
                        resolve(results)
                    }
                  
                }
            );
        });  
        
    } catch (error) {
        throw error;
    }

        
    
}