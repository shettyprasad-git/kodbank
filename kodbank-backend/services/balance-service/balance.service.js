const UserModel = require('../../models/user.model');

class BalanceService {
    static async getBalance(uid) {
        const user = await UserModel.findById(uid);
        if (!user) {
            throw new Error('User not found');
        }
        return { balance: user.balance };
    }
}

module.exports = BalanceService;
