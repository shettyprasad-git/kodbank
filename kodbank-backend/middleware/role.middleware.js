const responseHandler = require('../utils/responseHandler');

const verifyRole = (roles) => {
    return (req, res, next) => {
        if (!req.user || !roles.includes(req.user.role)) {
            return responseHandler(res, 403, null, 'Access Denied: Insufficient Permissions');
        }
        next();
    };
};

module.exports = verifyRole;
