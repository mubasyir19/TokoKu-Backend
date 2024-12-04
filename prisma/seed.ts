import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const category = await prisma.categoryProduct.createMany({
    data: [
      {
        name: 'Sembako',
      },
      {
        name: 'Coffee',
      },
      {
        name: 'Snacks',
      },
      {
        name: 'Bumbu',
      },
      {
        name: 'Herbal',
      },
      {
        name: 'Susu',
      },
      {
        name: 'Minuman',
      },
      {
        name: 'Buah & Sayur',
      },
      {
        name: 'Frozen Food',
      },
      {
        name: 'Daging & Ikan',
      },
      {
        name: 'Roti',
      },
      {
        name: 'Mie',
      },
      {
        name: 'Cleaning Aid',
      },
      {
        name: 'Health Care',
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
