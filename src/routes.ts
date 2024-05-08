import { Router } from 'express';

import multer from 'multer';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { DetailUserController } from './controllers/user/DetailUserController';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';

import uploadConfig from './config/multer';
import { CreateProductController } from './controllers/product/CreateProductController';
import { CreateOrderController } from './controllers/order/CreateOrderController';
import { DeleteOrderController } from './controllers/order/DeleteOrderController';
import { AddItemController } from './controllers/order/AddItemController';
import { ListByCategoryController } from './controllers/product/ListByCategoryController';
import { SendOrderController } from './controllers/order/SendOrderController';
import { RemoveItemController } from './controllers/order/RemoveItemController';
import { ListNotFinishedController } from './controllers/order/ListNotFinishedController';

const router = Router();

const upload = multer(uploadConfig.upload('./tmp'));

router.post('/user', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/userinfo', isAuthenticated, new DetailUserController().handle);

router.post('/category', isAuthenticated, new CreateCategoryController().handle);
router.get('/categories', isAuthenticated, new ListCategoryController().handle);

router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle);
router.get('/product/category', isAuthenticated, new ListByCategoryController().handle);

router.post('/order', isAuthenticated, new CreateOrderController().handle);
router.post('/order/item', isAuthenticated, new AddItemController().handle);

router.get('/order/not-finished', isAuthenticated, new ListNotFinishedController().handle);

router.put('/order/send', isAuthenticated, new SendOrderController().handle);

router.delete('/order', isAuthenticated, new DeleteOrderController().handle);
router.delete('/order/item', isAuthenticated, new RemoveItemController().handle);

export { router };