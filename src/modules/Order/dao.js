
import pkg from 'sequelize';
import db from '../../config/database';

const { Model, DataTypes } = pkg;

class OrderDao extends Model {
  static init(sequelize) {
    return super.init({
      date: DataTypes.DATE,
      total: DataTypes.STRING,
      status: DataTypes.STRING,

    }, { sequelize, modelName: 'Order' });
  }

  static associate(models) {
    // define association here
    // this.belongsTo(models.Service);
    return this;
  }
}

OrderDao.init(db.sequelize);

export default OrderDao;
