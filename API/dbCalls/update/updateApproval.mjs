export function updateApproval(req,db) {
    try {
        return new Promise((resolve, reject) =>{
                const sqlquery  = "CALL updateApproval(?);"
                const values = req.body.courseCode;
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