// Server
import express from 'express';
// Logs
import { errorHandling } from './errors/errorHandling.js';
// Routers
import ImagesRouter from './api/routers/imagesRouter.js';
import ProductsRouter from './api/routers/productsRouter.js';
import UsersRouter from './api/routers/usersRouter.js';
import LoginRouter from './api/routers/loginRouter.js';
import CartsRouter from './api/routers/cartsRouter.js';
import OrdersRouter from './api/routers/ordersRouter.js';
// Server
import initializeServer from './server/initializeServer.js';
// Middlewares
import { logInfo } from "./api/middlewares/logsMiddlewares.js";

const app = express();
const imagesRouter = new ImagesRouter();
const productsRouter = new ProductsRouter();
const usersRouter = new UsersRouter();
const loginRouter = new LoginRouter();
const cartsRouter = new CartsRouter();
const ordersRouter = new OrdersRouter();

// Middlewares
app.use(express.static('./public'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logInfo);

// Routers
app.use('/api/images', imagesRouter.start());
app.use('/api/products', productsRouter.start());
app.use('/api/users', usersRouter.start());
app.use('/api/shoppingcartproducts', cartsRouter.start());
app.use('/api/orders', ordersRouter.start());
app.use('/login', loginRouter.start());

// Error handling
app.use(errorHandling);

initializeServer(app);