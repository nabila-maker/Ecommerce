
import pkg from 'sequelize';
import db from '../../config/database';

const { Model, DataTypes } = pkg;

class DeliveryDao extends Model {
  static init(sequelize) {
    return super.init({
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      adress: DataTypes.STRING,
      city: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,

    }, { sequelize, modelName: 'Delivery' });
  }

  static associate(models) {
    // define association here
    // this.belongsTo(models.Service);
    return this;
  }
}

DeliveryDao.init(db.sequelize);

export default DeliveryDao;
