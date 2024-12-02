import { Response, Router } from 'express';
import { profile, signin, signup } from '../controllers/user/user.controller';
import {
  getProductById,
  getProducts,
  productByCategory,
  searchProduct,
} from '../controllers/product/product.controller';

const router = Router();

router.get('/hello', (res: Response) => {
  res.send('Hello World');
});

router.post('/user/signup', signup);
router.post('/user/signin', signin);
router.post('/user/profile/:username', profile);

router.get('/product', getProducts);
router.get('/product/:id', getProductById);
router.get('/product/search/:query', searchProduct);
router.get('/product/:category', productByCategory);

export default router;
