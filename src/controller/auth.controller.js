import bcrypt from "bcrypt";
import { generateAccessToken } from "../services/jwt.service.js";

// Fake database (temporary)
const users = [
    {
        id: 1,
        email: "alice@test.com",
        passwordHash: await bcrypt.hash("password123", 10),
        role: "admin"
    }
];

export const login = async (req, res) => {
    const { email, password } = req.body;

    // Step 1 - Find user
    const user = users.find(u => u.email === email);

    if (!user) {
        return res.status(401).json({
            message: "Invalid credentials"
        });
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

    if (!isPasswordValid) {
        return res.status(401).json({
            message: "Invalid credentials"
        });
    }

    const accessToken = generateAccessToken(user);

    return res.status(200).json({
        accessToken
    });
};