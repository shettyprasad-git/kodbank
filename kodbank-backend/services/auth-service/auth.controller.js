const AuthService = require('./auth.service');
const responseHandler = require('../../utils/responseHandler');

class AuthController {
    static async register(req, res) {
        try {
            const { username, email, password, phone } = req.body;

            if (!username || !email || !password || !phone) {
                return responseHandler(res, 400, null, 'All fields are required');
            }

            // Force role to be 'customer' as per requirements
            const role = 'customer';

            const user = await AuthService.register({ username, email, password, phone, role });
            responseHandler(res, 201, user, 'User registered successfully');
        } catch (err) {
            responseHandler(res, 400, null, err.message);
        }
    }

    static async login(req, res) {
        try {
            const { username, password } = req.body;
            const userAgent = req.headers['user-agent'] || 'Unknown';

            if (!username || !password) {
                return responseHandler(res, 400, null, 'Username and password are required');
            }

            const { user, accessToken, refreshToken } = await AuthService.login(username, password, userAgent);

            // Set cookies
            res.cookie('accessToken', accessToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 15 * 60 * 1000 // 15 minutes
            });

            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
            });

            responseHandler(res, 200, { user, accessToken, refreshToken }, 'Login successful');
        } catch (err) {
            responseHandler(res, 401, null, err.message);
        }
    }

    static async refresh(req, res) {
        try {
            const refreshToken = req.cookies.refreshToken || req.body.refreshToken;

            if (!refreshToken) {
                return responseHandler(res, 400, null, 'Refresh token required');
            }

            const { accessToken } = await AuthService.refresh(refreshToken);

            res.cookie('accessToken', accessToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 15 * 60 * 1000
            });

            responseHandler(res, 200, { accessToken }, 'Token refreshed successfully');
        } catch (err) {
            responseHandler(res, 403, null, err.message);
        }
    }

    static async logout(req, res) {
        try {
            const refreshToken = req.cookies.refreshToken || req.body.refreshToken;

            if (refreshToken) {
                await AuthService.logout(refreshToken);
            }

            res.clearCookie('accessToken');
            res.clearCookie('refreshToken');

            responseHandler(res, 200, null, 'Logged out successfully');
        } catch (err) {
            responseHandler(res, 500, null, err.message);
        }
    }
}

module.exports = AuthController;
