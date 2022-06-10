import {Router} from 'express';
import {jwtService, mailerService} from '../../libs';
import {auth} from '../../middlewares';


import DeliveryDao from './dao';
import DeliveryRepository from './repository';
import DeliveryService from './service';
import DeliveryController from './controller';
import DeliveryRouter from './router';

const router = Router();

const deliveryRepository = new DeliveryRepository(DeliveryDao);
const deliveryService = new DeliveryService(deliveryRepository, mailerService);
const deliveryController = new DeliveryController(deliveryService, jwtService);
const deliveryRouter = new DeliveryRouter(router, auth, deliveryController);

export {deliveryRouter, DeliveryDao};