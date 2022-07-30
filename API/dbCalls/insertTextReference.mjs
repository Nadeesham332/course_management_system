export function insertTextReference(course_code,text_referance,db) {
    try {
        

        return new Promise((resolve, reject) =>{
                const sqlquery = "CALL course_data(?);";
                const values = "EE6060";

                //const sqlquery = "CALL insert_text_reference(?,?);";
                //const values = [course_code,text_referance];
                db.query(sqlquery, values, (err, results)=>{
                    console.log("quary runing ===> insertTextReference ");
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