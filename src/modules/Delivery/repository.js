class DeliveryRepository {
    constructor(deliveryDao) {
      this.deliveryDAO = deliveryDao;
    }
  
    async findAll() {
      return await this.deliveryDAO.findAll();
    }
  
    async create(deliveryEntity) {
      return await this.deliveryDAO.create(deliveryEntity);
    }
  
    async findById(deliveryEntity) {
      return await this.deliveryDAO.findOne({ where: { id: deliveryEntity.id } });
    }
  
    async update(deliveryEntity) {
      return await this.deliveryDAO.update(deliveryEntity);
    }
  
    async delete(deliveryEntity) {
      return await this.deliveryDAO.delete(deliveryEntity);
    }
  }
  
  export default DeliveryRepository;
  