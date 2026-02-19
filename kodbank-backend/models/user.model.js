const db = require('../config/db');

class UserModel {
    static async create({ username, email, password, phone, role }) {
        const query = `
            INSERT INTO KodUser (username, email, password, phone, role, balance)
            VALUES (?, ?, ?, ?, ?, 100000)
        `;
        const [result] = await db.promise().execute(query, [username, email, password, phone, role]);
        return result.insertId;
    }

    static async findByUsername(username) {
        const query = 'SELECT * FROM KodUser WHERE username = ?';
        const [rows] = await db.promise().execute(query, [username]);
        return rows[0];
    }

    static async findById(uid) {
        const query = 'SELECT * FROM KodUser WHERE uid = ?';
        const [rows] = await db.promise().execute(query, [uid]);
        return rows[0];
    }

    static async updateBalance(uid, newBalance) {
        const query = 'UPDATE KodUser SET balance = ? WHERE uid = ?';
        const [result] = await db.promise().execute(query, [newBalance, uid]);
        return result.affectedRows > 0;
    }
}

module.exports = UserModel;
