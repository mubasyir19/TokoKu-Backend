import { Response, Router } from 'express';
import { profile, signin, signup } from '../controllers/user/user.controller';
import {
  addProduct,
  getProductById,
  getProducts,
  productByCategory,
  searchProduct,
} from '../controllers/product/product.controller';
import { addCategory, getCategories } from '../controllers/category/category.controller';

const router = Router();

router.get('/hello', (res: Response) => {
  res.send('Hello World');
});

router.post('/user/signup', signup);
router.post('/user/signin', signin);
router.post('/user/profile/:username', profile);

router.get('/category', getCategories);
router.post('/category/add', addCategory);

router.get('/product', getProducts);
router.get('/product/detail/:id', getProductById);
router.post('/product/add', addProduct);
router.get('/product/search/:query', searchProduct);
router.get('/product/category/:category', productByCategory);

export default router;
