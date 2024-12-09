const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const { hashPassword, comparePassword } = require('../utils/hash');

const prisma = new PrismaClient();

const register = async (req, res) => {
    const { username, password, roleId } = req.body;
    try {
        const hashedPassword = await hashPassword(password);
        const user = await prisma.user.create({
            data: { username, password: hashedPassword, roleId },
        });
        res.status(201).json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await prisma.user.findUnique({ where: { username } });
        if (!user || !(await comparePassword(password, user.password))) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user.id, role: user.roleId }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { register, login };
