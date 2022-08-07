/*function signing(email,db) {
    return new Promise((resolve, reject)=>{
        const quaryStrig = "CALL user_verification(?)";
        let feedback = {
            user_id : 0,
            first_name:"null",
            pw:"null"
        }
        db.query(
            quaryStrig,
            email,
            (err, results)=>{
              
            }
        );
    });
}

export default signing; */