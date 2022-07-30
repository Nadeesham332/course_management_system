export function insertEvaluationDetails(course_code,assessment_method,percentage,db) {
    try {
        

        return new Promise((resolve, reject) =>{
               // const sqlquery = "CALL course_data(?);";
                //const values = "EE6060";

                const sqlquery = "CALL insert_evaluation_details(?,?,?);";
                const values = [course_code,assessment_method,percentage];
                db.query(sqlquery, values, (err, results)=>{
                    console.log("quary runing ===> insertEvaluationDetails");
                    if(err){
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
                  
                }
            );


*/