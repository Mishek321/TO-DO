import db from "../db.js"

export const create = (req, res) =>{
    const sql = "INSERT into new_table(`title`, `description`, `date`) VALUE (?,?,?)";

    const value = req.body;
    db.query(sql, [value.title, value.description, value.date], (err, result) =>{
        if(err) return res.status(500).json(err);
        return res.status(200).json({message: "data inserted successfully",
        result});

    })
};