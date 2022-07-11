export function courseFilter(req,db) {
    const allowedDepartment = req.query.allowedDepartment;
    const isaprroved = req.query.isaprroved;
    const isavailble = req.query.isavailble;
    if(allowedDepartment =="null" && isaprroved =="null" && isavailble=="null" ){
        return new Promise((resolve, reject)=>{
            const quaryStrig = "CALL feach_courses_01();";
            db.query(
                quaryStrig,
                (err, results)=>{
                  resolve(results)
                }
            );
    });
    }else if(allowedDepartment =="null"   && isaprroved !="null" && isavailble!="null"){
        return new Promise((resolve, reject)=>{
            const quaryStrig = "CALL feach_courses_02();";
            db.query(
                quaryStrig,
                (err, results)=>{
                  resolve(results)
                }
            );
    });
    }else if(allowedDepartment !="null" && isaprroved !="null" && isavailble!="null"){
        return new Promise((resolve, reject)=>{
            const quaryStrig = "CALL feach_courses_03(?);";
            db.query(
                quaryStrig,
                allowedDepartment,
                (err, results)=>{
                  resolve(results)
                  //reject(console.log("error"))
                }
            );
    });
    }else{
        return new Promise((resolve, reject)=>{
            resolve("Error occured... No such url...")
        }
        );
    }
    
}

