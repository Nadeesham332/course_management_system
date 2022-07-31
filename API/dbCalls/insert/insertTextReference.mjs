export function insertTextReference(course_code,text_referance,db) {
    try {
        

        return new Promise((resolve, reject) =>{

                const sqlquery = "CALL insert_text_reference(?,?);";
                const values = [course_code,text_referance];
                db.query(sqlquery, values, (err, results)=>{
                    if(err){
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