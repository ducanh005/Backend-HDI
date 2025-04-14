const connection = require("../config/database");

const getAllUsers = async () => {
    let [results, feild] = await connection.query("SELECT * FROM Users u");
    return results;
};

const getUserById = async (userId) => {
    let [results, feild] = await connection.query(
        "SELECT * FROM Users where id = ?",
        [userId]
    );

    let user = results && results.length > 0 ? results[0] : {};
    return user;
};

const updateUserById = async (userId,email,name,city) => {
    let [results, fields] = await connection.query(
        `
        UPDATE Users SET email = ?, city = ?, name = ? WHERE id = ?`,
        [email, city, name, userId]
    );
    return results;
};

module.exports = {
    getAllUsers,
    getUserById,
    updateUserById,
};
