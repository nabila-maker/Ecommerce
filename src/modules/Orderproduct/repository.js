import { ProductDao } from "../Product";

class OrderproductRepository {
  constructor(orderproductDao) {
    this.orderproductDAO =orderproductDao;
  }

  async findAll() {
    return await this.orderproductDAO.findAll();
  }

  async create(orderproductEntity) {
    return await this.orderproductDAO.create(orderproductEntity);
  }

  async findById(orderproductEntity) {
    return await this.orderproductDAO.findOne({
      where: { id: orderproductEntity.id },
      include: [{
        model: ProductDao,
      }],
    });
  }

  async findByUser(orderproductEntity) {
    return await this.orderproductDAO.findAll({ where: { UserId: orderproductEntity.UserId } });
  }

 
}

export default OrderproductRepository;