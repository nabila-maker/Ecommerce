import { ProductDao } from "../Product";

class ReservreservationRepository {
  constructor(reservationDao) {
    this.reservationDAO =reservationDao;
  }

  async findAll() {
    return await this.reservationDAO.findAll();
  }

  async create(reservationEntity) {
    return await this.reservationDAO.create(reservationEntity);
  }

  async findById(reservationEntity) {
    return await this.reservationDAO.findOne({
      where: { id: reservationEntity.id },
      include: [{
        model: ProductDao,
      }],
    });
  }

  async findByUser(reservationEntity) {
    return await this.reservationDAO.findAll({ where: { UserId: reservationEntity.UserId } });
  }

 
}

export default ReservreservationRepository;