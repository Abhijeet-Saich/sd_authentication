import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;
const ACCESS_TOKEN_EXPIRY = process.env.ACCESS_TOKEN_EXPIRY;

export const generateAccessToken = (user) => {
    return jwt.sign(
        {
            userId: user.id,
            role: user.role
        },
        JWT_SECRET,
        {
            expiresIn: ACCESS_TOKEN_EXPIRY
        }
    );
};