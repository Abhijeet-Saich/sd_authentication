import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log(authHeader)
    if (!authHeader) {
        return res.status(401).json({
            message: "Authorization header missing"
        });
    }

    next();
};