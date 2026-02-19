const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../../models/user.model');
const TokenModel = require('../../models/token.model');

class AuthService {
    static async register(userData) {
        const existingUser = await UserModel.findByUsername(userData.username);
        if (existingUser) {
            throw new Error('Username already exists');
        }

        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const userId = await UserModel.create({ ...userData, password: hashedPassword });

        return { uid: userId, ...userData };
    }

    static async login(username, password, userAgent) {
        const user = await UserModel.findByUsername(username);
        if (!user) {
            throw new Error('Invalid credentials');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error('Invalid credentials');
        }

        const accessToken = jwt.sign(
            { uid: user.uid, role: user.role, sub: user.username },
            process.env.JWT_ACCESS_SECRET,
            { expiresIn: process.env.JWT_ACCESS_EXPIRY }
        );

        const refreshToken = jwt.sign(
            { uid: user.uid },
            process.env.JWT_REFRESH_SECRET,
            { expiresIn: process.env.JWT_REFRESH_EXPIRY }
        );

        // Store refresh token in DB
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 7); // 7 days

        await TokenModel.create({
            uid: user.uid,
            access_token: accessToken, // Optional to store access token, but required by schema
            refresh_token: refreshToken,
            expiry: expiryDate,
            device_info: userAgent
        });

        return { user, accessToken, refreshToken };
    }

    static async refresh(token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);

            // Check DB directly
            const dbToken = await TokenModel.findByRefreshToken(token);
            if (!dbToken) {
                throw new Error('Refresh token not found in DB');
            }

            const user = await UserModel.findById(decoded.uid);
            if (!user) {
                throw new Error('User not found');
            }

            const newAccessToken = jwt.sign(
                { uid: user.uid, role: user.role, sub: user.username },
                process.env.JWT_ACCESS_SECRET,
                { expiresIn: process.env.JWT_ACCESS_EXPIRY }
            );

            return { accessToken: newAccessToken };

        } catch (err) {
            throw new Error('Invalid refresh token');
        }
    }

    static async logout(refreshToken) {
        await TokenModel.deleteByRefreshToken(refreshToken);
        return true;
    }
}

module.exports = AuthService;
