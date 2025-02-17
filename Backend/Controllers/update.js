import db from "../db.js";
const update = (req, res) => {
    const {id} =req.params;
    const {name, email, contact} = req.body;
    const sql = "UPDATE new_table SET title = ?, description = ?, date = ? WHERE id = ?";

    db.query(sql, [title, description, date, id], (err, result) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send({
            message: "User updated successfully",
            result,
            name: name,
            email: email,
        });
    });
};

export default update;
