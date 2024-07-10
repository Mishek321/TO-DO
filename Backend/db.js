import sql from "mysql2";

const db = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "Mishek111",
    database: "to_do",

})

db.connect((err)=> {
    if (err) return console.log(err);
    console.log("DB connected.....")
}) 

export default db;