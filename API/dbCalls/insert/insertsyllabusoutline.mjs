export function insertsyllabusoutline(courseCode, topic,discription,l_h,t_h,l_f_h,a_h,db) {
    try {
        

        return new Promise((resolve, reject) =>{
                const sqlquery  = "CALL insert_syllabus_outline(?,?,?,?,?,?,?);"
                const values = [courseCode, topic,discription,l_h,t_h,l_f_h,a_h];
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