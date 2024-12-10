const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getMembers = async (req, res) => {
    try {
        const members = await prisma.member.findMany({ include: { user: true } });
        res.json(members);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createMember = async (req, res) => {
    const { name, email, dateOfBirth, roleId, profilePic } = req.body;
    try {
        const member = await prisma.member.create({
            data: {
                name,
                email,
                dateOfBirth: new Date(dateOfBirth),
                roleId,
                profilePic,
                createdBy: req.user.id,
            },
        });
        res.status(201).json(member);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getMembers, createMember };
