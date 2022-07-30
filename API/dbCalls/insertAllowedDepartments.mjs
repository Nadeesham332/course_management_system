export function insertAllowedDepartments(course_code,allowed_department,db) {
    try {
        

        return new Promise((resolve, reject) =>{
                const sqlquery = "CALL course_data(?);";
                const values = "EE6060";
  
                //const sqlquery = "CALL insert_allowed_departments(?,?);";
                //const values = [course_code,allowed_department];
                db.query(sqlquery, values, (err, results)=>{
                    console.log("quary runing ==> insertAllowedDepartments");
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

