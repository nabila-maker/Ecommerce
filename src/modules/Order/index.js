import {Router} from 'express';
import {jwtService, mailerService} from '../../libs';

import OrderDao from './dao';
import OrderRepository from './repository';
import OrderService from './service';
import OrderController from './controller';
import OrderRouter from './router';

const router = Router();

const orderRepository = new OrderRepository(OrderDao);
const orderService = new OrderService(orderRepository, mailerService);
const orderController = new OrderController(orderService, jwtService);
const orderRouter = new OrderRouter(router, orderController);

export {orderRouter, OrderDao};