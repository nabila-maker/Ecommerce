import OrderproductEntity from './entity';
import { ApiError } from '../../helpers/error';

class OrderproductService {
  constructor(orderproductRepository) {
    this.orderproductRepo = orderproductRepository;
  }

  async getAll() {
    const orderproduct = await this.orderproductRepo.findAll();
    return orderproduct.map((order) => new orderproductEntity(product));
  }

  async create(orderproductData) {
    const orderproductEntity = new OrderproductEntity(orderproductData);
    const newOrderproduct = await this.orderproductRepo.create(orderproductEntity);
    return new OrderproductEntity(newOrder);
  }

  async getOne(orderproductData) {
    const orderproductEntity = new OrderproductEntity(orderproductData);
    const orderproduct = await this.orderRepo.findById(orderproductEntity);
    return orderproduct;
  }

  async update(orderproductData) {
    const orderproductEntity = new OrderproductEntity(orderproductData);
    const orderproductFound = await this.orderproductRepo.findById(orderproductEntity);
    const orderproduct = orderproductFound.update(orderproductEntity);
    return orderproduct;
  }

  async delete(orderproductData) {
    const orderproductEntity = new OrderproductEntity(orderproductData);
    const orderproductFound = await this.orderRepo.findById(orderproductEntity);
    const orderproduct = orderproductFound.delete(orderproductFound);
    return orderproduct;
  }
}

export default OrderproductService;