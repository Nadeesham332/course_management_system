export function insertprerequisites(courseCode,prerequisite,db) {
    try {
        return new Promise((resolve, reject) =>{
                const sqlquery  = "CALL insert_prerequisites(?,?);"
                const values = [courseCode, prerequisite];
                console.log("prerequisite",prerequisite)
                db.query(sqlquery, values, (err, results)=>{
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