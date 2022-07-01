import OrderEntity from './entity';
import { ApiError } from '../../helpers/error';

class OrderService {
  constructor(orderRepository) {
    this.orderRepo = orderRepository;
  }

  async getAll() {
    const order = await this.orderRepo.findAll();
    return order.map((order) => new orderEntity(product));
  }

  async create(orderData) {
    const orderEntity = new OrderEntity(orderData);
    const newOrder = await this.orderRepo.create(orderEntity);
    return new OrderEntity(newOrder);
  }

  async getOne(orderData) {
    const orderEntity = new OrderEntity(orderData);
    const order = await this.orderRepo.findById(orderEntity);
    return order;
  }

  async update(orderData) {
    const orderEntity = new OrderEntity(orderData);
    const orderFound = await this.orderRepo.findById(orderEntity);
    const order = orderFound.update(orderEntity);
    return order;
  }

  async delete(orderData) {
    const orderEntity = new OrderEntity(orderData);
    const orderFound = await this.orderRepo.findById(orderEntity);
    const order = orderFound.delete(orderFound);
    return order;
  }
}

export default OrderService;
