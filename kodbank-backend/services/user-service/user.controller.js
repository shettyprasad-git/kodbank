const UserService = require('./user.service');
const responseHandler = require('../../utils/responseHandler');

class UserController {
    static async getDashboard(req, res) {
        try {
            const user = await UserService.getUserById(req.user.uid);
            responseHandler(res, 200, user, 'User dashboard data retrieved successfully');
        } catch (err) {
            responseHandler(res, 404, null, err.message);
        }
    }
}

module.exports = UserController;
