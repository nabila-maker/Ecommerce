import {Router} from 'express';
import {jwtService, mailerService} from '../../libs';

import OrderproductDao from './dao';
import OrderproductRepository from './repository';
import OrderproductService from './service';
import OrderproductController from './controller';
import OrderproductRouter from './router';

const router = Router();

const orderproductRepository = new OrderproductRepository(OrderproductDao);
const orderproductService = new OrderproductService(orderproductRepository, mailerService);
const orderproductController = new OrderproductController(orderproductService, jwtService);
const orderproductRouter = new OrderproductRouter(router, orderproductController);

export {orderproductRouter, OrderproductDao};