
import pkg from 'sequelize';
import db from '../../config/database';

const { Model, DataTypes } = pkg;

class OrderproductDao extends Model {
  static init(sequelize) {
    return super.init({
      date: DataTypes.DATE,
      total: DataTypes.STRING,
      status: DataTypes.STRING,

    }, { sequelize, modelName: 'Orderproduct' });
  }

  static associate(models) {
    // define association here
    // this.belongsTo(models.Service);
    return this;
  }
}

OrderproductDao.init(db.sequelize);

export default OrderproductDao;
