import db from "../db.js";
export const read = (req, res) => {
    //const id = req.params.id;
    const sql = "SELECT * from new_table";
    db.query(sql, (err, data) => {
        if (err)  {
            return  res.status(500).json(err);
        }
        return res.status(200).send({ message: "read success.", data});
    });
};