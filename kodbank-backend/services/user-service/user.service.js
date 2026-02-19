const UserModel = require('../../models/user.model');

class UserService {
    static async getUserById(uid) {
        const user = await UserModel.findById(uid);
        if (!user) {
            throw new Error('User not found');
        }
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
}

module.exports = UserService;
