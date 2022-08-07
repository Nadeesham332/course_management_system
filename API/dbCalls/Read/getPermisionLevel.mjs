export function getPermisionLevel(username, pw, db) {
    try {
        return new Promise((resolve, reject)=>{
            
            const sqlquery = "CALL get_permision_level(?,?);";
            const values = [username, pw];
            db.query(sqlquery, values, (err, results)=>{
                if(err){
                    reject(err);
                }
                resolve(results);
            });
        });        
    } catch (error) {
        throw error;
    }
}
