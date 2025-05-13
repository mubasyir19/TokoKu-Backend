import { Response, Router } from 'express';
import { profile, protectedAuth, registAdmin, signin, signup } from '../controllers/user/user.controller';
import {
  addProduct,
  getProductById,
  getProducts,
  productByCategory,
  searchProduct,
} from '../controllers/product/product.controller';
import { addCategory, getCategories } from '../controllers/category/category.controller';
import {
  addItemCart,
  checkoutCart,
  getCart,
  removeItemCart,
  updateItemCart,
} from '../controllers/cart/cart.controller';
import { getOrder, getOrderAll } from '../controllers/order/order.controller';
import { verifyAuth } from '../middleware/auth';

const router = Router();

router.get('/hello', (res: Response) => {
  res.send('Hello World');
});

router.post('/user/signup', signup);
router.post('/user/signin', signin);
router.get('/user/profile/:username', profile);
router.post('/user/admin', registAdmin);
router.get('/user/verify', verifyAuth, protectedAuth);

router.get('/category', getCategories);
router.post('/category/add', addCategory);

router.get('/product', getProducts);
router.get('/product/detail/:id', getProductById);
router.post('/product/add', addProduct);
router.get('/product/search/:query', searchProduct);
router.get('/product/category/:category', productByCategory);

router.get('/cart', verifyAuth, getCart);
router.post('/cart/add', verifyAuth, addItemCart);
router.put('/cart/update', verifyAuth, updateItemCart);
router.delete('/cart/delete', verifyAuth, removeItemCart);
router.post('/cart/checkout', verifyAuth, checkoutCart);

router.get('/order', verifyAuth, getOrderAll);
router.get('/order/:userId', verifyAuth, getOrder);

export default router;
