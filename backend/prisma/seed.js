const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedRoles() {
    await prisma.role.createMany({
        data: [
            { name: 'admin' },
            { name: 'user' },
        ],
        skipDuplicates: true,
    });
    console.log('Roles seeded.');
}

seedRoles();