export function insertsyllabusoutline(courseCode, topic,discription,l_h,t_h,l_f_h,a_h,db) {
    try {
        

        return new Promise((resolve, reject) =>{
                const sqlquery = "CALL course_data(?);";
                const value = "EE6060";
                //const sqlquery  = "CALL insert_syllabus_outline(?,?,?,?,?,?,?);"
                //const values = [courseCode, topic,discription,l_h,t_h,l_f_h,a_h];
                //console.log(values)
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