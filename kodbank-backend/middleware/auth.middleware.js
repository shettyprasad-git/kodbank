const jwt = require('jsonwebtoken');
const responseHandler = require('../utils/responseHandler');

const verifyAccessToken = (req, res, next) => {
    const token = req.cookies.accessToken || req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return responseHandler(res, 401, null, 'Access Denied: No Token Provided');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return responseHandler(res, 403, null, 'Invalid or Expired Token');
    }
};

module.exports = { verifyAccessToken };
