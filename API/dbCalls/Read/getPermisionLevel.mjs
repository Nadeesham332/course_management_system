import bcrypt from 'bcryptjs';

export function getPermisionLevel(username, pw, db) {

    /*

    bcrypt.compare('my password', hash, (err, res) => {
  // res == true or res == false
});

const hash = bcrypt.hashSync('my password', 'my salt');
// Store hash password to DB

*/


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
