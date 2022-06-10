import { userRouter } from './User';
import { productRouter } from './Product';
import { orderRouter } from './Order';
import { deliveryRouter } from './Delivery';



const routes = [userRouter, productRouter, orderRouter, deliveryRouter];

 export default routes;
