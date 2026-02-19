const db = require('../config/db');

class TokenModel {
    static async create({ uid, access_token, refresh_token, expiry, device_info }) {
        const query = `
            INSERT INTO UserToken (uid, access_token, refresh_token, expiry, device_info)
            VALUES (?, ?, ?, ?, ?)
        `;
        const [result] = await db.promise().execute(query, [uid, access_token, refresh_token, expiry, device_info]);
        return result.insertId;
    }

    static async findByRefreshToken(refresh_token) {
        const query = 'SELECT * FROM UserToken WHERE refresh_token = ?';
        const [rows] = await db.promise().execute(query, [refresh_token]);
        return rows[0];
    }

    static async deleteByRefreshToken(refresh_token) {
        const query = 'DELETE FROM UserToken WHERE refresh_token = ?';
        const [result] = await db.promise().execute(query, [refresh_token]);
        return result.affectedRows > 0;
    }

    static async deleteByUserId(uid) {
        const query = 'DELETE FROM UserToken WHERE uid = ?';
        const [result] = await db.promise().execute(query, [uid]);
        return result.affectedRows > 0;
    }
}

module.exports = TokenModel;
