
import pkg from 'sequelize';
import db from '../../config/database';

const { Model, DataTypes } = pkg;

class ReservationDao extends Model {
  static init(sequelize) {
    return super.init({
   
      date: DataTypes.DATE,
    }, { sequelize, modelName: 'Reservation' });
  }

  static associate(models) {
    this.belongsTo(models.User, {through: 'ReservationProduct'});
    this.belongsToMany(models.Product, {through: 'ReservationProduct'})
    return this;
  }
}

ReservationDao.init(db.sequelize);

export default ReservationDao;
