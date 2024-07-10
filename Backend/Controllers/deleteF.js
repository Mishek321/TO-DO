import db from "../db.js"
export const deleteF = (req, res) => {
    const {id} = req.params;
    const sql = "DELETE from new_table where id = ?";
    db.query(sql, [id], (err, result) => {
        if (err) return res.status(500).send(err);
        return res
        .status(200)
        .send({ message: `user id: ${id} has been deleted`, result});
    });
};