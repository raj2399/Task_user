const db=require("../dbconnection");

var user_model={

    login(user,callback)
    {
        console.log(user);
        return db.query("select * from user_tbl where email_id=? and password=?",[user.email_id,user.password],callback);
    },
    signup(user,callback)
    {
        return db.query("insert into user_tbl (email_id,user_name,password,user_type) values (?,?,?,?)",[user.email_id,user.user_name,user.password,user.user_type],callback);
    },
    addDetails(user,callback)
    {
        return db.query("update user_tbl set age=?,gender=?,children_name=? where email_id=?",[user.age,user.gender,user.children_name,user.email_id],callback);
    },
    getUserById(email_id,callback)
    {
        return db.query("select * from user_tbl where email_id=?",email_id,callback);
    },
    getAll(callback)
    {
        return db.query("select * from user_tbl",callback);
    }

}

module.exports=user_model;