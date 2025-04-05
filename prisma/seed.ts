import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const categories = [
    { name: 'Sembako' },
    { name: 'Coffee' },
    { name: 'Snacks' },
    { name: 'Bumbu' },
    { name: 'Herbal' },
    { name: 'Susu' },
    { name: 'Minuman' },
    { name: 'Buah & Sayur' },
    { name: 'Frozen Food' },
    { name: 'Daging & Ikan' },
    { name: 'Roti' },
    { name: 'Mie' },
    { name: 'Cleaning Aid' },
    { name: 'Health Care' },
  ];

  for (const category of categories) {
    const existing = await prisma.categoryProduct.findFirst({
      where: { name: category.name },
    });

    if (existing) {
      await prisma.categoryProduct.update({
        where: { id: existing.id },
        data: category,
      });
    } else {
      await prisma.categoryProduct.create({
        data: category,
      });
    }
  }

  const sembako = await prisma.categoryProduct.findFirst({
    where: { name: 'Sembako' },
  });
  const coffe = await prisma.categoryProduct.findFirst({
    where: { name: 'Coffee' },
  });
  const snacks = await prisma.categoryProduct.findFirst({
    where: { name: 'Snacks' },
  });
  const bumbu = await prisma.categoryProduct.findFirst({
    where: { name: 'Bumbu' },
  });
  const herbal = await prisma.categoryProduct.findFirst({
    where: { name: 'Herbal' },
  });
  const susu = await prisma.categoryProduct.findFirst({
    where: { name: 'Susu' },
  });
  const minuman = await prisma.categoryProduct.findFirst({
    where: { name: 'Minuman' },
  });
  const buahSayur = await prisma.categoryProduct.findFirst({
    where: { name: 'Buah & Sayur' },
  });
  const frozenFood = await prisma.categoryProduct.findFirst({
    where: { name: 'Frozen Food' },
  });
  const dagingIkan = await prisma.categoryProduct.findFirst({
    where: { name: 'Daging & Ikan' },
  });
  const roti = await prisma.categoryProduct.findFirst({
    where: { name: 'Roti' },
  });
  const mie = await prisma.categoryProduct.findFirst({
    where: { name: 'Mie' },
  });
  const cleaningAid = await prisma.categoryProduct.findFirst({
    where: { name: 'Cleaning Aid' },
  });
  const healthCare = await prisma.categoryProduct.findFirst({
    where: { name: 'Health Care' },
  });

  await prisma.product.createMany({
    data: [
      {
        name: 'Nqua Galon 19L',
        price: 15000,
        unit: '/1 Galon',
        stock: 200,
        categoryId: sembako?.id ?? '',
        photo: 'https://hatoba.id/assets/images/products/60dd93d51cf6d_60dd93d51c6ca_20210701_170717.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'Buah Pear Century Fresh',
        price: 26000,
        unit: '/1kg',
        stock: 200,
        categoryId: buahSayur?.id ?? '',
        photo: 'https://hatoba.id/assets/images/products/6238496fc5e30_6233ff6eb6eb0_20220321_164623.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'Apel Puji Fresh',
        price: 39000,
        unit: '/1kg',
        stock: 200,
        categoryId: buahSayur?.id ?? '',
        photo: 'https://hatoba.id/assets/images/products/62384a27d2ce4_6233ff25db62b_20220321_164927.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'Sari Kurma Al Jazira Premium',
        price: 30000,
        unit: '/Botol',
        stock: 200,
        categoryId: herbal?.id ?? '',
        photo: 'https://hatoba.id/assets/images/products/60cf0ebf64ff7_60bccd0e31939_20210620_164743.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'Ikan Bumbu Frozen Bawal Kemasan',
        price: 25000,
        unit: '/1 pack',
        stock: 200,
        categoryId: dagingIkan?.id ?? '',
        photo: 'https://hatoba.id/assets/images/products/6295946b333a4_6295946b1f054_20220531_110707.jpeg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'Nafisa Bumbu Pesmol Ikan 24gr',
        price: 6500,
        unit: '/24 gram',
        stock: 200,
        categoryId: bumbu?.id ?? '',
        photo: 'https://hatoba.id/assets/images/products/60f38cd9ba84e_60f38cd9b9e1d_20210718_090721.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'Nafisa Bumbu Ayam Bakar',
        price: 6500,
        unit: '/28 gram',
        stock: 200,
        categoryId: bumbu?.id ?? '',
        photo: 'https://hatoba.id/assets/images/products/60f254eec6319_60f254eec5c79_20210717_105630.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'Sheva Akar Alang Alang 235ml',
        price: 15000,
        unit: '/1 bottled',
        stock: 200,
        categoryId: herbal?.id ?? '',
        photo: 'https://hatoba.id/assets/images/products/60ddb6fdba012_60ddb6fdb9417_20210701_193717.jpeg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'Sheva Rempah Rosella Madu Btl 235ml',
        price: 15000,
        unit: '/1 bottled',
        stock: 200,
        categoryId: herbal?.id ?? '',
        photo: 'https://hatoba.id/assets/images/products/60ddb80471f88_60d06953de398_20210701_194140.jpeg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'Sheva Telang Madu 235 ml',
        price: 15000,
        unit: '/1 bottled',
        stock: 200,
        categoryId: herbal?.id ?? '',
        photo: 'https://hatoba.id/assets/images/products/60ddb2ce72685_60dd70cb071c5_20210701_191926.jpeg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'Ultimate Drink JSR 23gr',
        price: 6494,
        unit: '/Sachet 23 gr',
        stock: 200,
        categoryId: minuman?.id ?? '',
        photo: 'https://hatoba.id/assets/images/products/63957c60af380_60d13fda9b821_20221211_134448.jpeg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'Mie Lemonilo Goreng 80gr',
        price: 6500,
        unit: '/80gr',
        stock: 200,
        categoryId: mie?.id ?? '',
        photo: 'https://hatoba.id/assets/images/products/60e6cdc387245_60d063231a1c1_20210708_170451.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'Telur Ayam Curah Hatoba',
        price: 32000,
        unit: '/1kg',
        stock: 200,
        categoryId: sembako?.id ?? '',
        photo: 'https://hatoba.id/assets/images/products/6229b3a94fc12_60d0ae679e946_20220310_151537.jpeg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'Pack Telur Ayam Hatoba',
        price: 2000,
        unit: '/1 pack',
        stock: 200,
        categoryId: sembako?.id ?? '',
        photo: 'https://hatoba.id/assets/images/products/62f31dcbd832b_62f31badbdefc_20220810_095403.jpeg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'Lele Bumbu Kangfuj Farm 900gr',
        price: 40000,
        unit: '/900 gram',
        stock: 200,
        categoryId: bumbu?.id ?? '',
        photo: 'https://hatoba.id/assets/images/products/60c32c3f30edb_60bcd25a69415_20210611_162623.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'ASN Daging Iga Sapi 500gr',
        price: 78000,
        unit: '/500gr',
        stock: 200,
        categoryId: dagingIkan?.id ?? '',
        photo: 'https://hatoba.id/assets/images/products/60d0833319b05_60d0833317480_20210621_191651.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'ASN Tulang Iga Sapi 500gr',
        price: 69000,
        unit: '/1 pcs',
        stock: 200,
        categoryId: dagingIkan?.id ?? '',
        photo: 'https://hatoba.id/assets/images/products/60d081883a788_60d081883729a_20210621_190944.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'AMH Jahe Merah Super 20gr',
        price: 1200,
        unit: '/1 pcs',
        stock: 200,
        categoryId: herbal?.id ?? '',
        photo: 'https://hatoba.id/assets/images/products/618a1ac97fc66_61307c239bd65_20211109_135257.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'Beras Premium 5 kg Hatoba',
        price: 91000,
        unit: '/5 kg',
        stock: 200,
        categoryId: sembako?.id ?? '',
        photo: 'https://hatoba.id/assets/images/products/60c6ac0d62634_60c60e5ade311_20210614_080829.jpeg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'Halawa Kaldu Rasa Jamur 12gr',
        price: 1200,
        unit: '/1 pcs',
        stock: 200,
        categoryId: bumbu?.id ?? '',
        photo: 'https://hatoba.id/assets/images/products/634a2a4a44f32_634a2a48c7fa5_20221015_103432.jpeg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'Halawa Kaldu Rasa Ayam 12gr',
        price: 1200,
        unit: '/1 pcs',
        stock: 200,
        categoryId: bumbu?.id ?? '',
        photo: 'https://hatoba.id/assets/images/products/60d080f1a7c21_60d080d1a38b9_20210621_190713.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'Nqua Botol 600ml Ctn',
        price: 45000,
        unit: '/1',
        stock: 200,
        categoryId: sembako?.id ?? '',
        photo: 'https://hatoba.id/assets/images/products/61309ce9c26f7_61309ce9c20db_20210902_164409.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'Yusty Yoghurt Blueberry 200ml',
        price: 7463,
        unit: '/1 pcs',
        stock: 200,
        categoryId: minuman?.id ?? '',
        photo: 'https://hatoba.id/assets/images/products/default.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'Beras Standard 5 kg Hatoba',
        price: 86000,
        unit: '/5 kg',
        stock: 200,
        categoryId: sembako?.id ?? '',
        photo: 'https://hatoba.id/assets/images/products/60c6acb2cbfeb_60c6acb2cb60e_20210614_081114.jpeg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'Nqua Cup 220ml Ctn',
        price: 23500,
        unit: '/1 carton',
        stock: 200,
        categoryId: sembako?.id ?? '',
        photo: 'https://hatoba.id/assets/images/products/6131d8f35e410_6131d8f35daa1_20210903_151235.jpeg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'Nqua Botol 600ml',
        price: 2500,
        unit: '/1 botol',
        stock: 200,
        categoryId: sembako?.id ?? '',
        photo: 'https://hatoba.id/assets/images/products/60c4c1d64fd39_60c36f1d1a991_20210612_211654.JPG',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'Nigellive 200 kapsul',
        price: 90000,
        unit: '/Botol',
        stock: 200,
        categoryId: herbal?.id ?? '',
        photo: 'https://hatoba.id/assets/images/products/60cf1669d96a6_60bcc5ee0def1_20210620_172025.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'Macaroon Pouch',
        price: 24000,
        unit: '/pouch',
        stock: 200,
        categoryId: snacks?.id ?? '',
        photo: 'https://hatoba.id/assets/images/products/62a435de12b4a_61baeaab4e5a3_20220611_132742.jpeg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'Sheva Empon Empon Btl 235ml',
        price: 15000,
        unit: '/1 bottled',
        stock: 200,
        categoryId: herbal?.id ?? '',
        photo: 'https://hatoba.id/assets/images/products/60ddb292ad539_60ddb292acba7_20210701_191826.jpeg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'Halawa Kaldu Rasa Sapi 12gr',
        price: 1200,
        unit: '/1 pcs',
        stock: 200,
        categoryId: bumbu?.id ?? '',
        photo: 'https://hatoba.id/assets/images/products/60e19e543ae49_60e19e543a011_20210704_184108.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'Roti tawar Istana',
        price: 12500,
        unit: '/1 pack',
        stock: 200,
        categoryId: roti?.id ?? '',
        photo: 'https://hatoba.id/assets/images/products/60d2156e456b5_60d2156e41e58_20210622_235302.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'Huba Vacuum Tahu Baso',
        price: 38000,
        unit: '/1 pack',
        stock: 200,
        categoryId: frozenFood?.id ?? '',
        photo: 'https://hatoba.id/assets/images/products/60d06924013a4_60d06923f2a03_20210621_172539.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'Lohankuo',
        price: 40000,
        unit: '/12 tablet',
        stock: 200,
        categoryId: herbal?.id ?? '',
        photo: 'https://hatoba.id/assets/images/products/60c37039676de_60c36fe8272a8_20210611_211625.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'Bakso Cincang isi 8 Kabayan',
        price: 45000,
        unit: '/1 pack',
        stock: 200,
        categoryId: frozenFood?.id ?? '',
        photo: 'https://hatoba.id/assets/images/products/60dd542f3342a_60c462ac7d85a_20210701_123543.jpeg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'Ikan Bumbu Frozen Tuna Kemasan',
        price: 25000,
        unit: '/1 pack',
        stock: 200,
        categoryId: dagingIkan?.id ?? '',
        photo: 'https://hatoba.id/assets/images/products/630ed745ba400_62959533a1892_20220831_103637.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'Fillet Lele Original 250gr',
        price: 25000,
        unit: '/1 pack',
        stock: 200,
        categoryId: dagingIkan?.id ?? '',
        photo: 'https://hatoba.id/assets/images/products/612de2784deca_612de2784d856_20210831_150408.jpeg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'Prima Sosis HRM 28',
        price: 31000,
        unit: '/1 pack isi 28pcs',
        stock: 200,
        categoryId: frozenFood?.id ?? '',
        photo: 'https://hatoba.id/assets/images/products/631abbb225160_631abbaf57cd1_20220909_110607.jpeg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'Gula Putih 1 Kg Hatoba',
        price: 19000,
        unit: '/1 kg',
        stock: 200,
        categoryId: sembako?.id ?? '',
        photo: 'https://hatoba.id/assets/images/products/60da96ff453cc_60da96ff44ce8_20210629_104359.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'Himalayan Salt SWP 250gr',
        price: 19000,
        unit: '/1 pack',
        stock: 200,
        categoryId: bumbu?.id ?? '',
        photo: 'https://hatoba.id/assets/images/products/625004aed70ec_625004aed6a7a_20220408_164726.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
