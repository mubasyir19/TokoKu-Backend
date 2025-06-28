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
  const coffee = await prisma.categoryProduct.findFirst({
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
      // Sembako
      {
        name: 'Aqua Galon 19L',
        price: 15000,
        unit: '1 Galon',
        stock: 200,
        categoryId: sembako?.id ?? '',
        photo: 'https://cf.shopee.co.id/file/f365d079bc1e2db366a210d82812a0e6',
        description: 'Air mineral murni dalam kemasan galon 19 liter.',
      },
      {
        name: 'Beras Premium 5Kg',
        price: 65000,
        unit: '5 Kg',
        stock: 100,
        categoryId: sembako?.id ?? '',
        photo: 'https://allofresh.id/blog/wp-content/uploads/2023/11/merk-beras-yang-bagus-4.jpg',
        description: 'Beras premium berkualitas tinggi dengan tekstur pulen.',
      },
      {
        name: 'Gula Pasir 1Kg',
        price: 12000,
        unit: '1 Kg',
        stock: 150,
        categoryId: sembako?.id ?? '',
        photo:
          'https://www.astronauts.id/blog/wp-content/uploads/2022/11/Ketahui-Berapa-Persen-Kebutuhan-Gula-Per-Hari-dan-Cara-Memenuhinya.jpg',
        description: 'Gula pasir putih berkualitas untuk kebutuhan dapur.',
      },
      {
        name: 'Minyak Goreng Tropical 2L',
        price: 28000,
        unit: '2 L',
        stock: 80,
        categoryId: sembako?.id ?? '',
        photo: 'http://www.cvbagus.co.id/wp-content/uploads/2017/07/Minyak-Tropical-2Lt.jpg',
        description: 'Minyak goreng berkualitas untuk memasak sehari-hari.',
      },
      {
        name: 'Tepung Terigu Segitiga Biru 1Kg',
        price: 11000,
        unit: '1 Kg',
        stock: 120,
        categoryId: sembako?.id ?? '',
        photo: 'https://s3.bukalapak.com/attachment/824332/jenis_tepung_terigu_image_1.jpg',
        description: 'Tepung terigu protein sedang untuk berbagai keperluan.',
      },
      {
        name: 'Garam Dapur Halus 500gr',
        price: 3000,
        unit: '500 gr',
        stock: 200,
        categoryId: sembako?.id ?? '',
        photo:
          'https://arthagaram.co.id/wp-content/uploads/2022/06/10.-Perbedaan-Garam-Kasar-dan-Garam-Halus-yang-Perlu-Kamu-Ketahui.jpg',
        description: 'Garam dapur halus untuk bumbu masakan.',
      },

      // Coffee
      {
        name: 'Kopi Kapal Api Special 165gr',
        price: 15000,
        unit: '165 gr',
        stock: 50,
        categoryId: coffee?.id ?? '',
        photo: 'https://cf.shopee.co.id/file/605a99419222dfea0766fabd2ff07d9f',
        description: 'Kopi hitam premium dengan aroma khas dan rasa yang kuat.',
      },
      {
        name: 'Nescafe Classic 100gr',
        price: 30000,
        unit: '100 gr',
        stock: 80,
        categoryId: coffee?.id ?? '',
        photo: 'http://c.shld.net/rpx/i/s/i/spin/10127449/prod_ec_1675283902??hei=64&wid=64&qlt=50',
        description: 'Kopi instan dengan rasa khas dan praktis diseduh.',
      },
      {
        name: 'Kopi Good Day Cappuccino 20gr x 10',
        price: 25000,
        unit: 'Pack',
        stock: 60,
        categoryId: coffee?.id ?? '',
        photo:
          'http://www.rumahmesin.com/wp-content/uploads/2016/09/20-jenis-kopi-yang-populer-di-indonesia-dan-di-dunia-yang-patut-anda-coba-10.jpg',
        description: 'Kopi cappuccino instan dengan rasa creamy.',
      },
      {
        name: 'Kopi Arabica Premium 200gr',
        price: 45000,
        unit: '200 gr',
        stock: 30,
        categoryId: coffee?.id ?? '',
        photo:
          'http://www.rumahmesin.com/wp-content/uploads/2016/09/20-jenis-kopi-yang-populer-di-indonesia-dan-di-dunia-yang-patut-anda-coba-10.jpg',
        description: 'Kopi arabica premium single origin dengan citarasa unik.',
      },
      {
        name: 'Kopi Luwak White Coffee 15gr x 20',
        price: 35000,
        unit: 'Pack',
        stock: 40,
        categoryId: coffee?.id ?? '',
        photo:
          'http://www.rumahmesin.com/wp-content/uploads/2016/09/20-jenis-kopi-yang-populer-di-indonesia-dan-di-dunia-yang-patut-anda-coba-10.jpg',
        description: 'White coffee dengan rasa lembut dan aroma harum.',
      },

      // Snacks
      {
        name: 'Keripik Singkong Balado 100gr',
        price: 8000,
        unit: '100 gr',
        stock: 150,
        categoryId: snacks?.id ?? '',
        photo:
          'https://static.wixstatic.com/media/98f0b7_3d5de469aeae4a6aa442ffe8957f52ed~mv2.png/v1/fill/w_980,h_735,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/98f0b7_3d5de469aeae4a6aa442ffe8957f52ed~mv2.png',
        description: 'Keripik singkong renyah dengan bumbu balado pedas.',
      },
      {
        name: 'Chitato Beef Barbeque 68gr',
        price: 10000,
        unit: '68 gr',
        stock: 120,
        categoryId: snacks?.id ?? '',
        photo: 'https://grandlagunashop.com/wp-content/uploads/CHITATO-SAPI-PANGGANG-68G.jpg',
        description: 'Keripik kentang dengan rasa barbeque yang gurih.',
      },
      {
        name: 'Biskuit Oreo 137gr',
        price: 12000,
        unit: '137 gr',
        stock: 100,
        categoryId: snacks?.id ?? '',
        photo: 'https://www.kangjo.net/asset/foto_berita/Biskuit-1.jpg',
        description: 'Biskuit cokelat dengan krim vanilla di tengah.',
      },
      {
        name: 'Kacang Garuda 200gr',
        price: 15000,
        unit: '200 gr',
        stock: 80,
        categoryId: snacks?.id ?? '',
        photo: 'https://i0.wp.com/raisa.aeonstore.id/wp-content/uploads/2023/04/1027518.jpg?fit=800%2C800&ssl=1',
        description: 'Kacang tanah renyah dengan bumbu gurih.',
      },
      {
        name: 'Wafer Tango Cokelat 47gr',
        price: 3500,
        unit: '47 gr',
        stock: 200,
        categoryId: snacks?.id ?? '',
        photo: 'https://cf.shopee.co.id/file/22a55c7c701e679b7cdd51e83c9fbf45_tn',
        description: 'Wafer cokelat renyah dengan lapisan krim manis.',
      },
      {
        name: 'Permen Mentos Mint 37gr',
        price: 5000,
        unit: '37 gr',
        stock: 150,
        categoryId: snacks?.id ?? '',
        photo: 'https://img.lazcdn.com/g/p/3e6fce6e33b08465c3e715fa98019232.png_720x720q80.png',
        description: 'Permen mint segar untuk menyegarkan napas.',
      },

      // Bumbu
      {
        name: 'Kecap Manis ABC 600ml',
        price: 17000,
        unit: '600 ml',
        stock: 70,
        categoryId: bumbu?.id ?? '',
        photo:
          'https://www.seriouseats.com/thmb/OlO9nl_LTRcTzO7hndeTw1VDnac=/1088x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2019__06__20190604-kecap-manis-variety-1500x1125-04e59330eb614cb99a7417968701b06a.jpg',
        description: 'Kecap manis berkualitas untuk berbagai masakan.',
      },
      {
        name: 'Royco Kaldu Ayam 230gr',
        price: 12000,
        unit: '230 gr',
        stock: 100,
        categoryId: bumbu?.id ?? '',
        photo: 'https://assets.unileversolutions.com/v1/31817967.png',
        description: 'Bumbu penyedap rasa ayam yang lezat.',
      },
      {
        name: 'Saos Sambal ABC 340ml',
        price: 8000,
        unit: '340 ml',
        stock: 90,
        categoryId: bumbu?.id ?? '',
        photo: 'https://cf.shopee.co.id/file/7f7728cfba0b5516e3eaced343305429',
        description: 'Saos sambal pedas untuk pelengkap makanan.',
      },
      {
        name: 'Bawang Putih Bubuk 100gr',
        price: 12000,
        unit: '100 gr',
        stock: 60,
        categoryId: bumbu?.id ?? '',
        photo: 'https://live.staticflickr.com/3138/3051772111_965c2b6395_b.jpg',
        description: 'Bawang putih bubuk praktis untuk bumbu masak.',
      },
      {
        name: 'Merica Bubuk 50gr',
        price: 8000,
        unit: '50 gr',
        stock: 80,
        categoryId: bumbu?.id ?? '',
        photo:
          'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/merica-the-land-of-the-free-carlos-v.jpg',
        description: 'Merica bubuk halus untuk bumbu masakan.',
      },
      {
        name: 'Bumbu Nasi Goreng Indofood 45gr',
        price: 3000,
        unit: '45 gr',
        stock: 120,
        categoryId: bumbu?.id ?? '',
        photo: 'https://infokost.id/blog/wp-content/uploads/2023/05/bumbu-dapur-mitranews-net.webp',
        description: 'Bumbu nasi goreng instant siap pakai.',
      },

      // Herbal
      {
        name: 'Jahe Merah Instan 200gr',
        price: 25000,
        unit: '200 gr',
        stock: 60,
        categoryId: herbal?.id ?? '',
        photo: 'https://apotekhidup.com/wp-content/uploads/2021/09/jahe.jpg',
        description: 'Minuman herbal jahe merah instan, hangat dan sehat.',
      },
      {
        name: 'Kunyit Asam Instan 150gr',
        price: 20000,
        unit: '150 gr',
        stock: 50,
        categoryId: herbal?.id ?? '',
        photo: 'https://1.bp.blogspot.com/-GnNMLXclybA/VlktOC8_xuI/AAAAAAAAEH4/b1k_NWyzdOg/s1600/Kunyit-Hidup.jpg',
        description: 'Minuman herbal kunyit asam untuk kesehatan.',
      },
      {
        name: 'Temulawak Instan 200gr',
        price: 22000,
        unit: '200 gr',
        stock: 40,
        categoryId: herbal?.id ?? '',
        photo:
          'https://st2.depositphotos.com/34694680/46221/i/450/depositphotos_462212460-stock-photo-turmeric-root-ground-spice.jpg',
        description: 'Minuman herbal temulawak untuk menjaga kesehatan hati.',
      },
      {
        name: 'Beras Kencur Instan 150gr',
        price: 18000,
        unit: '150 gr',
        stock: 45,
        categoryId: herbal?.id ?? '',
        photo: 'https://allofresh.id/blog/wp-content/uploads/2023/11/merk-beras-yang-bagus-4.jpg',
        description: 'Minuman herbal beras kencur tradisional.',
      },

      // Susu
      {
        name: 'Dancow Full Cream 800gr',
        price: 75000,
        unit: '800 gr',
        stock: 90,
        categoryId: susu?.id ?? '',
        photo: 'https://assets.klikindomaret.com/share/10006258_1.jpg',
        description: 'Susu bubuk full cream bergizi untuk keluarga.',
      },
      {
        name: 'Susu UHT Ultra Milk 1L',
        price: 18000,
        unit: '1 L',
        stock: 100,
        categoryId: susu?.id ?? '',
        photo: 'https://1.bp.blogspot.com/-RKsz5Nmfcgw/VhSraY081UI/AAAAAAAAAFw/t5XycNByA_E/s1600/Susu.jpg',
        description: 'Susu UHT full cream siap minum.',
      },
      {
        name: 'Susu Kental Manis Indomilk 397gr',
        price: 12000,
        unit: '397 gr',
        stock: 80,
        categoryId: susu?.id ?? '',
        photo: 'https://1.bp.blogspot.com/-RKsz5Nmfcgw/VhSraY081UI/AAAAAAAAAFw/t5XycNByA_E/s1600/Susu.jpg',
        description: 'Susu kental manis untuk pelengkap makanan dan minuman.',
      },
      {
        name: 'Susu Bebelac 800gr',
        price: 120000,
        unit: '800 gr',
        stock: 50,
        categoryId: susu?.id ?? '',
        photo: 'https://1.bp.blogspot.com/-RKsz5Nmfcgw/VhSraY081UI/AAAAAAAAAFw/t5XycNByA_E/s1600/Susu.jpg',
        description: 'Susu formula untuk pertumbuhan anak.',
      },

      // Minuman
      {
        name: 'Teh Pucuk Harum 350ml',
        price: 4000,
        unit: '350 ml',
        stock: 200,
        categoryId: minuman?.id ?? '',
        photo: 'https://swastikaadvertising.com/wp-content/uploads/2024/02/es.jpg',
        description: 'Minuman teh segar dengan rasa manis pas.',
      },
      {
        name: 'Coca Cola 330ml',
        price: 5000,
        unit: '330 ml',
        stock: 150,
        categoryId: minuman?.id ?? '',
        photo: 'https://shoprite.ng/wp-content/uploads/2023/06/Soft-Drink-Coca-Cola-330Ml-229.99.jpg',
        description: 'Minuman berkarbonasi dengan rasa cola klasik.',
      },
      {
        name: 'Sprite 330ml',
        price: 5000,
        unit: '330 ml',
        stock: 150,
        categoryId: minuman?.id ?? '',
        photo: 'http://pngimg.com/uploads/sprite/sprite_PNG8918.png',
        description: 'Minuman lemon-lime yang menyegarkan.',
      },
      {
        name: 'Fanta Orange 330ml',
        price: 5000,
        unit: '330 ml',
        stock: 150,
        categoryId: minuman?.id ?? '',
        photo: 'http://cdn.shopify.com/s/files/1/0358/7879/7448/products/fanta_orange_glass_1200x1200.png?v=1602487851',
        description: 'Minuman rasa jeruk yang segar.',
      },
      {
        name: 'Pocari Sweat 500ml',
        price: 8000,
        unit: '500 ml',
        stock: 100,
        categoryId: minuman?.id ?? '',
        photo:
          'https://cdn.shopify.com/s/files/1/0420/6863/9904/products/231512504_115398537449951_7755576169946748533_n_1024x1024.jpg?v=1628812159',
        description: 'Minuman ion untuk mengganti cairan tubuh.',
      },
      {
        name: 'Jus Buavita Orange 250ml',
        price: 6000,
        unit: '250 ml',
        stock: 120,
        categoryId: minuman?.id ?? '',
        photo: 'https://cf.shopee.co.id/file/sg-11134201-22110-uadp8c3wbrjva7',
        description: 'Jus jeruk asli dengan vitamin C.',
      },

      // Buah & Sayur
      {
        name: 'Apel Fuji 1Kg',
        price: 50000,
        unit: '1 Kg',
        stock: 40,
        categoryId: buahSayur?.id ?? '',
        photo: 'https://3.bp.blogspot.com/-A1eO2Q24MzI/U_aSgv5p5tI/AAAAAAAACy8/zK7yS-FJ04U/s1600/Gambar-Buah-Apel.JPG',
        description: 'Apel Fuji segar, manis dan renyah.',
      },
      {
        name: 'Pisang Cavendish 1Kg',
        price: 25000,
        unit: '1 Kg',
        stock: 60,
        categoryId: buahSayur?.id ?? '',
        photo: 'https://www.masakapahariini.com/wp-content/uploads/2019/11/jenis-pisang.jpg',
        description: 'Pisang Cavendish matang dan manis.',
      },
      {
        name: 'Jeruk Pontianak 1Kg',
        price: 30000,
        unit: '1 Kg',
        stock: 50,
        categoryId: buahSayur?.id ?? '',
        photo:
          'https://2.bp.blogspot.com/-_Zc3PN9K08s/V9DkoiU3otI/AAAAAAAAAJ8/MaiycULzzBMnA1_hJj7pW4LOXtRrjl68ACEw/s1600/20160313070242-jeruk.jpg',
        description: 'Jeruk Pontianak segar dan berair.',
      },
      {
        name: 'Bayam 500gr',
        price: 5000,
        unit: '500 gr',
        stock: 50,
        categoryId: buahSayur?.id ?? '',
        photo: 'https://cf.shopee.co.id/file/61dfc21c9219e5bb8cf58237c169d22e',
        description: 'Bayam segar untuk sayur bening dan tumisan.',
      },
      {
        name: 'Kangkung 500gr',
        price: 4000,
        unit: '500 gr',
        stock: 60,
        categoryId: buahSayur?.id ?? '',
        photo:
          'https://bbppkupang.bppsdmp.pertanian.go.id/storage/app/uploads/public/650/8e1/67b/6508e167be686855044774.jpg',
        description: 'Kangkung segar untuk tumis kangkung.',
      },
      {
        name: 'Wortel 1Kg',
        price: 8000,
        unit: '1 Kg',
        stock: 70,
        categoryId: buahSayur?.id ?? '',
        photo: 'https://siherbal.com/wp-content/uploads/2021/04/Manfaat-Wortel-Kesehatan-Tubuh.jpg',
        description: 'Wortel segar kaya vitamin A.',
      },
      {
        name: 'Kentang 1Kg',
        price: 12000,
        unit: '1 Kg',
        stock: 80,
        categoryId: buahSayur?.id ?? '',
        photo: 'https://wiratech.co.id/wp-content/uploads/2019/02/kentang.jpg',
        description: 'Kentang segar untuk berbagai olahan.',
      },
      {
        name: 'Tomat 1Kg',
        price: 15000,
        unit: '1 Kg',
        stock: 60,
        categoryId: buahSayur?.id ?? '',
        photo: 'http://1.bp.blogspot.com/-iKpQYyAUpbc/UlQWDaTdDoI/AAAAAAAAAIs/GtwL5J9-KVY/s1600/28.jpg',
        description: 'Tomat segar untuk masakan dan salad.',
      },

      // Frozen Food
      {
        name: 'Nugget Ayam So Good 500gr',
        price: 35000,
        unit: '500 gr',
        stock: 60,
        categoryId: frozenFood?.id ?? '',
        photo: 'https://cf.shopee.co.id/file/349c60195805e1173bae661cf318daf1',
        description: 'Nugget ayam renyah, praktis dan lezat.',
      },
      {
        name: 'Sosis Ayam Bernardi 500gr',
        price: 28000,
        unit: '500 gr',
        stock: 70,
        categoryId: frozenFood?.id ?? '',
        photo: 'https://s0.bukalapak.com/attachment/042532/merk_saus_sosis_bakar_image_3.jpg',
        description: 'Sosis ayam berkualitas untuk berbagai masakan.',
      },
      {
        name: 'Dimsum Ayam 250gr',
        price: 25000,
        unit: '250 gr',
        stock: 50,
        categoryId: frozenFood?.id ?? '',
        photo: 'https://www.dimsumcentral.com/wp-content/uploads/2018/06/what-is-dim-sum-header-new.jpg',
        description: 'Dimsum ayam siap kukus dengan rasa autentik.',
      },
      {
        name: 'French Fries 1Kg',
        price: 30000,
        unit: '1 Kg',
        stock: 40,
        categoryId: frozenFood?.id ?? '',
        photo: 'https://songfish.com.sg/wp-content/uploads/2018/06/French-Fries-1-300x300.jpg',
        description: 'Kentang goreng beku siap goreng.',
      },
      {
        name: 'Fish Fillet 500gr',
        price: 45000,
        unit: '500 gr',
        stock: 30,
        categoryId: frozenFood?.id ?? '',
        photo: 'http://www.publicdomainpictures.net/pictures/100000/velka/tropical-fish-1408369971R38.jpg',
        description: 'Fillet ikan dori beku tanpa duri.',
      },

      // Daging & Ikan
      {
        name: 'Ikan Bandeng 1Kg',
        price: 40000,
        unit: '1 Kg',
        stock: 30,
        categoryId: dagingIkan?.id ?? '',
        photo: 'https://www.mongabay.co.id/wp-content/uploads/2023/04/Ikan-Dewa-4-1-scaled.jpg',
        description: 'Ikan bandeng segar cocok untuk berbagai masakan.',
      },
      {
        name: 'Ikan Lele 1Kg',
        price: 25000,
        unit: '1 Kg',
        stock: 40,
        categoryId: dagingIkan?.id ?? '',
        photo: 'https://www.mongabay.co.id/wp-content/uploads/2023/04/Ikan-Dewa-4-1-scaled.jpg',
        description: 'Ikan lele segar untuk pecel lele dan goreng.',
      },
      {
        name: 'Ayam Broiler 1Kg',
        price: 35000,
        unit: '1 Kg',
        stock: 50,
        categoryId: dagingIkan?.id ?? '',
        photo: 'https://4.bp.blogspot.com/-2Coa3axg_Ts/VsujqaNJONI/AAAAAAAAAH0/HoC9FLuBroM/s1600/ayam-pelung-jago.jpg',
        description: 'Ayam broiler segar untuk berbagai masakan.',
      },
      {
        name: 'Daging Sapi 500gr',
        price: 80000,
        unit: '500 gr',
        stock: 20,
        categoryId: dagingIkan?.id ?? '',
        photo: 'https://cf.shopee.co.id/file/8578c36b3f9b3c77c80b655aaf0ca972',
        description: 'Daging sapi segar pilihan untuk rendang dan steak.',
      },
      {
        name: 'Udang Windu 500gr',
        price: 60000,
        unit: '500 gr',
        stock: 25,
        categoryId: dagingIkan?.id ?? '',
        photo: 'https://cdn.idntimes.com/content-images/post/20190802/4-4e1dbbf2bc9d41a58b7b0c952d7705b8.jpg',
        description: 'Udang windu segar ukuran besar.',
      },

      // Roti
      {
        name: 'Roti Tawar Gandum 400gr',
        price: 15000,
        unit: '400 gr',
        stock: 80,
        categoryId: roti?.id ?? '',
        photo: 'http://sybaritica.files.wordpress.com/2012/07/roti-1.jpg',
        description: 'Roti tawar gandum sehat dan bergizi.',
      },
      {
        name: 'Roti Manis Cokelat 6pcs',
        price: 18000,
        unit: '6 pcs',
        stock: 60,
        categoryId: roti?.id ?? '',
        photo: 'http://sybaritica.files.wordpress.com/2012/07/roti-1.jpg',
        description: 'Roti manis lembut dengan isian cokelat.',
      },
      {
        name: 'Croissant Butter 4pcs',
        price: 25000,
        unit: '4 pcs',
        stock: 40,
        categoryId: roti?.id ?? '',
        photo: 'https://sweets-dreamy.com/wp-content/uploads/2023/09/butter-croissant.jpg',
        description: 'Croissant butter renyah dan lezat.',
      },
      {
        name: 'Donat Glazed 6pcs',
        price: 20000,
        unit: '6 pcs',
        stock: 50,
        categoryId: roti?.id ?? '',
        photo:
          'https://4.bp.blogspot.com/-nqWaAjt1VGc/WfsyhoyEI4I/AAAAAAAAAY4/vGmE04XArvQP87JtYaYjhvPuPoDCkwo9QCLcBGAs/s1600/cara-membuat-donat.jpg',
        description: 'Donat glazed manis dan empuk.',
      },

      // Mie
      {
        name: 'Indomie Goreng 85gr',
        price: 3500,
        unit: '85 gr',
        stock: 300,
        categoryId: mie?.id ?? '',
        photo:
          'https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/0/AmazonStores/A2EUQ1WTGCTBG2/3e09a99421a804e603bcf3ddb052d617.w5906.h5906._SL5000_CR0%2C0%2C5000%2C5000_SX1920_.jpg',
        description: 'Mie goreng instan favorit semua kalangan.',
      },
      {
        name: 'Indomie Kuah Soto 75gr',
        price: 3500,
        unit: '75 gr',
        stock: 250,
        categoryId: mie?.id ?? '',
        photo:
          'https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/0/AmazonStores/A2EUQ1WTGCTBG2/3e09a99421a804e603bcf3ddb052d617.w5906.h5906._SL5000_CR0%2C0%2C5000%2C5000_SX1920_.jpg',
        description: 'Mie kuah rasa soto yang nikmat.',
      },
      {
        name: 'Mie Sedaap Goreng 91gr',
        price: 3200,
        unit: '91 gr',
        stock: 200,
        categoryId: mie?.id ?? '',
        photo: 'https://cf.shopee.co.id/file/02f62138c44b038d35fdcc7608455b69',
        description: 'Mie goreng dengan bumbu yang sedap.',
      },
      {
        name: 'Supermie Ayam Bawang 75gr',
        price: 3000,
        unit: '75 gr',
        stock: 180,
        categoryId: mie?.id ?? '',
        photo: 'https://lzd-img-global.slatic.net/g/ff/kf/Scce2db37b6bf4b52bf2030c88fdb6577s.jpg_720x720q80.jpg_.webp',
        description: 'Mie kuah rasa ayam bawang yang gurih.',
      },
      {
        name: 'Pop Mie Ayam Baso 75gr',
        price: 4000,
        unit: '75 gr',
        stock: 150,
        categoryId: mie?.id ?? '',
        photo: 'https://pop-figures.com/media/img/news/first-avatar-movie-2009-funko-pop.jpg',
        description: 'Mie cup dengan rasa ayam bakso.',
      },

      // Cleaning Aid
      {
        name: 'So Klin Liquid Deterjen 800ml',
        price: 20000,
        unit: '800 ml',
        stock: 100,
        categoryId: cleaningAid?.id ?? '',
        photo: 'https://cf.shopee.co.id/file/1a516c4ad510850fcfc38e518ed33933',
        description: 'Deterjen cair dengan keharuman tahan lama.',
      },
      {
        name: 'Rinso Powder Anti Noda 900gr',
        price: 15000,
        unit: '900 gr',
        stock: 80,
        categoryId: cleaningAid?.id ?? '',
        photo: 'https://grandlagunashop.com/wp-content/uploads/RINSO-ANTI-NODA-800GR..png',
        description: 'Deterjen bubuk untuk menghilangkan noda membandel.',
      },
      {
        name: 'Sunlight Jeruk Nipis 800ml',
        price: 12000,
        unit: '800 ml',
        stock: 120,
        categoryId: cleaningAid?.id ?? '',
        photo: 'https://www.publicdomainpictures.net/pictures/30000/velka/rayos-de-sol.jpg',
        description: 'Sabun cuci piring dengan aroma jeruk nipis segar.',
      },
      {
        name: 'Mama Lemon 800ml',
        price: 11000,
        unit: '800 ml',
        stock: 90,
        categoryId: cleaningAid?.id ?? '',
        photo: 'http://2.bp.blogspot.com/-726IDUmqlQ0/UR0rYGRyCVI/AAAAAAAAApM/L7ckSyEj6aE/s1600/1-Mama-Poster.jpg',
        description: 'Sabun cuci piring konsentrat dengan lemon asli.',
      },
      {
        name: 'Domestos Pembersih Toilet 500ml',
        price: 18000,
        unit: '500 ml',
        stock: 60,
        categoryId: cleaningAid?.id ?? '',
        photo: 'https://equity-pharmacy.com/wp-content/uploads/2016/11/715.-DOMESTOS-TOILET-CLEANER.jpg',
        description: 'Pembersih toilet yang membunuh kuman dan bakteri.',
      },
      {
        name: 'Wipol Pembersih Lantai 800ml',
        price: 16000,
        unit: '800 ml',
        stock: 70,
        categoryId: cleaningAid?.id ?? '',
        photo: 'https://cf.shopee.co.id/file/bc5530df67138d66a0eb502445dc9f38',
        description: 'Pembersih lantai dengan wangi segar tahan lama.',
      },
      {
        name: 'Baygon Spray Anti Nyamuk 600ml',
        price: 22000,
        unit: '600 ml',
        stock: 50,
        categoryId: cleaningAid?.id ?? '',
        photo: 'https://ibitsphil.com/wp-content/uploads/2018/06/award01-500x539-1.jpg',
        description: 'Spray anti nyamuk untuk perlindungan maksimal.',
      },
      {
        name: 'Tissue Paseo 250 Lembar',
        price: 8000,
        unit: '250 lembar',
        stock: 100,
        categoryId: cleaningAid?.id ?? '',
        photo: 'https://www.biologyonline.com/wp-content/uploads/2020/09/Tissue-definition.jpg',
        description: 'Tissue wajah lembut dan higienis.',
      },
      {
        name: 'Spons Cuci Piring 5pcs',
        price: 5000,
        unit: '5 pcs',
        stock: 150,
        categoryId: cleaningAid?.id ?? '',
        photo: 'https://i2.wp.com/resepkoki.id/wp-content/uploads/2018/02/spons-serbaguna.jpg?resize=1024%2C1010&ssl=1',
        description: 'Spons cuci piring anti bakteri dan tahan lama.',
      },

      // Health Care
      {
        name: 'Masker Medis 3 Lapis Isi 50',
        price: 25000,
        unit: 'Box',
        stock: 70,
        categoryId: healthCare?.id ?? '',
        photo: 'https://4life.id/wp-content/uploads/2020/06/masker-Medis.png',
        description: 'Masker medis 3 lapis melindungi dari debu dan kuman.',
      },
      {
        name: 'Hand Sanitizer 60ml',
        price: 8000,
        unit: '60 ml',
        stock: 100,
        categoryId: healthCare?.id ?? '',
        photo: 'http://www.photos-public-domain.com/wp-content/uploads/2010/12/hand.jpg',
        description: 'Hand sanitizer dengan 70% alkohol untuk membunuh kuman.',
      },
      {
        name: 'Paracetamol 500mg Isi 10',
        price: 3000,
        unit: 'Strip',
        stock: 80,
        categoryId: healthCare?.id ?? '',
        photo: 'https://www.rukita.co/stories/wp-content/uploads/2022/10/obat-paracetamol.jpeg',
        description: 'Obat penurun panas dan pereda nyeri.',
      },
      {
        name: 'Vitamin C 1000mg Isi 30',
        price: 15000,
        unit: 'Botol',
        stock: 60,
        categoryId: healthCare?.id ?? '',
        photo: 'https://down-id.img.susercontent.com/file/acf837419fcc26fe0d2b0f18c1424466',
        description: 'Vitamin C untuk meningkatkan daya tahan tubuh.',
      },
      {
        name: 'Plester Luka 20pcs',
        price: 7000,
        unit: '20 pcs',
        stock: 90,
        categoryId: healthCare?.id ?? '',
        photo: 'https://img.mbizmarket.co.id/products/thumbs/800x800/2023/02/20/e6f9b58bb66bf4c8fc9166332aeb0d5f.jpg',
        description: 'Plester luka waterproof untuk perlindungan optimal.',
      },
      {
        name: 'Antiseptik Betadine 60ml',
        price: 12000,
        unit: '60 ml',
        stock: 50,
        categoryId: healthCare?.id ?? '',
        photo: 'https://down-id.img.susercontent.com/file/id-11134207-7qul1-lgzbpp4wiz4v98',
        description: 'Antiseptik untuk membersihkan luka dan mencegah infeksi.',
      },
      {
        name: 'Termometer Digital',
        price: 35000,
        unit: 'pcs',
        stock: 30,
        categoryId: healthCare?.id ?? '',
        photo: 'https://sidroc.com/wp-content/uploads/2018/07/Rossmax-Digital-Thermometer-TG-380.jpeg',
        description: 'Termometer digital akurat untuk mengukur suhu tubuh.',
      },
      {
        name: 'Koyo Hangat 5pcs',
        price: 10000,
        unit: '5 pcs',
        stock: 40,
        categoryId: healthCare?.id ?? '',
        photo: 'https://www.unlaub.com/wp-content/uploads/2020/01/Koyo-logo.png',
        description: 'Koyo hangat untuk meredakan nyeri otot dan sendi.',
      },
      {
        name: 'Minyak Kayu Putih 60ml',
        price: 8000,
        unit: '60 ml',
        stock: 70,
        categoryId: healthCare?.id ?? '',
        photo: 'https://static.webshopapp.com/shops/133932/files/078394571/minyak-kayu-putih-oil-60ml.jpg',
        description: 'Minyak kayu putih untuk meredakan masuk angin.',
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
