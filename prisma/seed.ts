// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
const hashedPassword = await bcrypt.hash('test1234', 10);

const user = await prisma.user.upsert({
where: { email: 'demo@example.com' },
update: {},
create: {
    email: 'demo@example.com',
    name: 'Demo User',
    password: hashedPassword,
},
});

console.log('Seeded user:', user);
}

main()
.catch((e) => {
console.error(e);
process.exit(1);
})
.finally(() => {
prisma.$disconnect();
});

