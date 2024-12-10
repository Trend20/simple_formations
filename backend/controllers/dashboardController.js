const getStatistics = async (req, res) => {
    const memberCount = await prisma.member.count();
    const userCount = await prisma.user.count();
    const roleDistribution = await prisma.role.findMany({
        include: { users: true },
    });
    res.json({ memberCount, userCount, roleDistribution });
};

module.exports = { getStatistics };