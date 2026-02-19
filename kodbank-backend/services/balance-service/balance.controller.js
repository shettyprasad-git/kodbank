const BalanceService = require('./balance.service');
const responseHandler = require('../../utils/responseHandler');

class BalanceController {
    static async getBalance(req, res) {
        try {
            const { balance } = await BalanceService.getBalance(req.user.uid);
            res.status(200).json({
                message: `your balance is : ${balance}`
            });
        } catch (err) {
            responseHandler(res, 404, null, err.message);
        }
    }
}

module.exports = BalanceController;
