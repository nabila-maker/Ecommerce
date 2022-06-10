import DeliveryEntity from './entity';
import { ApiError } from '../../helpers/error';

class  DeliveryService {
  constructor(deliveryRepository, mailerService) {
    this.deliveryRepo = deliveryRepository;
    this.mailerService = mailerService;
  }

  async getAll() {
    const users = await this.deliveryRepo.findAll();
    return users.map((delivery) => new DeliveryEntity(delivery));
  }

  async create(deliveryData) {
    const deliveryEntity = new DeliveryEntity(deliveryData);
    if (!deliveryEntity.validate()) { throw new ApiError(400, 'Missing required  fields'); }

    const newDelivery = await this.deliveryRepo.create(deliveryEntity);
    return new DeliveryEntity(newDelivery);
  }

  

  async getOneByUser(deliveryData) {
    const deliveryEntity = new DeliveryEntity(deliveryData);
    const delivery = await this.deliveryRepo.findByUser(deliveryEntity);
    return delivery;
  }

  async update(deliveryData) {
    const deliveryEntity = new DeliveryEntity(deliveryData);
    const delivery = await this.deliveryRepo.findById(deliveryEntity);
    const deliveryUpdated = user.update(deliveryEntity);
    return deliveryUpdated;
  }

  async delete(deliveryData) {
    const deliveryEntity = new DeliveryEntity(deliveryData);
    const delivery = await this.deliveryRepo.findById(deliveryEntity);
    const deliveryDeleted = delivery.delete(deliveryEntity);
    return deliveryDeleted;
  }

  
}

export default DeliveryService;
