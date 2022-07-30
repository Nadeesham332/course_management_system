export function insertprerequisites(courseCode,prerequisite,db) {
    try {
        

        return new Promise((resolve, reject) =>{
                const sqlquery = "CALL course_data(?);";
                const value = "EE6060";
                //const sqlquery  = "CALL insert_prerequisites(?,?);"
                //const values = [courseCode, prerequisite];
                console.log("prerequisite",prerequisite)
                db.query(sqlquery, value, (err, results)=>{
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