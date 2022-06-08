import { ProductDao } from "../Product";

class OrderRepository {
  constructor(orderDao) {
    this.orderDAO =orderDao;
  }

  async findAll() {
    return await this.orderDAO.findAll();
  }

  async create(orderEntity) {
    return await this.orderDAO.create(orderEntity);
  }

  async findById(orderEntity) {
    return await this.orderDAO.findOne({
      where: { id: orderEntity.id },
      include: [{
        model: ProductDao,
      }],
    });
  }

  async findByUser(orderEntity) {
    return await this.orderDAO.findAll({ where: { UserId: orderEntity.UserId } });
  }

 
}

export default OrderRepository;